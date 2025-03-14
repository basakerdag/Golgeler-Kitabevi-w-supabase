import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './Home'; 
import Category from './pages/Category'; 
import AboutUs from './pages/aboutUs'; 
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Shopping from './pages/Shopping';
import Favorites from './pages/Favorites';
import Header from './pages/Header';
import Edebiyat from './pages/categoryPages/Edebiyat';
import Felsefe from './pages/categoryPages/Felsefe';
import Psikoloji from './pages/categoryPages/Psikoloji';
import Tarih from './pages/categoryPages/Tarih';
import Bilim from './pages/categoryPages/Bilim';
import Account from './pages/Account';
import Cart from './pages/Cart';
import { Navigate } from 'react-router-dom';




function App() {



  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  return (
      <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/category/" element={<Category />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/signUp" element={!loggedInUser ? <SignUp /> : <Navigate to="/account" />}/>  
        <Route path="/singIn" element={<SignIn/>}  />
        <Route path="/account" element={loggedInUser ? <Account /> : <Navigate to="/signUp" />} />    
        <Route path="/shopping" element={<Shopping/>} />
        <Route path="/favorites" element={<Favorites/>}  />
        <Route path="/categoryPages/edebiyat" element={<Edebiyat/>}/>
        <Route path="/categoryPages/felsefe" element ={<Felsefe/>} />
        <Route path="/categoryPages/psikoloji"   element={<Psikoloji/>}  />
        <Route path="/categoryPages/tarih"   element={<Tarih/>}  />
        <Route path="/categoryPages/bilim" element={<Bilim/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
