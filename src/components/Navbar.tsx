import { useState, useEffect, useRef } from 'react';
import { LogIn, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const subjects = [
  { title: 'Mathematics', courses: ['Calculus', 'Algebra', 'Geometry', 'Statistics'] },
  { title: 'Physics', courses: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Quantum Physics'] },
  { title: 'Chemistry', courses: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Biochemistry'] },
  { title: 'Biology', courses: ['Cell Biology', 'Genetics', 'Ecology', 'Human Anatomy'] }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      // Handle course menu clicks
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowCourses(false);
      }
      
      // Handle mobile menu clicks
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
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
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white'
    }`} ref={mobileMenuRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Dhi Junior
            </h1>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center flex-1">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">Home</a>
              <div className="relative" ref={menuRef}>
                <button 
                  className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1 group"
                  onClick={() => setShowCourses(!showCourses)}
                >
                  Courses
                  {showCourses ? (
                    <ChevronUp className="w-4 h-4 group-hover:text-primary" />
                  ) : (
                    <ChevronDown className="w-4 h-4 group-hover:text-primary" />
                  )}
                </button>
                {showCourses && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-3 border border-gray-100">
                    {subjects.map((subject, index) => (
                      <div key={index} className="px-4 py-2 hover:bg-gray-50 transition-colors">
                        <div className="font-semibold text-primary">{subject.title}</div>
                        <div className="mt-1 space-y-1">
                          {subject.courses.map((course, courseIndex) => (
                            <a
                              key={courseIndex}
                              href="#"
                              className="block text-sm text-gray-600 hover:text-primary transition-colors pl-2"
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
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">Contact</a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => navigate('/login')}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Login
            </button>
            <button 
              onClick={() => navigate('/signup')}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:shadow-sm flex items-center gap-2 font-medium"
            >
              <LogIn className="w-4 h-4" />
              Sign Up
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg">
              Home
            </a>
            <button
              onClick={() => setShowCourses(!showCourses)}
              className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg flex items-center justify-between"
            >
              Courses
              {showCourses ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {showCourses && (
              <div className="pl-4 space-y-2">
                {subjects.map((subject, index) => (
                  <div key={index} className="py-2">
                    <div className="font-semibold text-primary">{subject.title}</div>
                    <div className="mt-1 space-y-1">
                      {subject.courses.map((course, courseIndex) => (
                        <a
                          key={courseIndex}
                          href="#"
                          className="block text-sm text-gray-600 hover:text-primary pl-2 py-1"
                        >
                          {course}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg">
              About
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg">
              Contact
            </a>
            <div className="pt-4 flex flex-col space-y-2">
              <button 
                onClick={() => navigate('/login')}
                className="w-full px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium border border-gray-200 rounded-lg"
              >
                Login
              </button>
              <button 
                onClick={() => navigate('/signup')}
                className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-2 font-medium"
              >
                <LogIn className="w-4 h-4" />
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
