import React from 'react';
import './Dashboard.css';
import StatCard from './StatCard';
import OrderItem from './OrderItem'; // <-- IMPORT the new OrderItem component
import { statCardsData, recentOrdersData } from '../utils/data.js'; // <-- IMPORT both data arrays

const Dashboard = () => {
    return (
        <main className="dashboard">
            <header className="dashboard-header">
                <h1>Business Dashboard</h1>
                <div className="header-icons">
                    <span>🔍</span>
                    <span>📅</span>
                </div>
            </header>

            <section className="stat-cards">
                <StatCard title="CUSTOMERS" value="54,235" />
                <StatCard title="INCOME" value="$980,632" />
                <StatCard title="PRODUCTS SOLD" value="5,490" />
            </section>
            
            <section className="info-cards">
                <div className="card white marketplace-card">
                    <div>
                        <h3>Data Analytics Overview</h3>
                        <p>See how your account grow and how you can boost it.</p>
                    </div>
                    <button className="start-button">START</button>
                </div>

                <div className="card white finance-flow-card">
                    <h3>Finance Flow</h3>
                    <p className="finance-amount">$2,530</p>
                    <p className="finance-date">September 2021</p>
                </div>

                {/* --- THIS IS THE UPDATED RECENT ORDERS SECTION --- */}
                <div className="card white recent-orders-card">
                    <div className="card-header">
                        <h3>Recent Orders</h3>
                        <a href="#">SEE ALL</a>
                    </div>
                    {/* The <ul> is now a clean container */}
                    <ul className="orders-list">
                        {/* We map over the data to render a reusable OrderItem for each order */}
                        {recentOrdersData.map((order) => (
                            <OrderItem
                                key={order.id} // React needs a unique key for list items
                                id={order.id}
                                product={order.product}
                                date={order.date}
                                price={order.price}
                                status={order.status}
                                statusClassName={order.statusClassName}
                            />
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default Dashboard;