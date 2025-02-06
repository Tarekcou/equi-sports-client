
# 🏀 Equi Sports

**Equi Sports** is an intuitive e-commerce platform designed to help users easily find, compare, and purchase sports equipment from various categories. Built with **React**, the application ensures a fast, responsive, and engaging user experience across all devices.

🚀 **[Live Demo](https://equi-sports-295ba.web.app/)**

---

## 📑 Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation & Setup](#installation--setup)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [API Information](#api-information)  
- [License](#license)  
- [Troubleshooting](#troubleshooting)  
- [Acknowledgments](#acknowledgments)  

---

## 🎯 Project Overview

**Equi Sports** is a **Sports Equipment Buying React Application** that simplifies the process of buying and selling sports equipment. It offers a user-friendly interface to browse, compare, and purchase items from a wide range of categories.

### 🎯 **Motivation**  
To create a seamless platform for buying and selling sports equipment.

---

## 🌟 Features

- 🛒 **Product Browsing:** Explore a wide range of sports equipment.  
- 🔍 **Advanced Search & Filters:** Find products easily based on categories, brands, and price.  
- 💬 **Product Comparison:** Compare different products side-by-side.  
- 🗂️ **Secure Authentication:** User login and registration with JWT.  
- 📦 **Order Management:** Track orders and manage purchases efficiently.  

---

## 🛠️ Tech Stack

- **Frontend:** React  
- **Styling:** Tailwind CSS  
- **Routing:** React Router  
- **Authentication:** JWT (JSON Web Tokens)  
- **Build Tool:** Vite  
- **Backend:** Custom API with `equisport-server`  
- **Deployment:** Firebase Hosting  

---

## ⚙️ Installation & Setup

### 📋 **Prerequisites**

- **Node.js:** v14 or higher  
- **npm** or **yarn** installed globally  

### 🚀 **Setup Instructions**

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/your-repo/equi-sports.git
   cd equi-sports
   ```

2. **Install Dependencies:**  
   ```bash
   npm install
   ```

3. **Run the Application:**  
   ```bash
   npm run dev
   ```

4. **Build for Production:**  
   ```bash
   npm run build
   ```

### ⚙️ **Environment Variables**

If the project uses APIs or third-party services, create a `.env` file in the root directory:  
```env
VITE_API_URL=https://api.equisport.com
VITE_FIREBASE_KEY=your-firebase-key
```

---

## 🚀 Usage

- **Browse Products:** Explore sports equipment from various categories.  
- **Add to Cart:** Select products and add them to your shopping cart.  
- **Secure Checkout:** Complete purchases with secure payment options.  
- **Manage Orders:** Track your orders and view purchase history.

---

## 📂 Project Structure

```bash
equi-sports/
├── public/
├── src/
│   ├── assets/          # Images, icons, fonts
│   ├── components/      # Reusable UI components
│   ├── pages/           # Application pages (Home, Product, Cart, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API service calls
│   ├── utils/           # Utility functions
│   └── App.jsx          # Root component
├── .env                 # Environment variables
├── package.json
└── vite.config.js
```

---

## 🔗 API Information

- **Backend:** The application interacts with a custom backend (`equisport-server`) to handle requests.  
- **Custom APIs:** APIs for product listings, user authentication, cart management, and order processing.

### Example API Endpoints:
- `POST /api/auth/login` - User login  
- `GET /api/products` - Fetch all products  
- `POST /api/cart` - Add item to cart  
- `GET /api/orders` - Retrieve order history  

---

## 📜 License

This project is licensed under the **MIT License**.

**Third-Party Libraries:**  
- [Tailwind CSS](https://tailwindcss.com/)  
- [React Router](https://reactrouter.com/)  
- [JWT (JSON Web Tokens)](https://jwt.io/)

---

## 🚩 Troubleshooting

- **Issue:** App fails to start after cloning the repo.  
  **Fix:** Ensure Node.js and npm are installed. Delete `node_modules` and run `npm install` again.  

- **Issue:** API request errors.  
  **Fix:** Check `.env` configuration and ensure the `equisport-server` backend is running.  

---

## 🙏 Acknowledgments

- Inspired by leading e-commerce platforms.  
- Special thanks to the open-source libraries and contributors that made this project possible.

---
