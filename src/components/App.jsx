import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import React from 'react'
import axios from 'axios';
// import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
// import Badge from '@mui/material/Badge';
import { Link, useParams } from 'react-router-dom';
import { Badge3d, BadgeAd } from 'react-bootstrap-icons';
import { NotificationCircle, SmsNotification } from 'iconsax-react';

function Notif() {
    const [notification, setNotification] = useState([]);
    const [count, setcount] = useState('');
    const params = useParams()

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJBZGFtIiwiaW1hZ2UiOm51bGwsImVtYWlsIjoicGFocnVyb3ppMTdAbWFpbC5jb20iLCJiaXJ0aERhdGUiOiIyMDAwLTExLTAzIiwiZ2VuZGVyIjpudWxsLCJwaG9uZSI6bnVsbCwicm9sZUlkIjoyLCJjcmVhdGVkQXQiOiIyMDIyLTEyLTI4VDEyOjExOjA0LjQ5OFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEyLTI4VDEzOjIzOjA1LjE4MFoiLCJpYXQiOjE2NzIyMzMyNjMsImV4cCI6MTY3MjI1NDg2M30.TEzYB9LgJfXhklhZeeZkXe6lsuE7qBoCG6H15fzuh_E';

    useEffect(() => {
        axios
            .get(
                `http://localhost:8080/v1/notification`,
                { headers: { Authorization: `Bearer ${token}` } }
            ).then(function (response) {
                setNotification(response.data.notification);
                setcount(response.data.newNotification);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, []);

    console.log(notification);
    console.log(count);

    const socket = io('http://localhost:8080');
    // const room = params.id; // ambil user id (string!!)
    const id = 15;
    const room = id.toString(); // ambil user id (string!!)
    useEffect(() => {
        socket.on('connect', () => {
            console.log('connected');
        });
        socket.emit('connected', room);
    }, [count, notification]);

    // user
    socket.on('notif-to-user', (newNotif) => {
        setcount(count + 1);
        setNotification([newNotif, ...notification]);
    });

    const updateRead = (id, booking) => {
        axios.put(`http://localhost:8080/v1/notification/${id}`,
            { id: id },
            { headers: { Authorization: `Bearer ${token}` } })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        // then navigate to booking page using ${booking}
    };

    return (
        <div className="container mt-5">
            <h1>user</h1> <br />
            {/* <Badge badgeContent={count} color="primary">
        <NotificationsRoundedIcon color="action" />
      </Badge> */}

            <SmsNotification size={50} badgeContent={count} />
            {notification.map((data, index) => {
                if (data.isRead === false) {
                    return (
                        <p key={index}>
                            <a onClick={() => updateRead(data.id, data.bookingId)} className="btn btn-success">
                                {data.bookingCode} {data.message} {data.isRead}
                            </a>
                        </p>
                    );
                } else {
                    return (
                        <p key={index}>
                            <Link to={'/'} className="text-success">
                                {data.bookingCode} {data.message} {data.isRead}
                            </Link>
                        </p>
                    );
                }
            })}
        </div>
    );
}

export default Notif;
