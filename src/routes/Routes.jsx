import {HashRouter as Router, Routes as Switch, Route} from 'react-router-dom';

import MyProvider from "../context/MyProvider"

import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Products from "../components/pages/Products";
import ProductDetail from "../components/pages/ProductDetail";
import NotFound from "../components/pages/NotFound";
import Cart from "../components/Cart"
import Checkout from "../components/Checkout"
import OrderPlaced from "../components/OrderPlaced"



const Routes = () => (
    <MyProvider>
    <Router>
        <Header />
        <Switch>
         <Route path="/" element={<Home/>} />
         <Route path="/about/*" element={<About/>}/>
         
         <Route path="/products" element={<Products/>} />
         <Route path="/product-detail" element={<ProductDetail/>} />
         <Route path="/cart" element={<Cart/>} />
         <Route path="/checkout" element={<Checkout/>} />
         <Route path="/orderPlaced"element={<OrderPlaced />} />

        
         <Route path="*" element={<NotFound />} />
        </Switch>
        <Footer />
    </Router>
    </MyProvider>
)

export default Routes