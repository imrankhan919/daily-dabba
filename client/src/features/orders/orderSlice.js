import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderService from "./orderService";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: [],
        cart: null,
        orderLoading: false,
        orderSuccess: false,
        orderError: false,
        orderErrorMessage: ""
    },
    reducers: {
        addToCart: (state, action) => {
            return {
                ...state,
                cart: action.payload
            }
        }
    },
    extraReducers: builder => {

        builder
            .addCase(getOrders.pending, (state, action) => {
                state.orderLoading = true
                state.orderSuccess = false
                state.orderError = false
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = true
                state.orders = action.payload
                state.orderError = false
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = false
                state.orderError = true
                state.orderErrorMessage = action.payload
            })
            .addCase(addOrder.pending, (state, action) => {
                state.orderLoading = true
                state.orderSuccess = false
                state.orderError = false
            })
            .addCase(addOrder.fulfilled, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = true
                state.orders = [action.payload, ...state.orders]
                state.cart = null
                state.orderError = false
            })
            .addCase(addOrder.rejected, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = false
                state.orderError = true
                state.orderErrorMessage = action.payload
            })
            .addCase(cancelOrder.pending, (state, action) => {
                state.orderLoading = true
                state.orderSuccess = false
                state.orderError = false
            })
            .addCase(cancelOrder.fulfilled, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = true
                state.orders = state.orders.map(order => order._id === action.payload._id ? action.payload : order)
                state.cart = null
                state.orderError = false
            })
            .addCase(cancelOrder.rejected, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = false
                state.orderError = true
                state.orderErrorMessage = action.payload
            })


    }
})


export const { addToCart } = orderSlice.actions
export default orderSlice.reducer


// GET ORDERS
export const getOrders = createAsyncThunk("ORDER/FETCH", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return orderService.fetchOrders(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})

// ADD ORDERS
export const addOrder = createAsyncThunk("ORDER/ADD", async (id, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return orderService.orderMeal(id, token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})

// ADD ORDERS
export const cancelOrder = createAsyncThunk("ORDER/CANCEL", async (id, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return orderService.updateOrder(id, token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})