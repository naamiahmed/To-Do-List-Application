# 📝 To-Do List Application (MERN Stack)

This project is a **full-stack To-Do List application** developed using the **MERN stack** (MongoDB, Express, React, Node.js). It demonstrates the implementation of a complete **CRUD application**, including both frontend and backend components.

---

## ✨ Features

- **➕ Add a new task**: Create a task with a title.
- **📋 View all tasks**: View tasks organized into two categories:
  - 🟢 Active tasks
  - ✅ Completed tasks
- **✔️ Mark a task as completed/uncompleted**: Toggle the completion status of a task using checkboxes.
- **✏️ Edit a task**: Edit the task title inline.
- **❌ Delete a task**: Remove a task from the list.
- **📱 Responsive design**: The app is fully responsive and works on desktop and mobile devices.

---

## 📂 Project Structure

The project is split into two directories:

- **Backend**: Contains the Node.js/Express.js server and MongoDB logic.
- **Frontend**: Contains the React.js application for the user interface.

---

## 🛠️ Setup and Installation

### Prerequisites

- Node.js and npm installed
- MongoDB database (local or cloud-based, e.g., MongoDB Atlas)

---

### 1️⃣ Backend Setup

# Clone the repository:
git clone <repository_url>
cd todo-app-backend

# Install dependencies:
npm install

# Set up environment variables:
# Create a .env file in the todo-app-backend directory and add the following:
MONGO_URI=your_mongodb_connection_string
PORT=5000

# Run the backend server:
npm run dev

# The backend server will run at:
http://localhost:5000

---

### 2️⃣ Frontend Setup

# Navigate to the frontend directory:
cd ../todo-app-frontend

# Install dependencies:
npm install

# Start the React app:
npm start

# The frontend app will run at:
http://localhost:3000
