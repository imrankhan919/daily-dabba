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


// Add Meal
const createMeal = async (formData, token) => {

    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post('/api/admin/add-meal', formData, options)
    return response.data
}

// Update Meal
const updateMeal = async (updatedMeal, token) => {

    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put('/api/admin/update-meal/' + updatedMeal._id, updatedMeal, options)
    return response.data
}

// Update Order
const updateOrder = async (orderUpdate, token) => {

    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put('/api/admin/update-order/' + orderUpdate._id, { status: orderUpdate.status }, options)
    console.log(response.data)
    console.log(response.data._id)
    return response.data
}







const adminService = {
    fetchAllUsers,
    fetchAllOrders,
    fetchAllRatings,
    fetchAllMeals,
    deleteMeal,
    createMeal,
    updateMeal,
    updateOrder
}


export default adminService