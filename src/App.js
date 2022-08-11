import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AddProduct from './addProduct';
import AllProducts from './AllProduct';
import Basket from './Basket';
import Register from './register';
import ComplateOrder from './ComplateOrder';
import Login from './login';
import { useSelector } from 'react-redux';
import FinishOrder from './finishOrder';
import Nav from './nav';


function App() {
  let currentUser=useSelector(state=>state.us.currentUser);
  return (
    <>
    {/* <nav>
      <Link to="AllProduct">כל המוצרים</Link>
     {currentUser&& currentUser.job?<Link to="addProduct">הוספת מוצר</Link>:null} 
      <Link to="Basket" >סל קניות</Link>
      <Link to="register" >הרשמה</Link>
      <Link to="login" >כניסה</Link>
    </nav> */}
    <Nav></Nav>
    <Routes>
    
      <Route path='AllProduct' element={<AllProducts></AllProducts>}></Route>
      <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
      <Route path='Basket' element={<Basket></Basket>}></Route>
      <Route path='register' element={<Register></Register>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='complateOrder' element={<ComplateOrder></ComplateOrder>}></Route>
      <Route path='finishOrder' element={<FinishOrder></FinishOrder>}></Route>
    </Routes>


    
    </>
    // <div>
    // <AllProducts></AllProducts>
    // <AddProduct></AddProduct>
    // <Basket></Basket>
    // </div>
  );
}

export default App;
