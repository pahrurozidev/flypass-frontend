import axios from "axios"
import { RootPath } from "../config"

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkhhaWthbCBBcmlmIiwiaW1hZ2UiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZ25keWl2aTkvaW1hZ2UvdXBsb2FkL3YxNjcxNjI2ODMzL1VzZXJzLUFkbWluaXN0cmF0b3ItaWNvbl9veHRnNTQucG5nIiwiZW1haWwiOiJoYWlrYWxAZmx5cGFzcy5jb20iLCJiaXJ0aERhdGUiOm51bGwsImdlbmRlciI6bnVsbCwicGhvbmUiOm51bGwsInJvbGVJZCI6MSwiY3JlYXRlZEF0IjoiMjAyMi0xMi0yN1QxNjowNzoyNi4wNDlaIiwidXBkYXRlZEF0IjoiMjAyMi0xMi0yN1QxNjowNzoyNi4wNDlaIiwiaWF0IjoxNjcyMjA0OTM1LCJleHAiOjE2NzIyMjY1MzV9.zUtUXXEOwJ-T12DV-qto1wZ6HICJadoirxCDafkKIEE';

const flight = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${RootPath}/${path}`)
            .then((response) => {
                resolve(response.data.flights)
            }, (error) => {
                reject(error);
            });
    })

    return promise;
}

const flightById = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${RootPath}/${path}`)
            .then((response) => {
                resolve(response.data)
            }, (error) => {
                reject(error);
            });
    })

    return promise;
}

const addFlight = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(
            `${RootPath}/${path}`, data,
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((response) => {
            resolve(response)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}

const DeleteFlight = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(
            `${RootPath}/${path}`,
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((response) => {
            resolve(response)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}

export { flight, flightById, addFlight, DeleteFlight };