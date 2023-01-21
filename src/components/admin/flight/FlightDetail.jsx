import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowCircleLeft2 } from 'iconsax-react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { Edit, Trash2 } from 'react-feather';
import { API } from '../../../services';

function FlightDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [flight, setFlight] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        API.flightDetail(id).then((flights) => {
            setFlight(flights);
        })
    }, [])

    const getFlights = () => {
        API.flights().then((res) => {
            setFlight(res.data);
        })
    }

    const handleDelete = (id) => {
        API.deleteFlight(id).then(() => {
            getFlights();
            navigate('/flight');
            swal({
                title: "Deleted Succeessfully!",
                text: "",
                icon: "success",
                button: "Ok!",
            });
        })
    }

    setTimeout(() => {
        setShow(true);
    }, 3000);

    return (
        <div>
            {show && (
                <div className='container-fluid pb-5'>

                    <div className='admin-content px-lg-2'>
                        {/* header label */}
                        <div className='border rounded px-2 pt-md-3 px-md-3 pb-1 pt-3'>
                            <h2 className='fs-4'>Flight Detail</h2>
                            <p className='header-text fw-light col-12 col-lg-9'>Halaman ini menampilkan detail penerbangan dari salah satu penerbangan, diantaranya menampilkan tanggal dan waktu penerbangan, harga penerbangan, nama pesawat dll.</p>
                        </div>

                        {/* broadcrumb */}
                        <div className="border rounded py-2 px-2 px-md-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                            <Link to={'/flight'} className="text-decoration-none text-dark d-flex btn gap-1 gap-md-2 ps-0 flex-wrap">
                                <ArrowCircleLeft2 size={20} />
                                <div className='label'>Flight Lists / Detail</div>
                            </Link>

                            <div className="d-flex gap-2">
                                <Link to={`/flight/update/${id}`}>
                                    <div className='btn btn-primary shadow'>
                                        <Edit size={20} />
                                    </div>
                                </Link>
                                <Link to={''} onClick={() => handleDelete(flight.id)}>
                                    <div className='btn btn-danger shadow'>
                                        <Trash2 size={20} />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* flight detail */}
                        <div className="card p-4 pb-1 px-3 mt-3 admin-flight-detail">
                            <section>
                                <h5 className='border-bottom pb-4'>Flight Detail</h5>
                                <div className='mt-4 d-flex flex-column flex-md-row gap-md-5'>
                                    <div className='d-flex flex-column gap-4 gap-md-2 col'>
                                        <div className='d-flex'>
                                            <p className='col fw-bold'>Departure</p>
                                            <p className='col'>: {flight.departureAirport.city}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <p className='col fw-bold'>Departure Date</p>
                                            <p className='col'>: {flight.departureDate}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <p className='col fw-bold'>Departure Time</p>
                                            <p className='col'>: {flight.departureTime.slice(0, -3)}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <p className='col fw-bold'>Duration</p>
                                            <p className='col'>: {flight.duration.slice(0, -3)}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <p className='col fw-bold'>Airline</p>
                                            <p className='col'>: {flight.Airline.name}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <p className='col fw-bold'>Flight Class</p>
                                            <p className='col'>: {flight.FlightClass.name}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <p className='col fw-bold'>Baggage</p>
                                            <p className='col'>: {flight.baggage} kg</p>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column mt-4 gap-4 gap-md-2 mt-md-0 col'>
                                        <div className='d-flex'>
                                            <p className='col fw-bold'>Arrival</p>
                                            <p className='col'>: {flight.arrivalAirport.city}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <p className='col fw-bold'>Arrival Date</p>
                                            <p className='col'>: {flight.arrivalDate}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <p className='col fw-bold'>Arrival Time</p>
                                            <p className='col'>: {flight.arrivalTime.slice(0, -3)}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <p className='col fw-bold'>Flight Type</p>
                                            <p className='col'>: {flight.FlightType && flight.FlightType.name}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <p className='col fw-bold'>Airplane</p>
                                            <p className='col'>: {flight.Airplane.model}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <p className='col fw-bold'>Price</p>
                                            <p className='col'>: Rp. {flight.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FlightDetail;
