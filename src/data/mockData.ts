import {
  Course,
  FacultyMember,
  Facility,
  EventItem,
  NoticeItem,
  PlacementStatistic,
  PlacementSuccessStory,
  StudentProfile,
  ExamResult,
  TimetableEntry
} from '../types';

import heroCampusImg from '../assets/images/hero_campus_main_1791799568623.jpg';
import libraryImg from '../assets/images/campus_library_modern_1791799583183.jpg';
import stemLabImg from '../assets/images/campus_laboratory_stem_1791799601907.jpg';
import sportsImg from '../assets/images/campus_sports_auditorium_1791799614497.jpg';
import principalImg from '../assets/images/principal_portrait_1791799626859.jpg';

export const campusImages = {
  hero: heroCampusImg,
  library: libraryImg,
  stemLab: stemLabImg,
  sports: sportsImg,
  principal: principalImg,
};

export const collegeInfo = {
  name: 'ABC College',
  tagline: 'Empowering Minds, Shaping Global Leaders',
  motto: 'Excellence in Knowledge & Character',
  established: 1984,
  affiliation: 'UGC Autonomous & AICTE Approved',
  accreditation: "NAAC 'A++' Grade (CGPA 3.82/4.00)",
  nirfRank: 'Ranked 38th in National NIRF Ranking',
  location: 'Knowledge Park III, Institutional Boulevard, Metro City - 560100',
  admissionsHotline: '+91 1800-245-8900',
  admissionsEmail: 'admissions@abccollege.edu',
  infoEmail: 'info@abccollege.edu',
  officeHours: 'Monday – Saturday: 8:30 AM – 5:30 PM (IST)',
  stats: {
    students: '7,200+',
    faculty: '380+',
    placementRate: '94.8%',
    highestPackage: '₹44.5 LPA',
    averagePackage: '₹9.2 LPA',
    campusAcres: '120 Acres',
    alumniNetwork: '28,000+',
    researchGrants: '₹34 Cr+',
  }
};

