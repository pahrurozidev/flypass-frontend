import axios from "axios"
import { RootPath } from "../config"

const booking = (path, book) => {
    const promise = new Promise((resolve, reject) => {
        return axios.post(`${RootPath}/${path}`, book)
            .then((response) => {
                resolve(response)
            }, (error) => {
                reject(error);
            });
    })

    return promise;
}

export { booking };