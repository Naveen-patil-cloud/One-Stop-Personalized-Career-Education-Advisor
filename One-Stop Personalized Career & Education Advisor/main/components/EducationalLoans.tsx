
import React, { useState, useMemo } from 'react';
import { EDUCATIONAL_LOANS } from '../constants';
import { EducationalLoan } from '../types';

const EducationalLoans: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

    const filteredLoans = useMemo(() => {
        return EDUCATIONAL_LOANS.filter(loan => 
            loan.bankName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const handleToggleDetails = (id: number) => {
        setExpandedCardId(prevId => (prevId === id ? null : id));
    };

    return (
        <section id="loans" className="py-12 bg-slate-50/50 rounded-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text mb-2">
                        Educational Loan Information
                    </h2>
                    <p className="text-slate-600">Compare loan options from various banks to fund your education.</p>
                </div>

                <div className="p-4 md:p-6 mb-8 bg-white/80 backdrop-blur-md rounded-xl shadow-md border border-slate-200/50 max-w-lg mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by bank name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white border border-slate-300 text-slate-700 py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                            <i className="fa-solid fa-search"></i>
                        </div>
                    </div>
                </div>

                <div className="mb-8 p-4 bg-yellow-100 text-yellow-800 rounded-lg text-sm text-center">
                    <i className="fa-solid fa-circle-info mr-2"></i>
                    <strong>Disclaimer:</strong> The information provided below is for general guidance only. Interest rates and terms are subject to change. Please verify all details with the respective banks before making any decisions.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLoans.length > 0 ? (
                        filteredLoans.map(loan => (
                            <div key={loan.id} className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 flex-shrink-0 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">
                                            <i className={loan.logoIcon}></i>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-800 leading-tight">{loan.bankName}</h3>
                                    </div>

                                    <div className="space-y-3 text-sm flex-grow">
                                        <p><span className="font-semibold text-slate-600">Interest Rate:</span> {loan.interestRate}</p>
                                        <p><span className="font-semibold text-slate-600">Max Amount:</span> {loan.maxLoanAmount}</p>
                                        <p><span className="font-semibold text-slate-600">Repayment:</span> {loan.repaymentPeriod}</p>
                                    </div>
                                    
                                    {/* Expanded Details */}
                                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedCardId === loan.id ? 'max-h-screen mt-4 pt-4 border-t' : 'max-h-0'}`}>
                                        <div className="space-y-4 text-sm">
                                            <div>
                                                <h4 className="font-bold text-slate-700 mb-1">Eligibility</h4>
                                                <ul className="list-disc list-inside text-slate-600 space-y-1">
                                                    {loan.eligibility.map((item, i) => <li key={i}>{item}</li>)}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-700 mb-1">Documents Required</h4>
                                                <ul className="list-disc list-inside text-slate-600 space-y-1">
                                                    {loan.documentsRequired.map((item, i) => <li key={i}>{item}</li>)}
                                                </ul>
                                            </div>
                                            <p><span className="font-semibold text-slate-600">Processing Fee:</span> {loan.processingFee}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-slate-50 border-t mt-auto">
                                    <button onClick={() => handleToggleDetails(loan.id)} className="w-full text-indigo-500 hover:text-indigo-700 text-sm font-semibold">
                                        {expandedCardId === loan.id ? 'Hide Details' : 'View Details'}
                                        <i className={`fa-solid fa-chevron-down ml-2 text-xs transition-transform duration-300 ${expandedCardId === loan.id ? 'rotate-180' : ''}`}></i>
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-slate-500 mt-8">No banks match your search criteria.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default EducationalLoans;