export const coursesData: Course[] = [
  {
    id: 'btech-cse',
    name: 'B.Tech. in Computer Science & Artificial Intelligence',
    code: 'CS-101',
    degree: 'B.Tech.',
    level: 'Undergraduate',
    department: 'Computer Science & Engineering',
    duration: '4 Years (8 Semesters)',
    eligibility: '10+2 with Physics, Mathematics, and Chemistry with minimum 60% aggregate and valid CET/JEE score.',
    annualFee: '₹1,85,000 / Year',
    seats: 180,
    featured: true,
    description: 'An industry-integrated curriculum covering deep learning, cloud architecture, modern full-stack development, and algorithmic problem solving.',
    curriculum: [
      'Data Structures & Algorithms in C++/Java',
      'Artificial Intelligence & Machine Learning Foundations',
      'Database Management Systems & Distributed Databases',
      'Full-Stack Cloud Native Systems',
      'Computer Vision & Natural Language Processing',
      'Cybersecurity & Cryptography Protocols',
      'Capstone Industry Capstone Project & Internship'
    ],
    careerProspects: [
      'AI/ML Engineer',
      'Full-Stack Software Engineer',
      'Cloud Solutions Architect',
      'Data Scientist',
      'Systems Security Analyst'
    ]
  },
  {
    id: 'be-mech',
    name: 'B.E. in Mechanical Engineering (Robotics & Mechatronics)',
    code: 'ME-102',
    degree: 'B.E.',
    level: 'Undergraduate',
    department: 'Mechanical Engineering',
    duration: '4 Years (8 Semesters)',
    eligibility: '10+2 with Physics, Mathematics, and Chemistry with minimum 55% aggregate score.',
    annualFee: '₹1,50,000 / Year',
    seats: 120,
    featured: true,
    description: 'Blends classical thermodynamic principles with modern robotic automation, CAD/CAM simulation, and electric vehicle powertrain engineering.',
    curriculum: [
      'Engineering Mechanics & Materials Science',
      'Thermodynamics & Heat Transfer',
      'Robotics, Sensors & Industrial Actuators',
      'CAD/CAM Modeling & Rapid Prototyping',
      'Automotive Systems & Electric Mobility',
      'Fluid Dynamics & Computational Aerodynamics'
    ],
    careerProspects: [
      'Robotics Automation Engineer',
      'Automotive Design Engineer',
      'Thermal Systems Specialist',
      'Manufacturing Operations Lead'
    ]
  },
  {
    id: 'btech-ece',
    name: 'B.Tech. in Electronics & Communication Engineering',
    code: 'EC-103',
    degree: 'B.Tech.',
    level: 'Undergraduate',
    department: 'Electronics & Communication',
    duration: '4 Years (8 Semesters)',
    eligibility: '10+2 with PCM minimum 60% score.',
    annualFee: '₹1,65,000 / Year',
    seats: 120,
    featured: false,
    description: 'Focused on VLSI design, embedded IoT architectures, wireless 5G communications, and microelectronics fabrication.',
    curriculum: [
      'Digital Signal Processing & Microcontrollers',
      'VLSI Design & Semiconductor Physics',
      'Embedded IoT Systems & Edge Computing',
      'Optical & Microwave Communications',
      'Wireless 5G/6G Networks'
    ],
    careerProspects: [
      'VLSI Chip Design Engineer',
      'Embedded Firmware Engineer',
      'RF Telecommunications Engineer',
      'IoT Systems Architect'
    ]
  },
  {
    id: 'bsc-datascience',
    name: 'B.Sc. in Data Science & Applied Statistics',
    code: 'SC-104',
    degree: 'B.Sc.',
    level: 'Undergraduate',
    department: 'School of Basic & Applied Sciences',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 with Mathematics/Statistics with minimum 55% aggregate marks.',
    annualFee: '₹95,000 / Year',
    seats: 90,
    featured: true,
    description: 'Empowers students with statistical modeling, big data visualization, quantitative finance, and computational analytics.',
    curriculum: [
      'Probability & Inferential Statistics',
      'Python & R for Computational Analytics',
      'Predictive Modeling & Time Series Analysis',
      'Big Data Engineering with Spark',
      'Business Intelligence & Dashboard Visualization'
    ],
    careerProspects: [
      'Business Analyst',
      'Quantitative Risk Analyst',
      'Data Visualization Specialist',
      'Operations Research Analyst'
    ]
  },
  {
    id: 'bcom-hons',
    name: 'B.Com. (Honours in International Finance & Analytics)',
    code: 'CM-105',
    degree: 'B.Com.',
    level: 'Undergraduate',
    department: 'School of Commerce',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 in Commerce/Science/Arts with minimum 55% aggregate marks.',
    annualFee: '₹85,000 / Year',
    seats: 150,
    featured: false,
    description: 'Accredited with exemptions for ACCA and CMA certifications, providing rigorous foundations in corporate finance, auditing, and fintech.',
    curriculum: [
      'Corporate Accounting & Financial Reporting',
      'International Taxation & Law',
      'Investment Banking & Portfolio Management',
      'Fintech & Digital Banking Systems',
      'Auditing Assurance & Forensic Accounting'
    ],
    careerProspects: [
      'Financial Analyst',
      'Investment Associate',
      'Chartered Tax Consultant',
      'Corporate Auditor'
    ]
  },
  {
    id: 'bba-mgmt',
    name: 'BBA (Bachelor of Business Administration)',
    code: 'BA-106',
    degree: 'BBA',
    level: 'Undergraduate',
    department: 'School of Management Studies',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 in any stream with minimum 50% aggregate marks.',
    annualFee: '₹1,10,000 / Year',
    seats: 120,
    featured: true,
    description: 'Develops future business leaders through experiential case studies, venture incubation, digital marketing, and leadership workshops.',
    curriculum: [
      'Principles of Modern Management',
      'Consumer Behavior & Brand Strategy',
      'Organizational Leadership & HR Analytics',
      'Strategic Financial Management',
      'Entrepreneurship & Venture Capital Lab'
    ],
    careerProspects: [
      'Marketing Strategist',
      'Operations Executive',
      'Human Resources Specialist',
      'Startup Founder / Venture Associate'
    ]
  },
  {
    id: 'bca-comp',
    name: 'BCA (Bachelor of Computer Applications)',
    code: 'CA-107',
    degree: 'BCA',
    level: 'Undergraduate',
    department: 'Computer Applications',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 with Mathematics/Computer Science with minimum 50% marks.',
    annualFee: '₹1,05,000 / Year',
    seats: 120,
    featured: false,
    description: 'Hands-on practical degree focused on modern web platforms, mobile app development (Flutter/React Native), and relational databases.',
    curriculum: [
      'Programming in Python & Modern JavaScript',
      'Web Technologies & Mobile App Design',
      'Database Architecture (SQL & MongoDB)',
      'Software Testing & Agile Methodologies',
      'Cloud Infrastructure & DevOps Basics'
    ],
    careerProspects: [
      'Web Application Developer',
      'Mobile App Developer',
      'Database Administrator',
      'Quality Assurance Engineer'
    ]
  },
  {
    id: 'mba-corp',
    name: 'MBA (Master of Business Administration)',
    code: 'MB-201',
    degree: 'MBA',
    level: 'Postgraduate',
    department: 'School of Management Studies',
    duration: '2 Years (4 Semesters)',
    eligibility: 'Bachelor’s degree in any discipline with minimum 50% marks and valid CAT/MAT/GMAT or College Entrance score.',
    annualFee: '₹2,60,000 / Year',
    seats: 120,
    featured: true,
    description: 'Flagship management program offering dual-specialization in Finance, Marketing, Business Analytics, and Supply Chain Strategy.',
    curriculum: [
      'Managerial Economics & Global Geopolitics',
      'Corporate Valuation & Investment Strategies',
      'Marketing Analytics & Omnichannel Experience',
      'Supply Chain & Global Logistics Architecture',
      'International Business Strategy & Capstone Consulting'
    ],
    careerProspects: [
      'Management Consultant',
      'Investment Banker',
      'Product Marketing Manager',
      'Supply Chain Director'
    ]
  },
  {
    id: 'mca-ai',
    name: 'MCA (Master of Computer Applications in Cloud & AI)',
    code: 'MC-202',
    degree: 'MCA',
    level: 'Postgraduate',
    department: 'Computer Applications',
    duration: '2 Years (4 Semesters)',
    eligibility: 'BCA / B.Sc. (CS/IT) / B.E. with Mathematics at 10+2 or degree level, minimum 55% marks.',
    annualFee: '₹1,40,000 / Year',
    seats: 90,
    featured: false,
    description: 'Advanced postgraduate curriculum emphasizing scalable microservices, containerization, applied AI models, and enterprise software engineering.',
    curriculum: [
      'Enterprise Software Architecture & Microservices',
      'Deep Learning & Neural Network Frameworks',
      'DevOps, Kubernetes & Cloud Native Pipelines',
      'Advanced Database Tuning & Data Warehousing',
      'Enterprise Capstone Project'
    ],
    careerProspects: [
      'Senior Software Architect',
      'DevOps & Cloud Engineer',
      'Machine Learning Specialist',
      'Enterprise Systems Consultant'
    ]
  }
];

