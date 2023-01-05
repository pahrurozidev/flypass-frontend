import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowCircleLeft2 } from 'iconsax-react';
import { Edit } from 'react-feather';
import swal from 'sweetalert';
import { API } from '../../../services';
import axios from 'axios';

export default function CreateFlight() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [airports, setAirports] = useState([]);
    const [airlines, setAirlines] = useState([]);
    const [airplanes, setAirplanes] = useState([]);
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        departureAirportId: "",
        departureDate: "",
        departureTime: "",
        arrivalAirportId: "",
        arrivalDate: "",
        arrivalTime: "",
        baggage: "",
        airplaneId: "",
        flightClassId: "",
        airlineId: "",
        price: "",
        flightCode: "",
        isAvailable: true,
    });

    useEffect(() => {
        getFlightById();
        API.airports().then((airports) => {
            setAirports(airports);
        });
        API.airlines().then((airlines) => {
            setAirlines(airlines);
        });
        API.airplanes().then((airplanes) => {
            setAirplanes(airplanes);
        });
    }, [])

    setTimeout(() => {
        setShow(true);
    }, 3000);

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        axios.put(`${import.meta.env.VITE_BASE_URL}/v1/flights/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => {
                swal({
                    title: "Updated Succeessfully!",
                    text: "",
                    icon: "success",
                    button: "Ok!",
                });
                navigate(`/flight/${id}`);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getFlightById = async () => {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/v1/flights/${id}`);
        setData({
            departureAirportId: response.data.departureAirport.id,
            departureDate: response.data.departureDate,
            departureTime: response.data.departureTime,
            arrivalAirportId: response.data.arrivalAirport.id,
            arrivalDate: response.data.arrivalDate,
            arrivalTime: response.data.arrivalTime,
            baggage: response.data.baggage,
            airplaneId: response.data.Airplane.id,
            flightClassId: response.data.FlightClass.id,
            airlineId: response.data.Airline.id,
            price: response.data.price,
            flightCode: response.data.flightCode,
            isAvailable: response.data.isAvailable,
        })
    }

    const handleInput = (e) => {
        const newData = { ...data }
        newData[e.target.name] = e.target.value
        setData(newData)
        console.log(newData)
    }

    return (
        <div>
            {show && (
                <div className='container-fluid pb-5'>

                    <div className='admin-content px-lg-2'>
                        {/* header label */}
                        <div className='border rounded p-4 pt-3 pb-3 pb-md-1'>
                            <h2 className='fs-4'>Update Flight</h2>
                            <p className='header-text fw-light col-12 col-lg-9'>Halaman ini yaitu untuk mengubah salah satu data penerbangan sesuai dengan yang di pilih. Pada halaman ini hanya dapat di akses oleh admin.</p>
                        </div>

                        {/* broadcrumb */}
                        <div className="border rounded py-2 px-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                            <Link to={'/flight'} className="text-decoration-none text-dark d-flex btn gap-2 ps-0">
                                <ArrowCircleLeft2 size={20} />
                                <div className='label'>Flight Lists / Update Flight</div>
                            </Link>
                        </div>

                        {/* add flight */}
                        <div className='card mt-3 p-3 pt-0 pb-3 admin-add-flight'>
                            <form className="d-md-flex gap-md-5" onSubmit={handleSubmit}>
                                <div className='col'>
                                    <div className="mb-0">
                                        <label htmlFor="departureAirportId" className="form-label">Departure Airport</label>
                                        <select name='departureAirportId' className="form-select form-select-lg" aria-label=".form-select-lg example" value={data.departureAirportId} onChange={handleInput} id="departureAirportId">
                                            {
                                                airports.map((airport) => (
                                                    <option value={airport.id}>{airport.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="mb-0">
                                        <label htmlFor="departureDate" className="form-label">Departure Date</label>
                                        <input name='departureDate' type="date" className="form-control mt-0" id="departureDate" value={data.departureDate} onChange={handleInput} />
                                    </div>
                                    <div className="mb-0">
                                        <label htmlFor="departureTime" className="form-label">Departure Time</label>
                                        <input name='departureTime' type="time" className="form-control mt-0" id="departureTime" value={data.departureTime} onChange={handleInput} />
                                    </div>
                                    <div clasNames="mb-0">
                                        <label htmlFor="baggage" className="form-label">Bagasi</label>
                                        <input name='baggage' type="text" className="form-control mt-0" id="baggage" value={data.baggage} onChange={handleInput} placeholder="Set Baggage" />
                                    </div>
                                    <div className="mb-0">
                                        <label htmlFor="airplaneId" className="form-label">Airplane</label>
                                        <select name='airplaneId' className="form-select form-select-lg" aria-label=".form-select-lg example" value={data.airplaneId} onChange={handleInput} id="airplaneId">
                                            {
                                                airplanes.map((airplane) => (
                                                    <option value={airplane.id}>{airplane.model}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="mb-0">
                                        <label htmlFor="flightClassId" className="form-label">Flight Class</label>
                                        <select name='flightClassId' className="form-select form-select-lg" aria-label=".form-select-lg example" value={data.flightClassId} onChange={handleInput} id="flightClassId">
                                            <option value="1">Economy</option>
                                            <option value="2">Business</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="mb-0">
                                        <label htmlFor="arrivalAirportId" className="form-label">Arrival Airport</label>
                                        <select name='arrivalAirportId' className="form-select form-select-lg" aria-label=".form-select-lg example" value={data.arrivalAirportId} onChange={handleInput} id="arrivalAirportId">
                                            {
                                                airports.map((airport) => (
                                                    <option value={airport.id}>{airport.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="mb-0">
                                        <label htmlFor="arrivalDate" className="form-label">Arrival Date</label>
                                        <input name='arrivalDate' type="date" className="form-control mt-0" id="arrivalDate" value={data.arrivalDate} onChange={handleInput} />
                                    </div>
                                    <div className="mb-0">
                                        <label htmlFor="arrivalTime" className="form-label">Arrival Time</label>
                                        <input name='arrivalTime' type="time" className="form-control mt-0" id="arrivalTime" value={data.arrivalTime} onChange={handleInput} />
                                    </div>
                                    <div className="mb-0">
                                        <label htmlFor="airlineId" className="form-label">Airline</label>
                                        <select name='airlineId' className="form-select form-select-lg" aria-label=".form-select-lg example" value={data.airlineId} onChange={handleInput} id="airlineId">
                                            <option selected hidden value="">Select Airline</option>
                                            {
                                                airlines.map((airline) => (
                                                    <option value={airline.id}>{airline.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="mb-0">
                                        <label htmlFor="price" className="form-label">Price</label>
                                        <input name='price' type="number" className="form-control mt-0" id="price" value={data.price} onChange={handleInput} placeholder="900.000" />
                                    </div>
                                    <div className="mb-0">
                                        <label htmlFor="flightCode" className="form-label">Flight Code</label>
                                        <input name='flightCode' type="text" className="form-control mt-0" id="flightCode" value={data.flightCode} onChange={handleInput} placeholder="Flight Code" />
                                    </div>
                                    <div className="form-check mb-0">
                                        <input className="form-check-input my-3 me-2" type="checkbox" id="isAvailable" name="isAvailable" checked={data.isAvailable} onChange={(e) => setData(e.target.checked)} />
                                        <label className="form-check-label my-3" htmlFor="isAvailable">
                                            Is Available
                                        </label>
                                    </div>

                                    <div className='mb-0 d-md-flex justify-content-end mt-4 mt-md-5'>
                                        <button className='btn btn-primary crud-flight-btn d-flex gap-1 justify-content-center shadow' type='submit'>
                                            <Edit size={20} />
                                            <span>Update</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
