import "./App.css";
import Header from "./pages/Header";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyCart from "./pages/MyCart";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Navigation from "./Navigation";
import { useState } from "react";
import data from "../src/pages/data";
import ProductsTwo from "./ProductsTwo";
import ShoppingCart from "./ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <Navigation cart={cart} />
      <Route
        exact
        path="/products"
        render={() => <ProductsTwo products={products} addItem={addItem} />}
      />
      <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      {/* <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/cart" render={() => <MyCart />} />
          <Route exact path="/products" render={() => <Products />} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
