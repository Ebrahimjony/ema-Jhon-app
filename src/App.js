import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Shops from './component/Shops/Shops';
import Order from './component/Order/Order';
import ManageEnventory from './component/ManageEnventory/ManageEnventory';
import Login from './component/Login/Login';
import SignUP from './component/SignUp/SignUP';
import RequireAuth from './component/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/Home' element={<Shops></Shops>}></Route>
        <Route path='/Order' element={<Order></Order>}></Route>
        <Route path='/ManageEnventory' element={
          <RequireAuth>
            <ManageEnventory></ManageEnventory>
          </RequireAuth>
        }></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/SignUp'element={<SignUP></SignUP>}></Route>
      </Routes>
      
    </div>
  )
};
export default App;
