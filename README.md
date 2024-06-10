# COT Web App Backend

This is the backend part of the COT Web App, meant to help traders interpret signals given by the Commitment of Traders (COT) report.

## Prerequisites

- Node.js (v14 or above)
- npm (v6 or above)
- MongoDB (v4.4 or above)

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/cot-webapp-backend.git
    cd cot-webapp-backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory**:
    ```env
    PORT=5000
    JWT_SECRET=your_jwt_secret_key
    DB_URL=mongodb://127.0.0.1:27017/cotwebapp
    ```

4. **Start the MongoDB service** (if not already running):
    ```bash
    sudo systemctl start mongod
    ```

5. **Run the development server**:
    ```bash
    npm run dev
    ```

    The server will be running at `http://localhost:5000`.

## Project Structure

- `src/`
  - `controllers/`: Request handling logic (e.g., authController.js)
  - `routes/`: API route definitions (e.g., authRoutes.js)
  - `config/`: Configuration files (e.g., db.js)
  - `server.js`: Entry point of the Node.js server
  - `app.js`: Express app setup

## Available Scripts

- `npm start`: Runs the app in production mode
- `npm run dev`: Runs the app in development mode with `nodemon`
- `npm test`: Runs the test suite

## Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss any changes.
