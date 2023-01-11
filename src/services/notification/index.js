import axios from "axios"
import { RootPath } from "../config"

const token = localStorage.getItem("token");

const userNotification = (path) => {

    const promise = new Promise((resolve, reject) => {
        axios.get(
            `${RootPath}/${path}`,
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((response) => {
            resolve(response.data.notification)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}

const updateNotification = (path, id) => {

    const promise = new Promise((resolve, reject) => {
        axios.put(
            `${RootPath}/${path}`,
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


const adminNotification = (path) => {

    const promise = new Promise((resolve, reject) => {
        axios.get(
            `${RootPath}/${path}`,
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((response) => {
            resolve(response.data.notification)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}

export { userNotification, adminNotification, updateNotification };