function SocialBox({ img }) {
   return (
      <div className="size-[38px] hover:-translate-y-1 transition-all cursor-pointer rounded-sm overflow-hidden">
         <img className="w-full h-full" src={img} alt="socials" />
      </div>
   );
}

export default SocialBox;
