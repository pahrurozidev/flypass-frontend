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

export default function PaymentList({ price }) {

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

  const submitPaymentHandler = () => {
    API.transactions(id, image).then((res) => {
      console.log(res);
      if (res.data.message === 'created successfully') {
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
                    <div className='col-3 mb-2'>Payment Code (Ref.1)</div>
                    <div className='col-3 mb-2'>: 891230041399346</div>
                  </div>
                  <div className='d-flex'>
                    <div className='col-3 mb-2'>Amount ( IDR )</div>
                    <div className='col-3 mb-2'>: Rp {price}</div>
                  </div>
                  <p>*Please pay before
                    21/12/2022 17:38:00</p>
                </div>

                <div className='mt-2'>
                  <h5 className=''>Upload your payment substantiation</h5>
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
            <div className="card overflow-hidden">
              <div className="price-detail pb-3 pb-lg-0">

                <div className="card p-3 border-0 border-bottom rounded-0">Flight Details</div>

                <div className="p-3 d-flex flex-column gap-1">
                  <div>Departure Flight</div>
                  <div className="fw-lighter">Thu, 01 December 2022</div>
                </div>

                <div className="p-3 pb-0 pt-0 d-flex justify-content-between">
                  <div className="d-flex flex-column gap-2">
                    <div>Garuda Indonesia</div>
                    <div className="fw-lighter">GA828</div>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <div>
                      <img src={Garuda} alt="" />
                    </div>
                  </div>
                </div>

                <div className="border-top m-3 mb-0 pt-3 d-flex flex-column gap-4">
                  <div className="d-flex flex-column gap-1">
                    <div>Jakarta (CGK)</div>
                    <div className="fw-lighter">Soekarno Hatta International Airport</div>
                    <div>08:05 - 01 Dec</div>
                  </div>

                  <div className="fw-lighter d-flex gap-1">
                    <div><img src={Clock} alt="" /></div>
                    <div>1h 45m</div>
                  </div>

                  <div className="d-flex flex-column gap-1">
                    <div>Singapore (SIN)</div>
                    <div className="fw-lighter">Changi Intl Airport</div>
                    <div>08:05 - 01 Dec</div>
                  </div>
                </div>

                <div className="d-flex gap-2 items-center m-3 mb-0 pt-3 border-top fw-lighter">
                  <div><img src={Bagasi} alt="" /></div>
                  <p>Bagasi 30 kg</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- short contact detail --> */}
          <div className="payment-contact-detail">
            <div className="card overflow-hidden">
              <div className="price-detail">

                <div className="card p-3 border-0 border-bottom rounded-0">Contact Details</div>

                <div className="p-3 d-flex flex-column gap-2">
                  <div>Departure Flight</div>
                  <div className="fw-lighter d-flex flex-column gap-1">
                    <div>johndoe@gmail.com</div>
                    <div>+62 821 1234 5678</div>
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
