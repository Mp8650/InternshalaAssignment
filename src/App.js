import 'bootstrap/dist/css/bootstrap.min.css'; // Required
import './App.css'; // Your overrides
import { Routes,Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
     <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
     </Routes>
  );
}

export default App;
