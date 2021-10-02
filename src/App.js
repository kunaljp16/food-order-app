import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {
  const [isCartShown, setCartIsShown] = useState(false);

  const showCartModal = () => {
    setCartIsShown(true);
  };

  const hideCartModal = () => {
    setCartIsShown(false);
  };

  return (
    <div className="container-fluid px-0">
      {isCartShown && <Cart onHideCartFn={hideCartModal}/>}
      <Header onShowCartFn={showCartModal}  />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
