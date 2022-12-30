import axios from "axios"
import { RootPath } from "../config"

const token = localStorage.getItem("token");

const wishlist = (path) => {

    const promise = new Promise((resolve, reject) => {
        axios.get(
            `${RootPath}/${path}`,
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((response) => {
            resolve(response.data.wishlist)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}

const addWishlist = (path, id) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(
            `${RootPath}/${path}/${id}`,
            { id: id },
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((response) => {
            resolve(response)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}

const DeleteWishlist = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(
            `${RootPath}/${path}`,
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((response) => {
            resolve(response)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}



export { wishlist, addWishlist, DeleteWishlist };