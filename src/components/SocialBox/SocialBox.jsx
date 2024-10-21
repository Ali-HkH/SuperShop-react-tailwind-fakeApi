import React from "react";

function SocialBox({ img }) {
   return (
      <span className="inline-block size-[42px] hover:-translate-y-1 transition-all cursor-pointer">
         <img src={img} alt="socials" />
      </span>
   );
}

export default SocialBox;
