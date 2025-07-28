import ProductImgBox from "./ProductImgBox";

function ProductImgSection({ image }) {
   return (
      <div className="lg:w-5/12">
         {/* product img */}
         <div className="group p-14">
            <img
               src={image}
               alt="mainProduct-img"
               className="group-hover:scale-110 transition-all duration-500"
            />
         </div>
         {/* hover zoom sign */}
         <div className="flex justify-center items-center gap-x-2 p-2 font-medium text-stone-600 bg-gray-100">
            <svg className="size-5">
               <use href="#search"></use>
            </svg>
            <span>Mouse over to zoom in</span>
         </div>
         {/* product other pics */}
         <div className="flex items-center justify-center gap-x-2 mt-4">
            <ProductImgBox image={image} />
            <ProductImgBox image={image} />
            <ProductImgBox image={image} />
         </div>
      </div>
   );
}

export default ProductImgSection;