export const facultyMembers: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Dr. Elizabeth Vance',
    designation: 'Principal & Professor of Applied Physics',
    department: 'Academic Leadership',
    qualification: 'Ph.D. (Stanford University), IEEE Senior Member',
    experienceYears: 24,
    specialization: 'Quantum Optics, Institutional Governance, Curriculum Innovation',
    email: 'principal@abccollege.edu',
    publicationsCount: 68,
    bio: 'Dr. Elizabeth Vance has steered ABC College to NAAC A++ accreditation and established 6 international university partnerships.',
    avatarUrl: principalImg
  },
  {
    id: 'fac-2',
    name: 'Dr. Rajeshwar Sen',
    designation: 'Dean, School of Engineering & Computer Science',
    department: 'Computer Science & Engineering',
    qualification: 'Ph.D. (IIT Madras), PostDoc (Carnegie Mellon)',
    experienceYears: 19,
    specialization: 'Distributed Systems, High Performance Computing, Distributed AI',
    email: 'r.sen@abccollege.edu',
    publicationsCount: 42,
    bio: 'Lead investigator on 3 national AI research grants with patents in autonomous fault-tolerant network topologies.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-3',
    name: 'Dr. Katherine Zhang',
    designation: 'Professor & Head of Department, AI & Data Science',
    department: 'Computer Science & Engineering',
    qualification: 'Ph.D. (UC Berkeley), M.S. (UIUC)',
    experienceYears: 15,
    specialization: 'Computer Vision, Deep Generative Models, Explainable AI',
    email: 'k.zhang@abccollege.edu',
    publicationsCount: 38,
    bio: 'Consultant for leading semiconductor firms and director of ABC College Centre for Cognitive Research.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-4',
    name: 'Dr. Arvind Raghavan',
    designation: 'Professor & HOD, Electronics & Communication',
    department: 'Electronics & Communication',
    qualification: 'Ph.D. (Indian Institute of Science - IISc)',
    experienceYears: 21,
    specialization: 'VLSI Nano-electronics, RF Microwave Design, 5G Wireless Channels',
    email: 'a.raghavan@abccollege.edu',
    publicationsCount: 51,
    bio: 'Author of three textbooks on semiconductor physical design and mentor to award-winning student robotics squads.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-5',
    name: 'Prof. Meera Swaminathan',
    designation: 'Dean & Professor, School of Management Studies',
    department: 'School of Management Studies',
    qualification: 'MBA (Wharton School), Ph.D. (IIM Bangalore)',
    experienceYears: 18,
    specialization: 'Strategic Corporate Finance, ESG Investment, Fintech Economics',
    email: 'm.swaminathan@abccollege.edu',
    publicationsCount: 29,
    bio: 'Former senior director at global investment banking firms with expertise in corporate turnaround and governance.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-6',
    name: 'Dr. David O\'Connor',
    designation: 'Professor & HOD, Mechanical Engineering',
    department: 'Mechanical Engineering',
    qualification: 'Ph.D. (Imperial College London)',
    experienceYears: 17,
    specialization: 'Computational Fluid Dynamics, Renewable Thermodynamics, EV Battery Cooling',
    email: 'd.oconnor@abccollege.edu',
    publicationsCount: 34,
    bio: 'Directs the college Alternative Energy Lab and serves on the National EV Standards advisory committee.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-7',
    name: 'Dr. Priya Nair',
    designation: 'Associate Professor & HOD, School of Basic Sciences',
    department: 'School of Basic & Applied Sciences',
    qualification: 'Ph.D. (Cambridge University), PostDoc (Max Planck)',
    experienceYears: 14,
    specialization: 'Applied Mathematical Modeling, Bioinformatics Algorithms',
    email: 'p.nair@abccollege.edu',
    publicationsCount: 27,
    bio: 'Recognized with the National Young Scientist Award for computational disease modeling.',
    avatarUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'fac-8',
    name: 'Prof. Sunita Kulkarni',
    designation: 'HOD, School of Commerce & Financial Studies',
    department: 'School of Commerce',
    qualification: 'FCA, Ph.D. (Delhi School of Economics)',
    experienceYears: 16,
    specialization: 'Forensic Accounting, Corporate Governance, Capital Markets',
    email: 's.kulkarni@abccollege.edu',
    publicationsCount: 22,
    bio: 'Advises national banking regulators on corporate transparency and risk protocols.',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
  }
];

