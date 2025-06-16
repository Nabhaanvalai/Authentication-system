# MERN Login System

A simple authentication system built with the MERN stack (MongoDB, Express, React, Node.js) that supports user registration and login functionality.

## Features

- User registration with username and password
- User login with credential validation
- Firebase authentication integration
- OTP verification

## Project Structure

The project is divided into two main parts:

### Backend

- Express.js server
- MongoDB database connection
- User authentication API endpoints
- Simple user data model

### Frontend

- React application built with Create React App
- React Router for navigation
- Form-based authentication
- Firebase integration for alternative authentication

## Prerequisites

- Node.js (v14+)
- MongoDB (running locally or connection string)
- npm or yarn

## Installation and Setup

### Clone the Repository

```bash
git clone <repository-url>
cd Mern-Login
```

### Backend Setup

```bash
cd backend
npm install
```

Start the backend server:

```bash
node server.js
```

The server will run on port 8000.

### Frontend Setup

```bash
cd frontend
npm install
```

Start the frontend development server:

```bash
npm start
```

The React app will run on port 3000.

## API Endpoints

- **POST /register**: Register a new user
- **POST /login**: Authenticate a user

## Technologies Used

### Backend
- Express.js
- MongoDB with Mongoose
- CORS

### Frontend
- React
- React Router DOM
- Axios for API requests
- Firebase
- Three.js integration

## Future Improvements

- Password hashing for security
- JWT authentication
- User profiles
- Password reset functionality

## License

This project is licensed under the ISC License. 