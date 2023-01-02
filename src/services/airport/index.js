import axios from "axios"
import { RootPath } from "../config"

const airport = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${RootPath}/${path}`)
            .then((response) => {
                resolve(response.data.airport)
            }, (error) => {
                reject(error);
            });
    })

    return promise;
}

export { airport };