import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
import Sidebar from '../layouts/sidebar/Sidebar';
import Navbar from '../layouts/navbar/navbar';
import CustomerList from './CustomerList';
import CustomerDetail from './CustomerDetail';

export default function Customers() {

    const location = useLocation().pathname;
    const { id } = useParams();

    return (
        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div className="main-container">
                    {(location === `/customer/${id}`) && <CustomerDetail />}
                    {(location === '/customer') && <CustomerList />}
                </div>
            </div>
        </div>
    )
}
