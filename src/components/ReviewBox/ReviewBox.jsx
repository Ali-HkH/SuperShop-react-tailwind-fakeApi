import React from "react";

function ReviewBox({ name, img }) {
   return (
      <div className="flex items-center justify-start gap-x-5">
         <div className="p-3 w-[100px] h-[100px] border border-gray-300/50 shrink-0 hover:p-1.5 hover:border-indigo-700 transition-all duration-300 cursor-pointer">
            <img src={img} alt="review-profile" className="w-full h-full" />
         </div>
         <div className="pl-5">
            <h1 className="  text-lg mb-2.5 hover:text-indigo-700 transition-all cursor-pointer">
               {name}
            </h1>
            <p className="text-stone-600 line-clamp-3">
               Donec vitae sapien ut libero venenatis faucibus. Nullam quis
               ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
               Sed fringilla mauris consectetuer adipiscing
            </p>
         </div>
      </div>
   );
}

export default ReviewBox;
