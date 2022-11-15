import "./App.css";
import Header from "./components/Header";
import Totalmoney from "./components/Totalmoney";
import Product from "./components/Product";
import Receipt from "./components/Receipt";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Header/>
      <Totalmoney />
      <Product/>
      <Receipt/>
      </div>
    </div>
  );
}

export default App;
