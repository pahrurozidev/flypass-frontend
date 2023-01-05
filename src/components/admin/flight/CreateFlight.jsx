import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ArrowCircleLeft2 } from 'iconsax-react';
import { Save } from 'react-feather';
import swal from 'sweetalert';
import { API } from '../../../services';

export default function CreateFlight() {
    const navigate = useNavigate();

    const [airports, setAirports] = useState([]);
    const [airlines, setAirlines] = useState([]);
    const [airplanes, setAirplanes] = useState([]);
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
        flightTypeId: "",
        isAvailable: true,
    });

    useEffect(() => {
        API.airports().then((airports) => {
            setAirports(airports);
        })
        API.airlines().then((airlines) => {
            setAirlines(airlines);
        })
        API.airplanes().then((airplanes) => {
            setAirplanes(airplanes);
        })
    }, [])

    const handleInput = (event) => {
        const inputForm = { ...data };
        inputForm[event.target.name] = event.target.value;
        setData(inputForm);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        API.createFlight(data).then(res => {
            swal({
                title: "Created Succeessfully!",
                text: "",
                icon: "success",
                button: "Ok!",
            });
            navigate('/flight');
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='container-fluid pb-5'>

            <div className='admin-content px-lg-2'>
                {/* header label */}
                <div className='border rounded p-4 pt-3 pb-3 pb-md-1'>
                    <h2 className='fs-4'>Add Flight</h2>
                    <p className='header-text fw-light col-12 col-lg-9'>Halaman ini yaitu untuk menambahkan data penerbangan baru. Pada halaman ini hanya dapat di akses oleh admin.</p>
                </div>

                {/* broadcrumb */}
                <div className="border rounded py-2 px-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                    <Link to={'/flight'} className="text-decoration-none text-dark d-flex btn gap-2 ps-0">
                        <ArrowCircleLeft2 size={20} />
                        <div className='label'>Flight Lists / Add Flight</div>
                    </Link>
                </div>

                {/* add flight */}
                <div className='card mt-3 p-3 pt-0 pb-3 admin-add-flight'>
                    <form className="d-md-flex gap-md-5" onSubmit={handleSubmit}>
                        <div className='col'>
                            <div className="mb-0">
                                <label htmlFor="departureAirport" className="form-label">Departure Airport</label>
                                <select name='departureAirportId' className="form-select form-select-lg" aria-label=".form-select-lg example" value={data.departureAirportId} onChange={handleInput} id="departureAirport" required>
                                    <option value="" selected hidden>Departure Airport</option>
                                    {
                                        airports.map((airport) => (
                                            <option value={airport.id}>{airport.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="mb-0">
                                <label htmlFor="departureDate" className="form-label">Departure Date</label>
                                <input name='departureDate' type="date" className="form-control mt-0" id="departureDate" value={data.departureDate} onChange={handleInput} required />
                            </div>
                            <div className="mb-0">
                                <label htmlFor="departureTime" className="form-label">Departure Time</label>
                                <input name='departureTime' type="time" className="form-control mt-0" id="departureTime" value={data.departureTime} onChange={handleInput} required />
                            </div>
                            <div clasNames="mb-0">
                                <label htmlFor="baggage" className="form-label">Baggage</label>
                                <input name='baggage' type="text" className="form-control mt-0" id="baggage" value={data.baggage} onChange={handleInput} placeholder="Set Baggage" required />
                            </div>
                            <div className="mb-0">
                                <label htmlFor="airplane" className="form-label">Airplane</label>
                                <select name='airplaneId' className="form-select form-select-lg" aria-label=".form-select-lg example" value={data.airplaneId} onChange={handleInput} id="airplane" required>
                                    <option selected hidden value="">Select Airplane</option>
                                    {
                                        airplanes.map((airplane) => (
                                            <option value={airplane.id}>{airplane.model}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="mb-0">
                                <label htmlFor="flightClass" className="form-label">Flight Class</label>
                                <select name='flightClassId' className="form-select form-select-lg" aria-label=".form-select-lg example" value={data.flightClassId} onChange={handleInput} id="flightClass" required>
                                    <option selected hidden value="">Select Flight Class</option>
                                    <option value="1">Economy</option>
                                    <option value="2">Business</option>
                                </select>
                            </div>
                            <div className="mb-0">
                                <label htmlFor="flightType" className="form-label">Flight Type</label>
                                <select name='flightTypeId' className="form-select form-select-lg" aria-label=".form-select-lg example" value={data.flightTypeId} onChange={handleInput} id="flightType" required>
                                    <option selected hidden value="">Select Flight Type</option>
                                    <option value="1">Domestic</option>
                                    <option value="2">International</option>
                                </select>
                            </div>

                        </div>
                        <div className='col'>
                            <div className="mb-0">
                                <label htmlFor="arrivalAirport" className="form-label">Arrival Airport</label>
                                <select name='arrivalAirportId' className="form-select form-select-lg" aria-label=".form-select-lg example" value={data.arrivalAirportId} onChange={handleInput} id="arrivalAirport" required>
                                    <option selected hidden value="">Select Arrival Airport</option>
                                    {
                                        airports.map((airport) => (
                                            <option value={airport.id}>{airport.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="mb-0">
                                <label htmlFor="arrivalDate" className="form-label">Arrival Date</label>
                                <input name='arrivalDate' type="date" className="form-control mt-0" id="arrivalDate" value={data.arrivalDate} onChange={handleInput} required />
                            </div>
                            <div className="mb-0">
                                <label htmlFor="arrivalTime" className="form-label">Arrival Time</label>
                                <input name='arrivalTime' type="time" className="form-control mt-0" id="arrivalTime" value={data.arrivalTime} onChange={handleInput} required />
                            </div>
                            <div className="mb-0">
                                <label htmlFor="airline" className="form-label">Airline</label>
                                <select name='airlineId' className="form-select form-select-lg" aria-label=".form-select-lg example" value={data.airlineId} onChange={handleInput} id="airline" required>
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
                                <input name='price' type="number" className="form-control mt-0" id="price" value={data.price} onChange={handleInput} placeholder="900.000" required />
                            </div>
                            <div className="mb-0">
                                <label htmlFor="flightCode" className="form-label">Flight Code</label>
                                <input name='flightCode' type="text" className="form-control mt-0" id="flightCode" value={data.flightCode} onChange={handleInput} placeholder="Flight Code" required />
                            </div>
                            <div className="form-check mb-0">
                                <input className="form-check-input my-3 me-2" type="checkbox" id="isAvailable" name="isAvailable" checked={data.isAvailable} onChange={(e) => setData(e.target.checked)} />
                                <label className="form-check-label my-3" htmlFor="isAvailable">
                                    Is Available
                                </label>
                            </div>

                            <div className='mb-0 d-md-flex justify-content-end mt-4 mt-md-5'>
                                <button className='btn btn-primary crud-flight-btn d-flex gap-1 justify-content-center shadow' type='submit'>
                                    <Save size={20} />
                                    <span>Save</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
