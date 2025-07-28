
function ProductImgBox({image}) {
   return (
      <div className="w-[95px] h-auto p-5 border border-gray-300 hover:border-indigo-700 transition-colors cursor-pointer">
         <img
            src={image}
            alt="product-img"
            className="w-full aspect-square"
         />
      </div>
   );
}

export default ProductImgBox;
