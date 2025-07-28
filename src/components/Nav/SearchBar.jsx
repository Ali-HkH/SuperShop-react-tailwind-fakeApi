function SearchBar() {
   return (
      <>
         {/* searchBar */}
         <input
            className="w-[90%] md:w-[55%] xl:w-[65%] px-6 py-3 text-stone-600 appearance-none focus:outline-none border border-gray-300"
            placeholder="I'm searching for ..."
            type="text"
         />
         {/* search icon */}
         <svg className="size-[50px] p-3  text-indigo-700 border border-gray-300 cursor-pointer hover:text-white hover:bg-indigo-700 hover:border-indigo-700">
            <use href="#search"></use>
         </svg>
      </>
   );
}

export default SearchBar;