export const campusFacilities: Facility[] = [
  {
    id: 'library',
    title: 'Central Tagore Digital & Print Library',
    category: 'Academic',
    description: 'A 4-tier architectural marvel housing over 1,20,000 volumes, 450+ printed national and international journals, IEEE Xplore, ScienceDirect digital subscriptions, and 120 dedicated quiet study pods.',
    features: [
      '1,20,000+ Printed Books & E-Books Access',
      'Automated RFID Book Checkout Kiosks',
      '24/7 Digital Research Portal Access',
      'Air-conditioned Group Discussion Chambers'
    ],
    imageUrl: libraryImg,
    timings: 'Monday – Sunday: 7:00 AM – 11:00 PM',
    capacity: '1,200 Seating Capacity'
  },
  {
    id: 'laboratories',
    title: 'Advanced STEM & Robotics Research Complex',
    category: 'Research',
    description: 'Equipped with industrial 6-axis robotic arms, NVIDIA A100 GPU compute clusters, precision oscilloscopes, 3D additive manufacturing suites, and rapid prototyping wind tunnels.',
    features: [
      'NVIDIA GPU Deep Learning Clusters',
      'High-Precision 3D Rapid Prototyping Lab',
      'Clean Room for Microelectronics Testing',
      'IoT Sensor Mesh Testing Beds'
    ],
    imageUrl: stemLabImg,
    timings: 'Open 24/7 for Authorized Research Scholars',
    capacity: '40 Specialized Laboratories'
  },
  {
    id: 'sports',
    title: 'Olympus Multi-Sport Arena & Convention Center',
    category: 'Recreation',
    description: 'An indoor sports arena featuring maple-wood basketball courts, badminton courts, Olympic-size 50m swimming pool, international standard football turf, and 2,500-seat acoustic auditorium.',
    features: [
      '2,500-Seat Air-Conditioned Grand Auditorium',
      'FIBA-Grade Wooden Indoor Basketball Court',
      'Olympic 50-Meter Heated Swimming Pool',
      'Full-Size FIFA Certified Football Turf'
    ],
    imageUrl: sportsImg,
    timings: 'Daily: 6:00 AM – 9:00 PM',
    capacity: '2,500 Auditorium / 1,000 Arena Seating'
  },
  {
    id: 'computer-center',
    title: 'High-Performance Central Computing Center',
    category: 'Academic',
    description: '1,200 high-end workstations configured with redundant dual-ring 10 Gbps fiber connectivity, Linux/Windows virtualization, and cloud sandbox sandpits.',
    features: [
      '1,200 Intel Core i9 Workstations',
      'Redundant 10 Gbps Dedicated Internet Lease Line',
      'Enterprise VMware & Docker Sandbox Cluster',
      'Dedicated Competitive Coding & Hackathon Zone'
    ],
    imageUrl: heroCampusImg,
    timings: '8:00 AM – 10:00 PM',
    capacity: '1,200 Workstations'
  },
  {
    id: 'hostels',
    title: 'Modern Residential Student Hostels',
    category: 'Residential',
    description: 'Separate well-appointed residential towers for male and female students with furnished single and twin sharing rooms, high-speed Wi-Fi, biometric security, and indoor recreation lounges.',
    features: [
      'Twin & Single Occupancy AC / Non-AC Rooms',
      '24/7 Biometric Access & CCTV Surveillance',
      'Doctor on Call & Campus Dispensary',
      'Dedicated Laundry & Housekeeping Staff'
    ],
    imageUrl: libraryImg,
    timings: 'Resident Access 24/7 (Gate Curfew: 9:30 PM)',
    capacity: '3,200 Boarders'
  },
  {
    id: 'cafeteria',
    title: 'Multi-Cuisine Cafeteria & Food Court',
    category: 'Services',
    description: 'Hygienic, multi-vendor food court serving wholesome North Indian, South Indian, Continental, and wholesome organic dietary selections, audited by certified food safety authorities.',
    features: [
      'FSSAI Certified Fresh Preparation Kitchens',
      'Multi-Cuisine Counters & Healthy Juice Bar',
      'Spacious Open-Air Garden Seating Deck',
      'Subsidy Rates for Enrolled Students'
    ],
    imageUrl: sportsImg,
    timings: '7:30 AM – 10:30 PM',
    capacity: '800 Seating at a time'
  },
  {
    id: 'transport',
    title: 'Fleet Transportation & City Transit Service',
    category: 'Services',
    description: '45 GPS-tracked air-conditioned buses traversing 32 dedicated routes connecting every municipal sector, railway hub, and metro station in the greater metropolitan region.',
    features: [
      '45 GPS-Tracked Air-Conditioned Buses',
      'Real-Time Student Bus Tracking Mobile App',
      'Emergency First-Aid & Speed Governors Installed',
      'Coverage across 32 Strategic City Transit Routes'
    ],
    imageUrl: heroCampusImg,
    timings: 'Scheduled Morning & Evening Transit Runs',
    capacity: '3,000+ Daily Commuters'
  }
];

