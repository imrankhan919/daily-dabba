import { X, Upload, Leaf, Eye, EyeOff } from 'lucide-react';

const MealModal = () => {
    return (
        <>
            {/* Background overlay */}
            <div className="fixed w-full inset-0 bg-opacity-50 backdrop-blur-sm"></div>

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl transform transition-all">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900">Add New Meal</h2>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-6">
                    {/* Meal Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Meal Name</label>
                        <input
                            type="text"
                            placeholder="Enter meal name"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                        />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Description</label>
                        <textarea
                            placeholder="Describe your meal..."
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Image URL</label>
                        <div className="relative">
                            <input
                                type="url"
                                placeholder="https://example.com/image.jpg"
                                className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                            />
                            <Upload className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
                        </div>
                    </div>

                    {/* Price */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Price</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3.5 text-gray-500 font-medium">$</span>
                            <input
                                type="number"
                                placeholder="0.00"
                                step="0.01"
                                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                            />
                        </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-4">
                        {/* Is Vegetarian */}
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-green-100 rounded-full">
                                    <Leaf className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-gray-900">Vegetarian</label>
                                    <p className="text-xs text-gray-600">This meal is suitable for vegetarians</p>
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                />
                                <div className="w-11 h-6 bg-gray-200 rounded-full shadow-inner transition-colors">
                                    <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-0.5 translate-y-0.5 transition-transform"></div>
                                </div>
                            </div>
                        </div>

                        {/* Is Active */}
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-blue-100 rounded-full">
                                    <Eye className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-gray-900">Active</label>
                                    <p className="text-xs text-gray-600">Make this meal visible to customers</p>
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                />
                                <div className="w-11 h-6 bg-blue-500 rounded-full shadow-inner transition-colors">
                                    <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-5 translate-y-0.5 transition-transform"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="flex space-x-3 p-6 bg-gray-50 rounded-b-2xl">
                    <button className="flex-1 px-6 py-3 text-gray-700 bg-white border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                        Cancel
                    </button>
                    <button className="flex-1 px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl">
                        Save Meal
                    </button>
                </div>
            </div>
        </>
    )
}

export default MealModal
