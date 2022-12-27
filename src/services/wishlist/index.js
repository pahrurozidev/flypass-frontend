import axios from "axios"
import { RootPath } from "../config"

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsIm5hbWUiOiJBZGFtIiwiaW1hZ2UiOm51bGwsImVtYWlsIjoicGFocnVyb3ppMTdAZ21haWwuY29tIiwiYmlydGhEYXRlIjoiMjAwMC0xMS0wMyIsImdlbmRlciI6bnVsbCwicGhvbmUiOm51bGwsInJvbGVJZCI6MiwiY3JlYXRlZEF0IjoiMjAyMi0xMi0yNlQwMTo1ODozMi42MjdaIiwidXBkYXRlZEF0IjoiMjAyMi0xMi0yNlQwNDo1MjozNC40NzJaIiwiaWF0IjoxNjcyMDYyMTI1LCJleHAiOjE2NzIwODM3MjV9.cTZM0rY0HCVzO9r3rMCy9yYcD1R-RHZIMfaqkfEVWTk';

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