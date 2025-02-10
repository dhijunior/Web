
import { Book } from 'lucide-react';

const subjects = [
  {
    title: 'Mathematics',
    description: 'Master complex mathematical concepts with our expert tutors',
    icon: Book
  },
  {
    title: 'Physics',
    description: 'Understand the fundamental laws that govern our universe',
    icon: Book
  },
  {
    title: 'Chemistry',
    description: 'Explore the world of molecules and chemical reactions',
    icon: Book
  },
  {
    title: 'Biology',
    description: 'Discover the fascinating science of life and living organisms',
    icon: Book
  }
];

const SubjectCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Subjects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {subjects.map((subject, index) => (
          <div key={index} className="subject-card">
            <div className="p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <subject.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{subject.title}</h3>
              <p className="text-gray-600">{subject.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectCards;
