import axios from "axios"
import { RootPath } from "../config"

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkhhaWthbCBBcmlmIiwiaW1hZ2UiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZ25keWl2aTkvaW1hZ2UvdXBsb2FkL3YxNjcxNjI2ODMzL1VzZXJzLUFkbWluaXN0cmF0b3ItaWNvbl9veHRnNTQucG5nIiwiZW1haWwiOiJoYWlrYWxAZmx5cGFzcy5jb20iLCJiaXJ0aERhdGUiOm51bGwsImdlbmRlciI6bnVsbCwicGhvbmUiOm51bGwsInJvbGVJZCI6MSwiY3JlYXRlZEF0IjoiMjAyMi0xMi0yN1QwNzoxNDo1OS4zOTBaIiwidXBkYXRlZEF0IjoiMjAyMi0xMi0yN1QwNzoxNDo1OS4zOTBaIiwiaWF0IjoxNjcyMTI2NjEwLCJleHAiOjE2NzIxNDgyMTB9.mik-BsmCrXuplGZJJLBm_KUppvx7TfocDWUEXK2aLZs';

const allBookings = (path) => {

    const promise = new Promise((resolve, reject) => {
        axios.get(
            `${RootPath}/${path}`,
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((response) => {
            resolve(response.data.booking)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}



export { allBookings };