export const placementStats: PlacementStatistic[] = [
  { label: 'Overall Placement Rate', value: '94.8%', subtext: 'Class of 2025-26 across all departments' },
  { label: 'Highest Annual Package', value: '₹44.5 LPA', subtext: 'Offered by Global Tech Conglomerate' },
  { label: 'Average Annual Package', value: '₹9.2 LPA', subtext: 'Up 14.5% year-over-year' },
  { label: 'Recruiting Companies', value: '340+', subtext: 'Fortune 500, MNCs & high-growth unicorns' },
  { label: 'Total Job Offers Made', value: '1,280+', subtext: 'Including 240+ pre-placement offers (PPOs)' },
  { label: 'Paid Internships Secured', value: '620+', subtext: 'Average stipend of ₹42,000 / month' },
];

export const topRecruiters = [
  { name: 'Google', category: 'Technology', tier: 'Dream' },
  { name: 'Microsoft', category: 'Technology', tier: 'Dream' },
  { name: 'Amazon', category: 'Technology & Cloud', tier: 'Dream' },
  { name: 'Cisco Systems', category: 'Networking & Security', tier: 'Dream' },
  { name: 'Deloitte', category: 'Consulting & Risk', tier: 'Core' },
  { name: 'Goldman Sachs', category: 'Investment Banking', tier: 'Dream' },
  { name: 'Tata Consultancy Services', category: 'IT & Digital', tier: 'Mass' },
  { name: 'Infosys', category: 'IT Solutions', tier: 'Mass' },
  { name: 'Larsen & Toubro', category: 'Engineering & Infra', tier: 'Core' },
  { name: 'Siemens Healthineers', category: 'MedTech & Automation', tier: 'Core' },
  { name: 'Wipro Limited', category: 'Digital Services', tier: 'Mass' },
  { name: 'Accenture', category: 'Management Consulting', tier: 'Core' },
  { name: 'Morgan Stanley', category: 'Financial Technologies', tier: 'Dream' },
  { name: 'Texas Instruments', category: 'Semiconductor VLSI', tier: 'Dream' },
];

