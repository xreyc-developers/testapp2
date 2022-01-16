import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Challenge1 from './pages/Challenge1';
import Challenge2 from './pages/Challenge2';

function App() {
 
  return (
    <div>
      <div className="navigation-links">
        <Link to="/">Challenge 1</Link>
        <Link to="/challenge2">Challenge 2</Link>
      </div>
      <Routes>
        <Route path="/" element={<Challenge1 />} />
        <Route path="/challenge2" element={<Challenge2 />} />
      </Routes>
    </div>
  );
}

export default App;
