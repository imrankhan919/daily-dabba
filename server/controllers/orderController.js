const addOrder = async (req, res) => {
    res.send('Order Created!!')
}

const updateOrder = async (req, res) => {
    res.send('Order Updated!!')
}

const getOrder = async (req, res) => {
    res.send('Order Received!!')
}

const getMyOrders = async (req, res) => {
    res.send('All Orders Received!!')
}


module.exports = { addOrder, updateOrder, getOrder, getMyOrders }