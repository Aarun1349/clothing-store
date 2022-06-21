import { Route, Routes } from 'react-router-dom';
import './categories.styles.scss'
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Signin from './routes/sign-in/sign-in.component';

function App() {

  
  return (
    <>
    <Routes>
      <Route path ="/" element ={<Navigation/>}>
      <Route index  element={<Home/>}></Route>
      <Route path="shop" element={<Shop/>}></Route>
      <Route path="signin" element={<Signin/>}></Route>
      </Route>
    </Routes>
     
    </>
  );
}

export default App;
