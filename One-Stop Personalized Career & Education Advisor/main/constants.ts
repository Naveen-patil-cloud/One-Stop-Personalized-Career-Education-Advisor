import { QuizQuestion, College, CareerPath, Notification, Resource, EducationalLoan } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "Which subject are you most curious about?",
    options: [
      { text: "How things work (Physics, Chemistry)", stream: "Science" },
      { text: "Human history, culture, and society", stream: "Arts" },
      { text: "Business, finance, and economics", stream: "Commerce" },
      { text: "Practical skills and hands-on activities", stream: "Vocational" },
    ],
  },
  {
    question: "What kind of problems do you enjoy solving?",
    options: [
      { text: "Logical puzzles and mathematical challenges", stream: "Science" },
      { text: "Analyzing texts and understanding human behavior", stream: "Arts" },
      { text: "Financial planning and market analysis", stream: "Commerce" },
      { text: "Building or repairing things", stream: "Vocational" },
    ],
  },
  {
    question: "How do you prefer to learn new things?",
    options: [
      { text: "Through structured experiments and logical deduction.", stream: "Science" },
      { text: "By reading, discussing abstract ideas, and interpreting texts.", stream: "Arts" },
      { text: "By analyzing real-world case studies and market data.", stream: "Commerce" },
      { text: "Through hands-on practice, building, and direct application.", stream: "Vocational" },
    ],
  },
  {
    question: "In your free time, you prefer to:",
    options: [
      { text: "Experiment or watch science documentaries", stream: "Science" },
      { text: "Read books, write, or visit museums", stream: "Arts" },
      { text: "Follow stock markets or create a business plan", stream: "Commerce" },
      { text: "Learn a new craft or skill like coding or design", stream: "Vocational" },
    ],
  },
    {
    question: "Which of these skills feels most natural to you?",
    options: [
      { text: "Solving complex mathematical problems.", stream: "Science" },
      { text: "Expressing ideas clearly through writing or speaking.", stream: "Arts" },
      { text: "Organizing people and resources to achieve a goal.", stream: "Commerce" },
      { text: "Using tools or software to create something new.", stream: "Vocational" },
    ],
  },
  {
    question: "What type of work environment excites you the most?",
    options: [
        { text: "A laboratory, research center, or tech company.", stream: "Science" },
        { text: "A library, a courtroom, a classroom, or a publishing house.", stream: "Arts" },
        { text: "A corporate office, a bank, or your own business.", stream: "Commerce" },
        { text: "A design studio, a workshop, or a production set.", stream: "Vocational" },
    ],
  },
  {
    question: "When you read the news, which headline are you most likely to click on?",
    options: [
        { text: "\"Breakthrough in AI Research Could Change Medicine\"", stream: "Science" },
        { text: "\"Analysis: How a Historical Event Shapes Modern Politics\"", stream: "Arts" },
        { text: "\"Startup Hits Billion-Dollar Valuation After Funding Round\"", stream: "Commerce" },
        { text: "\"DIY Guide: Build Your Own Smart Home Device\"", stream: "Vocational" },
    ],
  },
  {
    question: "If you had to lead a major project, which would you pick?",
    options: [
        { text: "Developing a hypothesis and conducting research to test it.", stream: "Science" },
        { text: "Creating a documentary or writing an in-depth research paper.", stream: "Arts" },
        { text: "Launching a new product and creating its business strategy.", stream: "Commerce" },
        { text: "Building a functional prototype of a new invention.", stream: "Vocational" },
    ],
  },
  {
    question: "You are more interested in:",
    options: [
        { text: "Understanding WHY natural phenomena occur.", stream: "Science" },
        { text: "Exploring WHAT it means to be human.", stream: "Arts" },
        { text: "Figuring out HOW systems and markets operate efficiently.", stream: "Commerce" },
        { text: "Creating things that are USEFUL and aesthetically pleasing.", stream: "Vocational" },
    ],
  },
  {
    question: "Which career path sounds most appealing?",
    options: [
      { text: "Engineer, Doctor, or Scientist", stream: "Science" },
      { text: "Journalist, Lawyer, or Historian", stream: "Arts" },
      { text: "Chartered Accountant, Banker, or Entrepreneur", stream: "Commerce" },
      { text: "Web Developer, Electrician, or Graphic Designer", stream: "Vocational" },
    ],
  },
];

