exports.login = (req, res) => {
    const { username, password } = req.body;
    // Handle login logic, authenticate user, and return token
    res.json({ message: 'Login endpoint' });
};