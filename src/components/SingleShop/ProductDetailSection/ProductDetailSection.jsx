import DetailBox from "./DetailBox";

function ProductDetailSection({ title, rating, price }) {

   return (
      <div className="lg:w-7/12">
         {/* title and rating */}
         <div className="pb-6 mb-6 border-b border-gray-300">
            {/* title */}
            <h1 className="font-bold text-3xl line-clamp-2 mb-4">{title}</h1>
            {/* stars and rating */}
            <div className="flex items-center mb-1.5">
               <div className="flex items-center pr-4 border-r border-gray-300">
                  {Array(Math.round(rating.rate))
                     .fill(0)
                     .map((star, index) => (
                        <svg key={index} className="size-5 text-yellow-400">
                           <use href="#star-fill"></use>
                        </svg>
                     ))}
                  {Array(5 - Math.round(rating.rate))
                     .fill(0)
                     .map((star, index) => (
                        <svg key={index} className="size-5 text-yellow-400">
                           <use href="#star"></use>
                        </svg>
                     ))}
               </div>
               <span className="text-stone-600 font-medium pl-4">
                  ({rating.rate})
               </span>
            </div>
            {/* count */}
            <span className="text-stone-600 text-lg font-medium">
               count: <span className="text-indigo-500">{rating.count}</span>
            </span>
            {/* availablity */}
            <p className="text-lg font-medium text-slate-600">
               Availablity :{" "}
               {rating.count > 0 ? (
                  <span className="text-green-500">instock</span>
               ) : (
                  <span className="text-rose-500">outstock</span>
               )}
            </p>
         </div>
         {/* price */}
         <p className="text-lg font-medium">
            PRICE :{" "}
            <span className="text-3xl pl-8 text-indigo-500 ">${price}</span>
         </p>
         {/* detail box */}
         <DetailBox rating={rating}/>
      </div>
   );
}

export default ProductDetailSection;
