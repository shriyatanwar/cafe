# 🍽️ Restaurant Website

A modern restaurant website built with **ReactJS** and **Firebase**, allowing users to order food online,book a table ,  explore restaurant specialties, and manage their cart seamlessly.

## 🚀 Features
✅ Browse and view restaurant specialties 
✅ Can book a table 
✅ Add items to cart and place orders online  
✅ Firebase Authentication for secure logins  
✅ **useContext for Global State Management**  
✅ **Props for Component Communication**  
✅ **useState and useEffect for Component State Management**  
✅ **React Router for Navigation**  

## 🛠️ Technologies Used
- **ReactJS** ⚛️  
- **Firebase Authentication** 🔐 
- **CSS** 🎨  
- **React Hooks** (useState, useEffect, useContext)  
- **React Router** 🛤️  

## ⚙️ React Concepts Used

### 1️⃣ **useContext for Global State Management**
- Used `useContext` for managing cart data globally.
- `cartContext.js` provides the cart state and functions like `addToCart` and `removeFromCart`.

```jsx
// cartContext.js
import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
```

### 2️⃣ **Props for Component Communication**
- `product.js` receives `props` from `orderOnline.js` to display menu items.

```jsx
// orderOnline.js
<Product 
  id="1"
  image={img3}
  title="Bruschetta of the Day"
  explaination="Toasted baguette topped with fresh, seasonal ingredients."
  price={581}
/>
```

### 3️⃣ **useState and useEffect for Component State**
- `useState` is used for handling UI states like loading and form data.
- `useEffect` is used for fetching data from Firebase.

### 4️⃣ **React Router for Navigation**
- Implemented navigation with `react-router-dom` in `App.js`.

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
</Router>
```

## 📌 Installation & Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/restaurant-website.git
   cd restaurant-website
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
## 📢 Future Enhancements
- ✅ Save booking details to Firebase  
- ✅ Implement a payment gateway  
- ✅ Add user reviews & ratings  

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.


💡 **Made with ❤️ by Shriya**

