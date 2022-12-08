import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../layouts/sidebar/Sidebar';
import Navbar from '../layouts/navbar/Navbar';
import TransactionList from './TransactionList';
import TransactionDetail from './TransactionDetail';

export default function Customers() {
    const { id } = useParams();

    return (
        <div className="d-flex">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    {id && <TransactionDetail />}
                    {!id && <TransactionList />}
                </div>
            </div>
        </div>
    );
}
