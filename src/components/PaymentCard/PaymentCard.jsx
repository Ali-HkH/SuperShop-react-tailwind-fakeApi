import React from "react";

function PaymentCard({ img }) {
   return (
      <div className="w-[40px] aspect-auto brightness-75 hover:brightness-100 cursor-pointer">
         <img className="w-full" src={img} alt="payment" />
      </div>
   );
}

export default PaymentCard;
