import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from './pages/SingIn';
import PrivateRoute from './components/PrivateRoute';
import { AuthContextProvider } from './utils/AuthContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path='/singin' element={<SignIn/>}/>
            <Route path='/' element={<PrivateRoute/>}/>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
