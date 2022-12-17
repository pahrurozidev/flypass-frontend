import axios from "axios"
import { RootPath } from "../config"

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

export { flight, flightById };