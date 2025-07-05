import { configureStore } from '@reduxjs/toolkit'
import auth from "./auth/authSlice"
import admin from "./admin/adminSlice"
import meal from "./meals/mealSlice"

const store = configureStore({
    reducer: { auth, admin, meal }
})


export default store