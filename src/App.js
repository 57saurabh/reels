import logo from './logo.svg';
import './App.css';
import SignUp from './components/signup/SignUp';
import {BrowserRouter as Router, Routes , Route, BrowserRouter} from 'react-router-dom';
import SignIn from './components/signin/SignIn';
import { AuthProvider } from './Context/AuthContext';
import Feeds from './components/feed/Feeds';
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <Router>
      <AuthProvider>
    <Routes> 
    <Route element={<PrivateRoute/>}>
      <Route element={<Feeds/>} path="/"/>
    </Route>
      
    <Route element={<SignIn/>} path="/login" />
    <Route element={<SignUp/>} path="/signup"/>
  

    {/* <SignUp/> */}
    {/* <SignIn/> */}
    </Routes>
    </AuthProvider>
    </Router>
  );
}

export default App;
