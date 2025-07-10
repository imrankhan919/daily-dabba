import { ShoppingBag, Star, Clock, Users, ArrowLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getMeal } from '../features/meals/MealSlice';
import Loader from '../components/Loader';
import { getRatings } from '../features/ratings/ratingSlice';

const ViewMeal = () => {

    const { meal, mealSuccess, mealLoading, mealError, mealErrorMessage } = useSelector(state => state.meal)
    const { ratings, ratingSuccess, ratingLoading, ratingError, ratingErrorMessage } = useSelector(state => state.rating)

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMeal(id))
        if (mealSuccess) {
            dispatch(getRatings(id))
        }
    }, [])


    if (mealLoading || ratingLoading) {
        return <Loader />
    }


    return (
        <div className="container mx-auto px-4 py-8">
            {/* Back Button */}
            <Link to={"/meals"} className="flex items-center text-gray-600 hover:text-orange-500 mb-6">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Meals
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Meal Image */}
                <div className="space-y-4">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={meal.image}
                            alt="Dal Bati Churma"
                            className="w-full h-96 object-cover"
                        />
                    </div>
                </div>

                {/* Meal Details */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">{meal.name}</h1>
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex items-center">
                                {Array.from({ length: meal.rating.reduce((p, c) => p + c.rating / meal.rating.length, 0) }, (_, i) => i + 1).map((star) => (
                                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                                <span className="text-gray-600 ml-2"></span>
                            </div>
                            <span className="text-gray-400">{meal.rating.length}•</span>
                            <span className="text-gray-600"> reviews</span>
                        </div>
                        <p className="text-3xl font-bold text-orange-500 mb-6">₹{meal.price}</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border-gray-400">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {meal.description}
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border-gray-400">
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

                    {/* Quantity and Order */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border-gray-400">
                        <div className="space-y-3">
                            <button className="w-full bg-orange-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-orange-600 transform hover:scale-105 transition duration-300 shadow-lg">
                                Order Now - ₹{meal.price}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-16">
                <div className="bg-white rounded-xl shadow-sm border-gray-400">
                    <div className="px-6 py-4 border-gray-400-b">
                        <h2 className="text-2xl font-bold text-gray-800">Customer Reviews</h2>
                    </div>

                    <div className="p-6 space-y-6">

                        {
                            ratings.length === 0 ? (<>
                                <h2 className="text-2xl font-bold text-gray-800">No Ratings Yet</h2>

                            </>) : (
                                ratings.map(item => {
                                    return (
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-semibold">{item.user.name[0]}</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="font-semibold text-gray-800">{item.user.name}</h3>
                                                    <div className="flex items-center">
                                                        {Array.from({ length: item.rating }, (_, i) => i + 1).map((star) => (
                                                            <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="text-gray-600">
                                                    {item.text}
                                                </p>
                                                <p className="text-sm text-gray-500 mt-2">{new Date(item.createdAt).toDateString('en-IN')}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMeal
