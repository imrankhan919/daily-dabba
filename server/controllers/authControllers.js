const registerUser = async (req, res) => {
    res.send('user registered!!')
}

const loginUser = async (req, res) => {
    res.send('user logined!!')
}

module.exports = { registerUser, loginUser }