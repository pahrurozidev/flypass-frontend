import axios from "axios"
import { RootPath } from "../config"

const token = localStorage.getItem("token");

const flight = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${RootPath}/${path}`)
            .then((response) => {
                resolve(response.data.flights)
            }, (error) => {
                reject(error);
            });
    })

    return promise;
}

const flightById = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${RootPath}/${path}`)
            .then((response) => {
                resolve(response.data)
            }, (error) => {
                reject(error);
            });
    })

    return promise;
}

const addFlight = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(
            `${RootPath}/${path}`, data,
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((response) => {
            resolve(response)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}

const DeleteFlight = (path) => {
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

export { flight, flightById, addFlight, DeleteFlight };