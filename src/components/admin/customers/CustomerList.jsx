import React from 'react';
import {
    People,
    Airplane, ArrowCircleLeft2, Warning2, AddSquare
} from 'iconsax-react';
import { Link } from 'react-router-dom';
import Eye from '../../../assets/dasboard-admin/eye.png';
import ArrowLeft from '../../../assets/dasboard-admin/arrow-left.png';

export default function CustomerList() {
    return (
        <div className='container-fluid mt-5 pb-5'>
            <div className='container all-booking p-0 ms-0 flight-header'>
                <div className='d-flex'>
                    <People size={35} style={{
                        marginRight: '10px',
                    }} />
                    <h2 className=''>Customer</h2>
                </div>
            </div>
            <div className="container all-booking p-0 ms-0 mt-4 broadcrumb">
                <div className='flight-list'>
                    <Link to={'/flight'} className="text-decoration-none fs-6 text-dark d-flex gap-2">
                        <ArrowCircleLeft2 size={30} />
                        <div className='pt-1'>Customer List</div>
                    </Link>
                </div>
            </div>
            <div className="container all-booking p-0 ms-0">
                <div className="customers">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Password</th>
                                <th>Departure</th>
                                <th>Destination</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>L</td>
                                <td>ID 123456</td>
                                <td>Jakarta</td>
                                <td>Singapore</td>
                                <td>01/12/2022</td>
                                <td>08:05</td>
                                <td>
                                    <Link to={`/customer/1`}>
                                        <img src={Eye} alt="" />
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>L</td>
                                <td>ID 123456</td>
                                <td>Jakarta</td>
                                <td>Singapore</td>
                                <td>01/12/2022</td>
                                <td>08:05</td>
                                <td><a href=""><img src={Eye} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>L</td>
                                <td>ID 123456</td>
                                <td>Jakarta</td>
                                <td>Singapore</td>
                                <td>01/12/2022</td>
                                <td>08:05</td>
                                <td><a href=""><img src={Eye} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>L</td>
                                <td>ID 123456</td>
                                <td>Jakarta</td>
                                <td>Singapore</td>
                                <td>01/12/2022</td>
                                <td>08:05</td>
                                <td><a href=""><img src={Eye} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>L</td>
                                <td>ID 123456</td>
                                <td>Jakarta</td>
                                <td>Singapore</td>
                                <td>01/12/2022</td>
                                <td>08:05</td>
                                <td><a href=""><img src={Eye} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>L</td>
                                <td>ID 123456</td>
                                <td>Jakarta</td>
                                <td>Singapore</td>
                                <td>01/12/2022</td>
                                <td>08:05</td>
                                <td><a href=""><img src={Eye} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>L</td>
                                <td>ID 123456</td>
                                <td>Jakarta</td>
                                <td>Singapore</td>
                                <td>01/12/2022</td>
                                <td>08:05</td>
                                <td><a href=""><img src={Eye} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>L</td>
                                <td>ID 123456</td>
                                <td>Jakarta</td>
                                <td>Singapore</td>
                                <td>01/12/2022</td>
                                <td>08:05</td>
                                <td><a href=""><img src={Eye} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>L</td>
                                <td>ID 123456</td>
                                <td>Jakarta</td>
                                <td>Singapore</td>
                                <td>01/12/2022</td>
                                <td>08:05</td>
                                <td><a href=""><img src={Eye} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>L</td>
                                <td>ID 123456</td>
                                <td>Jakarta</td>
                                <td>Singapore</td>
                                <td>01/12/2022</td>
                                <td>08:05</td>
                                <td><a href=""><img src={Eye} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>L</td>
                                <td>ID 123456</td>
                                <td>Jakarta</td>
                                <td>Singapore</td>
                                <td>01/12/2022</td>
                                <td>08:05</td>
                                <td><a href=""><img src={Eye} alt="" /></a></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>L</td>
                                <td>ID 123456</td>
                                <td>Jakarta</td>
                                <td>Singapore</td>
                                <td>01/12/2022</td>
                                <td>08:05</td>
                                <td><a href=""><img src={Eye} alt="" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
