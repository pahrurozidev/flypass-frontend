import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Sidebar from '../layouts/sidebar/Sidebar'
import Navbar from '../layouts/navbar/navbar'
import FlightList from './FlightList';
import CreateFlight from './CreateFlight';
import FlightDetail from './FlightDetail';
import UpdateFlight from './UpdateFlight';

function Flights() {

    const location = useLocation().pathname;
    const { id } = useParams();

    return (
        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div className="main-container">
                    {(location === `/flight/${id}`) && <FlightDetail />}
                    {(location === '/flight') ? <FlightList /> :
                        (location === '/flight/create') ? <CreateFlight /> :
                            (location === `/flight/update/${id}`) ? <UpdateFlight /> : ''}
                </div>
            </div>
        </div>
    )
}

export default Flights;