export const placementStories: PlacementSuccessStory[] = [
  {
    id: 'story-1',
    studentName: 'Aarav Singhania',
    course: 'B.Tech. Computer Science & AI',
    batch: 'Class of 2025',
    company: 'Microsoft',
    package: '₹44.5 LPA',
    role: 'Software Development Engineer I',
    quote: 'The rigorous coding incubation camps, open-source workshops, and faculty guidance at ABC College helped me crack four technical rounds with confidence.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'story-2',
    studentName: 'Rhea Deshmukh',
    course: 'MBA in Corporate Finance',
    batch: 'Class of 2025',
    company: 'Goldman Sachs',
    package: '₹28.0 LPA',
    role: 'Financial Analyst - Global Markets',
    quote: 'From Bloomberg terminal labs to boardroom case simulations, ABC College School of Management prepared me for high-stakes corporate finance.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'story-3',
    studentName: 'Karthik Raman',
    course: 'B.E. Mechanical Engineering',
    batch: 'Class of 2025',
    company: 'Larsen & Toubro',
    package: '₹14.2 LPA',
    role: 'Robotics Project Engineer',
    quote: 'The hands-on hours I spent inside the Advanced Mechatronics lab building automated testing rigs directly matched my interview assessment.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'story-4',
    studentName: 'Ananya Sengupta',
    course: 'B.Sc. Data Science',
    batch: 'Class of 2025',
    company: 'Deloitte Consulting',
    package: '₹16.5 LPA',
    role: 'Analytics Consultant',
    quote: 'The applied statistical projects and industry mentors gave me practical problem-solving depth that truly set my portfolio apart.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80'
  }
];

export const upcomingEvents: EventItem[] = [
  {
    id: 'evt-1',
    title: 'INNOVASIA 2026: International Tech Summit & Hackathon',
    category: 'Technical',
    date: 'November 14 – 16, 2026',
    time: '9:00 AM – 8:00 PM IST',
    venue: 'Tagore Auditorium & Computing Complex',
    description: '36-hour flagship inter-collegiate hackathon with ₹5,00,000 prize pool, featuring keynote talks from Silicon Valley CTOs and venture incubators.',
    highlights: ['36-Hour Continuous Hackathon', 'Generative AI & Web3 Tracks', 'Investor Demo Day'],
    registrationDeadline: 'November 5, 2026',
    isUpcoming: true
  },
  {
    id: 'evt-2',
    title: 'AURA 2026: Annual Inter-University Cultural Extravaganza',
    category: 'Cultural',
    date: 'December 2 – 4, 2026',
    time: '4:00 PM – 10:00 PM IST',
    venue: 'Open Air Amphitheatre & Sports Arena',
    description: 'The largest student-organized cultural fest in the state featuring battle of the bands, classical dance championships, fashion showcase, and celebrity concert.',
    highlights: ['40+ College Contingents', 'Star Performance Night', 'Choreography & Theatrics Showdown'],
    registrationDeadline: 'November 20, 2026',
    isUpcoming: true
  },
  {
    id: 'evt-3',
    title: 'OLYMPUS 2026: All-India Inter-Collegiate Athletic Meet',
    category: 'Sports',
    date: 'October 28 – 30, 2026',
    time: '7:00 AM – 6:00 PM IST',
    venue: 'Olympus Sports Complex',
    description: '3-day athletic competition across basketball, football, volleyball, track & field events, and table tennis with over 80 participating universities.',
    highlights: ['FIFA Standard Turf Games', 'Swimming Medley Relay', 'Trophies and Cash Purses'],
    registrationDeadline: 'October 20, 2026',
    isUpcoming: true
  },
  {
    id: 'evt-4',
    title: 'International Conference on Sustainable Tech & Clean Energy',
    category: 'Academic',
    date: 'November 24 – 25, 2026',
    time: '10:00 AM – 5:00 PM IST',
    venue: 'Convention Center, Hall A',
    description: 'IEEE technically co-sponsored conference focusing on renewable solar materials, smart electrical grids, and decarbonization strategies.',
    highlights: ['Scopus Indexed Paper Proceedings', 'Keynote from UN Climate Council Fellow', 'Interactive Poster Presentations'],
    registrationDeadline: 'November 10, 2026',
    isUpcoming: true
  }
];

