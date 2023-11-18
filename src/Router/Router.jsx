import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Page/Home/Home";
import Catagory from "../Page/Shared/LeftNav/Catagory";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Page/News/News";
import About from "../Page/About/About";
import Career from "../Page/Career/Career";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Page/Login/Login";
import Register from "../Page/Login/Register";
import PrivetRoutes from "../Routes/PrivetRoutes";
import Terms from "../Page/Shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to={'/catagory/0'}></Navigate>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/reg',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    },

    {
        path: '/catagory',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivetRoutes><News></News></PrivetRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
        ]
    }
])
export default router;