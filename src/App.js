import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/update' element={<UpdateProduct />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