export const latestNotices: NoticeItem[] = [
  {
    id: 'not-1',
    title: 'Admissions Open for Academic Year 2026-27: UG & PG Entrance Guidelines & Portal Link',
    date: 'October 10, 2026',
    category: 'Admissions',
    isImportant: true,
    fileSize: '1.4 MB PDF'
  },
  {
    id: 'not-2',
    title: 'Odd Semester End-Term Theory & Practical Examination Time Table (Nov-Dec 2026)',
    date: 'October 08, 2026',
    category: 'Examinations',
    isImportant: true,
    fileSize: '840 KB PDF'
  },
  {
    id: 'not-3',
    title: 'Merit-Cum-Means & Sports Excellence Scholarships 2026: Application Window Extended',
    date: 'October 05, 2026',
    category: 'Academic',
    isImportant: false,
    fileSize: '520 KB PDF'
  },
  {
    id: 'not-4',
    title: 'Campus Placement Drive: Google Cloud & Cisco Recruitment Schedule for Final Year Batches',
    date: 'October 02, 2026',
    category: 'General',
    isImportant: true,
    fileSize: '620 KB PDF'
  },
  {
    id: 'not-5',
    title: 'National Innovation Incubation Fund: Call for Student Hardware & Software Startup Pitches',
    date: 'September 28, 2026',
    category: 'Academic',
    isImportant: false,
    fileSize: '1.1 MB PDF'
  }
];

export const demoStudent: StudentProfile = {
  id: 'STU-2024-8842',
  rollNo: 'ABC2024-8842',
  name: 'Devansh Sharma',
  program: 'B.Tech. in Computer Science & Artificial Intelligence',
  semester: 5,
  batch: '2024 – 2028',
  cgpa: 8.94,
  attendance: '91.5%',
  advisor: 'Dr. Katherine Zhang'
};

export const demoExamResults: ExamResult[] = [
  {
    semester: 4,
    gpa: 9.10,
    status: 'Passed with Distinction',
    subjects: [
      { code: 'CS401', name: 'Design & Analysis of Algorithms', credits: 4, grade: 'A+', marks: 92 },
      { code: 'CS402', name: 'Database Management Systems', credits: 4, grade: 'A+', marks: 89 },
      { code: 'CS403', name: 'Operating Systems & Concurrency', credits: 3, grade: 'A', marks: 84 },
      { code: 'CS404', name: 'Machine Learning Foundations', credits: 4, grade: 'O', marks: 96 },
      { code: 'CS405L', name: 'Advanced Algorithms Lab', credits: 2, grade: 'O', marks: 98 },
    ]
  },
  {
    semester: 3,
    gpa: 8.85,
    status: 'Passed with Distinction',
    subjects: [
      { code: 'CS301', name: 'Data Structures & OOP in C++', credits: 4, grade: 'A+', marks: 88 },
      { code: 'CS302', name: 'Discrete Mathematical Structures', credits: 4, grade: 'A', marks: 83 },
      { code: 'CS303', name: 'Computer Architecture & Org', credits: 3, grade: 'A', marks: 81 },
      { code: 'CS304', name: 'Python for Computational Science', credits: 3, grade: 'O', marks: 95 },
      { code: 'CS305L', name: 'Data Structures Lab', credits: 2, grade: 'A+', marks: 91 },
    ]
  }
];

