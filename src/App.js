import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Superior from "./components/Superior/Superior";

function App() {

  const router = useRoutes(routes)

  return (
    <div className="App">
      <Nav />
      {router}
      <Superior />
      <Footer />
    </div>
  );
}

export default App;
