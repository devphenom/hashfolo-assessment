import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
// css
import "./App.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Auth />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
