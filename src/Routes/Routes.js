import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddFurniture from "../Pages/Dashboard/AddFurniture";
import Blog from "../Pages/Blog";
import Category from "../Pages/Category";
import Dashboard from "../Pages/Dashboard";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AllSellers from "../Pages/Dashboard/AllSellers";
import AllBuyers from "../Pages/Dashboard/AllBuyers";
import SellerRoute from "./SellerRoute";
import BuyerRoute from "./BuyerRoute";
import SellerProducts from "../Pages/Dashboard/SellerProducts";
import SellerBuyers from "../Pages/Dashboard/SellerBuyers";
import MyOrders from "../Pages/Dashboard/MyOrders";
import ReportedItems from "../Pages/Dashboard/ReportedItems";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Category></Category></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/add-furniture',
                element: <SellerRoute><AddFurniture></AddFurniture></SellerRoute>
            },
            {
                path: '/dashboard/sellerproducts',
                element: <SellerRoute><SellerProducts></SellerProducts></SellerRoute>
            },
            {
                path: '/dashboard/sellerbuyers',
                element: <SellerRoute><SellerBuyers></SellerBuyers></SellerRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/orders/:email',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            }
        ]
    }
]);

export default router;