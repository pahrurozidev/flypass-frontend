import axios from "axios"
import { RootPath } from "../config"

const login = (path, user) => {

    const promise = new Promise((resolve, reject) => {
        axios.post(`${RootPath}/${path}`, user).then((response) => {
            resolve(response);
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}

export { login };