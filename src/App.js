


import Header from "./Components/Header";
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import InforProduct from "./Pages/InforProduct";
import Contact from "./Pages/Contact";
import ProductCart from "./Components/ProductCart";


function App(){

  return(
    <Router>
      <div className = "App">
        <Header/>
        <Routes>
          <Route path = {"/product/:id"} exact = {true} element = {<InforProduct/>}/>
          <Route path = {"/product"} exact = {true} element = {<Products/>}/>
          <Route path = {"/contact"} exact = {true} element = {<Contact/>}/>
          <Route path = {"/shopping-cart"} exact = {true} element = {<ProductCart/>} />
          <Route path = {"/"} exact = {true} element = {<Home/>}/>
        </Routes>
      </div>
    </Router>
    
  )
}

export default App;
