// we must create a separate file for CartContext.js. This file will manage the cart globally so any component can access it without prop drilling.

// Why Use CartContext.js?
// Centralized State Management – The cart is stored in one place.
// No Prop Drilling – Any component can access cart, addToCart, and removeFromCart without passing them manually.
// Scalability – If we add new features (like local storage or user authentication), we can do it without modifying multiple files.

// createContext – Creates a new React Context (a way to share data globally).
// useState – Manages the cart state (items added to the cart).
// useContext – Allows any component to access the cart data without passing props manually.

// const CartContext = createContext(); 

// CartContext is our global cart storage.
// This will hold the cart state, addToCart function, and removeFromCart function.
// Any component can use this to access the cart anywhere in the app.

// export const CartProvider = ({ children }) => { 
   
// CartProvider is a wrapper component that provides cart data to all components inside it.
// { children } represents any component inside CartProvider, so they can access the cart.
    
// const [cart, setCart] = useState([]); 
// cart is an array that stores items added to the cart.
// setCart is the function used to update the cart state.
// Initially, cart is an empty array [] (no items added).

// const addToCart = (product) => {
//     setCart([...cart, product]);
//   };
//   This function adds an item to the cart.
//   setCart([...cart, product]) → Copies the existing cart and adds the new product to the end.
//   If a user clicks "Add to Cart," this function is called, updating the cart state.

// const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };
//   This function removes an item from the cart.
//   cart.filter((item) => item.id !== id) → Keeps only the items whose ID is not equal to id.
//   If a user clicks "Remove from Cart," this function removes the item from the cart.

// return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
/* <CartContext.Provider> makes the cart, addToCart, and removeFromCart available to all components inside CartProvider.
{children} represents all components wrapped inside CartProvider (so they can access cart data).
Now, any component inside CartProvider can add items, remove items, or read the cart. */

// export const useCart = () => {
//     return useContext(CartContext);
//   };
//   useCart() is a custom hook that allows any component to easily access cart data.
//   Instead of writing useContext(CartContext) every time, we can just call useCart().

// Any component can now do:

// const { cart, addToCart, removeFromCart } = useCart();
// This will give immediate access to the cart and its functions.

//---------------------------------//
// Step 2: Wrap the App in CartProvider (Modify App.js)
// We need to wrap the entire app in CartProvider so that all components can access the cart. 

//------------------------------------------//

// we can use useCart anywhere without prop drilling.

// Example 1: Product.js (Add to Cart)

// import { useCart } from "./CartContext"; // Import useCart

// function Product({ id, title, price }) {
//   const { addToCart } = useCart(); // Get addToCart function

//   return <button onClick={() => addToCart({ id, title, price })}>Add to Basket</button>;
// }
// ✅ Now, clicking "Add to Basket" adds the item to the cart!

// 📍 Example 2: CheckoutProduct.js (Remove from Cart)

// import { useCart } from "./CartContext"; // Import useCart

// function CheckoutProduct({ id, title }) {
//   const { removeFromCart } = useCart(); // Get removeFromCart function

//   return <button onClick={() => removeFromCart(id)}>Remove from Basket</button>;
// }
// ✅ Now, clicking "Remove from Basket" removes the item from the cart!

// 📍 Example 3: Show Cart Count in App.js

// function CartItemCount() {
//   const { cart } = useCart(); // Get cart from context
//   return <span className="nav__basketCount">{cart.length}</span>; // Show number of items
// }
// ✅ Now, the cart count updates dynamically!

