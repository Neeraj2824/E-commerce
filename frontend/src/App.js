
import './App.css';
import Nav from './nav';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Footer from './Footer';
import Signup from './Signup';
import Login from './login';
import Addproduct from './addproduct';
import Myproducts from './Myproducts';
import Updateproduct from './Update';
import PrivateComponent from './PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Footer/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<Myproducts/>}></Route>
        <Route path="/Addproduct" element={<Addproduct/>}></Route>
        <Route path="/updateproduct" element={<Updateproduct/>}></Route>
      
        <Route path="/logout" element={<h1>Logout</h1>}></Route>
        </Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
