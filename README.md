# Student API

A simple RESTful API for managing student data using **Node.js**, **Express**, and **MongoDB** (via Mongoose).

## 🚀 Features

- Create, Read, Update, Delete (CRUD) operations for students
- RESTful API structure
- MongoDB database connection using Mongoose
- JSON body parsing with `express.json()`
- Tested with Postman

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Postman** (for testing)

---

## 🧪 API Endpoints

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/students`     | Get all students     |
| GET    | `/api/students/:id` | Get a student by ID  |
| POST   | `/api/students`     | Add a new student    |
| PUT    | `/api/students/:id` | Update student by ID |
| DELETE | `/api/students/:id` | Delete student by ID |

---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js & npm installed
- MongoDB installed & running

### Installation

```bash
# Clone the repository
git clone https://github.com/rohitware/student-api.git

cd student-api

# Install dependencies
npm install

# Start the server
npm run dev
```
