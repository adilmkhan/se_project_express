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

## Cloud Deployment

### Server Infrastructure

- Provisioned a cloud-based virtual server to host the full-stack application.
- Configured the environment to run a Node.js backend and serve the React frontend.
- Managed application processes using **PM2** to ensure uptime and automatic restarts.

### Reverse Proxy Configuration

- Configured **Nginx** as a reverse proxy to route external traffic to the backend application.
- Improved performance and security by handling incoming HTTP/HTTPS requests at the server layer.

### Secure HTTPS Communication

- Implemented **SSL certificates** to enable secure HTTPS connections.
- Ensured encrypted communication between users and the server.

### Domain & DNS Setup

- Connected the application to a **custom domain**.
- Configured DNS records to route traffic from the domain to the cloud server.

### Application Integration

- Deployed both **React frontend and Express backend** to the server.
- Configured **CORS** to allow secure communication between frontend and backend services.

### Process Reliability & Monitoring

- Used **PM2 process manager** to keep the Node.js server running in production.
- Implemented **request and error logging** to track runtime issues and assist with debugging.

### Production Configuration

- Secured sensitive configuration using **environment variables**.
- Ensured database connectivity and application services operate correctly in the production environment.

## Domain Name

- Domain name: wttowear.blinklab.com

- ### Click **[here](https://www.wttowear.blinklab.com/)** to view my full-stack application deployed on the GCP server instance

## Front-end Repo

### Click **[here](https://github.com/adilmkhan/se_project_react)** to be directed to the REACT front-end github repo.

## Project Pitch Video

### Click **[here](https://www.loom.com/share/45ee20aaaaf545568a3abea2ea0b97b3)** to view my app pitch recording.
