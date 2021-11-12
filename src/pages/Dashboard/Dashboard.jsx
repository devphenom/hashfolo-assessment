import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "../../components/Dashboard/Portfolio/Portfolio";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route exact path={`/`} element={<Portfolio />} />
      </Routes>
    </>
  );
};

export default Dashboard;
