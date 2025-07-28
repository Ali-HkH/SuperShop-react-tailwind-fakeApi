function CartBtn({ cartLength, totalBuy }) {
   return (
      <>
         <svg className="size-12 p-3 text-white bg-indigo-700">
            <use href="#shopping-cart"></use>
         </svg>
         <button>
            <div className="px-4 border border-gray-300 py-[11px]">
               <span className="text-stone-600 md:hidden xl:inline-block">
                  {cartLength} ITEM(S) -{" "}
               </span>
               <span className="text-indigo-700">${totalBuy}</span>
            </div>
         </button>
      </>
   );
}

export default CartBtn;
