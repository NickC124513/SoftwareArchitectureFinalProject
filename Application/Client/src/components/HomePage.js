import React from 'react';
import '../Style/Home.css';
import { Link } from 'react-router-dom';
import { FaChartLine, FaCashRegister, FaTruck } from 'react-icons/fa';

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
        <button className="option-button">
          <FaCashRegister className="option-icon" />
          POS System
        </button>
        <button className="option-button">
          <FaTruck className="option-icon" />
          Truck Deliveries
        </button>
      </div>
    </div>
  );
}

export default HomePage;
