import axios from "axios"
import { RootPath } from "../config"

const transaction = (path, id, data) => {

    const token = localStorage.getItem("token");
    const promise = new Promise((resolve, reject) => {
        axios.post(`${RootPath}/${path}/${id}`,
            {
                bookingId: id,
                image: data,
                TransactionMethodId: 1,
            },
            { headers: { Authorization: `Bearer ${token}` } },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            },
        ).then((response) => {
            resolve(response)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}

export { transaction };