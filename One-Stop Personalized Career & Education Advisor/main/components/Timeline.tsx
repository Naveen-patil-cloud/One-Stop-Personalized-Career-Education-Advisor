import React, { useState, useMemo, useEffect } from 'react';
import { NOTIFICATIONS } from '../constants';
import { Notification, AuthUser } from '../types';
import useLocalStorage from '../hooks/useLocalStorage';
import TimelineDetailModal from './TimelineDetailModal';

interface TimelineProps {
  currentUser: AuthUser | null;
}

const Timeline: React.FC<TimelineProps> = ({ currentUser }) => {
  const [notifications, setNotifications] = useState<Notification[]>([...NOTIFICATIONS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  const storageKey = useMemo(() => `timelineStatuses_${currentUser?.email || 'guest'}`, [currentUser]);
  const [statuses, setStatuses] = useLocalStorage<{ [key: number]: 'done' | 'interested' | undefined }>(storageKey, {});

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(storageKey);
      setStatuses(item ? JSON.parse(item) : {});
    } catch (error) {
      console.error(`Failed to read timeline statuses for key "${storageKey}" from localStorage:`, error);
      setStatuses({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newDate, setNewDate] = useState('');

  const handleAddNotification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newDate) return;
    const newNotification: Notification = {
      id: Date.now(),
      title: newTitle,
      description: newDesc,
      date: new Date(newDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      icon: 'fa-solid fa-calendar-plus',
      category: 'General',
    };
    setNotifications(prev => [...prev, newNotification].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    setNewTitle('');
    setNewDesc('');
    setNewDate('');
  };

  const handleStatusChange = (id: number, status: 'done' | 'interested') => {
    const newStatuses = { ...statuses };
    if (newStatuses[id] === status) {
      delete newStatuses[id];
    } else {
      newStatuses[id] = status;
    }
    setStatuses(newStatuses);
  };

  const scholarships = useMemo(() => notifications.filter(n => n.category === 'Scholarship'), [notifications]);
  const entranceExams = useMemo(() => notifications.filter(n => n.category === 'Entrance Exam'), [notifications]);

  // Calendar specific logic
  const notificationsByDate = useMemo(() => {
    const grouped: { [key: string]: Notification[] } = {};
    notifications.forEach(n => {
      const eventDate = new Date(n.date);
      const year = eventDate.getFullYear();
      const month = String(eventDate.getMonth() + 1).padStart(2, '0');
      const day = String(eventDate.getDate()).padStart(2, '0');
      const dateKey = `${year}-${month}-${day}`;
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(n);
    });
    return grouped;
  }, [notifications]);

  const changeMonth = (offset: number) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(1); // Set to the first day to avoid month-end issues
      newDate.setMonth(newDate.getMonth() + offset);
      return newDate;
    });
  };

  const getCalendarGrid = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const grid = [];
    
    for (let i = 0; i < firstDayOfMonth; i++) {
      grid.push(<div key={`blank-${i}`} className="border-r border-b border-slate-200"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayDate = new Date(year, month, day);
      const yearStr = dayDate.getFullYear();
      const monthStr = String(dayDate.getMonth() + 1).padStart(2, '0');
      const dayStr = String(dayDate.getDate()).padStart(2, '0');
      const dateKey = `${yearStr}-${monthStr}-${dayStr}`;
      
      const hasEvents = notificationsByDate[dateKey]?.length > 0;
      const isToday = dayDate.toDateString() === new Date().toDateString();
      const isSelected = dayDate.toDateString() === selectedDate?.toDateString();

      grid.push(
        <div 
          key={day}
          onClick={() => setSelectedDate(dayDate)}
          className={`p-2 border-r border-b border-slate-200 text-left h-24 flex flex-col cursor-pointer transition-colors duration-200 relative ${
            isSelected ? 'bg-indigo-600 text-white font-bold' :
            isToday ? 'bg-indigo-100' : 'bg-white hover:bg-slate-50'
          }`}
        >
          <span className={`text-sm ${isToday && !isSelected ? 'text-indigo-600 font-bold' : ''}`}>{day}</span>
          {hasEvents && <div className={`mt-auto text-xs flex items-center ${isSelected ? 'text-indigo-200' : 'text-slate-500'}`}><div className={`w-2 h-2 rounded-full mr-2 ${isSelected ? 'bg-white' : 'bg-indigo-500'}`}></div>{notificationsByDate[dateKey].length} event(s)</div>}
        </div>
      );
    }
    
    return grid;
  };

  const selectedDateEvents = useMemo(() => {
      if (!selectedDate) return [];
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const day = String(selectedDate.getDate()).padStart(2, '0');
      const dateKey = `${year}-${month}-${day}`;
      return notificationsByDate[dateKey] || [];
  }, [selectedDate, notificationsByDate]);

  return (
    <>
      <section id="timeline" className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Important Timeline & Notifications</h2>
          <p className="text-center text-slate-600 mb-8">Track crucial dates for admissions, exams, and scholarships.</p>

          <div className="flex justify-center mb-8">
              <div className="bg-slate-200 p-1 rounded-full flex items-center">
                  <button 
                      onClick={() => setViewMode('list')}
                      className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${viewMode === 'list' ? 'bg-white text-indigo-600 shadow' : 'text-slate-700 hover:bg-slate-300/50'}`}
                  >
                      <i className="fa-solid fa-list-ul mr-2"></i> List View
                  </button>
                  <button
                      onClick={() => setViewMode('calendar')}
                      className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${viewMode === 'calendar' ? 'bg-white text-indigo-600 shadow' : 'text-slate-700 hover:bg-slate-300/50'}`}
                  >
                      <i className="fa-solid fa-calendar-days mr-2"></i> Calendar View
                  </button>
              </div>
          </div>

          {viewMode === 'list' && (
            <>
              {/* Highlighted Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-200/50">
                      <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center justify-between">
                        <span className="flex items-center"><i className="fa-solid fa-award text-amber-500 mr-3"></i>Scholarship Deadlines</span>
                        <span className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full">{scholarships.length}</span>
                      </h3>
                      <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                          {scholarships.map(item => (
                              <div key={item.id} onClick={() => setSelectedNotification(item)} className="flex items-start p-3 bg-slate-50 rounded-lg border border-slate-200 cursor-pointer hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200">
                                <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3"><i className="fa-solid fa-award text-sm"></i></div>
                                <div className="flex-grow"><p className="font-semibold text-slate-800 text-sm leading-tight">{item.title}</p><p className="text-xs text-slate-500 font-medium">{item.date}</p></div>
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-200/50">
                      <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center justify-between">
                          <span className="flex items-center"><i className="fa-solid fa-pen-to-square text-sky-500 mr-3"></i>Key Entrance Exams</span>
                          <span className="bg-sky-100 text-sky-800 text-sm font-semibold px-3 py-1 rounded-full">{entranceExams.length}</span>
                      </h3>
                      <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                          {entranceExams.map(item => (
                              <div key={item.id} onClick={() => setSelectedNotification(item)} className="flex items-start p-3 bg-slate-50 rounded-lg border border-slate-200 cursor-pointer hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200">
                                <div className="flex-shrink-0 w-8 h-8 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mr-3"><i className="fa-solid fa-pen-to-square text-sm"></i></div>
                                <div className="flex-grow"><p className="font-semibold text-slate-800 text-sm leading-tight">{item.title}</p><p className="text-xs text-slate-500 font-medium">{item.date}</p></div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                    <div className="relative pl-8">
                      <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-200"></div>
                      {notifications.map(item => {
                        const status = statuses[item.id];
                        return (
                          <div key={item.id} className="relative mb-8">
                              <div className="absolute -left-2.5 top-2 w-5 h-5 bg-indigo-600 rounded-full border-4 border-white"></div>
                              <div className={`p-4 bg-white rounded-lg shadow-md ml-8 transition-all duration-300 ${status === 'done' ? 'opacity-60' : ''}`}>
                                  <div className="flex justify-between items-start">
                                      <div>
                                          <p className="text-sm font-semibold text-indigo-600">{item.date}</p>
                                          <h3 className={`font-bold text-slate-800 mt-1 ${status === 'done' ? 'line-through' : ''}`}>{item.title}</h3>
                                          <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                                      </div>
                                      <div className="flex-shrink-0 flex items-center space-x-2 ml-4">
                                          <button onClick={() => handleStatusChange(item.id, 'interested')} className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${status === 'interested' ? 'bg-amber-400 text-white' : 'bg-slate-200 text-slate-600 hover:bg-amber-200'}`} title="Mark as Interested"><i className="fa-solid fa-star text-sm"></i></button>
                                          <button onClick={() => handleStatusChange(item.id, 'done')} className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${status === 'done' ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600 hover:bg-emerald-200'}`} title="Mark as Done"><i className="fa-solid fa-check text-sm"></i></button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                <div className="lg:col-span-1">
                  <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                    <h3 className="text-xl font-bold mb-4">Add a Notification</h3>
                    <form onSubmit={handleAddNotification} className="space-y-4">
                      <div>
                        <label htmlFor="new-title" className="block text-sm font-medium text-slate-700">Title</label>
                        <input id="new-title" type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm" required />
                      </div>
                      <div>
                        <label htmlFor="new-desc" className="block text-sm font-medium text-slate-700">Description</label>
                        <textarea id="new-desc" value={newDesc} onChange={e => setNewDesc(e.target.value)} rows={3} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"></textarea>
                      </div>
                      <div>
                        <label htmlFor="new-date" className="block text-sm font-medium text-slate-700">Date</label>
                        <input id="new-date" type="date" value={newDate} onChange={e => setNewDate(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm" required />
                      </div>
                      <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700">Add Event</button>
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}

          {viewMode === 'calendar' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-lg border border-slate-200/50">
                    <div className="flex justify-between items-center mb-4">
                        <button onClick={() => changeMonth(-1)} className="w-10 h-10 rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center"><i className="fa-solid fa-chevron-left"></i></button>
                        <h3 className="text-xl font-bold text-slate-800">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
                        <button onClick={() => changeMonth(1)} className="w-10 h-10 rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center"><i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                    <div className="grid grid-cols-7 text-center font-semibold text-slate-600 mb-2 border-t border-b border-slate-200 py-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day}>{day}</div>)}
                    </div>
                    <div className="grid grid-cols-7 border-l border-t border-slate-200">
                        {getCalendarGrid()}
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                        <h3 className="text-lg font-bold mb-4">
                            Events for <span className="text-indigo-600">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </h3>
                        <div className="space-y-3 max-h-96 overflow-y-auto">
                            {selectedDateEvents.length > 0 ? (
                                selectedDateEvents.map(event => (
                                    <div key={event.id} onClick={() => setSelectedNotification(event)} className="p-3 bg-slate-50 rounded-md border border-slate-200 cursor-pointer hover:bg-indigo-50 hover:border-indigo-200 transition-colors">
                                        <p className="font-semibold text-sm text-slate-800">{event.title}</p>
                                        <p className="text-xs text-slate-500">{event.description.substring(0, 50)}...</p>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-8 text-slate-500">
                                    <i className="fa-solid fa-calendar-check text-3xl mb-2"></i>
                                    <p>No events scheduled for this day.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
          )}
        </div>
      </section>
      {selectedNotification && (
        <TimelineDetailModal notification={selectedNotification} onClose={() => setSelectedNotification(null)} />
      )}
    </>
  );
};

export default Timeline;
