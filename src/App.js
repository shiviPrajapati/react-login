import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './component/context/AuthContext';
import Home from './component/Home';
import Login from './component/Login';
import SignUp from './component/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthContextProvider>
      <Routes>
        <Route exact path="/" element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
      </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
