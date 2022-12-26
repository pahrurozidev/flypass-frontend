import axios from "axios"
import { RootPath } from "../config"

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsIm5hbWUiOiJBZGFtIiwiaW1hZ2UiOm51bGwsImVtYWlsIjoicGFocnVyb3ppMTdAZ21haWwuY29tIiwiYmlydGhEYXRlIjoiMjAwMC0xMS0wMyIsImdlbmRlciI6bnVsbCwicGhvbmUiOm51bGwsInJvbGVJZCI6MiwiY3JlYXRlZEF0IjoiMjAyMi0xMi0yNlQwMTo1ODozMi42MjdaIiwidXBkYXRlZEF0IjoiMjAyMi0xMi0yNlQwMzoyODozNi4xMjhaIiwiaWF0IjoxNjcyMDMwMzU0LCJleHAiOjE2NzIwNTE5NTR9.5SM0QzE0g6LWmkdTENQ8mRcijhEoKfr6jnT5LodzKYw';

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

export { userNotification };