import React, { useEffect, useState } from 'react'
import RecentProductBox from '../RecentProductBox/RecentProductBox';

function RecentProducts({ProductsData}) {

    const [recentProducts, setRecentProducts] = useState([])

    const getRandomRecentProducts = (array) => {
        const shuffledArray = array.sort(() => 0.5 - Math.random());
        const randomArrays =  shuffledArray.slice(0, 5);
        setRecentProducts(randomArrays)
        console.log(recentProducts)
     };
     
     useEffect(() => {
        getRandomRecentProducts(ProductsData)
     }, [ProductsData])

  return (
    <div className='border border-gray-300'>
        <h1 className="text-xl font-medium text-white bg-indigo-700 px-5 py-2 border-b border-gray-300">
            RECENT PRODUCTS
         </h1>
         <ul className='p-2'>
            {recentProducts.map(recent => (
                <RecentProductBox key={recent.id}  {...recent}/>
            ))}
         </ul>
    </div>
  )
}

export default RecentProducts