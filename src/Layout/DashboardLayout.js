import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useRole from '../hooks/useRole';
import Footer from '../Sections/Common/Footer';
import Header from '../Sections/Common/Header';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [userRole] = useRole(user?.email);

    return (
        <div className='w-3/4 mx-auto'>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">                        
                        {
                            userRole === 'admin' && <>
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                            </>
                        }
                        {
                            userRole === 'seller' && <>
                                <li><Link to="/dashboard/add-furniture">Add a Product</Link></li>
                                <li><Link to="/dashboard/sellerproducts">My Products</Link></li>
                                <li><Link to="/dashboard/sellerbuyers">My Buyers</Link></li>
                            </>
                        }
                        {
                            userRole === 'buyer' && <>
                                <li><Link to={`/dashboard/orders/${user?.email}`}>My Orders</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;