import { flight, flightById, addFlight, DeleteFlight } from './flight';
import { allBookings } from './listAllBookings';
import { airport } from './airport';
import { booking, getBookByUserLog } from './booking';
import { airline } from './airline';
import { airplane } from './airplane';
import { wishlist, addWishlist, DeleteWishlist } from './wishlist';
import { getTransaction, transaction, confirm, reject, getHistoryTransaction } from './transaction';
import { adminNotification, userNotification, updateNotification } from './notification';
import { whoami } from './whoami';
import { login } from './auth';
import { getProfile } from './user';

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

const transactionsGet = () => getTransaction('v1/pay/find/all');
const transactions = (id, data) => transaction('v1/pay/create', id, data);
const confirmPayment = (id) => confirm(`v1/pay/confirm/${id}`, id);
const rejectPayment = (id) => reject(`v1/pay/reject/${id}`, id);
const getHistoryTransactions = () => getHistoryTransaction('v1/bookings/history');

const userNotifications = () => userNotification('v1/notification');
const adminNotifications = () => adminNotification('v1/notification/admin');
const updateNotifications = (id) => updateNotification(`v1/notification/${id}`, id);

const whoAmI = () => whoami('v1/whoami');

const signin = (user) => login('v1/login', user);
const getProfiles = () => getProfile('v1/user');

export const API = {
    getProfiles,
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
    transactionsGet,
    transactions,
    confirmPayment,
    rejectPayment,
    userNotifications,
    adminNotifications,
    whoAmI,
    getBookByUserLogin,
    signin,
    updateNotifications,
    getHistoryTransactions,

}