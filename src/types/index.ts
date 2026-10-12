export interface Course {
  id: string;
  name: string;
  code: string;
  degree: string; // e.g. "B.Tech", "B.E.", "B.Sc", "MBA"
  level: 'Undergraduate' | 'Postgraduate';
  department: string;
  duration: string;
  eligibility: string;
  annualFee: string;
  seats: number;
  description: string;
  curriculum: string[];
  careerProspects: string[];
  featured?: boolean;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experienceYears: number;
  specialization: string;
  email: string;
  publicationsCount: number;
  bio: string;
  avatarUrl: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'Academic' | 'Research' | 'Recreation' | 'Residential' | 'Services';
  description: string;
  features: string[];
  imageUrl: string;
  timings: string;
  capacity?: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Technical' | 'Cultural' | 'Sports' | 'Academic';
  date: string;
  time: string;
  venue: string;
  description: string;
  highlights: string[];
  registrationDeadline: string;
  isUpcoming: boolean;
}

export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: 'Examinations' | 'Admissions' | 'Academic' | 'General';
  isImportant?: boolean;
  linkText?: string;
  fileSize?: string;
}

export interface PlacementStatistic {
  label: string;
  value: string;
  subtext: string;
}

export interface PlacementSuccessStory {
  id: string;
  studentName: string;
  course: string;
  batch: string;
  company: string;
  package: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface AdmissionEnquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  selectedCourse: string;
  qualifyingMarks: string;
  city: string;
  message: string;
  submittedAt: string;
  status: 'Pending Review' | 'Counselor Assigned' | 'Approved';
}

export interface StudentProfile {
  id: string;
  rollNo: string;
  name: string;
  program: string;
  semester: number;
  batch: string;
  cgpa: number;
  attendance: string;
  advisor: string;
}

export interface ExamResult {
  semester: number;
  gpa: number;
  status: string;
  subjects: {
    code: string;
    name: string;
    credits: number;
    grade: string;
    marks: number;
  }[];
}

export interface TimetableEntry {
  day: string;
  periods: {
    time: string;
    subject: string;
    room: string;
    faculty: string;
  }[];
}
