function MessageForm({ title, placeholder, button }) {
   return (
      <div className="my-12">
         <h1 className="mb-8 text-[22px] font-bold">{title}</h1>
         <form action="#" className="lg:pr-20">
            <div className="flex flex-col items-start gap-y-6 md:flex-row gap-x-2 lg:gap-x-4 xl:gap-x-10 mb-8">
               <input
                  type="text"
                  placeholder="Name *"
                  className="w-full md:w-1/3 lg:w-1/4 py-3 px-5 text-lg font-medium   focus:outline-none focus:border-indigo-600 border border-gray-300 transition-all"
               />
               <input
                  type="email"
                  placeholder="Email *"
                  className="w-full md:w-1/3 lg:w-1/4 py-3 px-5 text-lg font-medium   focus:outline-none focus:border-indigo-600 border border-gray-300 transition-all"
               />
               <input
                  type="text"
                  placeholder="Website"
                  className="w-full md:w-1/3 lg:w-2/4 py-3 px-5 text-lg font-medium   focus:outline-none focus:border-indigo-600 border border-gray-300 transition-all"
               />
            </div>
            <div>
               <textarea
                  className="w-full min-h-40 mb-8 py-3 px-5 text-lg font-medium   focus:outline-none focus:border-indigo-600 border border-gray-300 transition-all"
                  placeholder={placeholder}
               ></textarea>
               <button className="bg-indigo-700 text-white text-lg px-12 py-2.5 hover:bg-indigo-600 transition-colors">
                  {button}
               </button>
            </div>
         </form>
      </div>
   );
}

export default MessageForm;
