
import React from 'react';
import './Summary.css';

const Summary = () => {
    return (
        <aside className="summary">
            <h2 className="summary-title">Summary</h2>

            <div className="summary-card balance-card">
                <p className="card-label">Your Balance</p>
                <p className="balance-amount">$10,632.00</p>
                <div className="balance-flow">
                    <span className="flow-income">▲ $3,250.07</span>
                    <span className="flow-expense">▼ $1,062.90</span>
                </div>
                <button className="add-button">+</button>
            </div>

            <div className="summary-card activity-card">
                <div className="card-header">
                    <h3>Activity</h3>
                    <a href="#">SEE ALL</a>
                </div>
                <ul className="activity-list">
                    <li className="activity-item">
                        <div className="activity-icon">💳</div>
                        <div className="activity-details">
                            <p>Withdraw Earning</p>
                            <span>12:40 am</span>
                        </div>
                        <p className="activity-amount">$4,120</p>
                    </li>
                    <li className="activity-item">
                        <div className="activity-icon">🧾</div>
                        <div className="activity-details">
                            <p>Paying Website tax</p>
                            <span>10:20 am</span>
                        </div>
                        <p className="activity-amount expense">-$230</p>
                    </li>
                </ul>
            </div>

            <div className="summary-card categories-card">
                <div className="card-header">
                    <h3>Top Categories</h3>
                </div>
                <p className="card-label">Explore your top categories and keep shopping with cashback.</p>
                <div className="category-items">
                    <div className="category-item yellow">
                        <span className="category-icon">👟</span>
                        <p>Footwear</p>
                        <span>18,941 units</span>
                    </div>
                    <div className="category-item green">
                        <span className="category-icon">🧤</span>
                        <p>Accessories</p>
                        <span>26,061 units</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Summary;