import { ArrowCircleLeft2 } from 'iconsax-react';
import ReactLoading from 'react-loading';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Garuda from '../../../assets/dasboard-admin/garuda.svg';
import Line from '../../../assets/dasboard-admin/line.svg';
import { API } from '../../../services';
import NotFound from '../../notfound/NotFound';

export default function TransactionList() {
  const [show, setShow] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    API.getHistoryTransactions().then((flight) => {
      flight && setHistory(flight);
      flight && setShow(true);
    });
  }, [])

  return (
    <div>
      {show && (
        <div className='container-fluid pb-5'>
          <div className='admin-content px-lg-2'>

            {/* header label */}
            <div className='border rounded px-2 pt-md-3 px-md-3 pb-1 pt-3'>
              <h2 className='fs-4'>All History</h2>
              <p className='header-text fw-light col-12 col-lg-9 p-0'>Pada halaman ini anda dapat melihat riwayat transaksi yang telah dilakukan.</p>
            </div>

            {/* broadcrumb */}
            <div className="border rounded py-2 px-2 px-md-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
              <Link to={'/user/dashboard/history'} className="text-decoration-none text-dark d-flex btn gap-1 gap-md-2 ps-0 flex-wrap">
                <ArrowCircleLeft2 size={20} className="arrow-left" />
                <div className='label'>history</div>
              </Link>
            </div>

            {history.length === 0 ?
              <ReactLoading type={'bars'} color={'silver'} height={'10%'} width={'10%'} className="mt-5 m-auto" /> :
              <div className="list-ticket card mt-3 p-3">
                <table className="table table-ticket m-0">
                  <thead>
                    <tr>
                      <th>Airlines</th>
                      <th>From</th>
                      <th> </th>
                      <th>To</th>
                      <th>Duration</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((flight) => (
                      <tr>
                        <td data-label="Airlines" className="airlines">
                          <img src={flight.flight1.Airline.image} alt="Airplanes" /><br className="d-none" />
                          <span>{flight.flight1.Airline.name}</span>
                        </td>
                        <td data-label="From" className="departure-from">
                          <p className="departure-time">08:05</p>
                          <span className="from-flight">{flight.flight1.departureAirport.city}</span>
                        </td>
                        <td className="line-flight">
                          <img src={Line} alt="" />
                        </td>
                        <td data-label="To" className="arrival-to">
                          <p className="arrival-time">09:50</p>
                          <span className="to-flight">{flight.flight1.arrivalAirport.city}</span>
                        </td>
                        <td data-label="Duration" className="duration">
                          <p className="duration-flight">1h 45m</p>
                          <span className="type-direct">Direct</span>
                        </td>
                        <td data-label="Date" className="departure-date">01 Dec 2022</td>
                        <td data-label="Action" className="action">
                          <Link
                            to={`/user/dashboard/history/${flight.id}`} className="detail">
                            <p className='text-decoration-none text-white bg-primary p-2 rounded-3'>Detail</p>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>}
          </div>
        </div>
      )}
    </div>
  );
}
