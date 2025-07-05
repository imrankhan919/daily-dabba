import axios from "axios"

const fetchMeal = async (mid) => {
    const response = await axios.get('/api/meal/' + mid)
    return response.data
}

const mealService = { fetchMeal }


export default mealService