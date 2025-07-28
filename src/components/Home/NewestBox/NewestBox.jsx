function NewestBox({ img, name, price, textPosition }) {
   return (
      <div className="relative group overflow-hidden cursor-pointer">
         <img
            src={img}
            alt="electronics"
            className="w-full h-full group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
         />
         {/* overlay */}
         <div className="w-full h-full absolute top-0 right-0 bg-black/35 group-hover:h-0 group-hover:w-0 transition-all duration-500"></div>
         {/* content */}
         <div
            className={`absolute left-14 ${
               textPosition === "top" ? "top-20" : "bottom-20"
            } md:left-8 md:bottom-14 lg:left-14 lg:bottom-20`}
         >
            <h1 className="text-5xl md:text-2xl lg:text-5xl font-bold">
               {name}
            </h1>
            <p className="text-3xl md:text-lg lg:text-3xl font-bold text-stone-900">
               FROM: <span className="text-amber-300">${price}</span>
            </p>
         </div>
      </div>
   );
}

export default NewestBox;
