import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <div className="container-fluid px-0">
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
