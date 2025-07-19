// src/components/OrderItem.js
import React from 'react';
import './OrderItem.css';

const OrderItem = ({ id, product, date, price, status, statusClassName }) => {
    return (
        <li className="order-item">
            <span>{id}</span>
            <span>{product}</span>
            <span>{date}</span>
            <span>{price}</span>
            <span className={statusClassName}>{status}</span>
        </li>
    );
};

export default OrderItem;