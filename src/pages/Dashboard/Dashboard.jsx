import { Routes, Route } from "react-router-dom";
import Portfolio from "../../components/Dashboard/Portfolio/Portfolio";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path={`/`} element={<Portfolio />} />
      </Routes>
    </>
  );
};

export default Dashboard;
