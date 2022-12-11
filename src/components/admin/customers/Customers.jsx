import React from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../layouts/sidebar/Sidebar';
import Navbar from '../layouts/navbar/navbar';
import CustomerList from './CustomerList';
import CustomerDetail from './CustomerDetail';

export default function Customers() {

    const { id } = useParams();

    return (
        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div className="main-container">
                    {id && <CustomerDetail />}
                    {!id && <CustomerList />}
                </div>
            </div>
        </div>
    )
}
