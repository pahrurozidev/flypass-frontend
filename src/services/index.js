import { flight, flightById, addFlight, DeleteFlight } from './flight';
import { allBookings } from './listAllBookings';
import { airport } from './airport';
import { airline } from './airline';
import { airplane } from './airplane';

const flights = () => flight('v1/flights');
const createFlight = (data) => addFlight('v1/flights', data);

const listBookings = () => allBookings('v1/bookings/all');

const airlines = () => airline('v1/airlines');
const airplanes = () => airplane('v1/airplanes');
const flightDetail = (id) => flightById(`v1/flights/${id}`);
const deleteFlight = (id) => DeleteFlight(`v1/flights/${id}`);

const airports = () => airport('v1/airport');

export const API = {
    flights,
    createFlight,
    listBookings,
    airlines,
    airplanes,
    flightDetail,
    deleteFlight,
    airports
}