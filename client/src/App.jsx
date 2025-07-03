import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home"
import Login from './pages/Login'
import Register from './pages/Register'
import ViewMeal from './pages/ViewMeal'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import UserOrders from './pages/UserOrders'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUsers from './pages/admin/AdminUsers'
import AdminMeals from './pages/admin/AdminMeals'
import AdminRating from './pages/admin/AdminRating'
import Meals from './pages/Meals'
import AdminOrders from './pages/admin/AdminOrders'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-white'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/meals' element={<Meals />} />
          <Route path='/meal/:id' element={<ViewMeal />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/my-profile' element={<Profile />} />
          <Route path='/my-orders' element={<UserOrders />} />
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/admin/users' element={<AdminUsers />} />
          <Route path='/admin/meals' element={<AdminMeals />} />
          <Route path='/admin/orders' element={<AdminOrders />} />
          <Route path='/admin/ratings' element={<AdminRating />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  )
}

export default App
