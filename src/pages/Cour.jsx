import React from 'react';

const CourseCard = () => {
  return (
    <div className="md:max-w-md mx-auto md:p-6  rounded-lg shadow-md bg-transparent">
      <h2 className="text-xl font-semibold mb-4">Abacus Mastering Mental Math for Kids</h2>

      <ul className="md:space-y-2 p-1 text-gray-700 text-xs text-left ">
        <li>⚪ Course Level : Beginner</li>
        <li>⚪ Total Level : 5 (0 to 4)</li>
        <li>⚪ Age Range : 4 to 7 Years</li>
        <li>⚪ Course Duration : 12 Months</li>
        <li>⚪ Books : 05</li>
        <li>⚪ Abacus Tool : 01</li>
        <li>⚪ Live Class : 84</li>
        <li>⚪ Video Class : 84</li>
        <li>⚪ Exam : 05 (Level wise)</li>
        <li>⚪ Worksheets : Yes</li>
        <li>⚪ Certificate : Yes</li>
        <li>⚪ Pubali Maity, Easmin Sultana Rupa and 6 more</li>
      </ul>

      <div className="flex items-center justify-around gap-2 mt-6">
        <span className="md:text-2xl font-bold text-gray-800">৳28,000</span>
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">FULL COURSE FEES</span>
      </div>

      <div className="flex gap-1 justify-around md:gap-3 my-2 md:mt-6">
        <button className="md:flex-1 p-2  text-xs bg-gray-800 text-white md:py-2 rounded">Join batch</button>
        <button className="md:flex-1 text-xs p-2 border-2 border-black  py-2  rounded">Share</button>
      </div>
    </div>
  );
};

export default CourseCard;
