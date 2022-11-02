import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartItem, setCartItem] = useState(false);

  const showCartHandler = () => {
    setCartItem(true);
  };

  const hideCartHandler = () => {
    setCartItem(false);
  };

  return (
    <CartProvider>
      {cartItem && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
