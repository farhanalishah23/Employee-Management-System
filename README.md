# 🧑‍💼 Employee Management System – MERN Stack

A full-stack Employee Management System built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) with full CRUD functionality and pagination.

---

## 🚀 Features

- ✅ Add, Edit, Delete Employees (CRUD)
- ✅ View Paginated List of Employees
- ✅ Responsive UI with React
- ✅ Backend API with Express & Node.js
- ✅ MongoDB Database Integration
- ✅ Error Handling and Validation

---

## 🛠️ Tech Stack

| Frontend | Backend         | Database |
|----------|------------------|----------|
| React.js | Node.js + Express | MongoDB  |

---

## 📂 Folder Structure

```
/frontend       --> React frontend
/backend        --> Node + Express backend
```

---

## 📦 Installation & Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/farhanalishah23/Employee-Management-System.git
cd Employee-Management-System
```

### 2️⃣ Install frontend dependencies

```bash
cd frontend
npm install
```

### 3️⃣ Install backend dependencies

```bash
cd ../backend
npm install
```

### 4️⃣ Set up `.env` file in `/backend`:

```env
PORT=5000
MONGO_URI=your-mongodb-uri
```

### 5️⃣ Run the app

#### ▶️ Backend:
```bash
cd backend
npm run dev
```

#### ▶️ Frontend:
```bash
cd frontend
npm start
```

App will run at:  
Frontend 👉 http://localhost:3000  
Backend API 👉 http://localhost:5000

---

## 🧪 API Endpoints

| Method | Endpoint             | Description        |
|--------|----------------------|--------------------|
| GET    | /api/employees       | List all employees |
| POST   | /api/employees       | Add new employee   |
| PUT    | /api/employees/:id   | Update employee    |
| DELETE | /api/employees/:id   | Delete employee    |

---

## 📄 License

This project is open-source and free to use.

