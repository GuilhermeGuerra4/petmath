import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Question from "./pages/Question";

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Question/>} />
            <Route path="/questions" element={<Question/>} />
          </Routes>
    </Router>
  );
}

export default App;