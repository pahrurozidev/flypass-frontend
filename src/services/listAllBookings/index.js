import axios from "axios"
import { RootPath } from "../config"

const token = localStorage.getItem("token");

const allBookings = (path) => {

    const promise = new Promise((resolve, reject) => {
        axios.get(
            `${RootPath}/${path}`,
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((response) => {
            resolve(response.data.booking)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}

export { allBookings };