export const demoTimetable: TimetableEntry[] = [
  {
    day: 'Monday',
    periods: [
      { time: '09:00 - 10:00', subject: 'Machine Learning Foundations', room: 'LHC-302', faculty: 'Dr. K. Zhang' },
      { time: '10:00 - 11:00', subject: 'Design & Analysis of Algorithms', room: 'LHC-302', faculty: 'Dr. R. Sen' },
      { time: '11:15 - 12:15', subject: 'Operating Systems', room: 'LHC-204', faculty: 'Prof. A. Finch' },
      { time: '01:30 - 04:30', subject: 'High-Performance AI Lab (Batch A)', room: 'Computing Lab 3', faculty: 'Dr. K. Zhang' }
    ]
  },
  {
    day: 'Tuesday',
    periods: [
      { time: '09:00 - 10:00', subject: 'Database Management Systems', room: 'LHC-302', faculty: 'Dr. P. Nair' },
      { time: '10:00 - 11:00', subject: 'Machine Learning Foundations', room: 'LHC-302', faculty: 'Dr. K. Zhang' },
      { time: '11:15 - 12:15', subject: 'Design & Analysis of Algorithms', room: 'LHC-302', faculty: 'Dr. R. Sen' },
      { time: '02:00 - 03:30', subject: 'Industry Seminar & Professional Ethics', room: 'Auditorium Hall B', faculty: 'Dean Office' }
    ]
  },
  {
    day: 'Wednesday',
    periods: [
      { time: '09:00 - 11:00', subject: 'Database Systems Lab', room: 'Database Lab 1', faculty: 'Dr. P. Nair' },
      { time: '11:15 - 12:15', subject: 'Operating Systems', room: 'LHC-204', faculty: 'Prof. A. Finch' },
      { time: '01:30 - 02:30', subject: 'Machine Learning Foundations', room: 'LHC-302', faculty: 'Dr. K. Zhang' },
      { time: '02:30 - 04:00', subject: 'Sports & Extra-Curricular Activity', room: 'Olympus Complex', faculty: 'Coach Rawat' }
    ]
  },
  {
    day: 'Thursday',
    periods: [
      { time: '09:00 - 10:00', subject: 'Design & Analysis of Algorithms', room: 'LHC-302', faculty: 'Dr. R. Sen' },
      { time: '10:00 - 11:00', subject: 'Database Management Systems', room: 'LHC-302', faculty: 'Dr. P. Nair' },
      { time: '11:15 - 12:15', subject: 'Cloud Native Architectures', room: 'LHC-302', faculty: 'Prof. S. Joshi' },
      { time: '01:30 - 04:30', subject: 'Open Source Capstone Sprint', room: 'Innovation Hub', faculty: 'Dr. R. Sen' }
    ]
  },
  {
    day: 'Friday',
    periods: [
      { time: '09:00 - 10:00', subject: 'Operating Systems', room: 'LHC-204', faculty: 'Prof. A. Finch' },
      { time: '10:00 - 11:00', subject: 'Cloud Native Architectures', room: 'LHC-302', faculty: 'Prof. S. Joshi' },
      { time: '11:15 - 01:00', subject: 'Weekly Research Colloquium & Mentorship', room: 'LHC-302', faculty: 'All Mentors' },
      { time: '02:00 - 04:00', subject: 'Club Activities & Coding Society', room: 'Student Center', faculty: 'Student Council' }
    ]
  }
];

export const academicCalendarEvents = [
  { date: 'Aug 04, 2026', title: 'Commencement of Odd Semester Classes', type: 'Academic' },
  { date: 'Sep 18 - 23, 2026', title: 'Mid-Term Continuous Internal Assessment (CIA-I)', type: 'Exam' },
  { date: 'Oct 02, 2026', title: 'Gandhi Jayanti (National Holiday)', type: 'Holiday' },
  { date: 'Oct 28 - 30, 2026', title: 'OLYMPUS 2026 Annual Sports Meet', type: 'Event' },
  { date: 'Nov 04 - 09, 2026', title: 'Continuous Internal Assessment (CIA-II)', type: 'Exam' },
  { date: 'Nov 14 - 16, 2026', title: 'INNOVASIA 2026 Tech Summit & Hackathon', type: 'Event' },
  { date: 'Nov 23, 2026', title: 'Last Working Day for Odd Semester', type: 'Academic' },
  { date: 'Nov 27 - Dec 18, 2026', title: 'Semester End Theory & Practical Examinations', type: 'Exam' },
  { date: 'Jan 05, 2027', title: 'Commencement of Even Semester 2027', type: 'Academic' },
];
