import Contact from "../Pages/Contact";
import Home from "../Pages/Products";


const routers = [
    {
        path: '/product',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/contact',
        exact: true,
        main: () => <Contact/>
    }
]

export default routers;