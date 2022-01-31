import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Question from "./pages/Question";
import Welcome from "./pages/Welcome";
import Login from './pages/Login';

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