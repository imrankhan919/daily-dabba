import { ShoppingBag, User, MapPin, Phone, Mail, Edit, Package, Star, Clock, CreditCard } from 'lucide-react';
import { useSelector } from 'react-redux';


const Profile = () => {

    const { user } = useSelector(state => state.auth)



    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Profile Sidebar */}
                <div className="space-y-6">
                    {/* Profile Card */}
                    <div className="bg-white rounded-xl shadow-sm border p-6">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-2xl">{user.name[0]}</span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                            <p className="text-gray-600">Customer since {new Date(user.createdAt).toLocaleDateString('en-IN')}</p>
                            <button className="mt-4 flex items-center space-x-2 text-orange-500 hover:text-orange-600 mx-auto">
                                <Edit className="h-4 w-4" />
                                <span>Edit Profile</span>
                            </button>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-white rounded-xl shadow-sm border p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <Package className="h-5 w-5 text-orange-500" />
                                    <span className="text-gray-600">Total Orders</span>
                                </div>
                                <span className="font-semibold text-gray-800">24</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <CreditCard className="h-5 w-5 text-green-500" />
                                    <span className="text-gray-600">Total Spent</span>
                                </div>
                                <span className="font-semibold text-gray-800">₹4,320</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <Star className="h-5 w-5 text-yellow-500" />
                                    <span className="text-gray-600">Favorite Meal</span>
                                </div>
                                <span className="font-semibold text-gray-800">Dal Bati</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Personal Information */}
                    <div className="bg-white rounded-xl shadow-sm border p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-800">Personal Information</h2>
                            <button className="text-orange-500 hover:text-orange-600">
                                <Edit className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <User className="h-5 w-5 text-gray-400" />
                                    <span className="text-gray-800">{user.name}</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                    <span className="text-gray-800">{user.email}</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <Phone className="h-5 w-5 text-gray-400" />
                                    <span className="text-gray-800">+91 {user.phone}</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <MapPin className="h-5 w-5 text-gray-400" />
                                    <span className="text-gray-800">MG Road, Indore, MP</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Orders */}
                    <div className="bg-white rounded-xl shadow-sm border">
                        <div className="px-6 py-4 border-b">
                            <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
                        </div>

                        <div className="divide-y divide-gray-200">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="font-semibold text-gray-800">#ORD-001</h3>
                                        <p className="text-sm text-gray-600">Placed on March 15, 2024</p>
                                    </div>
                                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
                                        Delivered
                                    </span>
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <img
                                        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100"
                                        alt="Dal Bati Churma"
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-800">Dal Bati Churma</h4>
                                        <p className="text-sm text-gray-600">Quantity: 1</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-gray-800">₹180</p>
                                        <div className="flex items-center mt-1">
                                            <Clock className="h-4 w-4 text-gray-400 mr-1" />
                                            <span className="text-sm text-gray-600">25 mins</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                                        Reorder
                                    </button>
                                    <button className="text-gray-500 hover:text-gray-700 text-sm font-medium">
                                        Rate & Review
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="font-semibold text-gray-800">#ORD-002</h3>
                                        <p className="text-sm text-gray-600">Placed on March 12, 2024</p>
                                    </div>
                                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
                                        Delivered
                                    </span>
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <img
                                        src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=100"
                                        alt="Poha Jalebi"
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-800">Poha Jalebi Combo</h4>
                                        <p className="text-sm text-gray-600">Quantity: 2</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-gray-800">₹240</p>
                                        <div className="flex items-center mt-1">
                                            <Clock className="h-4 w-4 text-gray-400 mr-1" />
                                            <span className="text-sm text-gray-600">20 mins</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                                        Reorder
                                    </button>
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                                        ))}
                                        <span className="text-sm text-gray-600 ml-2">Rated</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="font-semibold text-gray-800">#ORD-003</h3>
                                        <p className="text-sm text-gray-600">Placed on March 10, 2024</p>
                                    </div>
                                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
                                        Delivered
                                    </span>
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <img
                                        src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=100"
                                        alt="Indori Thali"
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-800">Indori Special Thali</h4>
                                        <p className="text-sm text-gray-600">Quantity: 1</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-gray-800">₹250</p>
                                        <div className="flex items-center mt-1">
                                            <Clock className="h-4 w-4 text-gray-400 mr-1" />
                                            <span className="text-sm text-gray-600">30 mins</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                                        Reorder
                                    </button>
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4].map((star) => (
                                            <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                                        ))}
                                        <Star className="h-4 w-4 text-gray-300" />
                                        <span className="text-sm text-gray-600 ml-2">Rated</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 py-4 border-t">
                            <button className="text-orange-500 hover:text-orange-600 font-medium">
                                View All Orders →
                            </button>
                        </div>
                    </div>

                    {/* Favorite Meals */}
                    <div className="bg-white rounded-xl shadow-sm border">
                        <div className="px-6 py-4 border-b">
                            <h2 className="text-xl font-bold text-gray-800">Favorite Meals</h2>
                        </div>

                        <div className="p-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-orange-500 cursor-pointer">
                                    <img
                                        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100"
                                        alt="Dal Bati Churma"
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-800">Dal Bati Churma</h4>
                                        <p className="text-sm text-gray-600">Ordered 8 times</p>
                                        <p className="text-orange-500 font-semibold">₹180</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-orange-500 cursor-pointer">
                                    <img
                                        src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=100"
                                        alt="Poha Jalebi"
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-800">Poha Jalebi Combo</h4>
                                        <p className="text-sm text-gray-600">Ordered 6 times</p>
                                        <p className="text-orange-500 font-semibold">₹120</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
