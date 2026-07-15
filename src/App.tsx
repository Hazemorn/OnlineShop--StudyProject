import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router"
import Header from "./components/Header/Header";
import Homepage from './pages/Home/Home'
import Catalog from "./pages/Catalog/Catalog";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Product from "./pages/Product/Product";

function App() {
  const location = useLocation()

  useEffect(() => {
    const block = document.getElementById("#top");
    if (block) {
        block.scrollIntoView({ behavior: 'smooth' });
    }
}, [location.pathname]);
  return (
    <>
     <div id={'#top'} className='container'>
        <Header/>
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path="catalog" element={<Catalog/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="product" element={<Product/>}/>
        </Routes>
        <Footer/>
     </div>
    </>
  )
}

export default App
 