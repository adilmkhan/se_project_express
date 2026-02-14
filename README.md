# WTWR Backend API

## Overview

This project is the backend for the WTWR (What To Wear) application. It is a REST API built with Node.js, Express, and MongoDB that allows users to register, log in, and manage clothing items based on weather conditions (`hot`, `warm`, `cold`).

The server runs on:

http://localhost:3001

and connects to:

mongodb://localhost:27017/wtwr_db

---

## Technologies Used

- Node.js
- Express
- MongoDB & Mongoose
- JWT Authentication
- bcrypt (password hashing)
- validator (email & URL validation)
- ESLint (airbnb-base config)
- Prettier
- CORS

---

## Authentication

- Users register via `POST /signup`
- Users log in via `POST /signin`
- JWT tokens expire after 7 days
- All routes are protected except:
  - `POST /signup`
  - `POST /signin`
  - `GET /items`
- Password hashes are never returned in responses

---

## API Routes

### Users

- `POST /signup`
- `POST /signin`
- `GET /users/me`
- `PATCH /users/me`

### Clothing Items

- `GET /items`
- `POST /items`
- `DELETE /items/:id` (owner only)
- `PUT /items/:id/likes`
- `DELETE /items/:id/likes`

Users cannot delete items they did not create.

---

## Error Handling

The API returns appropriate status codes:

- 400 — Invalid data or ID
- 401 — Unauthorized
- 403 — Forbidden
- 404 — Not found
- 409 — Duplicate email
- 500 — Server error

Error responses include only a `message` field.

---

## Project Pitch Video

### Click **[here](https://www.loom.com/share/9261d829154a42f7a75e950adedda43d)** to view my app pitch recording.
