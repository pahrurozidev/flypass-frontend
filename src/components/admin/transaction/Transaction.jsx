import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Sidebar from '../layouts/sidebar/Sidebar';
import Navbar from '../layouts/navbar/Navbar';
import TransactionList from './TransactionList';
import TransactionDetail from './TransactionDetail';

export default function Transaction({ showSidebarDispatch }) {
    const { id } = useParams();

    return (
        <div>
            <Sidebar />
            <div>
                <Navbar showSidebarDispatch={showSidebarDispatch} />
                <div className="main-container">
                    {id && <TransactionDetail />}
                    {!id && <TransactionList />}
                </div>
            </div>
        </div>
    );
}
