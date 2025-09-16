import React from "react";
import middle from "../../public/middle.png"
import l1 from "../../public/l1.png"
import l2 from "../../public/l2.png"
import l3 from "../../public/l3.png"
import l4 from "../../public/l4.png"
import r1 from "../../public/r1.png"
import r2 from "../../public/r2.png"
import r3 from "../../public/r3.png"
import r4 from "../../public/r4.png"



const Photo = () => {
  return (
    <div className="w-full bg-white py-8">
      {/* Teachers Row */}
      <div className="flex  relative gap-0 items-baseline-last ">
         <img
          src={l1}
          alt="Teacher 1"
          className="w-38 h-66 z-40  absolute  left-110  object-cover rounded-md shadow-md "
        />
        <img
          src={l2}
          alt="Teacher 1"
          className="w-38 h-66 z-30 absolute left-90 object-cover rounded-md shadow-md "
        />
        <img
          src={l3}
          alt="Teacher 1"
          className="w-30 h-52 z-20 absolute left-78 object-cover rounded-md"
        />
        
        <img
          src={l4}
          alt="Teacher 1"
          className="w-28 h-50 z-10 absolute left-65 object-cover rounded-md shadow-md "
        />
        <img
          src={middle}
          alt="Teacher 1"
          className="w-48 h-66 z-50 object-cover mx-auto rounded-md shadow-md flex-shrink-0"
        />
        <div>
            
        </div>
        <img
          src={r1}
          alt="Teacher 1"
          className="w-38 h-66 z-40  absolute  right-110  object-cover rounded-md shadow-md "
        />
        <img
          src={r2}
          alt="Teacher 1"
          className="w-38 h-66 z-30 absolute right-90 object-cover rounded-md shadow-md flex-shrink-0"
        />
        <img
          src={r3}
          alt="Teacher 1"
          className="w-38 h-56 z-20 absolute right-70 object-cover rounded-md"
        />
        <img
          src={r4}
          alt="Teacher 1"
          className="w-30 h-56 z-10 absolute right-60 object-cover rounded-md shadow-md flex-shrink-0"
        />
       
      </div>

      {/* Divider Line */}
      <div className="relative w-full flex justify-center mt-6 px-4">
        <div className="h-1 w-full max-w-5xl bg-purple-900 relative">
          <div className="absolute left-0 top-0 h-1 w-16 bg-purple-900"></div>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-center text-xl font-bold text-purple-900 mt-3">
        শিক্ষক মন্ডলী
      </h2>
    </div>
  );
};

export default Photo;