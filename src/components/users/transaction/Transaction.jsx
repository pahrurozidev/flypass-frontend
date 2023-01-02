import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from '../../admin/layouts/sidebar/sidebaruser'
import Navbar from '../layouts/navbar/Navbar'
import TransactionList from './TransactionList';
import TransactionDetail from './TransactionDetail';

function Transaction({ showSidebarDispatch }) {
    const { id } = useParams();

    return (
        <div>
            <Sidebar />
            <div>
                <Navbar showSidebarDispatch={showSidebarDispatch} />
                <div className='main-container'>
                    {!id && <TransactionList />}
                    {id && <TransactionDetail />}
                </div>
            </div>
        </div>
    )
}


export default Transaction;
