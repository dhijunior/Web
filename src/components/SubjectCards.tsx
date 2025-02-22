
import { useState } from 'react';
import { Book, ChevronDown, ChevronUp } from 'lucide-react';

const subjects = [
  {
    title: 'Mathematics',
    description: 'Learn about numbers and shapes in intrective way',
    courses: ['Calculus', 'Algebra', 'Geometry', 'Statistics'],
    icon: Book
  },
  {
    title: 'General Science',
    description: 'Learn about the world around us',
    courses: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Quantum Physics'],
    icon: Book
  },
  {
    title: 'English',
    description: 'Learn to read, write, and speak English',
    courses: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Biochemistry'],
    icon: Book
  },
  {
    title: 'Social Studies',
    description: 'Learn about the history and culture of our country',
    courses: ['Cell Biology', 'Genetics', 'Ecology', 'Human Anatomy'],
    icon: Book
  }
];

const SubjectCards = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Subjects of Interest</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {subjects.map((subject, index) => (
          <div key={index} className="subject-card">
            <div className="p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <subject.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{subject.title}</h3>
              <p className="text-gray-600 mb-4">{subject.description}</p>
              <button
                onClick={() => toggleCard(index)}
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                {expandedCard === index ? (
                  <>
                    Hide Courses <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    View Courses <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
              <div className={`mt-4 space-y-2 transition-all duration-300 ${
                expandedCard === index ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'
              }`}>
                {subject.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="p-2 bg-gray-50 rounded-md text-sm">
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectCards;
