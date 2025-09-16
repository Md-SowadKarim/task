import React from 'react';

const Course = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-purple-50 border-r-2 border-purple-500 p-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-purple-800">Menu</h2>
        </div>
        <nav>
          {['ক্যাডেট এডমিশন প্রস্তুতি', 'অ্যাবাকাস মেন্টাল মেথ', 'স্পোকেন ইংলিশ', 'শিঙ্গাপুর মেথ','ক্যাডেট এডমিশন প্রস্তুতি', 'অ্যাবাকাস মেন্টাল মেথ', 'স্পোকেন ইংলিশ', 'শিঙ্গাপুর মেথ'].map((item, index) => (
            <div 
              key={index} 
              className={`py-3 px-4 mb-2 text-left rounded-4xl border-2 border-purple-500 cursor-pointer transition-all duration-200 ${
                index === 1 ? ' border-l-4 bg-orange-300 border-purple-600 font-medium' : 'hover:bg-purple-50'
              }`}
            >
              {item}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-purple-800 mb-10 text-center">Abacus Mastering Mental Math for Kids</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Course Details */}
          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-600 font-medium">Difficulty</p>
                <p className="text-lg font-semibold">Beginner</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-600 font-medium">Levels</p>
                <p className="text-lg font-semibold">5</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-600 font-medium">Age</p>
                <p className="text-lg font-semibold">4 - 7 years</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-600 font-medium">Duration</p>
                <p className="text-lg font-semibold">12 months</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Includes:</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Books', 'Tools', 'Classroom format', 'Exams', 'Certificate', 'Practice materials'].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between bg-purple-50 p-6 rounded-xl">
              <div>
                <p className="text-sm text-purple-600">Course Fee</p>
                <p className="text-3xl font-bold text-purple-800">₹28,000</p>
              </div>
              <div className="flex gap-3 mt-4 sm:mt-0">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                  Join batch
                </button>
                <button className="bg-white hover:bg-gray-100 text-purple-600 border border-purple-300 font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                  Share
                </button>
              </div>
            </div>
          </div>
          
          {/* Course Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-full">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Girl with abacus and books" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent p-6">
                <h3 className="text-xl font-bold text-white">Abacus Mastering Mental Math for Kids</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;