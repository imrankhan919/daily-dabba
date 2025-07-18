import { useEffect } from 'react'
import FeaturedCard from '../components/FeaturedCard'
import Loader from '../components/Loader'
import { getMeals } from '../features/meals/MealSlice'
import { useDispatch, useSelector } from 'react-redux'

const Meals = () => {

    const { meals, mealSuccess, mealLoading, mealError, mealErrorMessage } = useSelector(state => state.meal)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMeals())
    }, [])


    if (mealLoading) {
        return <Loader />
    }




    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">All Meals</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {
                        meals.map(meal => <FeaturedCard key={meal._id} meal={meal} />)
                    }

                </div>
            </div>
        </section>
    )
}

export default Meals
