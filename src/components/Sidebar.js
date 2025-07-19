// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo-box"></div>
                <div>
                    <p className="logo-main-text">O2O BRAND</p>
                    <p className="logo-sub-text">PROTECTOR</p>
                </div>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li><a href="#" className="active"><span>📊</span> Summary</a></li>
                    <li><a href="#"><span>💳</span> Transaction</a></li>
                    <li><a href="#"><span>📈</span> Statistics</a></li>
                    <li><a href="#"><span>📦</span> Product</a></li>
                    <li><a href="#"><span>📁</span> Category</a></li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <img src="https://i.pravatar.cc/40?img=1" alt="Sally Hawkins" />
                <div>
                    <p className="user-name">Sally Hawkins</p>
                    <a href="#" className="upgrade-link">UPGRADE</a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;