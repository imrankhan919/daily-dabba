import axios from 'axios'


const fetchAllUsers = async (token) => {
    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get("/api/admin/view-users", options)
    return response.data
}

const fetchAllOrders = async (token) => {
    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get("/api/admin/view-orders", options)
    return response.data
}

const fetchAllRatings = async (token) => {
    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get("/api/admin/view-ratings", options)
    return response.data
}

const fetchAllMeals = async (token) => {
    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get("/api/meal", options)
    return response.data
}



// Remove Meal
const deleteMeal = async (id, token) => {
    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(`/api/admin/remove-meal/${id}`, options)
    return response.data
}



const adminService = {
    fetchAllUsers,
    fetchAllOrders,
    fetchAllRatings,
    fetchAllMeals,
    deleteMeal
}


export default adminService