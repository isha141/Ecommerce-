import './App.css';
import Navbar  from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import ShopCategory from './Pages/ShopCategory.jsx';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids from './Components/Assets/banner_kids.png';
import beauty from './Components/Assets/banner_beauty.jpg';
function App() {
  return (
    <div> 
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/"  element={<Shop></Shop>} />
      {/* </Routes> */}
      {/* <Routes> */}
        <Route path="/men"  element={<ShopCategory banner={men_banner} category="men"></ShopCategory>} />
      {/* </Routes> */}
      {/* <Routes> */}
        <Route path="/women"  element={<ShopCategory banner={women_banner} category="women"></ShopCategory>} />
      {/* </Routes> */}
      {/* <Routes> */}
        <Route path="/kid"  element={<ShopCategory banner={kids} category="kid"></ShopCategory>} />
      {/* </Routes> */}
      {/* <Routes> */}
        <Route path="/beauty"  element={<ShopCategory banner={beauty} category="beauty"></ShopCategory>} />
      {/* </Routes> */}
      {/* <Routes> */}
        <Route path="/login"  element={<LoginSignUp></LoginSignUp>} />
      {/* </Routes> */}
      {/* <Routes> */}
        <Route path="/product"  element={<Product></Product>}>
         <Route path=":productId"  element={<Product></Product>} />
       </Route>  
        
      {/* </Routes>  */}
      {/* <Routes> */}
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter> 
    </div>
  );
}

export default App;
