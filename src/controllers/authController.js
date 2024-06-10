const axios = require('axios');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Send a POST request to the WordPress JWT authentication endpoint
        const response = await axios.post('http://localhost:10008//wp-json/jwt-auth/v1/token', {
            username,
            password,
        });

        // Check if the response is successful
        if (response.data && response.data.token) {
            return res.json({ token: response.data.token });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred', error: error.message });
    }
};
