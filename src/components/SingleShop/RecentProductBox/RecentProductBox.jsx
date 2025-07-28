import { Link } from "react-router-dom";

function RecentProductBox({id, title, image, price, rating}) {
   return (
      <div className="flex items-center border-b border-gray-300/50 gap-x-3 py-2 last:border-none">
         <div className="w-1/2 aspect-[1/1.2] p-5 ">
            <Link to={`/SingleShop/${id}`}>
               <img
                  src={image}
                  alt="product-img"
                  className="w-full h-full hover:scale-110 transition-all"
               />
            </Link>
         </div>
         <div className="w-1/2 flex flex-col gap-y-1">
            <Link to={`/SingleShop/${id}`}>
               <h1 className="font-medium hover:text-indigo-700 transition-colors line-clamp-2">
                  {title}
               </h1>
            </Link>
            <span className="text-indigo-500 font-medium">${price}</span>
            {/* starts & rating */}
            <div className="flex items-center gap-x-2">
               <div className="flex items-center">
                  {Array(Math.round(rating.rate))
                     .fill(0)
                     .map((star, index) => (
                        <svg key={index} className="size-3 text-yellow-400">
                           <use href="#star-fill"></use>
                        </svg>
                     ))}
                  {Array(5 - Math.round(rating.rate))
                     .fill(0)
                     .map((star, index) => (
                        <svg key={index} className="size-3 text-yellow-400">
                           <use href="#star"></use>
                        </svg>
                     ))}
               </div>
               <span className="text-stone-600 text-sm">
                  ({rating.rate})
               </span>
            </div>
         </div>
      </div>
   );
}

export default RecentProductBox;
