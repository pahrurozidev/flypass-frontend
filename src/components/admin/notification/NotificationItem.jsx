import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';
import { ArrowCircleLeft2 } from 'iconsax-react'
import moment from 'moment';
import { Trash2 } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom'
import { API } from '../../../services';
import NotFound from '../../notfound/NotFound';

export default function NotificationList() {

    const navigate = useNavigate();

    const [notification, setNotification] = useState([]);

    useEffect(() => {
        API.adminNotifications().then((notif) => {
            setNotification(notif);
        })
    }, [])

    const onShowNotificationHandler = (notifId, message, bookingId, isRead) => {
        API.updateNotifications(notifId).then((res) => console.log(res))

        API.transactionsGet().then((transactions) => {
            const transaction = transactions.filter((t) => t.bookingId == bookingId);
            navigate(`/transaction/${transaction[0].bookingId}`);
        })
    }

    return (
        <div className='container-fluid pb-5'>

            <div className='admin-content px-lg-2'>
                {/* header label */}
                <div className='border rounded px-2 pt-md-3 px-md-3 pb-1 pt-3'>
                    <h2 className='fs-4'>All Notification</h2>
                    <p className='header-text fw-light col-12 col-lg-9 p-0'>Halaman ini menampilkan semua notifikasi yang di terima.</p>
                </div>

                {/* broadcrumb */}
                <div className="border rounded py-2 px-2 px-md-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                    <Link to={'/notification'} className="text-decoration-none text-dark d-flex btn gap-1 gap-md-2 ps-0 flex-wrap">
                        <ArrowCircleLeft2 size={20} />
                        <div className='label'>Notification</div>
                    </Link>
                </div>

                {/* {notification.length === 0 ? <NotFound alert={'Notification'} /> : */}
                {notification.length === 0 ? <ReactLoading type={'bars'} color={'silver'} height={'10%'} width={'10%'} className="mt-5 m-auto" /> :
                    <div className='mt-3 notification d-flex flex-column gap-3 card p-3'>
                        {notification.map((notif) => (
                            <div className={`card d-flex flex-row items-center unread ${notif.isRead && 'text-muted read'}`}
                                onClick={() => onShowNotificationHandler(notif.id, notif.message, notif.bookingId, notif.isRead)}>
                                <div className="card-body">
                                    {console.log(notif.isRead)}
                                    <h4 className={`card-title`}>{notif.message}</h4>
                                    <small className='notif-date'>{moment(notif.updatedAt).format('LLLL')}</small>
                                </div>
                                {/* <Trash2 size={35} className='ms-1 text-danger delete-transaction-btn bg-light p-2 rounded' /> */}
                            </div>
                        ))}
                    </div>}
            </div>
        </div >
    )
}
