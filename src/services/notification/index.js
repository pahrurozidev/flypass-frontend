import axios from "axios"
import { RootPath } from "../config"

const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6IlBhaHJ1cm96aSIsImltYWdlIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGduZHlpdmk5L2ltYWdlL3VwbG9hZC92MTY3MTYyNjgzMy9Vc2Vycy1BZG1pbmlzdHJhdG9yLWljb25fb3h0ZzU0LnBuZyIsImVtYWlsIjoicGFocnVyb3ppQGZseXBhc3MuY29tIiwiYmlydGhEYXRlIjpudWxsLCJnZW5kZXIiOm51bGwsInBob25lIjpudWxsLCJyb2xlSWQiOjEsImNyZWF0ZWRBdCI6IjIwMjItMTItMjZUMTg6MTI6MzAuODU4WiIsInVwZGF0ZWRBdCI6IjIwMjItMTItMjZUMTg6MTM6NTMuMTE1WiIsImlhdCI6MTY3MjE0MTQwNSwiZXhwIjoxNjcyMTYzMDA1fQ.VsC7DPPL2zwzQa-b2D6l6fjlT8ZBcIqIOyKBmDW9gnE';

const adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6IlBhaHJ1cm96aSIsImltYWdlIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGduZHlpdmk5L2ltYWdlL3VwbG9hZC92MTY3MTYyNjgzMy9Vc2Vycy1BZG1pbmlzdHJhdG9yLWljb25fb3h0ZzU0LnBuZyIsImVtYWlsIjoicGFocnVyb3ppQGZseXBhc3MuY29tIiwiYmlydGhEYXRlIjpudWxsLCJnZW5kZXIiOm51bGwsInBob25lIjpudWxsLCJyb2xlSWQiOjEsImNyZWF0ZWRBdCI6IjIwMjItMTItMjZUMTg6MTI6MzAuODU4WiIsInVwZGF0ZWRBdCI6IjIwMjItMTItMjZUMTg6MTM6NTMuMTE1WiIsImlhdCI6MTY3MjE0MTQwNSwiZXhwIjoxNjcyMTYzMDA1fQ.VsC7DPPL2zwzQa-b2D6l6fjlT8ZBcIqIOyKBmDW9gnE';

const userNotification = (path) => {

    const promise = new Promise((resolve, reject) => {
        axios.get(
            `${RootPath}/${path}`,
            { headers: { Authorization: `Bearer ${userToken}` } }
        ).then((response) => {
            resolve(response.data.notification)
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
            { headers: { Authorization: `Bearer ${adminToken}` } }
        ).then((response) => {
            resolve(response.data.notification)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}

export { userNotification, adminNotification };