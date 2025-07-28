import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// components
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import FAQBox from "../../components/FAQBox/FAQBox";
import AdBox from "../../components/AdBox/AdBox";
import ProductBox from "../../components/Shop/ProductBox/ProductBox";
import ProductBoxList from "../../components/Shop/ProductBoxList/ProductBoxList";
import Pagination from "../../components/Shop/Pagination/Pagination";
import PriceBox from "../../components/Shop/PriceBox/PriceBox";
import ShopHero from "../../components/Shop/ShopHero/ShopHero";
import ShopListHeading from "../../components/Shop/ShopListHeading/ShopListHeading";

function Shop() {
   // refs and params
   const shopHeadingRef = useRef();
   const { shopCategory } = useParams();
   // states
   const [categoryCount, setCategoryCount] = useState({});
   const [allProducts, setAllProducts] = useState([]);
   const [priceFilterValue, setPriceFilterValue] = useState(1000);
   const [shownProducts, setShownProducts] = useState([]);
   const [shopDisplay, setShopDisplay] = useState("Grid");

   // fetch products based on category
   async function load() {
      const url =
         shopCategory === "all"
            ? "/products"
            : `/products/category/${encodeURIComponent(shopCategory)}`;
      const { data } = await axios.get(`https://fakestoreapi.com${url}`);
      setAllProducts(data);
   }

   useEffect(() => {
      load();
   }, [shopCategory]);

   // derive a filtered list
   const filteredProducts = useMemo(
      () => allProducts.filter((product) => product.price <= priceFilterValue),
      [allProducts, priceFilterValue]
   );
   const handleFilterClick = (value) => {
      setPriceFilterValue(value);
   };

   return (
      <div className="container pt-8 grid md:grid-cols-10 lg:grid-cols-12 gap-x-8">
         {/* sidebar */}
         <div className="md:col-span-4 lg:col-span-4 xl:col-span-3 space-y-8 mb-12">
            <CategoryBox sendCategory={(data) => setCategoryCount(data)} />
            <PriceBox onFilterClick={handleFilterClick} />
            <FAQBox />
            <AdBox />
         </div>
         {/* main */}
         <div className="md:col-span-6 lg:col-span-8 xl:col-span-9 mt-12 md:mt-0">
            <ShopHero categoryCount={categoryCount} />
            <div className="mb-12">
               <ShopListHeading
                  shopDisplay={shopDisplay}
                  setShopDisplay={setShopDisplay}
                  headingRef={shopHeadingRef}
               />
               {/* shop Products */}
               {filteredProducts.length === 0 ? (
                  <div className="max-w-lg mx-auto bg-indigo-300 px-8 py-5">
                     <h1 className="text-xl font-medium">
                        The Product you are looking for has not found!
                     </h1>
                  </div>
               ) : (
                  <div>
                     {shopDisplay === "Grid" ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
                           {shownProducts.map((product) => (
                              <ProductBox key={product.id} {...product} />
                           ))}
                        </div>
                     ) : (
                        <div className="flex flex-col items-start justify-start gap-y-8">
                           {shownProducts.map((product) => (
                              <ProductBoxList key={product.id} {...product} />
                           ))}
                        </div>
                     )}
                     <Pagination
                        allItems={filteredProducts}
                        setShownProducts={setShownProducts}
                        scrollToRef={shopHeadingRef}
                     />
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default Shop;
