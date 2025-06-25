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
    Menu,
    Plus,
    Edit,
    Trash2,
    Mail,
    Phone
} from 'lucide-react';

const AdminUsers = () => {
    return (
        <div className="ml-64 flex-1">
            {/* Top Bar */}
            <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
                <div className="flex items-center">
                    <Menu className="h-6 w-6 text-gray-600 md:hidden" />
                    <h1 className="text-2xl font-semibold text-gray-800 ml-4">User Management</h1>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                        />
                    </div>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 flex items-center space-x-2">
                        <Plus className="h-4 w-4" />
                        <span>Add User</span>
                    </button>
                    <Bell className="h-6 w-6 text-gray-600" />
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">A</span>
                    </div>
                </div>
            </header>

            {/* Users Content */}
            <main className="p-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Active Users</p>
                                <p className="text-3xl font-bold text-gray-800">2,341</p>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg">
                                <Users className="h-8 w-8 text-green-500" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">New This Month</p>
                                <p className="text-3xl font-bold text-gray-800">384</p>
                            </div>
                            <div className="bg-orange-50 p-3 rounded-lg">
                                <Users className="h-8 w-8 text-orange-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Users Table */}
                <div className="bg-white rounded-xl shadow-sm border">
                    <div className="px-6 py-4 border-b flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">All Users</h2>
                        <div className="flex items-center space-x-2">
                            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                                <option>All Status</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                                <option>Sort by Date</option>
                                <option>Sort by Name</option>
                                <option>Sort by Orders</option>
                            </select>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spent</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-semibold">RS</span>
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">Rahul Sharma</p>
                                                <p className="text-sm text-gray-500">Customer</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center space-x-2 text-sm text-gray-700">
                                            <Mail className="h-4 w-4" />
                                            <span>rahul@email.com</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-700 mt-1">
                                            <Phone className="h-4 w-4" />
                                            <span>+91 98765 43210</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">24</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹4,320</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Jan 15, 2024</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <div className="flex items-center space-x-2">
                                            <button className="text-blue-600 hover:text-blue-800">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="text-red-600 hover:text-red-800">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-semibold">PG</span>
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">Priya Gupta</p>
                                                <p className="text-sm text-gray-500">Customer</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center space-x-2 text-sm text-gray-700">
                                            <Mail className="h-4 w-4" />
                                            <span>priya@email.com</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-700 mt-1">
                                            <Phone className="h-4 w-4" />
                                            <span>+91 87654 32109</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">18</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹3,240</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Feb 3, 2024</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <div className="flex items-center space-x-2">
                                            <button className="text-blue-600 hover:text-blue-800">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="text-red-600 hover:text-red-800">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-semibold">AP</span>
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">Amit Patel</p>
                                                <p className="text-sm text-gray-500">Customer</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center space-x-2 text-sm text-gray-700">
                                            <Mail className="h-4 w-4" />
                                            <span>amit@email.com</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-700 mt-1">
                                            <Phone className="h-4 w-4" />
                                            <span>+91 76543 21098</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">31</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹5,580</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Inactive</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Dec 8, 2023</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <div className="flex items-center space-x-2">
                                            <button className="text-blue-600 hover:text-blue-800">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="text-red-600 hover:text-red-800">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-4 border-t flex items-center justify-between">
                        <p className="text-sm text-gray-700">Showing 1 to 3 of 2,847 results</p>
                        <div className="flex items-center space-x-2">
                            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Previous</button>
                            <button className="px-3 py-2 bg-orange-500 text-white rounded-lg text-sm">1</button>
                            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">2</button>
                            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">3</button>
                            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">Next</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdminUsers
