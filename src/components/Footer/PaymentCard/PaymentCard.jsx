function PaymentCard({ img }) {
   return (
      <div className="w-[38px] aspect-auto hover:animate-pulse cursor-pointer">
         <img className="w-full" src={img} alt="payment" />
      </div>
   );
}

export default PaymentCard;
