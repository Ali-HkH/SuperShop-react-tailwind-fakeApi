import React from "react";
import AdvantageBox from "../../components/AdvantageBox/AdvantageBox";

function About() {
   return (
      <div className="container">
         {/* header image */}
         <div className="w-full aspect-[auto] md:aspect-[2/1] lg:aspect-[2.6/1] pt-8">
            <img
               src="./images/workinglaptop.jpg"
               alt="about-header"
               className="w-full h-full"
            />
            {/* nav */}
            <div className="flex gap-x-8 py-3">
               <a href="#intro" className="about-nav">
                  Introduction
               </a>
               <a href="#protect" className="about-nav">
                  Protection
               </a>
               <a href="#reviews" className="about-nav">
                  Customer Reviews
               </a>
            </div>
         </div>
         {/* introduction */}
         <div
            id="intro"
            className="py-[40px] md:py-[70px] bg-stone-50 border border-gray-300/35  text-center"
         >
            <div className="flex justify-center items-center flex-col md:flex-row md:gap-x-16">
               <AdvantageBox svg="gem" text="100% Product quality protection" />
               <AdvantageBox
                  svg="clock"
                  text="100% On-time shipment protection"
               />
               <AdvantageBox svg="dollar" text="100% Payment protection" />
            </div>
            <p className="px-5 md:px-24 text-stone-600">
               If the supplier fails to ship your products on time or the
               product quality does not meet the standards set in your contract,
               Aloshop will refund the covered amount of your payment.
            </p>
         </div>
         {/* protection */}
         <div className="mt-20"></div>
      </div>
   );
}

export default About;
