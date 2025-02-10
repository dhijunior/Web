
import { useState, useEffect, useRef } from 'react';
import { LogIn, ChevronDown, ChevronUp } from 'lucide-react';

const subjects = [
  { title: 'Mathematics', courses: ['Calculus', 'Algebra', 'Geometry', 'Statistics'] },
  { title: 'Physics', courses: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Quantum Physics'] },
  { title: 'Chemistry', courses: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Biochemistry'] },
  { title: 'Biology', courses: ['Cell Biology', 'Genetics', 'Ecology', 'Human Anatomy'] }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowCourses(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-primary">Coaching Hub</h1>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center flex-1">
            <div className="flex items-center space-x-8">
              <a href="#" className="nav-link">Home</a>
              <div className="relative" ref={menuRef}>
                <button 
                  className="nav-link flex items-center gap-1"
                  onClick={() => setShowCourses(!showCourses)}
                >
                  Courses
                  {showCourses ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {showCourses && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                    {subjects.map((subject, index) => (
                      <div key={index} className="px-4 py-2 hover:bg-gray-50">
                        <div className="font-semibold text-primary">{subject.title}</div>
                        <div className="mt-1 space-y-1">
                          {subject.courses.map((course, courseIndex) => (
                            <a
                              key={courseIndex}
                              href="#"
                              className="block text-sm text-gray-600 hover:text-primary pl-2"
                            >
                              {course}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <a href="#" className="nav-link">About</a>
              <a href="#" className="nav-link">Contact</a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2">
              <LogIn className="w-4 h-4" />
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
