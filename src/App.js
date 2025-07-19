// src/App.js
import React from 'react';
import './App.css'; // Import the CSS for this component
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Summary from './components/Summary';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Dashboard />
      <Summary />
    </div>
  );
}

export default App;