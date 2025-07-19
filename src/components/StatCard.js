// src/components/StatCard.js
import React from 'react';
import './StatCard.css'; // We will create this CSS file next

// We destructure the props object to get title, value, and icon directly
const StatCard = ({ title, value, icon }) => {
    return (
        <div className="stat-card">
            <p className="stat-card-label">{title}</p>
            <h2 className="stat-card-value">{value}</h2>
        </div>
    );
};

export default StatCard;