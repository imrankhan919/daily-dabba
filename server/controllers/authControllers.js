const bcrypt = require('bcryptjs')
const User = require("../models/userModel")
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {

    const { name, email, phone, password } = req.body

    // Check if all fields are coming
    if (!email || !name || !phone || !password) {
        res.status(400)
        throw new Error('Please Fill All Details!!')
    }


    // Check if phone length is 10
    if (phone.length !== 10) {
        res.status(400)
        throw new Error('Invalid Phone Number!!')
    }


    // Check if password length atleast 8 character long
    if (password.length < 8) {
        res.status(400)
        throw new Error('Password Length Must Be 8 Character Long!!')
    }

    // Check if user already exists

    const emailExist = await User.findOne({ email: email })
    const phoneExist = await User.findOne({ phone: phone })

    if (emailExist || phoneExist) {
        res.status(400)
        throw new Error('User Already Exist')
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)


    // Create User
    const user = await User.create({
        name,
        email,
        phone,
        password: hashedPassword
    })

    if (!user) {
        res.status(400)
        throw new Error('User Not Created!')
    }


    res.status(201).json({
        name: user.name,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        token: generatToken(user._id)
    })

}

const loginUser = async (req, res) => {
    const { email, password } = req.body

    // Check if all fields are coming
    if (!email || !password) {
        res.status(400)
        throw new Error('Please Fill All Details!!')
    }

    // Find If User Exist
    const user = await User.findOne({ email })

    if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            isAdmin: user.isAdmin,
            token: generatToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }
}


// Generate Token
const generatToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}



module.exports = { registerUser, loginUser }