import React from 'react';
import {
    ShoppingBag,
    Users,
    UtensilsCrossed,
    ShoppingCart,
    Star,
    BarChart3,
    Settings,
    Bell,
    Search,
    Menu
} from 'lucide-react';
import { useLocation } from "react-router-dom"
const Navbar = () => {

    const location = useLocation()


    if (location.pathname.includes('admin')) {
        return (
            <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
                <div className="flex items-center justify-center h-16 border-b">
                    <ShoppingBag className="h-8 w-8 text-orange-500" />
                    <span className="ml-2 text-xl font-bold text-gray-800">Admin Panel</span>
                </div>

                <nav className="mt-8">
                    <div className="px-4 space-y-2">
                        <a href="#" className={location.pathname === "/admin" ? "flex items-center px-4 py-3 text-gray-700 bg-orange-50 rounded-lg" : "flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg"}>
                            <BarChart3 className="h-5 w-5 mr-3" />
                            Dashboard
                        </a>
                        <a href="#" className={location.pathname === "/admin/users" ? "flex items-center px-4 py-3 text-gray-700 bg-orange-50 rounded-lg" : "flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg"}>
                            <Users className="h-5 w-5 mr-3" />
                            Users
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <UtensilsCrossed className="h-5 w-5 mr-3" />
                            Meals
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <ShoppingCart className="h-5 w-5 mr-3" />
                            Orders
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <Star className="h-5 w-5 mr-3" />
                            Ratings
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <Settings className="h-5 w-5 mr-3" />
                            Settings
                        </a>
                    </div>
                </nav>
            </div>
        )
    }


    return (
        <header className="bg-white shadow-sm border-b">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <ShoppingBag className="h-8 w-8 text-orange-500" />
                        <span className="text-2xl font-bold text-gray-800">Indori LunchBox</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Home</a>
                        <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Meals</a>
                        <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">About</a>
                        <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Contact</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-700 hover:text-orange-500 font-medium">Login</button>
                        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">Register</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
