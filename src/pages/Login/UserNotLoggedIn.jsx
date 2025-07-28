import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function UserNotLoggedIn({ getMainUser }) {
   const navigate = useNavigate();

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

   async function LoginHandler() {
      const userLoginInfo = {
         username,
         password,
      };

      try {
         const response = await axios.post(
            "https://fakestoreapi.com/auth/login",
            userLoginInfo
         );
         const userToken = response.data.token;
         localStorage.setItem("userToken", userToken);
         await getMainUser(userLoginInfo);

         Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: "Login Done",
            text: "You have successfully logged in!",
         }).then(() => navigate("/"));
      } catch (error) {
         console.log(error);
         Swal.fire({
            position: "bottom-end",
            icon: "error",
            title: "Error!",
            text: `${error.response.data}`,
         });
      }
   }

   return (
      <div className="w-[400px] shadow-lg p-8 pt-16 rounded-sm bg-indigo-200 text-stone-600 flex flex-col items-start justify-start gap-y-8">
         <h1 className="w-full text-center font-bold text-3xl text-indigo-500 mb-8">
            Sign In
         </h1>
         {/* userName input */}
         <div className="relative">
            <svg className="size-6 text-indigo-500 absolute -left-1 top-2">
               <use href="#user"></use>
            </svg>
            <input
               type="text"
               className="border-b-2 border-gray-300 focus:outline-none hover:border-indigo-500 focus:border-indigo-500 font-medium bg-indigo-200 py-2 pl-7"
               placeholder="Username"
               value={username}
               onChange={(event) => setUsername(event.target.value)}
            />
         </div>
         {/* Password input */}
         <div className="relative">
            <svg className="size-6 text-indigo-500 absolute -left-1 top-2">
               <use href="#lock"></use>
            </svg>
            <input
               type={isPasswordVisible ? "text" : "password"}
               className="border-b-2 border-gray-300 focus:outline-none hover:border-indigo-500 focus:border-indigo-500 font-medium bg-indigo-200 py-2 pl-7"
               placeholder="Password"
               value={password}
               onChange={(event) => setPassword(event.target.value)}
               onMouseEnter={() => setIsPasswordVisible(true)}
               onMouseLeave={() => setIsPasswordVisible(false)}
            />
         </div>
         {/* sign in btn */}
         <button
            className="text-center py-2.5 w-full bg-indigo-500 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors"
            onClick={LoginHandler}
         >
            Login
         </button>
         {/* alternative section */}
         <div className="w-full flex items-center justify-between">
            <Link to={`/Register`}>
               <button className="px-6 py-2 bg-white rounded-md font-medium hover:text-indigo-500 transition-colors">
                  Sign Up
               </button>
            </Link>
            <button className="px-6 py-2 bg-white rounded-md font-medium hover:text-indigo-500 transition-colors">
               Forgot Password?
            </button>
         </div>
      </div>
   );
}

export default UserNotLoggedIn;
