import axios from "axios"
import { RootPath } from "../config"

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwibmFtZSI6InRlcyIsImltYWdlIjpudWxsLCJlbWFpbCI6InBhaHJ1cm96aTE3QGdtYWlsLmNvbSIsImJpcnRoRGF0ZSI6IjIwMDAtMTEtMDMiLCJnZW5kZXIiOiJNYWxlIiwicGhvbmUiOiIwODE1NDI5MjIyMiIsInJvbGVJZCI6MiwiY3JlYXRlZEF0IjoiMjAyMi0xMi0xOFQwNTo1NDoxNy4wNDBaIiwidXBkYXRlZEF0IjoiMjAyMi0xMi0yMFQwMToxNTozNy44MzJaIiwiaWF0IjoxNjcxNTI0NzY3LCJleHAiOjE2NzE1NDYzNjd9.5jpA3VDvuf7oei0nmwg58IGqmR5lkBFA8CefsACpvxA';

const transaction = (path, id, data) => {

    const promise = new Promise((resolve, reject) => {
        axios.post(`${RootPath}/${path}/${id}`,
            {
                bookingId: id,
                image: data,
                TransactionMethodId: 1,
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        ).then((response) => {
            resolve(response)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}


export { transaction };