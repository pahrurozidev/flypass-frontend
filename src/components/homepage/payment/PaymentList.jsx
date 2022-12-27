import React from 'react'
import Garuda from '../../../assets/homepage/garuda.svg';
import Clock from '../../../assets/homepage/clock.png';
import Bagasi from '../../../assets/homepage/bagasi.png'
import FlightPay from '../../../assets/homepage/flightpay.png';
import ShopeePay from '../../../assets/homepage/shopeepay.png';
import CheckCircle from '../../../assets/homepage/check-circle.png';
import BCA from '../../../assets/homepage/bca.png';
import BNI from '../../../assets/homepage/bni.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { API } from '../../../services'
import { useEffect } from 'react';
import moment from 'moment';

export default function PaymentList({ book }) {

  const { id } = useParams();
  const navigate = useNavigate();
  const [showCheck, setShowCheck] = useState({
    shopeePay: false,
    flightPay: false,
    bca: false,
    bni: false,
  });
  const [image, setImage] = useState({
    image: ''
  })

  const [oneWay, setOneWay] = useState({});

  const [payment, setPayment] = useState(true);

  const checkPaymentShopeePayHandler = () => {
    setShowCheck({ shopeePay: true });
    setPayment(false);
  }
  const checkPaymentFlightPayHandler = () => {
    setShowCheck({ flightPay: true });
    setPayment(false);
  }
  const checkPaymentBcaHandler = () => {
    setShowCheck({ bca: true });
    setPayment(false);
  }
  const checkPaymentBniHandler = () => {
    setShowCheck({ bni: true });
    setPayment(false);
  }

  const paymentHandler = (event) => {
    const inputForm = { ...image };
    inputForm[event.target.name] = event.target.files[0];
    setImage(inputForm.image);
  }

  // useEffect(() => {
  //   API.flightDetail(book.data.booking.flight1Id).then((flight) => {
  //     setOneWay(flight);
  //   })
  // }, [])

  const submitPaymentHandler = () => {
    API.transactions(id, image).then((book) => {
      console.log(book);


      // setBooking({
      //   totalPrice: book.totalPrice
      // })

      // console.log(booking);

      if (book.data.message === 'created successfully') {
        return navigate('/search/flight/payment/completed');
      }
    });
  }

  return (
    <>
      <div className="mb-5 payment-header">
        <h1>Payment Method</h1>
        <div className="payment">
          <div className="payment-item card p-3 gap-4">
            <div>
              <h2 className='fw-bold'>FlightPay & E-Wallet</h2>
              <div className="d-flex gap-3">

                <div className={`border ${showCheck.flightPay && 'border-primary border-2'} p-2 rounded position-relative payment-item-light payment-item-name`}
                  onClick={() => checkPaymentFlightPayHandler()}>
                  <img src={FlightPay} alt="" />
                  {showCheck.flightPay &&
                    <div className="position-absolute checklist-icon"><img src={CheckCircle} alt="" className="shadow rounded-circle" />
                    </div>}
                </div>

                <div
                  className={`border ${showCheck.shopeePay && 'border-primary border-2'} p-2 rounded position-relative payment-item-light payment-item-name`}
                  onClick={() => checkPaymentShopeePayHandler()}>
                  <img src={ShopeePay} className="shadow1 rounded" alt="" />
                  {/* <!-- checklist --> */}
                  {showCheck.shopeePay &&
                    <div className="position-absolute checklist-icon"><img src={CheckCircle} alt="" className="shadow rounded-circle" />
                    </div>}
                </div>

              </div>
            </div>
            <div>
              <h2 className='fw-bold'>Credit / Debit Card</h2>
              <div className="d-flex gap-3">
                <div className={`border ${showCheck.bca && 'border-primary border-2'} p-2 rounded position-relative payment-item-light payment-item-name`} onClick={() => checkPaymentBcaHandler()}>
                  <img src={BCA} alt="" />
                  {showCheck.bca &&
                    <div className="position-absolute checklist-icon"><img src={CheckCircle} alt="" className="shadow rounded-circle" />
                    </div>}
                </div>
                <div className={`border ${showCheck.bni && 'border-primary border-2'} p-2 rounded position-relative payment-item-light payment-item-name`} onClick={() => checkPaymentBniHandler()}>
                  <img src={BNI} alt="" />
                  {showCheck.bni &&
                    <div className="position-absolute checklist-icon"><img src={CheckCircle} alt="" className="shadow rounded-circle" />
                    </div>}
                </div>
              </div>
            </div>
            <div>

              {/* payment subtantiation */}
              <div className={`card p-3 ${payment && 'd-none'}`}>
                <div className='payment-status'>
                  <h5 className='fw-bold'>Payment Status</h5>
                  <div className='d-flex mt-3'>
                    <div className='col-6 col-md-4 mb-2'>Payment Code (Ref.1)</div>
                    <div className='col-6 col-md-4 mb-2'>: 89123004139</div>
                  </div>
                  <div className='d-flex'>
                    <div className='col-6 col-md-4 mb-2'>Amount ( IDR )</div>
                    {/* <div className='col-6 col-md-4 mb-2'>: Rp {book.data.booking.totalPrice}</div> */}
                  </div>
                  <p>*Please pay before
                    21/12/2022 17:38:00</p>
                </div>

                <div className='mt-4 mt-md-2'>
                  <div className=''>Upload your payment substantiation</div>
                  <div>
                    <input type="file" name="image" className="form-control payment-image" onChange={(event) => paymentHandler(event)} required />
                  </div>
                  <div className='d-flex justify-content-end mt-3'>
                    <div className='btn btn-primary shadow btn-send'
                      onClick={() => submitPaymentHandler()}>Send</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* <!-- flight price detail --> */}
          {/* <div className="price-detail-header payment-price">
            <div className="card overflow-hidden">
              <div className="price-detail">
                <div className="card p-3 border-0 border-bottom rounded-0">Price Details</div>
                <div className="p-3 d-flex justify-content-between">
                  <div className="d-flex flex-column gap-3">
                    <div>Subtotal</div>
                    <div>Dewasa 1x</div>
                    <div>Additional Cost</div>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <div>Rp 4.416.500</div>
                    <div>Rp 4.416.500</div>
                    <div>Rp 0</div>
                  </div>
                </div>
                <div className="d-flex justify-content-between border-top mx-3 py-3 px-0">
                  <div>Total Price</div>
                  <div className="text-primary">Rp 4.416.500</div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 mb-5">
              <Link to={''}>
                <div
                  className="d-flex border-1 rounded text-white col-12 justify-content-center border-0 price-button py-2 shadow">Continue</div>
              </Link>
            </div>
          </div> */}

          {/* <!-- flight detail --> */}
          <div className="price-detail-header payment-flight-detail">
            {/* <div className="card overflow-hidden">
              <div className="price-detail pb-3 pb-lg-0">

                <div className="card p-3 border-0 border-bottom rounded-0">Flight Details</div>

                <div className="p-3 d-flex flex-column gap-1">
                  <div>Departure Flight</div>
                  <div className="fw-lighter">{moment(oneWay.departureDate).format('LLLL').slice(0, -8)}</div>
                </div>

                <div className="p-3 pb-0 pt-0 d-flex justify-content-between">
                  <div className="d-flex flex-column gap-2">
                    <div>{oneWay.Airline.name}</div>
                    <div className="fw-lighter">{oneWay.flightCode}</div>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <div>
                      <img src={oneWay.Airline.image} alt="" width={20} />
                    </div>
                  </div>
                </div>

                <div className="border-top m-3 mb-0 pt-3 d-flex flex-column gap-4">
                  <div className="d-flex flex-column gap-1">
                    <div>{oneWay.departureAirport.city} ({oneWay.departureAirport.iata})</div>
                    <div className="fw-lighter">{oneWay.departureAirport.name}</div>
                    <div>{moment(oneWay.departureDate).format('llll').slice(0, -15)} - {moment(oneWay.departureDate).format('llll').slice(0, -15)}</div>
                  </div>

                  <div className="fw-lighter d-flex gap-1">
                    <div><img src={Clock} alt="" /></div>
                    <div>{oneWay.duration.slice(1, 2)}h, {oneWay.duration.slice(3, 5)}m</div>
                  </div>

                  <div className="d-flex flex-column gap-1">
                    <div>Singapore (SIN)</div>
                    <div className="fw-lighter">Changi Intl Airport</div>
                    <div>{moment(oneWay.arrivalDate).format('llll').slice(0, -15)} - {moment(oneWay.arrivalDate).format('llll').slice(0, -15)}</div>
                  </div>
                </div>

                <div className="d-flex gap-2 items-center m-3 mb-0 pt-3 border-top fw-lighter">
                  <div><img src={Bagasi} alt="" /></div>
                  <p>Bagasi {book.data.passsenger.baggage[0]} kg</p>
                </div>
              </div>
            </div> */}

            {/* <!-- short contact detail --> */}
            <div className="payment-contact-detail">
              <div className="card overflow-hidden">
                <div className="price-detail">

                  <div className="card p-3 border-0 border-bottom rounded-0">Contact Details</div>

                  <div className="p-3 d-flex flex-column gap-2">
                    {/* <div>Departure Flight</div> */}
                    <div className="fw-lighter d-flex flex-column gap-1">
                      {/* <div>{book.data.passengerContact.email}</div>
                      <div>{book.data.passengerContact.phone}</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
