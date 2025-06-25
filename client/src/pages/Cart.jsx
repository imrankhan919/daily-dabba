import { ShoppingBag, MapPin, Clock, CreditCard, Wallet, Truck, ArrowLeft } from 'lucide-react';


const Cart = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Back Button */}
            <button className="flex items-center text-gray-600 hover:text-orange-500 mb-6">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Cart
            </button>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Order Form */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Delivery Address */}
                    <div className="bg-white rounded-xl shadow-sm border p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                            Delivery Address
                        </h2>

                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                                    placeholder="House/Flat No., Street Name"
                                />
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                                        value="Indore"
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                                        value="Madhya Pradesh"
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                                        placeholder="452001"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Landmark (Optional)</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                                    placeholder="Near MG Road Metro Station"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Delivery Time */}
                    <div className="bg-white rounded-xl shadow-sm border p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <Clock className="h-5 w-5 mr-2 text-orange-500" />
                            Delivery Time
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="border-2 border-orange-500 rounded-lg p-4 bg-orange-50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold text-gray-800">ASAP</h3>
                                        <p className="text-sm text-gray-600">25-30 minutes</p>
                                    </div>
                                    <input type="radio" name="delivery" className="text-orange-500" checked />
                                </div>
                            </div>

                            <div className="border border-gray-300 rounded-lg p-4 hover:border-orange-500 cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Schedule</h3>
                                        <p className="text-sm text-gray-600">Choose time</p>
                                    </div>
                                    <input type="radio" name="delivery" className="text-orange-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="bg-white rounded-xl shadow-sm border p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <CreditCard className="h-5 w-5 mr-2 text-orange-500" />
                            Payment Method
                        </h2>

                        <div className="space-y-3">
                            <div className="border-2 border-orange-500 rounded-lg p-4 bg-orange-50">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <Wallet className="h-5 w-5 text-orange-500" />
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Cash on Delivery</h3>
                                            <p className="text-sm text-gray-600">Pay when your order arrives</p>
                                        </div>
                                    </div>
                                    <input type="radio" name="payment" className="text-orange-500" checked />
                                </div>
                            </div>

                            <div className="border border-gray-300 rounded-lg p-4 hover:border-orange-500 cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <CreditCard className="h-5 w-5 text-gray-500" />
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Online Payment</h3>
                                            <p className="text-sm text-gray-600">UPI, Card, Net Banking</p>
                                        </div>
                                    </div>
                                    <input type="radio" name="payment" className="text-orange-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <img
                                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100"
                                    alt="Dal Bati Churma"
                                    className="w-16 h-16 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-800">Dal Bati Churma</h3>
                                    <p className="text-sm text-gray-600">Quantity: 1</p>
                                </div>
                                <span className="font-semibold text-gray-800">₹180</span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <img
                                    src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=100"
                                    alt="Poha Jalebi"
                                    className="w-16 h-16 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-800">Poha Jalebi Combo</h3>
                                    <p className="text-sm text-gray-600">Quantity: 1</p>
                                </div>
                                <span className="font-semibold text-gray-800">₹120</span>
                            </div>
                        </div>

                        <div className="border-t pt-4 mt-4 space-y-2">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>₹300</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Delivery Fee</span>
                                <span>₹20</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>GST (5%)</span>
                                <span>₹15</span>
                            </div>
                            <div className="border-t pt-2">
                                <div className="flex justify-between text-lg font-bold text-gray-800">
                                    <span>Total</span>
                                    <span>₹335</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Delivery Info */}
                    <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
                        <div className="flex items-center space-x-3 mb-3">
                            <Truck className="h-5 w-5 text-orange-500" />
                            <h3 className="font-semibold text-gray-800">Delivery Information</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                            Your order will be delivered in 25-30 minutes
                        </p>
                        <p className="text-sm text-gray-600">
                            Free delivery on orders above ₹200
                        </p>
                    </div>

                    {/* Place Order Button */}
                    <button className="w-full bg-orange-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-orange-600 transform hover:scale-105 transition duration-300 shadow-lg">
                        Place Order - ₹335
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
