import axios from "axios"
import { RootPath } from "../config"

const airplane = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${RootPath}/${path}`)
            .then((response) => {
                resolve(response.data.airplane)
            }, (error) => {
                reject(error);
            });
    })

    return promise;
}

export { airplane };