import { ShoppingBag, Star, Clock, Users, ArrowLeft, Plus, Minus, ShoppingCart } from 'lucide-react';


const ViewMeal = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Back Button */}
            <button className="flex items-center text-gray-600 hover:text-orange-500 mb-6">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Meals
            </button>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Meal Image */}
                <div className="space-y-4">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Dal Bati Churma"
                            className="w-full h-96 object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <img
                            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200"
                            alt="Dal Bati Churma"
                            className="w-full h-24 object-cover rounded-lg border-2 border-orange-500"
                        />
                        <img
                            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=200"
                            alt="Dal Bati Churma"
                            className="w-full h-24 object-cover rounded-lg hover:border-2 hover:border-orange-500 cursor-pointer"
                        />
                        <img
                            src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=200"
                            alt="Dal Bati Churma"
                            className="w-full h-24 object-cover rounded-lg hover:border-2 hover:border-orange-500 cursor-pointer"
                        />
                    </div>
                </div>

                {/* Meal Details */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Dal Bati Churma</h1>
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                                <span className="text-gray-600 ml-2">(4.8)</span>
                            </div>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-600">1,247 reviews</span>
                        </div>
                        <p className="text-3xl font-bold text-orange-500 mb-6">₹180</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Experience the authentic taste of Indore with our traditional Dal Bati Churma. This iconic dish features
                            perfectly baked wheat balls (bati) served with flavorful lentil curry (dal) and sweet crumbled wheat
                            dessert (churma). Made with traditional spices and ghee, this meal brings the essence of Madhya Pradesh
                            to your table.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Meal Info</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3">
                                <Clock className="h-5 w-5 text-orange-500" />
                                <div>
                                    <p className="text-sm text-gray-500">Prep Time</p>
                                    <p className="font-medium text-gray-800">25-30 mins</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Users className="h-5 w-5 text-orange-500" />
                                <div>
                                    <p className="text-sm text-gray-500">Serves</p>
                                    <p className="font-medium text-gray-800">1 Person</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Ingredients</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <span className="text-gray-600">• Wheat flour</span>
                            <span className="text-gray-600">• Lentils (Dal)</span>
                            <span className="text-gray-600">• Ghee</span>
                            <span className="text-gray-600">• Jaggery</span>
                            <span className="text-gray-600">• Traditional spices</span>
                            <span className="text-gray-600">• Fresh herbs</span>
                        </div>
                    </div>

                    {/* Quantity and Order */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-800">Quantity</h3>
                            <div className="flex items-center space-x-4">
                                <button className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition duration-200">
                                    <Minus className="h-4 w-4" />
                                </button>
                                <span className="text-xl font-semibold text-gray-800 w-8 text-center">1</span>
                                <button className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition duration-200">
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button className="w-full bg-orange-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-orange-600 transform hover:scale-105 transition duration-300 shadow-lg">
                                Add to Cart - ₹180
                            </button>
                            <button className="w-full border-2 border-orange-500 text-orange-500 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-orange-50 transition duration-300">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-16">
                <div className="bg-white rounded-xl shadow-sm border">
                    <div className="px-6 py-4 border-b">
                        <h2 className="text-2xl font-bold text-gray-800">Customer Reviews</h2>
                    </div>

                    <div className="p-6 space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold">RS</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold text-gray-800">Rahul Sharma</h3>
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    Absolutely delicious! The authentic taste reminded me of my grandmother's cooking.
                                    The bati was perfectly crispy and the dal was flavorful. Will definitely order again!
                                </p>
                                <p className="text-sm text-gray-500 mt-2">2 days ago</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold">PG</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold text-gray-800">Priya Gupta</h3>
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4].map((star) => (
                                            <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                                        ))}
                                        <Star className="h-4 w-4 text-gray-300" />
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    Good taste and generous portions. The churma was perfectly sweet.
                                    Delivery was on time and food was still hot.
                                </p>
                                <p className="text-sm text-gray-500 mt-2">1 week ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMeal
