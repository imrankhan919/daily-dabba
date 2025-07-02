import { X, Upload, Leaf, Eye, EyeOff } from 'lucide-react';
import { toast } from "react-toastify"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMeal, updateTheMeal } from '../../features/admin/adminSlice';
import Loader from '../Loader';

const MealModal = ({ showModal, handleModal }) => {

    const { allMeal, adminSuccess, adminLoading, adminError, adminErrorMessage, editMeal } = useSelector(state => state.admin)


    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
        isVeg: '',
        isActive: ''
    })

    const { name, description, price, image, isVeg, isActive } = formData

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (editMeal.isEdit) {
            dispatch(updateTheMeal(formData))
            if (adminSuccess) {
                handleModal()
                toast.success('Meal Updated!!😀')
            }
        } else {
            dispatch(addMeal(formData))
            if (adminSuccess) {
                handleModal()
                toast.success('Meal Created!!😀')
            }
        }


    }

    useEffect(() => {

        if (editMeal.isEdit) {
            setFormData(editMeal.meal)
        }


        if (adminError && adminErrorMessage) {
            toast.error(adminErrorMessage)
        }

    }, [adminError, adminErrorMessage, editMeal])


    if (adminLoading) {
        return <Loader />
    }



    return (
        <>
            {/* Background overlay */}
            <div className={showModal ? "fixed w-full inset-0 bg-opacity-50 backdrop-blur-sm" : "hidden"}></div>

            {/* Modal */}
            <div className={showModal ? "relative mr-56 bg-white rounded-2xl shadow-2xl transform transition-all" : "hidden"}>
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900">{editMeal.isEdit ? "Edit Your Meal" : "Add New Meal"}</h2>
                    <button onClick={handleModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Modal Body */}
                    <div className="p-6 space-y-6">
                        {/* Meal Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Meal Name</label>
                            <input
                                type="text"
                                name='name'
                                value={name}
                                onChange={handleChange}
                                placeholder="Enter meal name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                            />
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Description</label>
                            <textarea
                                name='description'
                                value={description}
                                onChange={handleChange}
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
                                    name='image'
                                    value={image}
                                    onChange={handleChange}
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
                                <span className="absolute left-4 top-3.5 text-gray-500 font-medium">₹</span>
                                <input
                                    type="number"
                                    name='price'
                                    value={price}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                    className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                />
                            </div>
                        </div>
                        {/* isVeg */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Dish Type</label>
                            <div className="relative">
                                <span className="absolute left-4 top-3.5 text-gray-500 font-medium"></span>
                                <select name='isVeg' value={isVeg} onChange={handleChange} className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none">
                                    <option value="true">Veg</option>
                                    <option value="false">Non-Veg</option>
                                </select>
                            </div>
                        </div>
                        {/* isActive */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Dish Status</label>
                            <div className="relative">
                                <span className="absolute left-4 top-3.5 text-gray-500 font-medium"></span>
                                <select name='isActive'
                                    value={isActive}
                                    onChange={handleChange} className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none">
                                    <option value="true">Active</option>
                                    <option value="false">In-Active</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="flex space-x-3 p-6 bg-gray-50 rounded-b-2xl">
                        <button type='submit' className="flex-1 w-full px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl">
                            {editMeal.isEdit ? "Update Meal" : "Save Meal"}
                        </button>
                    </div>
                </form>


            </div>
        </>
    )
}

export default MealModal
