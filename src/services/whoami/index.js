import axios from "axios"
import { RootPath } from "../config"

const whoami = (path, token) => {

    const promise = new Promise((resolve, reject) => {
        axios.get(
            `${RootPath}/${path}`,
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((response) => {
            resolve(response.data)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}

export { whoami };