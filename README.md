# WTWR (What to Wear?) — Back-End API

This project is the server-side API for the WTWR application. It provides user management, clothing item management, and MongoDB data storage following the requirements of Project 12.

## 📌 Description

The API supports:

- Creating and retrieving users
- Creating, retrieving, deleting, liking, and unliking clothing items
- Validating URLs and request data
- Handling errors with consistent status codes
- Connecting to MongoDB at `mongodb://localhost:27017/wtwr_db`

## 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- Validator.js
- ESLint (airbnb-base config)
- Prettier (code formatting)

## 🔧 Available Scripts

```bash
npm start   # Runs the server on localhost:3001
npm run dev # Runs server with hot reload
npm run lint # Runs ESLint
```
