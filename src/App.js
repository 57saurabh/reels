import logo from './logo.svg';
import './App.css';
import SignUp from './components/signup/SignUp';
import {BrowserRouter as Router, Routes , Route, BrowserRouter} from 'react-router-dom';
import SignIn from './components/signin/SignIn';


function App() {
  return (
    <Router>
    <Routes>
       <Route
      element={<SignIn/>}
      path="/login"
    />
       <Route
      element={<SignUp/>}
      path="/signup"
    />
    {/* <SignUp/> */}
    {/* <SignIn/> */}
    </Routes>
    </Router>
  );
}

export default App;
