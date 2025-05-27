import React from "react";

function LoadingScreen() {
   return (
      <div className="relative h-screen w-screen bg-gradient-to-br from-indigo-300 to-indigo-700">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="size-16 border-r-4 border-t-4 border-amber-300 rounded-full circle-loading"></div>
  </div>
</div>
   );
}

export default LoadingScreen;
