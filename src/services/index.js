import { flight, flightById } from './flight';
import { airport } from './airport';
import { booking } from './booking';
import { wishlist, addWishlist, DeleteWishlist } from './wishlist';
import { transaction } from './transaction';
import { userNotification } from './notification';

const flights = () => flight('v1/flights');
const flightDetail = (id) => flightById(`v1/flights/${id}`);

const book = (book) => booking('v1/flights/books', book);

const airports = () => airport('v1/airport');

const wishlists = () => wishlist('v1/wishlist');
const addWishlists = (id) => addWishlist(`v1/wishlist`, id);
const deleteWishlists = (id) => DeleteWishlist(`v1/wishlist/${id}`);

const transactions = (id, data) => transaction('v1/pay/create', id, data)

const userNotifications = () => userNotification('v1/notification')

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
}