import React from "react";
import { Header } from "./containers/header";
import ProductsList from "./containers/productsList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from "./containers/productDetail";


export function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductsList} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>Not Found 404</Route>
        </Switch>
      </Router>
    </div>
  );
}
