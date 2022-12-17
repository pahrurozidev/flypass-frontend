import { flight, flightById } from './flight';
import { airport } from './airport';
import { booking } from './booking';

const flights = () => flight('v1/flights');
const flightDetail = (id) => flightById(`v1/flights/${id}`);

const book = (book) => booking('v1/flights/books', book);

const airports = () => airport('v1/airport');

export const API = {
    flights,
    flightDetail,
    airports,
    book,
}