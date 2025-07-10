import axios from "axios"

const fetchRatings = async (mid, token) => {

    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get('/api/rating/' + mid, options)
    return response.data
}


const ratingService = {
    fetchRatings
}

export default ratingService