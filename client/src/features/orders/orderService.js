import axios from "axios"

const fetchOrders = async (token) => {

    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get('/api/order/all/my-orders', options)
    return response.data

}

const orderMeal = async (id, token) => {

    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    console.log(options)

    const response = await axios.post('/api/order/create-order/' + id, options)
    console.log(response.data)
    return response.data

}


const orderService = { fetchOrders, orderMeal }

export default orderService