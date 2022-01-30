import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Question from "./pages/Question";
<<<<<<< HEAD
import Welcome from "./pages/Welcome";

=======
import Login from './pages/Login';
>>>>>>> 1376d583c784bad02c507f852120b59934d6a990

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/questions" element={<Question/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
    </Router>
  );
}

export default App;