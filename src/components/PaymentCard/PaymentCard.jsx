import React from "react";

function PaymentCard({ img }) {
   return (
      <div className="w-[42px] aspect-auto hover:payment-card-rotate cursor-pointer">
         <img className="w-full" src={img} alt="payment" />
      </div>
   );
}

export default PaymentCard;
