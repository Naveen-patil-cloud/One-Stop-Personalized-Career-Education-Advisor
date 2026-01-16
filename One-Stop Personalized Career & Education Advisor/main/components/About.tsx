import React from 'react';

const InfoCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-200/50">
        <div className="flex items-center mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
                <i className={`fa-solid ${icon} text-xl`}></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 ml-4">{title}</h3>
        </div>
        <p className="text-slate-600">{children}</p>
    </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text mb-4">
            About Us
          </h2>
          <p className="text-lg text-slate-700">
            Empowering the next generation with clarity and confidence for their academic and professional journeys.
          </p>
        </div>

        <div className="space-y-8">
            <InfoCard icon="fa-rocket" title="Our Mission">
                To bridge the information gap for students after Class 10 and 12, especially those in Tier-2 and Tier-3 cities. We aim to provide a free, accessible, and personalized digital guidance platform that demystifies career paths, highlights the benefits of graduation, and showcases the excellent opportunities available in government colleges.
            </InfoCard>

            <InfoCard icon="fa-eye" title="Our Vision">
                We envision a future where every student, regardless of their background or location, has the tools and knowledge to make informed decisions about their future. Our goal is to become the most trusted advisor in a student's journey from high school to higher education and beyond, fostering a generation of skilled and fulfilled professionals.
            </InfoCard>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-center mb-6 text-slate-800">Our Story</h3>
            <p className="text-slate-600 mb-4">
                The "One-Stop Personalized Career & Education Advisor" was born from a simple observation: countless bright students were missing out on incredible opportunities simply due to a lack of awareness. We saw students and parents grappling with confusion over subject streams, unaware of the courses offered in their nearby government colleges, and uncertain about the career prospects a degree could unlock.
            </p>
            <p className="text-slate-600">
                Determined to solve this, our team came together during a hackathon to build a solution. We combined our passion for education with the power of AI to create a platform that is not just a repository of information, but a personalized guide. Our platform is designed to be lightweight, responsive, and easy to use, ensuring it reaches students even in low-bandwidth areas. We believe that by providing clear, data-driven insights, we can help reduce dropout rates, increase enrollment in valuable degree programs, and empower students to build the future they deserve.
            </p>
        </div>

      </div>
    </section>
  );
};

export default About;
