import axios from "axios"
import { RootPath } from "../config"

const airline = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${RootPath}/${path}`)
            .then((response) => {
                resolve(response.data.airlines)
            }, (error) => {
                reject(error);
            });
    })

    return promise;
}

export { airline };