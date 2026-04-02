# 💼 Finance Data Processing and Access Control Backend

## 📌 Overview

This project is a backend system for managing financial records with role-based access control. It simulates a finance dashboard where different users can interact with data based on their assigned roles.

The system is built using Node.js and Express, with MySQL as the database, and demonstrates API design, data modeling, and backend logic.

---

## 🌐 Live API

Base URL:
https://zorvyn-backend-9058.onrender.com

Example:
GET /users
https://zorvyn-backend-9058.onrender.com/users

---

## 🚀 Tech Stack

* **Backend:** Node.js (Express)
* **Database:** MySQL
* **Database Hosting:** Railway
* **Deployment:** Render
* **API Testing:** Thunder Client / Postman

---

## 📂 Project Structure

```
zorvyn-backend/
│
├── server.js
├── db.js
├── routes/
│   ├── users.js
│   ├── records.js
│   └── dashboard.js
├── middleware/
│   └── auth.js
└── package.json
```

---

## 🔑 Features Implemented

### 👤 User and Role Management

* Create users with roles (admin, analyst, viewer)
* Manage user data and status

### 💰 Financial Records Management

* Create, view, update, and delete financial records
* Fields include amount, type, category, date, notes, and user_id

### 🔍 Record Filtering

* Filter records by:

  * Type (income/expense)
  * Category
  * Date

### 📊 Dashboard Summary APIs

* Total income
* Total expenses
* Net balance
* Category-wise totals

### 🔐 Role-Based Access Control

* Admin → Full access
* Analyst → Read + dashboard
* Viewer → Restricted access

### ⚠️ Validation and Error Handling

* Input validation for required fields
* Proper HTTP status codes and error messages

### 🗄️ Data Persistence

* MySQL database with relational schema
* Foreign key relationship between users and records

---

## 🔌 API Endpoints

### 👤 Users

* `POST /users` → Create user (Admin only)
* `GET /users` → Get all users (Admin, Analyst)

### 💰 Records

* `POST /records` → Create record (Admin only)
* `GET /records` → Get records (Admin, Analyst)
* `PUT /records/:id` → Update record (Admin only)
* `DELETE /records/:id` → Delete record (Admin only)

### 📊 Dashboard

* `GET /dashboard/summary` → Get summary (Admin, Analyst)

---

## 🧪 Testing APIs

Use Thunder Client or Postman.

### Example Header:

```
role: admin
```

### Example Request:

```json
{
  "amount": 5000,
  "type": "income",
  "category": "salary",
  "date": "2026-04-02",
  "notes": "monthly salary",
  "user_id": 1
}
```

---

## ⚙️ Setup Instructions

1. Clone the repository:

```
git clone https://github.com/kiranmedida/zorvyn-backend
```

2. Install dependencies:

```
npm install
```

3. Configure MySQL:

* Create database (or use Railway DB)
* Create required tables
* Update credentials in `db.js` OR use environment variables

4. Run the server:

```
node server.js
```

5. Test APIs using Thunder Client or Postman

---

## 🧠 Technical Decisions

* Used Express for simplicity and flexibility in API development
* Chose MySQL for structured data and real-world database experience
* Used Railway for cloud database hosting
* Deployed backend on Render for real-world accessibility
* Implemented middleware-based role control for clean and reusable authorization logic
* Designed modular architecture (routes, middleware, DB separation)

The system is designed to simulate real-world backend architecture with scalable patterns such as modular routing, middleware-based authorization, and relational data modeling.

---

## ⚖️ Trade-offs

* Did not implement full authentication (JWT/session) to keep focus on core backend logic
* Used header-based role simulation for simplicity
* Focused on clarity and correctness over advanced features

---

## 🚧 Limitations

* No authentication system
* No pagination for large datasets
* Basic error handling (can be improved further)

---

## 🔮 Future Improvements

* Add JWT authentication
* Improve validation and error handling
* Add pagination and search
* Enhance logging and monitoring

---

## 🙌 Conclusion

This project demonstrates backend engineering fundamentals including API design, database integration, business logic implementation, and access control.

It is structured to be clean, maintainable, and easily extendable for real-world applications.

---
