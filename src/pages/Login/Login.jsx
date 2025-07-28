import axios from "axios";
import { useEffect, useState } from "react";
import UserLoggedIn from "./UserLoggedIn";
import UserNotLoggedIn from "./UserNotLoggedIn";

function Login() {
   const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);
   const [mainUser, setMainUser] = useState({});

   const checkLogin = () => {
      if (!!localStorage.getItem("userToken")) {
         setIsUserLoggedIn(true);
         setMainUser(JSON.parse(localStorage.getItem("userInfo")));
      } else {
         setIsUserLoggedIn(false);
      }
   };

   async function getMainUser(userInfo) {
      try {
         const response = await axios.get("https://fakestoreapi.com/users");
         const allUsers = response.data;
         const loggedInUser = allUsers.find(
            (user) => user.username === userInfo.username
         );
         setMainUser(loggedInUser);
         if (loggedInUser) {
            localStorage.setItem("userInfo", JSON.stringify(loggedInUser));
         }
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      checkLogin();
   }, []);

   return (
         <div className="container w-[full] flex items-center justify-center py-12">
            {isUserLoggedIn ? (
               // renders when user logged in
               <UserLoggedIn
                  mainUser={mainUser}
                  setMainUser={setMainUser}
                  setIsUserLoggedIn={setIsUserLoggedIn}
               />
            ) : (
               // renders when user not logged in
               <UserNotLoggedIn getMainUser={getMainUser} />
            )}
         </div>
   );
}

export default Login;
