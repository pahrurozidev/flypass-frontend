import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../layouts/sidebar/Sidebar';
import Navbar from '../layouts/navbar/navbar';
import TransactionList from './TransactionList';
import TransactionDetail from './TransactionDetail';

export default function Transaction() {
    const { id } = useParams();

    return (
        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div className="main-container">
                    {id && <TransactionDetail />}
                    {!id && <TransactionList />}
                </div>
            </div>
        </div>
    );
}
