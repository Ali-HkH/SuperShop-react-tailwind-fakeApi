import Home from "./pages/Home/Home"
import Blog from "./pages/Blog/Blog"
import Cart from "./pages/Cart/Cart"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import SingleBlog from "./pages/SingleBlog/SingleBlog"
import Shop from "./pages/Shop/Shop"
import SingleShop from "./pages/SingleShop/SingleShop"

const routes = [
    {path: "/", element:<Home /> },
    {path: "/Shop/:shopCategory", element:<Shop /> },
    {path: "/SingleShop/:productID", element:<SingleShop /> },
    {path: "/Blog", element:<Blog /> },
    {path: "/Blog/:blogID", element:<SingleBlog /> },
    {path: "/Cart", element:<Cart /> },
    {path: "/Contact", element:<Contact /> },
    {path: "/About", element:<About /> },
    {path: "/Login", element:<Login /> },
    {path: "/Register", element:<Register /> },
]

export default routes