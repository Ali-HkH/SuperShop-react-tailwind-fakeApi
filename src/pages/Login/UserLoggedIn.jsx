import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function UserLoggedIn({ mainUser, setMainUser, setIsUserLoggedIn }) {
   const navigate = useNavigate();

   //    input states
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [name, setName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");

   const [isInfoEditable, setIsInfoEditable] = useState(false);
   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

   const setInitialInfo = (user) => {
      setUsername(user.username);
      setPassword(user.password);
      setName(user.name.firstname);
      setLastName(user.name.lastname);
      setEmail(user.email);
      setPhone(user.phone);
   };

   const logoutHandler = async () => {
      const result = await Swal.fire({
         title: "Are you sure?",
         text: "You will be logged out!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, Log Out!",
      });

      if (result.isConfirmed) {
         localStorage.clear();
         setMainUser({});
         setIsUserLoggedIn(false);

         Swal.fire({
            position: "bottom-end",
            title: "Logged out!",
            text: "You are now identified as a guest.",
            icon: "success",
         }).then(() => navigate("/"));
      }
   };

   async function updateUserInfo() {
      const newUserInfo = {
         email,
         username,
         password,
         name: {
            firstname: name,
            lastname: lastName,
         },
         address: {
            city: mainUser.address.city,
            street: mainUser.address.street,
            number: mainUser.address.number,
            zipcode: mainUser.address.zipcode,
            geolocation: {
               lat: mainUser.address.geolocation.lat,
               long: mainUser.address.geolocation.long,
            },
         },
         phone,
      };

      const result = await Swal.fire({
         title: "Are you sure?",
         text: "Your infos will be changed!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, Change Info!",
      });

      if (result.isConfirmed) {
         try {
            const response = await axios.put(
               `https://fakestoreapi.com/users/${mainUser.id}`,
               newUserInfo
            );
            const newInfo = response.data;
            setMainUser(newInfo);
            Swal.fire({
               position: "bottom-end",
               title: "Changes applied!",
               text: "Your info has been successfully changed",
               icon: "success",
            });
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
      if (Object.keys(mainUser).length !== 0) {
         setInitialInfo(mainUser);
      }
   }, [mainUser]);

   return (
      <div className="w-full md:w-[65%] lg:w-[85%] xl:w-[70%] shadow-lg p-8 pt-16 rounded-sm bg-indigo-200 text-stone-600">
         <h1 className="font-bold text-3xl text-indigo-500 mb-10">
            Your Account Info :
         </h1>
         {/* inputs layout */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {/* username info */}
            <div className="flex items-end gap-x-2.5">
               <svg className="size-6 text-indigo-500">
                  <use href="#user"></use>
               </svg>
               <label htmlFor="username" className="w-24 font-medium">
                  UserName :{" "}
               </label>
               <input
                  id="username"
                  type="text"
                  className="border-b-2 border-gray-300 focus:outline-none hover:border-indigo-500 focus:border-indigo-500 font-medium bg-indigo-200 py-2 pl-7"
                  value={username}
                  disabled={!isInfoEditable}
                  onChange={(event) => setUsername(event.target.value)}
               />
            </div>
            {/* password info */}
            <div
               onMouseEnter={() => setIsPasswordVisible(true)}
               onMouseLeave={() => setIsPasswordVisible(false)}
               className="flex items-end gap-x-2.5"
            >
               <svg className="size-6 text-indigo-500">
                  <use href="#lock"></use>
               </svg>
               <label htmlFor="password" className="w-24 font-medium">
                  Password :{" "}
               </label>
               <input
                  id="password"
                  type={isPasswordVisible ? "text" : "password"}
                  className="border-b-2 border-gray-300 focus:outline-none hover:border-indigo-500 focus:border-indigo-500 font-medium bg-indigo-200 py-2 pl-7"
                  value={password}
                  disabled={!isInfoEditable}
                  onChange={(event) => setPassword(event.target.value)}
               />
            </div>
            {/* name info */}
            <div className="flex items-end gap-x-2.5">
               <svg className="size-6 text-indigo-500">
                  <use href="#user-info"></use>
               </svg>
               <label htmlFor="user-info" className="w-24 font-medium">
                  Name :{" "}
               </label>
               <input
                  id="name"
                  type="text"
                  className="border-b-2 border-gray-300 focus:outline-none hover:border-indigo-500 focus:border-indigo-500 font-medium bg-indigo-200 py-2 pl-7"
                  value={name}
                  disabled={!isInfoEditable}
                  onChange={(event) => setName(event.target.value)}
               />
            </div>
            {/* lastname info */}
            <div className="flex items-end gap-x-2.5">
               <svg className="size-6 text-indigo-500">
                  <use href="#user-info"></use>
               </svg>
               <label htmlFor="lastname" className="w-24 font-medium">
                  LastName :{" "}
               </label>
               <input
                  id="lastname"
                  type="text"
                  className="border-b-2 border-gray-300 focus:outline-none hover:border-indigo-500 focus:border-indigo-500 font-medium bg-indigo-200 py-2 pl-7"
                  value={lastName}
                  disabled={!isInfoEditable}
                  onChange={(event) => setLastName(event.target.value)}
               />
            </div>
            {/* email info */}
            <div className="flex items-end gap-x-2.5">
               <svg className="size-6 text-indigo-500">
                  <use href="#envelope"></use>
               </svg>
               <label htmlFor="email" className="w-24 font-medium">
                  Email :{" "}
               </label>
               <input
                  id="email"
                  type="text"
                  className="border-b-2 border-gray-300 focus:outline-none hover:border-indigo-500 focus:border-indigo-500 font-medium bg-indigo-200 py-2 pl-7"
                  value={email}
                  disabled={!isInfoEditable}
                  onChange={(event) => setEmail(event.target.value)}
               />
            </div>
            {/* phone info */}
            <div className="flex items-end gap-x-2.5">
               <svg className="size-6 text-indigo-500">
                  <use href="#phone"></use>
               </svg>
               <label htmlFor="phone" className="w-24 font-medium">
                  Phone :{" "}
               </label>
               <input
                  id="phone"
                  type="text"
                  className="border-b-2 border-gray-300 focus:outline-none hover:border-indigo-500 focus:border-indigo-500 font-medium bg-indigo-200 py-2 pl-7"
                  value={phone}
                  disabled={!isInfoEditable}
                  onChange={(event) => setPhone(event.target.value)}
               />
            </div>
         </div>
         {/* action buttons */}
         <div className="w-full flex items-center justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-y-5 gap-x-10">
            {/* Edit btn */}
            <button
               onClick={() => setIsInfoEditable(!isInfoEditable)}
               className="w-fit lg:w-1/3 px-5 py-2 font-medium text-white bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-sm"
            >
               {isInfoEditable ? "UnEditable" : "Editable"}
            </button>
            {/* updateInfo btn */}
            <button
               onClick={updateUserInfo}
               className="w-fit lg:w-1/3 px-5 py-2 font-medium text-white bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-sm"
            >
               Save Changes
            </button>
            {/* logout btn */}
            <button
               onClick={logoutHandler}
               className="w-fit lg:w-1/3 px-5 py-2 font-medium text-white bg-rose-500 hover:bg-rose-600 transition-colors rounded-sm"
            >
               Log Out
            </button>
         </div>
      </div>
   );
}

export default UserLoggedIn;
