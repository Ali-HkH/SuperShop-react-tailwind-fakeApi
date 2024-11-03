import Home from "./pages/Home/Home"
import Blog from "./pages/Blog/Blog"
import Cart from "./pages/Cart/Cart"
import Category from "./pages/Category/Category"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import SingleBlog from "./pages/SingleBlog/SingleBlog"

const routes = [
    {path: "/", element:<Home /> },
    {path: "/Blog", element:<Blog /> },
    {path: "/Blog/:blogID", element:<SingleBlog /> },
    {path: "/Cart", element:<Cart /> },
    {path: "/Category", element:<Category /> },
    {path: "/Contact", element:<Contact /> },
    {path: "/About", element:<About /> },
    {path: "/Login", element:<Login /> },
    {path: "/Register", element:<Register /> },
]

export default routes