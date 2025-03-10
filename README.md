# 🛍️ eCommerce Store - React Course Assignment

This project is an **eCommerce store** built using **React, TypeScript, Vite, and Tailwind CSS** as part of the Noroff **Course Assignment**. It features a **homepage with product listings**, a **search bar with auto-complete**, a **shopping cart with persistent storage**, a **checkout system**, and a **contact form with validation**.

## 🚀 **Live Demo**
🔗 [View the deployed project on Netlify](https://framework-noroff-shop.netlify.app/)

---

## 📌 **Features**
✅ **Homepage** displaying all products  
✅ **Look-ahead Search Bar** for filtering products in real-time  
✅ **Product Page** with detailed product information, reviews, and Add to Cart button  
✅ **Shopping Cart** with quantity management, total calculation, and persistent local storage  
✅ **Checkout Page** listing all products in the cart  
✅ **Checkout Success Page** clearing the cart and confirming the order  
✅ **Contact Page** with form validation  
✅ **Global Layout Component** with a Header, Footer, and Navigation  
✅ **Dynamic Routing** using React Router  
✅ **Responsive Design** using Tailwind CSS  
✅ **State Management** using Zustand  
✅ **Deployed on Netlify**  

---

## 🛠️ **Tech Stack**
| Tool | Description |
|------|------------|
| ⚛ **React** | Frontend JavaScript framework |
| 🏎 **Vite** | Fast development build tool |
| 💙 **TypeScript** | Static typing for React |
| 🎨 **Tailwind CSS** | Utility-first CSS framework |
| 🌍 **React Router** | Client-side navigation |
| 📦 **Zustand** | State management for Cart |
| 🌐 **Netlify** | Deployment & hosting |


## 📌 Pages & Features

### 🏠 **Homepage (`/`)**
- Displays a **list of products** from the API
- **Search bar** with **auto-complete filtering**
- Clicking a product takes the user to the **Product Page**

---

### 📦 **Product Page (`/product/:id`)**
- Shows **product details**, including:
  - **Title**, **description**, **price**, and **image**
  - **Discount calculation** and display
  - **Customer reviews**
- Allows adding the item to the **cart**

---

### 🛒 **Cart Page (`/cart`)**
- Lists **all added products** with:
  - **Quantity controls** (increase/decrease items)
  - **Remove item** option
- Displays **total price**
- "Checkout" button navigates to **Checkout Success Page**

---

### ✅ **Checkout Success Page (`/checkout/success`)**
- Shows a **confirmation message** upon successful checkout
- **Clears the cart** after purchase

---

### 📞 **Contact Page (`/contact`)**
- Contains a **form with validation**:
  - **Full Name** (min **3** characters)
  - **Subject** (min **3** characters)
  - **Email** (must be a **valid format**)
  - **Message** (min **3** characters)
- **Submits data to console**
- Displays **error messages** for invalid inputs


## ⚡ **Installation & Setup**
To run this project locally, follow these steps:

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Panida287/js-framework-ca.git
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Development Server**
```sh
npm run dev
```





