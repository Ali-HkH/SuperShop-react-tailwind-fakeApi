import React from 'react'

function ShopSlide({img, title, off}) {
  return (
    <div className='relative w-full aspect-[1.5/1] lg:aspect-[2/1] xl:aspect-auto'>
        <img src={img} alt="shop-slide-img" className='w-full h-full' />
        <div className='absolute top-[30%] lg:top-[40%] left-20 font-bold'>
            <h1 className='text-2xl md:text-xl lg:text-2xl text-stone-600'>{title}</h1>
            <p className='text-4xl md:text-2xl lg:text-4xl text-indigo-500 mb-5 md:mb-3 lg:mb-5'>EXTRA {off}OFF</p>
            <button className='md:text-sm lg:text-lg px-8 py-2 bg-stone-600 text-white'>SHOP NOW</button>
        </div>  
    </div>
  )
}

export default ShopSlide