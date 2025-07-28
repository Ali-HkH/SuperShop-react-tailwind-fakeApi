import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Related from "../../components/Related/Related";
import AdBox from "../../components/AdBox/AdBox";
import RecentProducts from "../../components/SingleShop/RecentProducts/RecentProducts";
import ProductFooter from "../../components/SingleShop/ProductFooter/ProductFooter";
import ProductImgSection from "../../components/SingleShop/ProductImgSection/ProductImgSection";
import ProductDetailSection from "../../components/SingleShop/ProductDetailSection/ProductDetailSection";

function SingleShop() {
   const { productID } = useParams();
   const [mainProduct, setMainProduct] = useState(null);
   const [relatedProducts, setRelatedProducts] = useState([]);

   const setPageDatas = async () => {
      // fetch to all products
      try {
         const response = await axios.get("https://fakestoreapi.com/products");
         const products = response.data;
         // set main products
         const main = products.find(
            (product) => product.id === parseInt(productID)
         );
         setMainProduct(main);
         // set related products
         const related = products.filter(
            (product) => product.id !== parseInt(productID)
         );
         setRelatedProducts(related);
      } catch (error) {
         console.log("something went wrong.", error);
      }
   };

   useEffect(() => {
      setPageDatas();
   }, [productID]);

   return (
      <div className="container pt-8 grid md:grid-cols-10 lg:grid-cols-12 gap-x-8 mb-12">
         {/* sidebar */}
         <div className="md:col-span-4 lg:col-span-4 xl:col-span-3 space-y-8">
            <RecentProducts ProductsData={relatedProducts} />
            <AdBox />
         </div>
         {/* main */}
         <div className="md:col-span-6 lg:col-span-8 xl:col-span-9 mt-12 md:mt-0">
            {!mainProduct ? (
               <div className="p-5 bg-indigo-300 text-slate-600 text-2xl font-medium">
                  Loading...
               </div>
            ) : (
               <>
                  {/* main product header */}
                  <div className="flex flex-col items-start gap-y-8 lg:flex-row lg:gap-y-0 lg:gap-x-5 p-5 mb-8 border border-gray-300 ">
                     {/* image section */}
                     <ProductImgSection image={mainProduct.image} />
                     {/* detail section */}
                     <ProductDetailSection {...mainProduct} />
                  </div>
                  {/* main product footer */}
                  <ProductFooter
                     title={mainProduct.title}
                     description={mainProduct.description}
                  />
               </>
            )}
            {/* related posts */}
            <Related related={relatedProducts} isShop={true} />
         </div>
      </div>
   );
}

export default SingleShop;
