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

const AdminDashboard = () => {
    return (
        <div className="ml-64 flex-1">
            {/* Top Bar */}
            <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
                <div className="flex items-center">
                    <Menu className="h-6 w-6 text-gray-600 md:hidden" />
                    <h1 className="text-2xl font-semibold text-gray-800 ml-4">Dashboard</h1>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                        />
                    </div>
                    <Bell className="h-6 w-6 text-gray-600" />
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">A</span>
                    </div>
                </div>
            </header>

            {/* Dashboard Content */}
            <main className="p-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm p-6 border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Users</p>
                                <p className="text-3xl font-bold text-gray-800">2,847</p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <Users className="h-8 w-8 text-blue-500" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-green-500 text-sm font-medium">+12.5%</span>
                            <span className="text-gray-600 text-sm"> from last month</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                                <p className="text-3xl font-bold text-gray-800">1,429</p>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg">
                                <ShoppingCart className="h-8 w-8 text-green-500" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-green-500 text-sm font-medium">+8.2%</span>
                            <span className="text-gray-600 text-sm"> from last month</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Revenue</p>
                                <p className="text-3xl font-bold text-gray-800">₹3,47,280</p>
                            </div>
                            <div className="bg-orange-50 p-3 rounded-lg">
                                <BarChart3 className="h-8 w-8 text-orange-500" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-green-500 text-sm font-medium">+15.3%</span>
                            <span className="text-gray-600 text-sm"> from last month</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                                <p className="text-3xl font-bold text-gray-800">4.8</p>
                            </div>
                            <div className="bg-yellow-50 p-3 rounded-lg">
                                <Star className="h-8 w-8 text-yellow-500" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-green-500 text-sm font-medium">+0.2</span>
                            <span className="text-gray-600 text-sm"> from last month</span>
                        </div>
                    </div>
                </div>

                {/* Recent Orders Table */}
                <div className="bg-white rounded-xl shadow-sm border">
                    <div className="px-6 py-4 border-b">
                        <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-001</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Rahul Sharma</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Dal Bati Churma</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹180</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Delivered</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2 hours ago</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-002</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Priya Gupta</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Poha Jalebi Combo</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹120</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Preparing</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">15 minutes ago</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-003</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Amit Patel</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Indori Special Thali</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹250</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">On the way</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">30 minutes ago</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdminDashboard
