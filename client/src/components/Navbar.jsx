import {
    ShoppingBag,
    Users,
    UtensilsCrossed,
    ShoppingCart,
    Star,
    BarChart3,
    Settings,
} from 'lucide-react';
import { Link, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../features/auth/authSlice';
const Navbar = () => {

    const location = useLocation()

    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logOutUser())

    }





    if (location.pathname.includes('admin')) {
        return (
            <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
                <div className="flex items-center justify-center h-16 border-b">
                    <ShoppingBag className="h-8 w-8 text-orange-500" />
                    <span className="ml-2 text-xl font-bold text-gray-800">Admin Panel</span>
                </div>

                <nav className="mt-8">
                    <div className="px-4 space-y-2">
                        <Link to="/admin" className={location.pathname === "/admin" ? "flex items-center px-4 py-3 text-gray-700 bg-orange-50 rounded-lg" : "flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg"}>
                            <BarChart3 className="h-5 w-5 mr-3" />
                            Dashboard
                        </Link>
                        <Link to="/admin/users" className={location.pathname === "/admin/users" ? "flex items-center px-4 py-3 text-gray-700 bg-orange-50 rounded-lg" : "flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg"}>
                            <Users className="h-5 w-5 mr-3" />
                            Users
                        </Link>
                        <Link to="/admin/meals" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <UtensilsCrossed className="h-5 w-5 mr-3" />
                            Meals
                        </Link>
                        <Link to="/admin/orders" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <ShoppingCart className="h-5 w-5 mr-3" />
                            Orders
                        </Link>
                        <Link to="/admin/ratings" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <Star className="h-5 w-5 mr-3" />
                            Ratings
                        </Link>
                        <Link href="/admin/settings" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <Settings className="h-5 w-5 mr-3" />
                            Settings
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }


    return (
        <header className="bg-white shadow-sm border-b">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to={"/"}>
                        <div className="flex items-center space-x-2">
                            <ShoppingBag className="h-8 w-8 text-orange-500" />
                            <span className="text-2xl font-bold text-gray-800">Indori LunchBox</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to={"/"} href="#" className="text-gray-700 hover:text-orange-500 font-medium">Home</Link>
                        <Link to={"/meals"} href="#" className="text-gray-700 hover:text-orange-500 font-medium">Meals</Link>
                        <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">About</a>
                        <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Contact</a>
                    </div>

                    {
                        user ? (<div className="flex items-center space-x-4">
                            <Link to={"/cart"} className="relative">
                                <ShoppingCart className="h-6 w-6 text-gray-700" />
                                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                            </Link>
                            <Link to={user.isAdmin ? "/admin" : "/my-profile"} className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold text-sm">{user?.name[0]}</span>
                            </Link>
                            <button onClick={handleLogout} className="cursor-pointer text-gray-700 hover:bg-red-800 font-medium bg-red-500 rounded-full py-2 px-4 text-white">Logout</button>
                        </div>) : (
                            <div className="flex items-center space-x-4">
                                <Link to={"/login"} className="text-gray-700 hover:text-orange-500 font-medium">Login</Link>
                                <Link to={"/register"} className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">Register</Link>
                            </div>
                        )
                    }


                </div>
            </nav>
        </header>
    )
}

export default Navbar
