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
    Eye
} from 'lucide-react';

const AdminMeals = () => {
    return (
        <div className="ml-64 flex-1">
            {/* Top Bar */}
            <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
                <div className="flex items-center">
                    <Menu className="h-6 w-6 text-gray-600 md:hidden" />
                    <h1 className="text-2xl font-semibold text-gray-800 ml-4">Meal Management</h1>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search meals..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                        />
                    </div>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 flex items-center space-x-2">
                        <Plus className="h-4 w-4" />
                        <span>Add Meal</span>
                    </button>
                    <Bell className="h-6 w-6 text-gray-600" />
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">A</span>
                    </div>
                </div>
            </header>

            {/* Meals Content */}
            <main className="p-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm p-6 border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Meals</p>
                                <p className="text-3xl font-bold text-gray-800">47</p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <UtensilsCrossed className="h-8 w-8 text-blue-500" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Active Meals</p>
                                <p className="text-3xl font-bold text-gray-800">42</p>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg">
                                <UtensilsCrossed className="h-8 w-8 text-green-500" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Best Seller</p>
                                <p className="text-lg font-bold text-gray-800">Dal Bati</p>
                            </div>
                            <div className="bg-yellow-50 p-3 rounded-lg">
                                <Star className="h-8 w-8 text-yellow-500" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                                <p className="text-3xl font-bold text-gray-800">4.6</p>
                            </div>
                            <div className="bg-orange-50 p-3 rounded-lg">
                                <Star className="h-8 w-8 text-orange-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Meals Grid */}
                <div className="bg-white rounded-xl shadow-sm border">
                    <div className="px-6 py-4 border-b flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">All Meals</h2>
                        <div className="flex items-center space-x-2">
                            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                                <option>All Categories</option>
                                <option>Main Course</option>
                                <option>Breakfast</option>
                                <option>Snacks</option>
                            </select>
                            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                                <option>All Status</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
                                <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Dal Bati Churma" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-gray-800">Dal Bati Churma</h3>
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3">Traditional Indori special with lentils</p>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-2xl font-bold text-orange-500">₹180</span>
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                            <span className="text-gray-600 ml-1 text-sm">4.8 (124)</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">Orders: 1,247</span>
                                        <div className="flex items-center space-x-2">
                                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="p-2 text-green-600 hover:bg-green-50 rounded">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
                                <img src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Poha Jalebi" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-gray-800">Poha Jalebi Combo</h3>
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3">Classic Indori breakfast combo</p>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-2xl font-bold text-orange-500">₹120</span>
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                            <span className="text-gray-600 ml-1 text-sm">4.9 (89)</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">Orders: 892</span>
                                        <div className="flex items-center space-x-2">
                                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="p-2 text-green-600 hover:bg-green-50 rounded">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
                                <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Indori Thali" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-gray-800">Indori Special Thali</h3>
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Low Stock</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3">Complete meal with rice, roti, dal</p>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-2xl font-bold text-orange-500">₹250</span>
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                            <span className="text-gray-600 ml-1 text-sm">4.7 (156)</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">Orders: 1,034</span>
                                        <div className="flex items-center space-x-2">
                                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="p-2 text-green-600 hover:bg-green-50 rounded">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-4 border-t flex items-center justify-between">
                        <p className="text-sm text-gray-700">Showing 1 to 3 of 47 meals</p>
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

export default AdminMeals