export const COLLEGES: College[] = [
    { id: 1, name: "Indian Institute of Technology Bombay", location: "Mumbai", state: "Maharashtra", courses: ["B.Tech CSE", "B.Tech Mechanical", "B.Des"], eligibility: "12th Science + JEE Advanced", cutoff: "99.8%", facilities: ["Hostel", "Lab", "Library", "Sports Complex"], fees: "Approx. ₹2,20,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/IIT_Bombay_Main_Building.jpg/500px-IIT_Bombay_Main_Building.jpg" },
    { id: 2, name: "Indian Institute of Technology Delhi", location: "Delhi", state: "Delhi", courses: ["B.Tech Electrical", "B.Tech Chemical", "B.Tech Textile"], eligibility: "12th Science + JEE Advanced", cutoff: "99.7%", facilities: ["Hostel", "Lab", "Library", "Gym"], fees: "Approx. ₹2,25,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Indian_Institute_of_Technology_Delhi_Admin_Block.jpg/500px-Indian_Institute_of_Technology_Delhi_Admin_Block.jpg" },
    { id: 3, name: "Indian Institute of Science", location: "Bangalore", state: "Karnataka", courses: ["BS (Research)", "M.Sc", "PhD"], eligibility: "12th Science + KVPY/JEE", cutoff: "99.5%", facilities: ["Hostel", "Advanced Lab", "Library", "Internet"], fees: "Approx. ₹35,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/IISc_Main_Building_-_panoramio.jpg/500px-IISc_Main_Building_-_panoramio.jpg" },
    { id: 4, name: "St. Stephen's College", location: "Delhi", state: "Delhi", courses: ["B.A. Economics", "B.Sc. Physics", "B.A. History"], eligibility: "12th with 60%", cutoff: "99.2%", facilities: ["Hostel", "Library", "Cafeteria"], fees: "Approx. ₹42,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/St._Stephen%27s_College%2C_Delhi_1.jpg/500px-St._Stephen%27s_College%2C_Delhi_1.jpg" },
    { id: 5, name: "All India Institute of Medical Sciences", location: "Delhi", state: "Delhi", courses: ["MBBS", "B.Sc Nursing"], eligibility: "12th PCB + NEET UG", cutoff: "99.9%", facilities: ["Hostel", "Lab", "Hospital", "Library"], fees: "Approx. ₹6,500 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/AIIMS-New-Delhi.jpg/500px-AIIMS-New-Delhi.jpg" },
    { id: 6, name: "National Institute of Technology Tiruchirappalli", location: "Tiruchirappalli", state: "Tamil Nadu", courses: ["B.Tech CSE", "B.Tech ECE", "B.Arch"], eligibility: "12th Science + JEE Main", cutoff: "99.6%", facilities: ["Hostel", "Lab", "Library", "Internet"], fees: "Approx. ₹1,50,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Clock_Tower_NIT_Trichy_2.jpg/500px-Clock_Tower_NIT_Trichy_2.jpg" },
    { id: 7, name: "Jadavpur University", location: "Kolkata", state: "West Bengal", courses: ["B.E. CSE", "B.A. English", "B.Sc. Chemistry"], eligibility: "12th + WBJEE/Entrance", cutoff: "98.5%", facilities: ["Hostel", "Library", "Lab"], fees: "Approx. ₹10,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Aurobindo_Bhavan_Jadavpur_University.jpg/500px-Aurobindo_Bhavan_Jadavpur_University.jpg" },
    { id: 8, name: "Vellore Institute of Technology", location: "Vellore", state: "Tamil Nadu", courses: ["B.Tech IT", "B.Tech Biotech", "BBA"], eligibility: "12th Science + VITEEE", cutoff: "95.0%", facilities: ["Hostel", "Lab", "Library", "Wi-Fi Campus"], fees: "Approx. ₹2,00,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/VIT_Vellore_main_building.jpg/500px-VIT_Vellore_main_building.jpg" },
    { id: 9, name: "Miranda House", location: "Delhi", state: "Delhi", courses: ["B.A. Political Science", "B.Sc. Botany", "B.El.Ed"], eligibility: "12th with 60%", cutoff: "99.0%", facilities: ["Hostel", "Library", "Lab", "Cafeteria"], fees: "Approx. ₹20,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Miranda_House_College_Building.jpg/500px-Miranda_House_College_Building.jpg" },
    { id: 10, name: "Shri Ram College of Commerce", location: "Delhi", state: "Delhi", courses: ["B.Com (Hons)", "B.A. Economics (Hons)"], eligibility: "12th with 60%", cutoff: "99.5%", facilities: ["Library", "Hostel", "Sports"], fees: "Approx. ₹30,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Shri_Ram_College_of_Commerce_at_Night.jpg/500px-Shri_Ram_College_of_Commerce_at_Night.jpg" },
    { id: 11, name: "Indian Institute of Technology Madras", location: "Chennai", state: "Tamil Nadu", courses: ["B.Tech Aerospace", "B.Tech Civil", "M.Sc Physics"], eligibility: "12th Science + JEE Advanced", cutoff: "99.6%", facilities: ["Hostel", "Advanced Lab", "Library", "Incubation Center"], fees: "Approx. ₹2,15,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Administration_Block%2C_Indian_Institute_of_Technology_Madras%2C_Chennai.jpg/500px-Administration_Block%2C_Indian_Institute_of_Technology_Madras%2C_Chennai.jpg" },
    { id: 12, name: "National Institute of Technology Karnataka", location: "Surathkal", state: "Karnataka", courses: ["B.Tech Mining", "B.Tech IT", "M.Tech"], eligibility: "12th Science + JEE Main", cutoff: "99.4%", facilities: ["Hostel", "Lab", "Library", "Private Beach"], fees: "Approx. ₹1,55,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/NITK_Main_Building_in_the_evening.jpg/500px-NITK_Main_Building_in_the_evening.jpg" },
    { id: 13, name: "Banaras Hindu University", location: "Varanasi", state: "Uttar Pradesh", courses: ["B.A. Social Sciences", "B.Sc. Agriculture", "MBBS"], eligibility: "12th + CUET", cutoff: "97.0%", facilities: ["Hostel", "Library", "Hospital", "Temple"], fees: "Approx. ₹15,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Faculty_of_Arts%2C_Banaras_Hindu_University.jpg/500px-Faculty_of_Arts%2C_Banaras_Hindu_University.jpg" },
    { id: 14, name: "University of Hyderabad", location: "Hyderabad", state: "Telangana", courses: ["Integrated M.Sc.", "M.A. Communication", "PhD"], eligibility: "12th / Graduation + Entrance", cutoff: "96.5%", facilities: ["Hostel", "Library", "Lab", "Shuttle Service"], fees: "Approx. ₹12,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Indira_Gandhi_Memorial_Library_at_the_University_of_Hyderabad.jpg/500px-Indira_Gandhi_Memorial_Library_at_the_University_of_Hyderabad.jpg" },
    { id: 15, name: "Loyola College", location: "Chennai", state: "Tamil Nadu", courses: ["B.Com", "B.Sc. Visual Communication", "B.A. History"], eligibility: "12th with relevant subjects", cutoff: "97.5%", facilities: ["Hostel", "Library", "Media Lab", "Sports"], fees: "Approx. ₹50,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Loyola_College_Chennai_-_Main_Building_-_Front_View.jpg/500px-Loyola_College_Chennai_-_Main_Building_-_Front_View.jpg" },
    { id: 16, name: "Indian Institute of Technology Kharagpur", location: "Kharagpur", state: "West Bengal", courses: ["B.Tech CSE", "B.Arch", "LLB"], eligibility: "12th Science + JEE Advanced", cutoff: "99.5%", facilities: ["Hostel", "Lab", "Library", "Innovation Center"], fees: "Approx. ₹2,25,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/IIT_Kharagpur_Main_Building.jpg/500px-IIT_Kharagpur_Main_Building.jpg" },
    { id: 17, name: "National Institute of Technology Warangal", location: "Warangal", state: "Telangana", courses: ["B.Tech CSE", "B.Tech ECE", "B.Tech Chemical"], eligibility: "12th Science + JEE Main", cutoff: "99.3%", facilities: ["Hostel", "Lab", "Library", "Innovation Garage"], fees: "Approx. ₹1,48,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NIT_Warangal_main_building.jpg/500px-NIT_Warangal_main_building.jpg" },
    { id: 18, name: "Christ University", location: "Bangalore", state: "Karnataka", courses: ["BBA", "B.A. Journalism", "B.Tech CSE"], eligibility: "12th + Entrance Test", cutoff: "94.0%", facilities: ["Hostel", "Library", "Auditorium", "Wi-Fi"], fees: "Approx. ₹1,80,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Christ_University_Block_1.jpg/500px-Christ_University_Block_1.jpg" },
    { id: 19, name: "Jawaharlal Nehru University", location: "Delhi", state: "Delhi", courses: ["B.A. Foreign Languages", "M.A. International Studies"], eligibility: "12th / Graduation + CUET", cutoff: "98.0%", facilities: ["Hostel", "Library", "24x7 Reading Rooms"], fees: "Approx. ₹1,500 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/JNU_Admin_Block.jpg/500px-JNU_Admin_Block.jpg" },
    { id: 20, name: "Lady Shri Ram College for Women", location: "Delhi", state: "Delhi", courses: ["B.A. Psychology", "B.Com (Hons)", "B.A. Journalism"], eligibility: "12th with 60%", cutoff: "99.0%", facilities: ["Hostel", "Library", "Cafe", "Labs"], fees: "Approx. ₹21,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lady_Shri_Ram_College_for_Women_building.jpg/500px-Lady_Shri_Ram_College_for_Women_building.jpg" },
    { id: 21, name: "Indian Institute of Technology Kanpur", location: "Kanpur", state: "Uttar Pradesh", courses: ["B.Tech Aerospace", "BS Economics", "B.Tech CSE"], eligibility: "12th Science + JEE Advanced", cutoff: "99.6%", facilities: ["Hostel", "Lab", "Library", "Airstrip"], fees: "Approx. ₹2,18,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/PK_Kelsar_Library_IIT_Kanpur.jpg/500px-PK_Kelsar_Library_IIT_Kanpur.jpg" },
    { id: 22, name: "Christian Medical College", location: "Vellore", state: "Tamil Nadu", courses: ["MBBS", "B.Sc Nursing", "BPT"], eligibility: "12th PCB + NEET UG", cutoff: "99.2%", facilities: ["Hostel", "Lab", "Hospital", "Library"], fees: "Approx. ₹50,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/CMC_vellore.jpg/500px-CMC_vellore.jpg" },
    { id: 23, name: "Fergusson College", location: "Pune", state: "Maharashtra", courses: ["B.Sc. Computer Science", "B.A. English", "M.A. Economics"], eligibility: "12th with relevant subjects", cutoff: "95.0%", facilities: ["Hostel", "Library", "Gym", "Amphitheatre"], fees: "Approx. ₹11,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Fergusson_College_Main_Building%2C_Pune.jpg/500px-Fergusson_College_Main_Building%2C_Pune.jpg" },
    { id: 24, name: "Symbiosis Institute of Business Management", location: "Pune", state: "Maharashtra", courses: ["BBA", "B.Sc Economics"], eligibility: "12th + SET", cutoff: "96.0%", facilities: ["Hostel", "Library", "Wi-Fi", "Modern Classrooms"], fees: "Approx. ₹4,00,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Symbiosis_Lavale_Campus.jpg/500px-Symbiosis_Lavale_Campus.jpg" },
    { id: 25, name: "Indian Institute of Management Indore", location: "Indore", state: "Madhya Pradesh", courses: ["Integrated BBA+MBA"], eligibility: "12th + IPMAT", cutoff: "97.5%", facilities: ["Hostel", "Library", "Sports Complex"], fees: "Approx. ₹6,00,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/IIM_Indore_Academic_Block.jpg/500px-IIM_Indore_Academic_Block.jpg" },
    { id: 26, name: "Indian Institute of Technology Roorkee", location: "Roorkee", state: "Uttarakhand", courses: ["B.Arch", "B.Tech Civil", "B.Tech ECE"], eligibility: "12th Science + JEE Advanced", cutoff: "99.4%", facilities: ["Hostel", "Lab", "Library", "Tinkering Lab"], fees: "Approx. ₹2,30,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/IIT_Roorkee_Main_Building.jpg/500px-IIT_Roorkee_Main_Building.jpg" },
    { id: 27, name: "National Institute of Design", location: "Ahmedabad", state: "Gujarat", courses: ["B.Des", "M.Des"], eligibility: "12th + NID DAT", cutoff: "98.5%", facilities: ["Hostel", "Design Studios", "Library", "Workshops"], fees: "Approx. ₹3,50,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/NID_main_campus.jpg/500px-NID_main_campus.jpg" },
    { id: 28, name: "St. Xavier's College", location: "Mumbai", state: "Maharashtra", courses: ["B.A. Sociology", "B.Sc. IT", "BMS"], eligibility: "12th with relevant subjects", cutoff: "98.0%", facilities: ["Hostel", "Library", "Lab", "Canteen"], fees: "Approx. ₹8,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/St._Xavier%27s_College%2C_Mumbai.jpg/500px-St._Xavier%27s_College%2C_Mumbai.jpg" },
    { id: 29, name: "Armed Forces Medical College", location: "Pune", state: "Maharashtra", courses: ["MBBS"], eligibility: "12th PCB + NEET UG", cutoff: "98.8%", facilities: ["Hostel", "Lab", "Hospital", "Military Training"], fees: "Bond/Service Based", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/AFMC_Pune_Main_Building.jpg/500px-AFMC_Pune_Main_Building.jpg" },
    { id: 30, name: "Hindu College", location: "Delhi", state: "Delhi", courses: ["B.Sc. Statistics", "B.A. Philosophy", "B.Com (Hons)"], eligibility: "12th with 60%", cutoff: "99.0%", facilities: ["Hostel", "Library", "Sports", "Labs"], fees: "Approx. ₹20,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Hindu_College_Delhi_University_New_Block_from_Sports_Ground.jpg/500px-Hindu_College_Delhi_University_New_Block_from_Sports_Ground.jpg" },
    { id: 31, name: "Indian Institute of Technology Guwahati", location: "Guwahati", state: "Assam", courses: ["B.Tech CSE", "B.Des", "B.Tech Chemical"], eligibility: "12th Science + JEE Advanced", cutoff: "99.2%", facilities: ["Hostel", "Lab", "Library", "River-side campus"], fees: "Approx. ₹2,22,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/IITG_Admin_Building.jpg/500px-IITG_Admin_Building.jpg" },
    { id: 32, name: "Motilal Nehru National Institute of Technology", location: "Allahabad", state: "Uttar Pradesh", courses: ["B.Tech CSE", "B.Tech Civil", "B.Tech Production"], eligibility: "12th Science + JEE Main", cutoff: "99.1%", facilities: ["Hostel", "Lab", "Library", "Ganga Ghat"], fees: "Approx. ₹1,60,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/MNNIT_Allahabad_Main_Building.jpg/500px-MNNIT_Allahabad_Main_Building.jpg" },
    { id: 33, name: "Aligarh Muslim University", location: "Aligarh", state: "Uttar Pradesh", courses: ["B.Tech", "BA LLB", "MBBS"], eligibility: "12th + AMU Entrance Test", cutoff: "95.0%", facilities: ["Hostel", "Library", "Riding Club", "Museum"], fees: "Approx. ₹25,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Strachey_Hall%2C_Aligarh_Muslim_University.jpg/500px-Strachey_Hall%2C_Aligarh_Muslim_University.jpg" },
    { id: 34, name: "Anna University", location: "Chennai", state: "Tamil Nadu", courses: ["B.E. CSE", "B.Tech IT", "B.Arch"], eligibility: "12th Science + TNEA", cutoff: "98.5%", facilities: ["Hostel", "Lab", "Library", "Research Centers"], fees: "Approx. ₹55,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Anna_University_Admin_Block.JPG/500px-Anna_University_Admin_Block.JPG" },
    { id: 35, name: "Delhi Technological University", location: "Delhi", state: "Delhi", courses: ["B.Tech Software Engg.", "B.Tech ECE", "MBA"], eligibility: "12th Science + JEE Main", cutoff: "98.8%", facilities: ["Hostel", "Lab", "Library", "Innovation Center"], fees: "Approx. ₹2,00,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Delhi_Technological_University_Admin_block.jpg/500px-Delhi_Technological_University_Admin_block.jpg" },
    { id: 36, name: "Indian Institute of Technology Hyderabad", location: "Hyderabad", state: "Telangana", courses: ["B.Tech AI", "B.Tech Engineering Physics", "M.Des"], eligibility: "12th Science + JEE Advanced", cutoff: "99.5%", facilities: ["Hostel", "Lab", "Library", "Fabless Chip Design Lab"], fees: "Approx. ₹2,23,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Academic_Block_A_IITH.jpg/500px-Academic_Block_A_IITH.jpg" },
    { id: 37, name: "JIPMER", location: "Puducherry", state: "Puducherry", courses: ["MBBS", "B.Sc Allied Medical Sciences"], eligibility: "12th PCB + NEET UG", cutoff: "99.5%", facilities: ["Hostel", "Lab", "Hospital", "Library"], fees: "Approx. ₹15,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/JIPMER_Hospital_Block.jpg/500px-JIPMER_Hospital_Block.jpg" },
    { id: 38, name: "National Law School of India University", location: "Bangalore", state: "Karnataka", courses: ["B.A., LL.B. (Hons.)"], eligibility: "12th + CLAT", cutoff: "99.8%", facilities: ["Hostel", "Moot Court Hall", "Library"], fees: "Approx. ₹3,00,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/NLSIU_library.jpg/500px-NLSIU_library.jpg" },
    { id: 39, name: "Presidency University", location: "Kolkata", state: "West Bengal", courses: ["B.A. History", "B.Sc. Geology", "M.A. Bengali"], eligibility: "12th + PUBDET", cutoff: "96.5%", facilities: ["Hostel", "Library", "Iconic Campus", "Labs"], fees: "Approx. ₹5,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Presidency_University_-_Main_Building.jpg/500px-Presidency_University_-_Main_Building.jpg" },
    { id: 40, name: "Ramjas College", location: "Delhi", state: "Delhi", courses: ["B.A. English", "B.Sc. Zoology", "B.Com"], eligibility: "12th with 60%", cutoff: "98.5%", facilities: ["Library", "Cafe", "Labs", "Sports"], fees: "Approx. ₹16,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ramjas_College_Building.jpg/500px-Ramjas_College_Building.jpg" },
    { id: 41, name: "Indian Institute of Technology Gandhinagar", location: "Gandhinagar", state: "Gujarat", courses: ["B.Tech CSE", "B.Tech Electrical", "M.Sc Cognitive Science"], eligibility: "12th Science + JEE Advanced", cutoff: "99.0%", facilities: ["Hostel", "Lab", "Library", "Humanity Building"], fees: "Approx. ₹2,30,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/IIT_Gn_Acad_Block_6.jpg/500px-IIT_Gn_Acad_Block_6.jpg" },
    { id: 42, name: "Maulana Azad National Institute of Technology", location: "Bhopal", state: "Madhya Pradesh", courses: ["B.Tech CSE", "B.Arch", "B.Tech Chemical"], eligibility: "12th Science + JEE Main", cutoff: "98.8%", facilities: ["Hostel", "Lab", "Library", "Lake View"], fees: "Approx. ₹1,55,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/MANIT_main_building.jpg/500px-MANIT_main_building.jpg" },
    { id: 43, name: "Xavier Institute of Communications", location: "Mumbai", state: "Maharashtra", courses: ["PG Diploma in Journalism", "PG Diploma in PR"], eligibility: "Graduation + Entrance Test", cutoff: "95.0%", facilities: ["Media Lab", "Library", "Studio", "Wi-Fi"], fees: "Approx. ₹3,25,000 / course", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/St._Xavier%27s_College%2C_Mumbai.jpg/500px-St._Xavier%27s_College%2C_Mumbai.jpg" },
    { id: 44, name: "Indian Statistical Institute", location: "Kolkata", state: "West Bengal", courses: ["B.Stat (Hons)", "B.Math (Hons)"], eligibility: "12th with Maths + Entrance", cutoff: "99.2%", facilities: ["Hostel", "Library", "Advanced Labs", "Stipend for students"], fees: "Approx. ₹1,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/ISI_main_building.jpg/500px-ISI_main_building.jpg" },
    { id: 45, name: "King George's Medical University", location: "Lucknow", state: "Uttar Pradesh", courses: ["MBBS", "BDS", "M.D."], eligibility: "12th PCB + NEET UG", cutoff: "99.0%", facilities: ["Hostel", "Lab", "Hospital", "Library"], fees: "Approx. ₹60,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/King_George_Medical_University.jpg/500px-King_George_Medical_University.jpg" },
    { id: 46, name: "Indian Institute of Technology (BHU)", location: "Varanasi", state: "Uttar Pradesh", courses: ["B.Tech CSE", "B.Tech Mining", "Integrated M.Tech"], eligibility: "12th Science + JEE Advanced", cutoff: "99.2%", facilities: ["Hostel", "Lab", "Library", "Shared BHU Campus"], fees: "Approx. ₹2,28,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Main_Building_of_IIT_%28BHU%29_Varanasi.jpg/500px-Main_Building_of_IIT_%28BHU%29_Varanasi.jpg" },
    { id: 47, name: "National Institute of Technology Rourkela", location: "Rourkela", state: "Odisha", courses: ["B.Tech Ceramic Engg.", "B.Tech CSE", "Integrated M.Sc"], eligibility: "12th Science + JEE Main", cutoff: "99.0%", facilities: ["Hostel", "Lab", "Library", "Sports"], fees: "Approx. ₹1,78,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/NIT_Rourkela_Main_Building_in_the_Evening.jpg/500px-NIT_Rourkela_Main_Building_in_the_Evening.jpg" },
    { id: 48, name: "Jamia Millia Islamia", location: "Delhi", state: "Delhi", courses: ["B.Tech", "B.A. LLB", "BDS"], eligibility: "12th + JMI Entrance Test", cutoff: "96.0%", facilities: ["Hostel", "Library", "Sports Complex", "Wi-Fi"], fees: "Approx. ₹15,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Zakir_Hussain_Library%2C_Jamia_Millia_Islamia.jpg/500px-Zakir_Hussain_Library%2C_Jamia_Millia_Islamia.jpg" },
    { id: 49, name: "Hansraj College", location: "Delhi", state: "Delhi", courses: ["B.Sc. Chemistry", "B.Com (Hons)", "B.A. Sanskrit"], eligibility: "12th with 60%", cutoff: "98.8%", facilities: ["Hostel", "Library", "Electronic Shooting Range"], fees: "Approx. ₹22,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Hansraj_College%2C_Delhi.jpg/500px-Hansraj_College%2C_Delhi.jpg" },
    { id: 50, name: "Manipal Academy of Higher Education", location: "Manipal", state: "Karnataka", courses: ["B.Tech", "MBBS", "B.Arch"], eligibility: "12th + MET", cutoff: "94.5%", facilities: ["Hostel", "Lab", "Library", "World-class campus"], fees: "Approx. ₹3,50,000 / year", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Manipal.edu_building.jpg/500px-Manipal.edu_building.jpg" }
];

export const CAREER_PATHS: CareerPath[] = [
  {
    degree: "B.Sc. (Bachelor of Science)",
    description: "A foundational undergraduate degree focusing on scientific principles and research. It equips students with analytical, problem-solving, and laboratory skills, preparing them for careers in technology, research, and healthcare.",
    duration: "3 Years",
    coreSubjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science"],
    bestFor: "Students with a strong curiosity for the natural world, a logical mindset, and a passion for research and experimentation.",
    options: [
      { 
        name: "Software Developer", 
        type: "Private Job",
        details: {
          dailyTasks: ["Writing clean, efficient code", "Collaborating with teams to design new features", "Debugging and troubleshooting software", "Participating in code reviews"],
          requiredSkills: ["Python, Java, or JavaScript", "Data Structures & Algorithms", "Version Control (Git)", "Problem-Solving"],
          educationalPathways: ["B.Tech/B.Sc. in Computer Science", "Coding Bootcamps", "Certifications (e.g., AWS, Google Cloud)"],
          salaryRange: "₹4,00,000 - ₹20,00,000+ LPA"
        }
      },
      { 
        name: "Data Scientist", 
        type: "Private Job",
        details: {
          dailyTasks: ["Collecting and cleaning large datasets", "Building predictive models using machine learning", "Creating data visualizations", "Presenting findings to stakeholders"],
          requiredSkills: ["Python/R", "SQL", "Statistics", "Machine Learning", "Data Visualization tools (Tableau)"],
          educationalPathways: ["M.Sc./M.Tech in Data Science", "PhD for research roles", "Online certifications"],
          salaryRange: "₹6,00,000 - ₹25,00,000+ LPA"
        }
      },
      { 
        name: "ISRO/DRDO Scientist", 
        type: "Government Job",
        details: {
          dailyTasks: ["Conducting research and experiments", "Designing and developing new technologies", "Analyzing scientific data", "Publishing research papers"],
          requiredSkills: ["Deep subject matter expertise", "Research methodology", "Analytical skills", "GATE/NET qualification"],
          educationalPathways: ["M.Tech/PhD in a specialized science/engineering field", "Pass national-level entrance exams"],
          salaryRange: "₹7,00,000 - ₹20,00,000+ LPA (Varies by post)"
        }
      },
      { 
        name: "M.Sc. / PhD", 
        type: "Higher Studies",
        details: {
          dailyTasks: ["Attending advanced lectures and seminars", "Conducting independent research", "Writing a thesis or dissertation", "Working as a teaching assistant"],
          requiredSkills: ["Strong academic foundation", "Research aptitude", "Critical thinking", "Time management"],
          educationalPathways: ["Qualify entrance exams like GATE, NET, JAM", "Maintain a high GPA in undergraduate studies"],
          salaryRange: "Stipend-based (₹31,000 - ₹50,000 PM approx.)"
        }
      },
      { 
        name: "Tech Startup", 
        type: "Entrepreneurship",
        details: {
          dailyTasks: ["Developing a product or service", "Pitching to investors for funding", "Building and managing a team", "Overseeing all business operations"],
          requiredSkills: ["Innovation & Creativity", "Business Acumen", "Leadership & Resilience", "Networking"],
          educationalPathways: ["No specific path; an MBA can be helpful", "Practical experience and a strong idea are key"],
          salaryRange: "Varies widely from loss to high profit"
        }
      },
    ],
  },
  {
    degree: "B.Com. (Bachelor of Commerce)",
    description: "A comprehensive degree in commerce and business that covers subjects like accounting, finance, economics, and law. It builds a strong foundation for careers in finance, corporate management, and entrepreneurship.",
    duration: "3 Years",
    coreSubjects: ["Financial Accounting", "Business Economics", "Corporate Law", "Taxation", "Auditing"],
    bestFor: "Individuals who are systematic, organized, have a knack for numbers, and are interested in the functioning of businesses and economies.",
    options: [
      { 
        name: "Chartered Accountant (CA)", 
        type: "Private Job",
        details: {
          dailyTasks: ["Auditing financial records", "Preparing tax returns and financial statements", "Advising clients on financial strategy", "Ensuring compliance with regulations"],
          requiredSkills: ["Accounting principles", "Analytical skills", "Attention to detail", "Ethical judgment", "Tally, SAP"],
          educationalPathways: ["B.Com", "Clear three levels of CA exams (Foundation, Intermediate, Final)", "Complete 3 years of articleship"],
          salaryRange: "₹6,00,000 - ₹25,00,000+ LPA"
        }
      },
      { 
        name: "Bank PO / RBI Grade B", 
        type: "Government Job",
        details: {
          dailyTasks: ["Managing customer accounts and services", "Supervising clerical staff", "Approving loans", "Ensuring branch profitability and compliance"],
          requiredSkills: ["Quantitative aptitude", "Logical reasoning", "Communication skills", "Knowledge of banking regulations"],
          educationalPathways: ["Graduate in any stream", "Qualify competitive exams like IBPS PO or RBI Grade B exam"],
          salaryRange: "₹5,00,000 - ₹15,00,000 LPA"
        }
      },
      { 
        name: "Financial Analyst", 
        type: "Private Job",
        details: {
          dailyTasks: ["Analyzing financial data to identify trends", "Creating financial models and forecasts", "Recommending investments (buy/sell/hold)", "Preparing reports for management"],
          requiredSkills: ["Financial modeling", "Excel proficiency", "Valuation techniques", "Strong analytical and quantitative skills"],
          educationalPathways: ["B.Com/BBA in Finance", "Certifications like CFA", "An MBA in Finance is highly valued"],
          salaryRange: "₹4,00,000 - ₹20,00,000+ LPA"
        }
      },
      { 
        name: "MBA in Finance", 
        type: "Higher Studies",
        details: {
          dailyTasks: ["Studying core business subjects", "Specializing in financial topics", "Participating in case studies and internships", "Networking with industry professionals"],
          requiredSkills: ["Analytical aptitude", "Leadership potential", "Communication skills", "Quantitative skills"],
          educationalPathways: ["Graduate in any stream", "Clear entrance exams like CAT, GMAT", "Gain admission to a top business school"],
          salaryRange: "High, often ₹15,00,000+ LPA post-graduation from a top B-School"
        }
      },
      { 
        name: "E-commerce Business", 
        type: "Entrepreneurship",
        details: {
          dailyTasks: ["Managing product listings and inventory", "Developing digital marketing strategies", "Handling customer service and logistics", "Analyzing sales data"],
          requiredSkills: ["Digital marketing (SEO, SEM)", "Business acumen", "Customer relationship management", "Adaptability"],
          educationalPathways: ["No formal path required", "Courses in digital marketing or business can be beneficial"],
          salaryRange: "Highly variable based on business success"
        }
      },
    ],
  },
  {
    degree: "B.A. (Bachelor of Arts)",
    description: "A versatile degree focused on humanities, social sciences, and liberal arts. It develops critical thinking, communication, and analytical skills, opening doors to diverse fields like civil services, journalism, law, and academia.",
    duration: "3 Years",
    coreSubjects: ["History", "Political Science", "Sociology", "Literature", "Psychology"],
    bestFor: "Students who are expressive, enjoy reading and writing, and are keen on understanding human behavior, culture, and societal structures.",
    options: [
      { 
        name: "Civil Services (IAS/IPS)", 
        type: "Government Job",
        details: {
          dailyTasks: ["Implementing government policies", "Maintaining law and order", "Managing public administration in a district", "Responding to public grievances"],
          requiredSkills: ["Knowledge of Indian polity, history, economy", "Decision-making ability", "Leadership & Integrity"],
          educationalPathways: ["Graduate in any stream", "Clear the UPSC Civil Services Examination (Prelims, Mains, Interview)"],
          salaryRange: "₹7,00,000 - ₹30,00,000 LPA (Plus perks)"
        }
      },
      { 
        name: "Journalist / Content Writer", 
        type: "Private Job",
        details: {
          dailyTasks: ["Researching and writing news stories or articles", "Conducting interviews", "Editing and proofreading content", "Pitching story ideas"],
          requiredSkills: ["Excellent writing skills", "Research ability", "Curiosity & Objectivity", "SEO knowledge for digital content"],
          educationalPathways: ["B.A. in Journalism, English, or Communication", "Building a strong portfolio is crucial"],
          salaryRange: "₹3,00,000 - ₹12,00,000+ LPA"
        }
      },
      { 
        name: "Lawyer (after LLB)", 
        type: "Private Job",
        details: {
          dailyTasks: ["Advising and representing clients in court", "Drafting legal documents (contracts, wills)", "Conducting legal research", "Negotiating settlements"],
          requiredSkills: ["Logical reasoning", "Analytical skills", "Strong communication and argumentation", "Attention to detail"],
          educationalPathways: ["Integrated 5-year BA LLB after 12th, or a 3-year LLB after graduation", "Qualify the All India Bar Examination (AIBE)"],
          salaryRange: "₹4,00,000 - ₹30,00,000+ LPA (Varies greatly)"
        }
      },
      { 
        name: "MA / PhD in Social Sciences", 
        type: "Higher Studies",
        details: {
          dailyTasks: ["Deepening subject knowledge", "Conducting original research", "Writing academic papers and a thesis", "Working as a research or teaching assistant"],
          requiredSkills: ["Academic curiosity", "Research and analytical skills", "Critical thinking", "Strong writing ability"],
          educationalPathways: ["Complete a B.A. with a good academic record", "Qualify for university-specific entrance exams or NET"],
          salaryRange: "Stipend-based; leads to academic positions (Professor) with salaries of ₹8,00,000+ LPA"
        }
      },
      { 
        name: "NGO / Social Enterprise", 
        type: "Entrepreneurship",
        details: {
          dailyTasks: ["Managing projects focused on social issues", "Fundraising and grant writing", "Community outreach and advocacy", "Monitoring and evaluating program impact"],
          requiredSkills: ["Empathy and passion for social causes", "Project management", "Communication skills", "Resourcefulness"],
          educationalPathways: ["B.A. in Social Work or Sociology", "Master of Social Work (MSW) is highly valued"],
          salaryRange: "₹3,00,000 - ₹10,00,000+ LPA (Mission-driven)"
        }
      },
    ],
  },
  {
    degree: "BBA (Bachelor of Business Administration)",
    description: "A professional undergraduate degree designed to develop business acumen and management skills. The curriculum is focused on practical business administration, preparing students for leadership roles in the corporate world.",
    duration: "3 Years",
    coreSubjects: ["Marketing Management", "Human Resource Management", "Financial Management", "Business Law", "Operations Management"],
    bestFor: "Aspiring leaders and managers with strong communication skills, a strategic mindset, and an interest in organizational management and team leadership.",
    options: [
      { 
        name: "Marketing Manager", 
        type: "Private Job",
        details: {
          dailyTasks: ["Developing marketing campaigns", "Analyzing market trends", "Managing social media and digital advertising", "Tracking campaign performance (ROI)"],
          requiredSkills: ["Creativity", "Analytical skills", "Digital marketing tools (Google Analytics, SEO)", "Communication & Leadership"],
          educationalPathways: ["BBA with a specialization in Marketing", "An MBA in Marketing enhances career prospects"],
          salaryRange: "₹6,00,000 - ₹25,00,000+ LPA"
        }
      },
      { 
        name: "HR Manager", 
        type: "Private Job",
        details: {
          dailyTasks: ["Recruiting, interviewing, and hiring new employees", "Managing employee relations, payroll, and benefits", "Developing HR policies", "Conducting training programs"],
          requiredSkills: ["Interpersonal skills", "Problem-solving", "Knowledge of labor laws", "Organizational skills"],
          educationalPathways: ["BBA with a specialization in Human Resources", "An MBA in HR is often preferred for senior roles"],
          salaryRange: "₹5,00,000 - ₹20,00,000+ LPA"
        }
      },
      { 
        name: "Management Consultant", 
        type: "Private Job",
        details: {
          dailyTasks: ["Analyzing client business problems", "Gathering data through interviews and research", "Developing strategies to improve performance", "Presenting recommendations to management"],
          requiredSkills: ["Exceptional problem-solving", "Strong communication skills", "Ability to work under pressure", "Business acumen"],
          educationalPathways: ["BBA from a top-tier college", "An MBA from a premier business school is almost always required"],
          salaryRange: "₹10,00,000 - ₹50,00,000+ LPA"
        }
      },
      { 
        name: "MBA", 
        type: "Higher Studies",
        details: {
          dailyTasks: ["Studying all aspects of business", "Networking with peers and professionals", "Working on real-world case studies", "Completing a summer internship"],
          requiredSkills: ["Leadership potential", "Quantitative aptitude", "Teamwork & Communication", "Strategic thinking"],
          educationalPathways: ["Complete a bachelor's degree", "Score well on entrance exams (CAT, GMAT)", "Often requires work experience"],
          salaryRange: "High, often ₹15,00,000+ LPA post-graduation from a top B-School"
        }
      },
      { 
        name: "Retail Business", 
        type: "Entrepreneurship",
        details: {
          dailyTasks: ["Managing store operations and inventory", "Training and supervising staff", "Developing local marketing", "Ensuring excellent customer service"],
          requiredSkills: ["Leadership", "Customer service orientation", "Inventory management", "Sales skills"],
          educationalPathways: ["A BBA provides a strong foundation", "Practical experience in retail is invaluable"],
          salaryRange: "Highly variable based on business scale and success"
        }
      },
    ]
  }
];

export const NOTIFICATIONS: Notification[] = [
    { id: 1, date: "Dec 01, 2024", title: "JEE Main 2025 Session 1 Registration Begins", description: "Registration for the first session of the Joint Entrance Examination (Main) starts. Ensure all documents are ready.", icon: "fa-solid fa-pen-to-square", category: "Entrance Exam" },
    { id: 2, date: "Dec 15, 2024", title: "National Scholarship Portal (NSP) Applications Close", description: "Final day to submit applications for various central government scholarships for the academic year.", icon: "fa-solid fa-award", category: "Scholarship" },
    { id: 3, date: "Jan 10, 2025", title: "NEET UG 2025 Application Forms Expected", description: "The National Eligibility cum Entrance Test for undergraduate medical courses application window is expected to open.", icon: "fa-solid fa-pen-to-square", category: "Entrance Exam" },
    { id: 4, date: "Jan 24, 2025", title: "JEE Main 2025 Session 1 Exam Starts", description: "The first session of JEE Main exams will be conducted nationwide. Download your admit card.", icon: "fa-solid fa-file-lines", category: "Entrance Exam" },
    { id: 5, date: "Feb 01, 2025", title: "CUET 2025 Application Window Opens", description: "Common University Entrance Test applications for admission into all Central Universities for various undergraduate programmes begins.", icon: "fa-solid fa-file-signature", category: "Entrance Exam" },
    { id: 6, date: "Feb 15, 2025", title: "CBSE Class 12 Board Exams Commence", description: "The Central Board of Secondary Education (CBSE) Class 12 board examinations begin.", icon: "fa-solid fa-book-open", category: "General" },
    { id: 7, date: "Mar 05, 2025", title: "State-Level Engineering Entrance Exam Applications", description: "Applications for state-specific engineering entrance exams like MHT-CET, WBJEE, etc., are expected to open.", icon: "fa-solid fa-pen-to-square", category: "Entrance Exam" },
    { id: 8, date: "Mar 20, 2025", title: "Kishore Vaigyanik Protsahan Yojana (KVPY) Exam", description: "Aptitude test for the KVPY fellowship for students studying Basic Sciences.", icon: "fa-solid fa-flask-vial", category: "Scholarship" },
    { id: 9, date: "Apr 01, 2025", title: "JEE Main 2025 Session 2 Registration", description: "Registration for the second session of JEE Main begins.", icon: "fa-solid fa-pen-to-square", category: "Entrance Exam" },
    { id: 10, date: "Apr 15, 2025", title: "Delhi University Admission Portal (CSAS) Opens", description: "The Common Seat Allocation System (CSAS) portal for Delhi University admissions is expected to go live.", icon: "fa-solid fa-door-open", category: "Admission" },
    { id: 11, date: "May 05, 2025", title: "NEET UG 2025 Exam Day", description: "The single-day pen-and-paper exam for medical aspirants will be conducted across the country.", icon: "fa-solid fa-file-medical", category: "Entrance Exam" },
    { id: 12, date: "May 15, 2025", title: "CUET 2025 Exam Period Begins", description: "The Common University Entrance Test (CUET) will be conducted over a window of several days.", icon: "fa-solid fa-file-lines", category: "Entrance Exam" },
    { id: 13, date: "May 20, 2025", title: "Class 12 Board Exam Results Announcement", description: "CBSE and other state boards are expected to announce Class 12 results around this time.", icon: "fa-solid fa-graduation-cap", category: "General" },
    { id: 14, date: "Jun 01, 2025", title: "JEE Advanced 2025 Registration", description: "Eligible candidates who cleared JEE Main can register for JEE Advanced for admission to IITs.", icon: "fa-solid fa-pen-to-square", category: "Entrance Exam" },
    { id: 15, date: "Jun 10, 2025", title: "NEET UG 2025 Results Announcement", description: "The results for the NEET UG exam are expected to be declared.", icon: "fa-solid fa-bullhorn", category: "General" },
    { id: 16, date: "Jun 15, 2025", title: "Medical Counselling Committee (MCC) Registration", description: "Registration for All India Quota counselling for medical seats begins.", icon: "fa-solid fa-users", category: "Counseling" },
    { id: 17, date: "Jun 20, 2025", title: "JEE Advanced 2025 Exam Day", description: "The examination for admission to the prestigious Indian Institutes of Technology (IITs).", icon: "fa-solid fa-microchip", category: "Entrance Exam" },
    { id: 18, date: "Jun 30, 2025", title: "PM Scholarship Scheme for Central Armed Police Forces & Assam Rifles", description: "Application deadline for wards and widows of CAPFs & AR personnel.", icon: "fa-solid fa-award", category: "Scholarship" },
    { id: 19, date: "Jul 05, 2025", title: "JoSAA Counselling Registration Starts", description: "The Joint Seat Allocation Authority (JoSAA) counselling process for IITs, NITs, IIITs and GFTIs begins.", icon: "fa-solid fa-users", category: "Counseling" },
    { id: 20, date: "Jul 10, 2025", title: "JEE Advanced 2025 Results", description: "Results for JEE Advanced will be declared, along with the All India Ranks.", icon: "fa-solid fa-ranking-star", category: "General" },
    { id: 21, date: "Jul 15, 2025", title: "State-level College Admission Portals Open", description: "Various states will open their centralized admission portals for arts, science, and commerce colleges.", icon: "fa-solid fa-door-open", category: "Admission" },
    { id: 22, date: "Jul 25, 2025", title: "First Round of JoSAA Seat Allotment", description: "Results of the first round of seat allocation for engineering colleges will be published.", icon: "fa-solid fa-chair", category: "Counseling" },
    { id: 23, date: "Aug 01, 2025", title: "Academic Session Begins in most Engineering Colleges", description: "The new academic year for first-year students is scheduled to start.", icon: "fa-solid fa-school", category: "General" },
    { id: 24, date: "Aug 10, 2025", title: "Merit-Based Scholarship Applications for Colleges", description: "Many universities and states invite applications for merit-based scholarships after the admission process.", icon: "fa-solid fa-award", category: "Scholarship" },
    { id: 25, date: "Aug 20, 2025", title: "CLAT 2026 Notification Expected", description: "The notification for the Common Law Admission Test for the next academic year is usually released around this time.", icon: "fa-solid fa-gavel", category: "Entrance Exam" },
    { id: 26, date: "Sep 01, 2025", title: "Spot Round Admissions for Vacant Seats", description: "Colleges may conduct spot admission rounds to fill any remaining vacant seats.", icon: "fa-solid fa-ticket", category: "Admission" },
    { id: 27, date: "Oct 31, 2025", title: "Post-Matric Scholarship for Minorities Last Date", description: "The deadline for the Ministry of Minority Affairs' post-matric scholarship scheme.", icon: "fa-solid fa-award", category: "Scholarship" },
];


export const RESOURCES: Resource[] = [
    { title: "NCERT E-Books", description: "Access free official textbooks from Class I to XII.", link: "#", type: "E-Book" },
    { title: "NPTEL Courses", description: "High-quality engineering and science courses from IITs.", link: "#", type: "Study Material" },
    { title: "National Scholarship Portal", description: "A one-stop platform for all government scholarships.", link: "#", type: "Scholarship" },
    { title: "SWAYAM Online Courses", description: "Free online courses on a variety of subjects from top educators.", link: "#", type: "Study Material" },
];

export const EDUCATIONAL_LOANS: EducationalLoan[] = [
    {
        id: 1,
        bankName: "State Bank of India (SBI)",
        logoIcon: "fa-solid fa-landmark",
        interestRate: "8.55% - 11.15% p.a.",
        maxLoanAmount: "Up to ₹1.5 Crore (India), Up to ₹2 Crore (Abroad)",
        repaymentPeriod: "Up to 15 years",
        processingFee: "₹10,000 + GST for loans above ₹20 Lakh",
        eligibility: ["Indian National", "Secured admission in a recognized course/university"],
        documentsRequired: ["Admission Letter", "Mark sheets (10th, 12th, Graduation)", "KYC documents", "Income proof of co-applicant"],
    },
    {
        id: 2,
        bankName: "HDFC Bank",
        logoIcon: "fa-solid fa-building-columns",
        interestRate: "9.50% p.a. onwards",
        maxLoanAmount: "Up to ₹1.5 Crore",
        repaymentPeriod: "Up to 15 years",
        processingFee: "Up to 1% of loan amount + GST",
        eligibility: ["Indian resident", "Age between 16-35 years", "Confirmed admission"],
        documentsRequired: ["Admission letter", "Fee structure", "Academic documents", "KYC", "Income documents of co-borrower"],
    },
    {
        id: 3,
        bankName: "ICICI Bank",
        logoIcon: "fa-solid fa-icicles",
        interestRate: "10.50% p.a. onwards",
        maxLoanAmount: "Up to ₹1 Crore (India), Up to ₹2 Crore (Abroad)",
        repaymentPeriod: "Up to 12 years",
        processingFee: "1% of loan amount + GST",
        eligibility: ["Indian National", "Completed 10+2", "Secured admission"],
        documentsRequired: ["Admission proof", "Academic records", "KYC documents", "Guarantor's income proof"],
    },
    {
        id: 4,
        bankName: "Axis Bank",
        logoIcon: "fa-solid fa-compass",
        interestRate: "13.70% - 15.20% p.a.",
        maxLoanAmount: "Up to ₹75 Lakh",
        repaymentPeriod: "Up to 15 years",
        processingFee: "Nil for loans up to ₹10 Lakh",
        eligibility: ["Indian Citizen", "Age 18+", "Secured admission in a career-oriented course"],
        documentsRequired: ["Admission letter", "Fee schedule", "Academic documents", "KYC", "Income proof"],
    },
    {
        id: 5,
        bankName: "Punjab National Bank (PNB)",
        logoIcon: "fa-solid fa-tree",
        interestRate: "8.80% - 11.25% p.a.",
        maxLoanAmount: "Need-based financing",
        repaymentPeriod: "Up to 15 years",
        processingFee: "Nil for studies in India",
        eligibility: ["Indian National", "Admission to a recognized course"],
        documentsRequired: ["Admission Proof", "Academic Certificates", "KYC", "Income Proof"],
    },
    {
        id: 6,
        bankName: "Bank of Baroda",
        logoIcon: "fa-solid fa-sun",
        interestRate: "8.85% - 11.15% p.a.",
        maxLoanAmount: "Up to ₹80 Lakh (India), Up to ₹1.5 Crore (Abroad)",
        repaymentPeriod: "Up to 15 years",
        processingFee: "1% of loan amount (Max ₹10,000)",
        eligibility: ["Indian resident", "Secured admission"],
        documentsRequired: ["Admission letter", "Cost of study details", "Academic documents", "KYC", "Income proof"],
    },
    {
        id: 7,
        bankName: "Canara Bank",
        logoIcon: "fa-solid fa-circle-nodes",
        interestRate: "9.25% - 11.30% p.a.",
        maxLoanAmount: "Need-based, up to ₹40 Lakh without third-party guarantee",
        repaymentPeriod: "Up to 15 years",
        processingFee: "Nil",
        eligibility: ["Indian National", "Admission through merit/entrance test"],
        documentsRequired: ["Admission letter", "Fee details", "Academic transcripts", "KYC", "Income documents"],
    },
    {
        id: 8,
        bankName: "Union Bank of India",
        logoIcon: "fa-solid fa-users",
        interestRate: "10.05% - 11.40% p.a.",
        maxLoanAmount: "Up to ₹50 Lakh (India), Up to ₹1.5 Crore (Abroad)",
        repaymentPeriod: "Up to 15 years",
        processingFee: "Nil",
        eligibility: ["Indian National", "Admission in India or abroad"],
        documentsRequired: ["Admission proof", "Academic records", "KYC", "Income proof"],
    },
    {
        id: 9,
        bankName: "IDBI Bank",
        logoIcon: "fa-solid fa-dollar-sign",
        interestRate: "8.50% - 9.00% p.a.",
        maxLoanAmount: "Up to ₹20 Lakh (India), Up to ₹30 Lakh (Abroad)",
        repaymentPeriod: "Up to 15 years",
        processingFee: "1% of loan amount (Max ₹5,000)",
        eligibility: ["Indian Citizen", "Secured admission"],
        documentsRequired: ["Admission letter", "Academic documents", "KYC", "Income proof"],
    },
    {
        id: 10,
        bankName: "Kotak Mahindra Bank",
        logoIcon: "fa-solid fa-k",
        interestRate: "Up to 16% p.a.",
        maxLoanAmount: "Need-based financing",
        repaymentPeriod: "Up to 10 years",
        processingFee: "Varies",
        eligibility: ["Indian resident", "Admission to professional courses"],
        documentsRequired: ["Admission letter", "Academic records", "KYC", "Income proof"],
    },
    {
        id: 11,
        bankName: "Bank of India",
        logoIcon: "fa-solid fa-star",
        interestRate: "9.25% - 9.85% p.a.",
        maxLoanAmount: "Up to ₹50 Lakh",
        repaymentPeriod: "Up to 15 years",
        processingFee: "Nil",
        eligibility: ["Indian National", "Secured admission"],
        documentsRequired: ["Admission proof", "Academic documents", "KYC", "Income proof"],
    },
    {
        id: 12,
        bankName: "Central Bank of India",
        logoIcon: "fa-solid fa-building",
        interestRate: "8.45% - 8.95% p.a.",
        maxLoanAmount: "Up to ₹50 Lakh (India), Up to ₹60 Lakh (Abroad)",
        repaymentPeriod: "Up to 15 years",
        processingFee: "Nil",
        eligibility: ["Indian resident", "Admission to recognized course"],
        documentsRequired: ["Admission letter", "Academic records", "KYC", "Income proof"],
    },
    {
        id: 13,
        bankName: "Indian Bank",
        logoIcon: "fa-solid fa-hands-holding-circle",
        interestRate: "9.00% - 10.50% p.a.",
        maxLoanAmount: "Up to ₹50 Lakh",
        repaymentPeriod: "Up to 15 years",
        processingFee: "Nil",
        eligibility: ["Indian Citizen", "Secured admission"],
        documentsRequired: ["Admission proof", "Academic documents", "KYC", "Income proof"],
    },
    {
        id: 14,
        bankName: "Avanse Financial Services",
        logoIcon: "fa-solid fa-seedling",
        interestRate: "12.00% p.a. onwards",
        maxLoanAmount: "Customized, need-based",
        repaymentPeriod: "Up to 15 years",
        processingFee: "1% - 2% of loan amount",
        eligibility: ["Indian Citizen", "Confirmed admission", "Co-applicant required"],
        documentsRequired: ["Admission letter", "Academic transcripts", "KYC", "Income documents of co-applicant"],
    },
    {
        id: 15,
        bankName: "Auxilo",
        logoIcon: "fa-solid fa-a",
        interestRate: "11.00% p.a. onwards",
        maxLoanAmount: "100% of education cost",
        repaymentPeriod: "Up to 12 years",
        processingFee: "Varies",
        eligibility: ["Indian Citizen", "Pursuing UG/PG course", "Co-borrower required"],
        documentsRequired: ["Admission proof", "Academic records", "KYC", "Income proof of co-borrower"],
    },
    {
        id: 16,
        bankName: "InCred",
        logoIcon: "fa-solid fa-chart-line",
        interestRate: "10.50% p.a. onwards",
        maxLoanAmount: "Up to ₹1.5 Crore",
        repaymentPeriod: "Up to 12 years",
        processingFee: "Varies",
        eligibility: ["Indian resident", "Admission to a recognized university"],
        documentsRequired: ["Admission letter", "Academic documents", "KYC", "Income proof"],
    },
    {
        id: 17,
        bankName: "Prodigy Finance",
        logoIcon: "fa-solid fa-p",
        interestRate: "11.00% - 14.50% p.a.",
        maxLoanAmount: "100% of course fee (for select universities abroad)",
        repaymentPeriod: "Up to 20 years",
        processingFee: "2.5% of loan amount",
        eligibility: ["Admitted to a supported international university", "No co-signer or collateral needed"],
        documentsRequired: ["Admission proof", "Passport", "Credit report"],
    },
    {
        id: 18,
        bankName: "MPOWER Financing",
        logoIcon: "fa-solid fa-m",
        interestRate: "12.99% p.a. onwards (fixed)",
        maxLoanAmount: "Up to $100,000 USD (for studies in US/Canada)",
        repaymentPeriod: "Up to 10 years",
        processingFee: "5% of loan amount",
        eligibility: ["International student admitted to a supported US/Canadian school", "Within 2 years of graduating"],
        documentsRequired: ["Admission letter", "Passport/Visa", "Standardized test scores"],
    },
    {
        id: 19,
        bankName: "Karur Vysya Bank (KVB)",
        logoIcon: "fa-solid fa-v",
        interestRate: "10.75% p.a. onwards",
        maxLoanAmount: "Up to ₹20 Lakh (India), Up to ₹1.5 Crore (Abroad)",
        repaymentPeriod: "Up to 7 years",
        processingFee: "Nil",
        eligibility: ["Indian national", "Secured admission"],
        documentsRequired: ["Admission letter", "Academic records", "KYC", "Income proof"],
    },
    {
        id: 20,
        bankName: "Federal Bank",
        logoIcon: "fa-solid fa-f",
        interestRate: "12.55% p.a. onwards",
        maxLoanAmount: "Up to ₹20 Lakh (India), Up to ₹1.5 Crore (Abroad)",
        repaymentPeriod: "Up to 15 years",
        processingFee: "Nil",
        eligibility: ["Indian resident", "Admission to recognized course"],
        documentsRequired: ["Admission proof", "Academic documents", "KYC", "Income proof"],
    },
    {
        id: 21,
        bankName: "South Indian Bank",
        logoIcon: "fa-solid fa-s",
        interestRate: "10.85% p.a. onwards",
        maxLoanAmount: "Up to ₹1.5 Crore",
        repaymentPeriod: "Up to 15 years",
        processingFee: "Varies",
        eligibility: ["Indian national", "Secured admission"],
        documentsRequired: ["Admission letter", "Academic records", "KYC", "Income proof"],
    }
];
