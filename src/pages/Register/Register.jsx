import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
   const navigate = useNavigate();

   const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);

   // input states
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [name, setName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");

   const checkLogin = () => {
      if (!!localStorage.getItem("userToken")) {
         setIsUserLoggedIn(true);
      } else {
         setIsUserLoggedIn(false);
      }
   };

   async function registerUser() {
      const newUser = {
         email,
         username,
         password,
         name: {
            firstname: name,
            lastname: lastName,
         },
         address: {
            city: "Sari",
            street: "Moalem 20",
            number: 5,
            zipcode: "192-75775",
            geolocation: {
               lat: "-37.3159",
               long: "81.1496",
            },
         },
         phone,
      };

      const result = await Swal.fire({
         title: "Sure about your info?",
         text: "You will be registered.",
         icon: "question",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, Register Me!",
      });
      if (result.isConfirmed) {
         try {
            await axios.post("https://fakestoreapi.com/users", newUser);
            Swal.fire({
               position: "bottom-end",
               title: "Done!",
               text: "Your have successfully Registered.",
               icon: "success",
            }).then(() => navigate("/Login"));
         } catch (error) {
            Swal.fire({
               position: "bottom-end",
               title: "Error!",
               text: `${error.response.data}`,
               icon: "error",
            });
         }
      }
   }

   useEffect(() => {
      checkLogin();
   }, []);

   return (
      <>
         {isUserLoggedIn ? (
            navigate("/Login")
         ) : (
            <div className="container w-[full] flex items-center justify-center py-12">
               <div className="w-full md:w-[65%] lg:w-[85%] xl:w-[70%] shadow-lg p-8 pt-16 rounded-sm bg-indigo-200 text-stone-600">
                  <h1 className="w-full text-center font-bold text-3xl text-indigo-500 mb-12">
                     Register
                  </h1>
                  {/* inputs layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                     {/* name input */}
                     <div className="relative">
                        <svg className="size-6 text-indigo-500 absolute -left-1 top-2">
                           <use href="#user-info"></use>
                        </svg>
                        <input
                           type="text"
                           className="border-b-2 border-gray-300 focus:outline-none hover:border-indigo-500 focus:border-indigo-500 font-medium bg-indigo-200 py-2 pl-7"
                           placeholder="Name"
                           value={name}
                           onChange={(event) => setName(event.target.value)}
                        />
                     </div>
                     {/* lastname input */}
                     <div className="relative">
                        <svg className="size-6 text-indigo-500 absolute -left-1 top-2">
                           <use href="#user-info"></use>
                        </svg>
                        <input
                           type="text"
                           className="border-b-2 border-gray-300 focus:outline-none hover:border-indigo-500 focus:border-indigo-500 font-medium bg-indigo-200 py-2 pl-7"
                           placeholder="Lastname"
                           value={lastName}
                           onChange={(event) => setLastName(event.target.value)}
                        />
                     </div>
                     {/* username input */}
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
                     {/* password input */}
                     <div className="relative">
                        <svg className="size-6 text-indigo-500 absolute -left-1 top-2">
                           <use href="#lock"></use>
                        </svg>
                        <input
                           type="text"
                           className="border-b-2 border-gray-300 focus:outline-none hover:border-indigo-500 focus:border-indigo-500 font-medium bg-indigo-200 py-2 pl-7"
                           placeholder="Password"
                           value={password}
                           onChange={(event) => setPassword(event.target.value)}
                        />
                     </div>
                     {/* email input */}
                     <div className="relative">
                        <svg className="size-6 text-indigo-500 absolute -left-1 top-2">
                           <use href="#envelope"></use>
                        </svg>
                        <input
                           type="text"
                           className="border-b-2 border-gray-300 focus:outline-none hover:border-indigo-500 focus:border-indigo-500 font-medium bg-indigo-200 py-2 pl-7"
                           placeholder="Email"
                           value={email}
                           onChange={(event) => setEmail(event.target.value)}
                        />
                     </div>
                     {/* phone input */}
                     <div className="relative">
                        <svg className="size-6 text-indigo-500 absolute -left-1 top-2">
                           <use href="#phone"></use>
                        </svg>
                        <input
                           type="text"
                           className="border-b-2 border-gray-300 focus:outline-none hover:border-indigo-500 focus:border-indigo-500 font-medium bg-indigo-200 py-2 pl-7"
                           placeholder="Phone"
                           value={phone}
                           onChange={(event) => setPhone(event.target.value)}
                        />
                     </div>
                  </div>
                  {/* buttons */}
                  <div className="w-full flex items-center justify-between">
                     <button
                        onClick={registerUser}
                        className="text-center px-10 py-2.5 bg-indigo-500 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors"
                     >
                        Register
                     </button>
                     <Link to={`/Login`}>
                        <button className="px-4 py-2.5 bg-white rounded-md font-medium hover:text-indigo-500 transition-colors">
                           Already Registered?
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

export default Register;
