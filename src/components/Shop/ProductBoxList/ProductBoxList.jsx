import { useState } from "react";
import { Link } from "react-router-dom";
import LoaderSpiner from "../../LoaderSpinner/LoaderSpiner";

function ProductBoxList(props) {
   // image loader states
   const [isImgShow, setIsImgShow] = useState(false);
   const onImgLoaded = () => setIsImgShow(true);

   return (
      <div className="w-full px-8 py-5 border border-gray-300 flex items-center gap-x-8">
         <div className="p-5 overflow-hidden w-1/3">
            <Link to={`/SingleShop/${props.id}`}>
               <img
                  src={props.image}
                  alt="product-image"
                  className="w-full aspect-square hover:scale-110 transition-all"
                  onLoad={onImgLoaded}
               />
               {!isImgShow && <LoaderSpiner />}
            </Link>
         </div>
         <div className="w-2/3">
            <div className="w-full pb-5 border-b border-gray-300/50 flex items-center justify-between">
               {/* product detail */}
               <div className="flex flex-col items-start gap-y-1">
                  {/* title */}
                  <Link to={`/SingleShop/${props.id}`}>
                     <h1 className="max-w-64 mb-2.5 text-xl font-medium line-clamp-1 hover:text-indigo-500 transition-colors">
                        {props.title}
                     </h1>
                  </Link>
                  {/* price */}
                  <p className="text-indigo-500 text-lg font-medium">
                     ${props.price}
                  </p>
                  {/* starts and rating */}
                  <div className="flex items-center gap-x-2">
                     <div className="flex items-center">
                        {Array(Math.round(props.rating.rate))
                           .fill(0)
                           .map((star, index) => (
                              <svg
                                 key={index}
                                 className="size-5 text-yellow-400"
                              >
                                 <use href="#star-fill"></use>
                              </svg>
                           ))}
                        {Array(5 - Math.round(props.rating.rate))
                           .fill(0)
                           .map((star, index) => (
                              <svg
                                 key={index}
                                 className="size-5 text-yellow-400"
                              >
                                 <use href="#star"></use>
                              </svg>
                           ))}
                     </div>
                     <span className="text-stone-600 font-medium">
                        ({props.rating.rate})
                     </span>
                  </div>
                  {/* count */}
                  <p className="text-lg font-medium text-stone-600">
                     count : {props.rating.count}
                  </p>
                  {/* availablity */}
                  <p className="text-lg font-medium text-slate-600">
                     Availablity :{" "}
                     {props.rating.count > 0 ? (
                        <span className="text-green-500">instock</span>
                     ) : (
                        <span className="text-rose-500">outstock</span>
                     )}
                  </p>
               </div>
               <div>
                
               </div>
            </div>
            {/* product desc */}
            <div className="pt-5 text-stone-600 font-medium line-clamp-2">
               {props.description}
            </div>
         </div>
      </div>
   );
}

export default ProductBoxList;
