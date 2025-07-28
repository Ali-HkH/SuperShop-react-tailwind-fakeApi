function CommentBox({ img, name, date, isReply }) {
   return (
      <div
         className={`${
            isReply ? "pl-10 mt-5" : "mt-8"
         } flex items-start gap-x-6`}
      >
         {/* img */}
         <div className="shrink-0 group size-[70px] p-2.5 border border-gray-300 hover:border-indigo-700 transition-colors cursor-pointer">
            <img
               src={img}
               alt="comment-img"
               className="w-full h-full group-hover:scale-110 transition-all"
            />
         </div>
         {/* content */}
         <div className="pb-5 border-b border-gray-300/50">
            {/* detail */}
            <div className="w-full flex items-start justify-between mb-3 font-medium">
               <div className="">
                  <span className="px-3 border-r border-gray-300 hover:text-indigo-700 cursor-pointer transition-colors">
                     {name}
                  </span>
                  <span className="px-3 text-stone-500">{date}</span>
               </div>
               <span className="hover:text-indigo-700 cursor-pointer transition-colors">
                  REPLY
               </span>
            </div>
            {/* comment */}
            <p>
               Donec vitae sapien ut libero venenatis faucibus. Nullam quis
               ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
               Sed fringilla mauris consectetuer adipiscing
            </p>
         </div>
      </div>
   );
}

export default CommentBox;
