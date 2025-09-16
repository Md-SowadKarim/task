
import React from 'react'
import babubook from "../../public/babubook.png"


const AllCourse = () => {

  
  return (
    <div className=''>

    <div className="max-w-xs mx-auto border rounded-2xl p-1 shadow-md bg-white overflow-hidden">
      {/* Top Section with Image */}
      <div className="relative bg-purple-800 p-4 rounded-t-4xl flex justify-center items-center">
        <img
          src={babubook} // demo image
          alt="Cadet"
          className="w-34 h-34 object-cover rounded-full "
        />
      </div>

      {/* Text Section */}
      <div className="p-2 text-center md:flex justify-between">
        <div className='flex-col relative '>
             <h2 className="text-sm font-bold text-purple-800 mb-2">
          ক্যাডেট এডমিশন প্রস্তুতি
        </h2>

        <span className="bg-yellow-400 md:absolute left-0 text-white text-xs font-semibold px-3 py-1 rounded-full">
          বয়স ৪-৭ বছর
        </span>
        </div>
       

        <div className="mt-4">
          <button className="px-6 py-2 border border-purple-800 text-purple-800 rounded-full text-sm hover:bg-purple-800 hover:text-white">
            বিস্তারিত
          </button>
        </div>
      </div>
    </div>


    </div>
  )
}

export default AllCourse
