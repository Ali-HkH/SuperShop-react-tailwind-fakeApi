import { useEffect, useState } from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
   const router = useRoutes(routes);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => setLoading(false), 2000);
   }, []);

   return (
      <div className="App">
         {loading ? (
            <LoadingScreen />
         ) : (
            <>
               <Nav />
               {router}
               <Footer />
            </>
         )}
      </div>
   );
}

export default App;
