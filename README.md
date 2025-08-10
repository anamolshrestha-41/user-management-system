# 👥 User Management System

A modern, full-stack web application for managing users with CRUD operations, built with Node.js, Express, MySQL, and EJS templating.

## 🌟 Features

- **Modern UI/UX**: Beautiful gradient designs with animations and responsive layout
- **Complete CRUD Operations**: Create, Read, Update, and Delete users
- **Database Integration**: MySQL database with secure parameterized queries
- **Form Validation**: Client-side and server-side validation
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive Elements**: Hover effects, animations, and confirmation dialogs

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: Pure CSS with modern gradients and animations
- **Data Generation**: Faker.js for generating UUIDs
- **HTTP Methods**: Method-override for RESTful routes

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MySQL server running
- Database named `delta_app` with `user` table

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install express ejs mysql2 @faker-js/faker method-override
   ```

3. Set up MySQL database:
   ```sql
   CREATE DATABASE delta_app;
   USE delta_app;
   CREATE TABLE user (
       id VARCHAR(255) PRIMARY KEY,
       username VARCHAR(100),
       email VARCHAR(100),
       password VARCHAR(100)
   );
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Visit `http://localhost:8080`

## 🎯 Routes

- `GET /` - Home page with user statistics
- `GET /users` - View all users in dashboard
- `GET /users/new` - Add new user form
- `POST /users` - Create new user
- `GET /user/:id/edit` - Edit user form
- `PATCH /user/:id` - Update user
- `DELETE /user/:id` - Delete user

## 🎨 Design Highlights

- **Gradient Backgrounds**: Beautiful purple-blue gradients throughout
- **Card-based Layout**: Modern card design for user display
- **Animations**: Smooth hover effects and loading animations
- **Typography**: Professional font choices and hierarchy
- **Icons**: Emoji icons for better visual appeal
- **Responsive**: Mobile-first responsive design

## 🔒 Security Features

- Parameterized SQL queries to prevent SQL injection
- Password confirmation for user updates
- Form validation and error handling

## 🙏 Credits

This project was created as part of the **Backend Development** course from [**Apna College**](https://www.apnacollege.com/).

**Course**: (Node with SQL)  
**Instructor**: Apna College Team  (Shradha Khapra)
**Platform**: [Apna College](https://www.apnacollege.com/)

Special thanks to Apna College for providing excellent web development education and practical project-based learning.

------------

## 📄 License

This project is created for educational purposes as part of Apna College curriculum.

---

**Made with ❤️ for learning web development**
