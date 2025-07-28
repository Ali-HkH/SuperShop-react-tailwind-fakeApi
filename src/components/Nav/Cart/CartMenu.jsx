import { useEffect, useState } from "react";
import CartBtn from "./CartBtn";
import CartItem from "./CartItem";
import axios from "axios";
import CartMenuFooter from "./CartMenuFooter";

function CartMenu({ isUserLoggedIn, userID }) {
   const [allProducts, setAllProducts] = useState([]);
   const [userCart, setUserCart] = useState([]);
   const [userCartProducts, setUserCartProducts] = useState([]);
   const [totalBuy, setTotalBuy] = useState(0);

   const getAllProducts = async () => {
      try {
         const response = await axios.get("https://fakestoreapi.com/products");
         const products = response.data;
         setAllProducts(products);
      } catch (error) {
         console.log("something went wrong!", error);
      }
   };

   const getUserCart = async () => {
      try {
         const response = await axios.get(
            `https://fakestoreapi.com/carts/user/${userID}`
         );
         const cartProducts = response.data[0].products;
         setUserCart(cartProducts);
      } catch (error) {
         console.log("somthing went wrong!", error);
      }
   };

   const getProductsInCart = () => {
      const matchedProducts = userCart
         .map((cartItem) => {
            const product = allProducts.find(
               (product) => product.id === cartItem.productId
            );
            if (product) {
               return { ...product, quantity: cartItem.quantity };
            }
            return null;
         })
         .filter(Boolean);

      setUserCartProducts(matchedProducts);
   };

   const getCartTotal = () => {
      const totalProduct = userCartProducts.map((product) => {
         return product.price * product.quantity;
      });
      const totalCart = totalProduct.reduce(
         (accumulator, currentValue) => accumulator + currentValue,
         0
      );
      setTotalBuy(totalCart);
   };

   useEffect(() => {
      if (isUserLoggedIn) {
         getUserCart();
         getAllProducts();
      } else {
         setTotalBuy(0);
         setUserCart([]);
         setUserCartProducts([]);
      }
   }, [isUserLoggedIn]);

   useEffect(() => {
      if (userCart.length > 0 && allProducts.length > 0) {
         getProductsInCart();
      }
   }, [userCart, allProducts]);

   useEffect(() => {
      getCartTotal();
   }, [userCartProducts]);

   return (
      <div className="relative group flex items-center">
         {/* cart button */}
         <CartBtn cartLength={userCart.length} totalBuy={totalBuy} />
         {/* cart menu */}
         <div className="w-96 p-5 bg-white shadow-md z-20 absolute top-20 right-0 opacity-0 invisible group-hover:top-10 group-hover:opacity-100 group-hover:visible transition-all duration-500">
            <h1 className="mb-2.5 text-lg">
               ({userCart.length}) ITEMS IN MY CART
            </h1>
            {/* cart items list */}
            {isUserLoggedIn && (
               <div className="space-y-3 p-3 h-[268px] overflow-y-auto">
                  {userCartProducts.map((cartItem) => (
                     <CartItem key={cartItem.id} {...cartItem} />
                  ))}
               </div>
            )}
            <CartMenuFooter totalBuy={totalBuy} />
         </div>
      </div>
   );
}

export default CartMenu;
