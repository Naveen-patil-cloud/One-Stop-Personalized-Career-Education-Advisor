export type Section = 'home' | 'about' | 'quiz' | 'careers' | 'colleges' | 'timeline' | 'dashboard' | 'resources' | 'impact' | 'login' | 'register' | 'password-reset' | 'chatbot' | 'loans';

export interface AuthUser {
  name: string;
  email: string;
  password?: string; // Optional because we don't want to hold it in state
}

export interface QuizQuestion {
  question: string;
  options: { text: string; stream: 'Science' | 'Arts' | 'Commerce' | 'Vocational' }[];
}

export type QuizAnswers = { [key: number]: string[] };

export type QuizResult = {
  Science: number;
  Arts: number;
  Commerce: number;
  Vocational: number;
};

export interface College {
  id: number;
  name: string;
  location: string;
  state: string;
  courses: string[];
  eligibility: string;
  cutoff: string;
  facilities: string[];
  fees: string;
  imageUrl: string;
}

export interface CareerOptionDetails {
  dailyTasks: string[];
  requiredSkills: string[];
  educationalPathways: string[];
  salaryRange: string;
}

export interface CareerOption {
  name: string;
  type: 'Government Job' | 'Private Job' | 'Higher Studies' | 'Entrepreneurship';
  details: CareerOptionDetails;
}

export interface CareerPath {
  degree: string;
  description: string;
  duration: string;
  coreSubjects: string[];
  bestFor: string;
  options: CareerOption[];
}


export interface Notification {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: string;
  category: 'Scholarship' | 'Entrance Exam' | 'Admission' | 'Counseling' | 'General';
}

export interface Resource {
  title: string;
  description: string;
  link: string;
  type: 'E-Book' | 'Study Material' | 'Scholarship';
}

export interface UserProfile {
  name: string;
  age: string;
  currentClass: string;
  interests: string;
  profilePicture?: string;
}

export interface AISuggestions {
  recommendedStream: string;
  suggestedCourses: string[];
  careerOutlook: string;
  collegeTips: string;
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

export interface EducationalLoan {
  id: number;
  bankName: string;
  logoIcon: string; 
  interestRate: string;
  maxLoanAmount: string;
  repaymentPeriod: string;
  processingFee: string;
  eligibility: string[];
  documentsRequired: string[];
}
