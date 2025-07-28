function BrandBox({img}) {
   return (
      <div className="w-auto aspect-auto group overflow-hidden border cursor-pointer border-gray-300/60">
         <img
            src={img}
            alt="brand"
            className="w-full group-hover:scale-110 transition-all duration-300"
         />
      </div>
   );
}

export default BrandBox;
