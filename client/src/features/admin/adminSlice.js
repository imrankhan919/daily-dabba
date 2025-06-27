import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminService from "./adminService";

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        users: [],
        allOrders: [],
        allMeals: [],
        allRatings: [],
        adminLoading: false,
        adminSuccess: false,
        adminError: false,
        adminErrorMessage: ""
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllUsers.pending, (state, action) => {
                state.adminLoading = true
                state.adminSuccess = false
                state.adminError = false
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = true
                state.users = action.payload
                state.adminError = false
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = false
                state.adminError = true
                state.adminErrorMessage = action.payload
            })
            .addCase(getAllOrders.pending, (state, action) => {
                state.adminLoading = true
                state.adminSuccess = false
                state.adminError = false
            })
            .addCase(getAllOrders.fulfilled, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = true
                state.allOrders = action.payload
                state.adminError = false
            })
            .addCase(getAllOrders.rejected, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = false
                state.adminError = true
                state.adminErrorMessage = action.payload
            })
            .addCase(getAllRatings.pending, (state, action) => {
                state.adminLoading = true
                state.adminSuccess = false
                state.adminError = false
            })
            .addCase(getAllRatings.fulfilled, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = true
                state.allRatings = action.payload
                state.adminError = false
            })
            .addCase(getAllRatings.rejected, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = false
                state.adminError = true
                state.adminErrorMessage = action.payload
            })
    }
})


export default adminSlice.reducer


// Getting all users
export const getAllUsers = createAsyncThunk("ADMIN/FETCH/USERS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.fetchAllUsers(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})

// Getting all orders
export const getAllOrders = createAsyncThunk("ADMIN/FETCH/ORDERS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.fetchAllOrders(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})

// Getting all ratings
export const getAllRatings = createAsyncThunk("ADMIN/FETCH/RATINGS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.fetchAllRatings(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})