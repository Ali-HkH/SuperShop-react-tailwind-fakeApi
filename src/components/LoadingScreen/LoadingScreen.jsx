import React from "react";

function LoadingScreen() {
   return (
      <div className="relative h-[100vh] w-[100vw] bg-gradient-to-br from-indigo-300 to-indigo-700">
         <div className="flex-center size-16 border-r-4 border-t-4  border-amber-300 rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] circle-loading"></div>
      </div>
   );
}

export default LoadingScreen;
