import { flight, flightById } from './flight';
import { airport } from './airport';

const flights = () => flight('v1/flights');
const flightDetail = (id) => flightById(`v1/flights/${id}`);

const airports = () => airport('v1/airport');

export const API = {
    flights,
    flightDetail,
    airports
}