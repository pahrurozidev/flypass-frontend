import { flight, flightById, addFlight, DeleteFlight } from './flight';
import { allBookings } from './listAllBookings';
import { airport } from './airport';
import { booking, getBookByUserLog } from './booking';
import { airline } from './airline';
import { airplane } from './airplane';
import { wishlist, addWishlist, DeleteWishlist } from './wishlist';
import { transaction } from './transaction';
import { adminNotification, userNotification, updateNotification } from './notification';
import { whoami } from './whoami';
import { login } from './auth';

const flights = () => flight('v1/flights');
const createFlight = (data) => addFlight('v1/flights', data);

const listBookings = () => allBookings('v1/bookings/all');

const airlines = () => airline('v1/airlines');
const airplanes = () => airplane('v1/airplanes');
const flightDetail = (id) => flightById(`v1/flights/${id}`);
const deleteFlight = (id) => DeleteFlight(`v1/flights/${id}`);

const book = (book) => booking('v1/flights/books', book);
const getBookByUserLogin = () => getBookByUserLog('v1/bookings');

const airports = () => airport('v1/airport');

const wishlists = () => wishlist('v1/wishlist');
const addWishlists = (id) => addWishlist(`v1/wishlist`, id);
const deleteWishlists = (id) => DeleteWishlist(`v1/wishlist/${id}`);

const transactions = (id, data) => transaction('v1/pay/create', id, data);

const userNotifications = () => userNotification('v1/notification');
const adminNotifications = () => adminNotification('v1/notification/admin');
const updateNotifications = (id) => updateNotification(`v1/notification/${id}`);

const whoAmI = () => whoami('v1/whoami');

const signin = (user) => login('v1/login', user);

export const API = {
    flights,
    createFlight,
    listBookings,
    airlines,
    airplanes,
    flightDetail,
    deleteFlight,
    airports,
    book,
    wishlists,
    addWishlists,
    deleteWishlists,
    transactions,
    userNotifications,
    adminNotifications,
    whoAmI,
    getBookByUserLogin,
    signin,
    updateNotifications,
}