function CartMenuFooter({totalBuy}) {
   return (
      <>
         <div className="flex items-center gap-x-32 text-xl text-stone-500 mb-2.5 mt-5">
            Total <span className="text-indigo-700">${totalBuy}</span>
         </div>
         <div className="w-full flex items-center text-white">
            <button className="w-7/12 py-2 bg-indigo-500 hover:bg-indigo-700 transition-colors ">
               VIEW MY CART
            </button>
            <button className="w-5/12 py-2 bg-slate-700 hover:bg-slate-900 transition-colors">
               CHECKOUT
            </button>
         </div>
      </>
   );
}

export default CartMenuFooter;
