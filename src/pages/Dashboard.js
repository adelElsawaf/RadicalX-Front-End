import React from "react";
import Sidebar from "../components/Navigation/Sidebar";
import AddLogo from "../assets/add-square.svg";
import { Button } from "../components";
import Card from "../components/Dashboard/Card";
// CSS Imports
import "../styles/Dashboard/dashboard.css";

const Dashboard = () => {
  return (
    <div className="content">
      <Sidebar />
      <div>
        
          <div className="page-header">
            <h1>Apprenticeship</h1>
            <Button icon={AddLogo} href="#">
              Create New Apprenticeship
            </Button>
          </div>
          <div className="cards">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
