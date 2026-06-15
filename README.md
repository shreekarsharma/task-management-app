# MERN Todo Application

A full-stack Todo Management Application built with the MERN stack (MongoDB, Express.js, React, Node.js).

The application supports user authentication, authorization, and complete CRUD operations for managing personal todos.

---

## Features

### Authentication & Authorization

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* User-specific Todos
* Secure Password Hashing using bcrypt

### Todo Management

* Create Todo
* View Todos
* Edit Todo
* Delete Todo
* Mark Todo as Complete/Incomplete

### User Experience

* Responsive Design
* Clean UI
* Loading States
* Error Handling

---

## Tech Stack

### Frontend

* React
* React Router DOM
* Axios
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

### Database

* MongoDB Atlas
* Mongoose

---

## Project Structure

```text
todo-app/

├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd todo-app
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

Start backend:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

```bash
cd client
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

#### Login User

```http
POST /api/auth/login
```

---

### Todos

#### Get User Todos

```http
GET /api/todos
```

#### Create Todo

```http
POST /api/todos
```

#### Update Todo

```http
PUT /api/todos/:id
```

#### Delete Todo

```http
DELETE /api/todos/:id
```

---

## Environment Variables

### Backend

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Deployment

### Frontend

Deploy on Vercel:

```text
https://vercel.com
```

### Backend

Deploy on Render:

```text
https://render.com
```

### Database

MongoDB Atlas:

```text
https://mongodb.com/atlas
```

---

## Security Features

* Password Hashing using bcrypt
* JWT Authentication
* Protected API Routes
* Authorization Checks
* User-specific Data Access

---

## Future Improvements

* Search Todos
* Filter Todos
* Due Dates
* Priority Levels
* Dark Mode
* Pagination
* Real-time Updates using Socket.io

---

## Author

Developed using the MERN Stack.
