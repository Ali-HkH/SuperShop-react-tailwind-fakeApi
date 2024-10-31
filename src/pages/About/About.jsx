import React from "react";
import AdvantageBox from "../../components/AdvantageBox/AdvantageBox";
import ReviewBox from "../../components/ReviewBox/ReviewBox";

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
         <div
            id="protect"
            className="mt-20 w-full flex flex-col items-start md:items-center md:flex-row md:justify-between"
         >
            <div className="w-full md:w-[50%]">
               <h1 className="mb-10 text-[22px] md:text-lg lg:text-[22px] font-bold text-stone-800">
                  TO GET FULL PROTECTION
               </h1>
               <ul className="flex flex-col items-start gap-y-2">
                  <li className="flex items-center gap-x-8">
                     <span className="px-7 py-5 text-lg lg:text-xl font-bold bg-indigo-700 text-white rounded-full">
                        1
                     </span>
                     <p className="text-stone-600 lg:text-lg">
                        CONFIRM your order online with a Trade Assurance
                        supplier
                     </p>
                  </li>
                  <li className="ml-8 w-[2px] h-14 bg-indigo-700/50"></li>
                  <li className="flex items-center gap-x-8">
                     <span className="px-7 py-5 text-lg lg:text-xl font-bold bg-indigo-700 text-white rounded-full">
                        2
                     </span>
                     <p className="text-stone-600 lg:text-lg">
                        PAY to the supplier’s CITIBANK account designated by
                        Aloshop with credit card or bank transfer
                     </p>
                  </li>
               </ul>
               <a
                  href="#"
                  className="inline-block mt-7 pl-7 text-indigo-500 hover:text-indigo-700"
               >
                  View New User Guide
               </a>
            </div>
            <div className="w-full md:w-[40%]">
               <img
                  src="./images/user-guide.jpg"
                  alt="user-guide"
                  className="w-full"
               />
            </div>
         </div>
         {/* reviews */}
         <div
            id="reviews"
            className="mt-20 pt-20 pb-10 border-t-2 border-t-gray-300/50"
         >
            <h1 className="mb-9 text-[22px] md:text-lg lg:text-[22px] font-bold text-stone-800">
               CUSTOMER REVIEWS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <ReviewBox
                  img="/images/review/review-1.jpg"
                  name="Stenve Johnson"
               />
               <ReviewBox
                  img="/images/review/review-2.jpg"
                  name="Charlie McGlynn"
               />
               <ReviewBox
                  img="/images/review/review-3.jpg"
                  name="Madison Knight"
               />
               <ReviewBox
                  img="/images/review/review-4.jpg"
                  name="nikole brake"
               />
            </div>
         </div>
      </div>
   );
}

export default About;
