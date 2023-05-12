import React from 'react';
import '../Style/Home.css';
import { Link } from 'react-router-dom';
import { FaChartLine, FaCashRegister } from 'react-icons/fa';

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="app-name">Inventory Tracker</h1>
      <div className="options">
        <Link to="/Inventory">
          <button className="option-button">
            <FaChartLine className="option-icon" />
            View Inventory Report
          </button>
        </Link>
        <Link to="/point_of_sale">
          <button className="option-button">
            <FaCashRegister className="option-icon" />
            POS System
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;