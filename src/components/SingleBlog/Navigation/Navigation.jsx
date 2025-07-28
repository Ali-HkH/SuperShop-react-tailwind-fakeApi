import { useNavigate } from "react-router-dom";

function Navigation({ objectsData, mainID, mainRoute }) {
   const navigate = useNavigate();

   const nextHandler = () => {
      const nextID = mainID < objectsData.length ? mainID + 1 : 1;
      navigate(`/${mainRoute}/${nextID}`);
   };
   const prevHandler = () => {
      const prevID = mainID > 1 ? mainID - 1 : objectsData.length;
      navigate(`/${mainRoute}/${prevID}`);
   };

   return (
      <div className="border-t border-b py-5 border-gray-300 flex justify-between">
         <button
            onClick={prevHandler}
            className="flex items-center text-stone-600 hover:text-indigo-700 transition-colors"
         >
            <svg className="size-6 rotate-180">
               <use href="#chevron-right"></use>
            </svg>
            <span>Prev</span>
         </button>
         <button
            onClick={nextHandler}
            className="flex items-center text-stone-600 hover:text-indigo-700 transition-colors"
         >
            <span>Next</span>
            <svg className="size-6">
               <use href="#chevron-right"></use>
            </svg>
         </button>
      </div>
   );
}

export default Navigation;
