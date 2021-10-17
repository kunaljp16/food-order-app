import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Store/CartProvider";
function App() {
  const [isCartShown, setCartIsShown] = useState(false);

  const showCartModal = () => {
    setCartIsShown(true);
  };

  const hideCartModal = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <div className="container-fluid">
        {isCartShown && <Cart onHideCartFn={hideCartModal} />}
        <Header onShowCartFn={showCartModal} />
        <main>
          <Meals />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
