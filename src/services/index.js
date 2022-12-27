import { flight, flightById } from './flight';
import { airport } from './airport';
import { booking } from './booking';
import { wishlist, addWishlist, DeleteWishlist } from './wishlist';
import { transaction } from './transaction';
import { adminNotification, userNotification } from './notification';
import { whoami } from './whoami';
import { login } from './auth';

const flights = () => flight('v1/flights');
const flightDetail = (id) => flightById(`v1/flights/${id}`);

const book = (book) => booking('v1/flights/books', book);

const airports = () => airport('v1/airport');

const wishlists = () => wishlist('v1/wishlist');
const addWishlists = (id) => addWishlist(`v1/wishlist`, id);
const deleteWishlists = (id) => DeleteWishlist(`v1/wishlist/${id}`);

const transactions = (id, data) => transaction('v1/pay/create', id, data);

const userNotifications = () => userNotification('v1/notification');
const adminNotifications = () => adminNotification('v1/notification/admin');

const whoAmI = (token) => whoami('v1/whoami', token);

const signin = (user) => login('v1/login', user);

export const API = {
    flights,
    flightDetail,
    airports,
    book,
    wishlists,
    addWishlists,
    deleteWishlists,
    transactions,
    userNotifications,
    adminNotifications,
    whoAmI,
    signin,
}