import React from "react";
import LinkList from "../LinkList/LinkList";
import SocialBox from "../SocialBox/SocialBox";
import PaymentCard from "../PaymentCard/PaymentCard";

function Footer() {
   return (
      <div>
         {/* footer top */}
         <div className="container">
            {/* footer top links */}
            <div className="w-full pt-8 pb-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-gray-300">
               <LinkList
                  title="HELP"
                  links={[
                     { name: "Payments", href: "#" },
                     { name: "Saved Cards", href: "#" },
                     { name: "Shipping", href: "#" },
                     { name: "Cancellation & Returns", href: "#" },
                     { name: "FAQ", href: "#" },
                  ]}
               />
               <LinkList
                  title="ALOSHOP"
                  links={[
                     { name: "Contact Us", href: "/Contact" },
                     { name: "About Us", href: "/About" },
                     { name: "Blog", href: "/Blog" },
                     { name: "New Products", href: "#" },
                     { name: "Top Sellers", href: "#" },
                  ]}
               />
               <LinkList
                  title="MY ACCOUNT"
                  links={[
                     { name: "My Order", href: "#" },
                     { name: "My Wishlist", href: "#" },
                     { name: "My Credit Slip", href: "#" },
                     { name: "My Adresses", href: "#" },
                     { name: "My Personal Info", href: "#" },
                  ]}
               />
               <LinkList
                  title="CUSTOMER"
                  links={[
                     { name: "Online Shopping", href: "#" },
                     { name: "Affiliate Program", href: "#" },
                     { name: "Gift Card", href: "#" },
                     { name: "Aloshop First Sub", href: "#" },
                     { name: "Aloshop First Buy", href: "#" },
                  ]}
               />
            </div>
            {/* footer top newsletter/social */}
            <div className="py-[50px] w-full flex flex-col gap-y-5 md:flex-row md:items-center md:justify-between">
               {/* newsletter */}
               <div className="flex flex-col gap-y-3 items-start lg:flex-row lg:items-center lg:gap-x-8">
                  <span className="font-medium">NEWSLETTER</span>
                  <div className="relative">
                     <input
                        type="email"
                        className="appearance-none focus:outline-none border border-gray-300 py-2.5 px-3 w-[280px] text-stone-600"
                        placeholder="Enter Your Email ..."
                     />
                     <span className="absolute -right-[46px] top-0">
                        <svg className="size-[46px] p-2.5 bg-indigo-700 text-white cursor-pointer hover:border hover:border-indigo-700 hover:text-indigo-700 hover:bg-white transition-colors">
                           <use href="#envelope"></use>
                        </svg>
                     </span>
                  </div>
               </div>
               {/* social */}
               <div className="flex flex-col gap-y-3 items-start lg:flex-row lg:items-center lg:gap-x-8">
                  <span className="font-medium">KEEP IN TOUCH</span>
                  <div className="flex gap-x-2">
                     <SocialBox img=" ../images/socials/facebook.png" />
                     <SocialBox img=" ../images/socials/linkedin.png" />
                     <SocialBox img=" ../images/socials/twitter.png" />
                     <SocialBox img=" ../images/socials/google.png" />
                     <SocialBox img=" ../images/socials/pinterest.png" />
                     <SocialBox img=" ../images/socials/social-6.png" />
                  </div>
               </div>
            </div>
         </div>
         {/* footer bottom */}
         <div className="py-5 bg-indigo-700 text-white">
            <div className="container w-full flex flex-col gap-y-4 items-start md:items-center md:flex-row md:justify-between">
               <div className="flex flex-col gap-y-4 lg:flex-row  lg:items-baseline">
                  <span className="mr-12 font-medium">
                     Design by: ©2017 SUPERSHOP
                  </span>
                  {/* policy */}
                  <div className="flex">
                     <span className="font-medium">Policies:</span>
                     <ul className="flex items-center last:child:border-none child:cursor-pointer">
                        <li className="px-3 border-r-2 border-r-white hover:text-amber-300 transition-colors">
                           Terms of use
                        </li>
                        <li className="px-3 border-r-2 border-r-white hover:text-amber-300 transition-colors">
                           Security
                        </li>
                        <li className="px-3 border-r-2 border-r-white hover:text-amber-300 transition-colors">
                           Privacy
                        </li>
                        <li className="px-3 border-r-2 border-r-white hover:text-amber-300 transition-colors">
                           infringement
                        </li>
                     </ul>
                  </div>
               </div>
               {/* payment */}
               <div className="flex md:flex-col xl:flex-row gap-y-4 gap-x-6">
                  <span>PAYMENT METHODS</span>
                  <ul className="flex gap-x-3">
                     <PaymentCard img=" ../images/payment/master-card.jpg" />
                     <PaymentCard img=" ../images/payment/paypal.jpg" />
                     <PaymentCard img=" ../images/payment/skrill.jpg" />
                     <PaymentCard img=" ../images/payment/visa.jpg" />
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Footer;
