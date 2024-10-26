import React from "react";
import OptionBox from "../../components/OptionBox/OptionBox";

function Home() {
   return (
      <div>
         {/* Header-Hero-Parallex */}
         <div className="sale-hero relative w-full h-[80vh] lg:h-[90vh] 2xl:h-[110vh] flex items-center justify-center mb-[390px] md:mb-[130px] lg:mb-[85px]">
            {/* saleBox */}
            <div className="text-center font-bold bg-black bg-opacity-15 backdrop-blur-sm py-10 px-14 sm:py-12 sm:px-20 lg:py-16 lg:px-28">
               <h1 className="text-4xl sm:text-5xl lg:text-[100px]/[120px] text-white">
                  MEGA SALE
               </h1>
               <p className="text-2xl sm:text-3xl lg:text-[70px]/[75px] text-amber-300 mb-5">
                  UP TO 50% OFF
               </p>
               <button className="text-sm sm:text-base lg:text-lg py-2.5 px-4 bg-indigo-700 text-white hover:bg-amber-300 transition-colors">
                  SHOP NOW
               </button>
            </div>
            {/* shop options */}
            <div className="w-[95%] bg-indigo-700 text-white absolute -bottom-96 md:-bottom-32 lg:-bottom-20 flex flex-col md:flex-row z-20 child:transition-colors child:w-full md:child:w-1/3">
               <OptionBox
                  title="FREE SHIPPING"
                  subTitle="On orders over 99.00$"
                  svg="truck"
               />
               <OptionBox
                  title="MONEY GUARANTEE"
                  subTitle="30 days Money back"
                  svg="shield"
               />
               <OptionBox
                  title="ONLINE SUPPORT"
                  subTitle="Online support 24/7"
                  svg="support"
               />
            </div>
         </div>
      </div>
   );
}

export default Home;
