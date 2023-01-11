import React, { Component } from 'react'
import ReactLoading from 'react-loading';
import axios from 'axios';
import { ArrowCircleLeft2, AddSquare } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { AlertCircle, PlusSquare } from 'react-feather';
import NotFound from '../../notfound/NotFound';

class FlightList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        axios.get(`${import.meta.env.VITE_BASE_URL}/v1/flights`).then(
            response => {
                this.setState({ data: response.data.flights });
            }
        ).catch(
            error =>
                console.log(error)
        )
    }

    render() {
        this.state.data.reverse();
        console.log(this.state.data);
        return (
            <div className='container-fluid' >

                <div className='admin-content px-lg-2 pb-5'>

                    {/* header label */}
                    <div className='border rounded p-4 pt-3 pb-3 pb-md-1'>
                        <h2 className='fs-4'>Flight</h2>
                        <p className='header-text fw-light col-12 col-lg-9 p-0'>Halaman ini menampilkan semua list penerbangan yang tersedia.</p>
                    </div>

                    {/* broadcrumb */}
                    <div className="border rounded py-2 px-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                        <Link to={'/flight'} className="text-decoration-none text-dark d-flex btn gap-2 ps-0">
                            <ArrowCircleLeft2 size={20} />
                            <div className='label'>Flight Lists</div>
                        </Link>

                        <Link to={'/flight/create'}>
                            <div className='btn btn-primary shadow cursor-pointer'>
                                <PlusSquare size={20} />
                            </div>
                        </Link>
                    </div>

                    {this.state.data.length === 0 && <ReactLoading type={'bars'} color={'silver'} height={'10%'} width={'10%'} className="mt-5 m-auto" />}

                    {this.state.data.length > 0 &&
                        <div className="mt-3 border p-2 p-lg-3 rounded d-flex flex-column gap-2 gap-lg-3">
                            {this.state.data.map((flight) => (
                                <div className='flgiht flight-list card rounded' key={flight.id}>
                                    <div className='flight-item'>
                                        <div className='d-flex flex-column gap-1'>
                                            <p className='time'>{flight.departureTime.slice(0, -3)}</p>
                                            <span className='tag'>{flight.departureAirport.iata}</span>
                                        </div>
                                        <div className='d-flex flex-column departure gap-1'>
                                            <span>{flight.duration.slice(0, -3)}</span>
                                            <span className='ring'></span>
                                            <span>Direct</span>
                                        </div>
                                        <div className='d-flex flex-column gap-1'>
                                            <p className='time text-end'>{flight.arrivalTime.slice(0, -3)}</p>
                                            <span className='tag'>{flight.arrivalAirport.iata}</span>
                                        </div>
                                    </div>
                                    <div className='flight-item mt-2'>
                                        <div><img src={flight.Airline.image} alt="" width={45} height={25} /></div>
                                        <p>{flight.Airline.name}</p>
                                    </div>
                                    <div className='flight-item d-flex flex-column gap-3 mt-4'>
                                        <h5>{flight.FlightClass.name}</h5>
                                        <p>Rp. {flight.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='fs-6'>/pax</span></p>
                                    </div>
                                    <div className='flight-item mt-2'>
                                        <Link to={`/flight/${flight.id}`} className="d-flex gap-1 items-center btn shadow">
                                            <AlertCircle size={20} />
                                            <div>Detail</div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        )
    }

}

export default FlightList;
