import React from 'react'
import Garuda from '../../../assets/homepage/garuda.svg';
import Clock from '../../../assets/homepage/clock.png';
import Bagasi from '../../../assets/homepage/bagasi.png'
import FlightPay from '../../../assets/homepage/flightpay.png';
import ShopeePay from '../../../assets/homepage/shopeepay.png';
import CheckCircle from '../../../assets/homepage/check-circle.png';
import BCA from '../../../assets/homepage/bca.png';
import BNI from '../../../assets/homepage/bni.png';
import { Link } from 'react-router-dom';

export default function PaymentList() {
  return (
    <>
      <div class="mb-5 payment-header">
        <h1>Payment Method</h1>
        <div class="payment">
          <div class="payment-item card p-3 gap-4">
            <div>
              <h2>FlightPay & E-Wallet</h2>
              <div class="d-flex gap-3">

                <div class="border p-2 rounded payment-item-name">
                  <img src={FlightPay} alt="" />
                </div>

                <div
                  class="border border-primary border-2 p-2 rounded position-relative payment-item-light">
                  <img src={ShopeePay} class="shadow rounded" alt="" />
                  {/* <!-- checklist --> */}
                  <div class="position-absolute checklist-icon"><img src={CheckCircle} alt="" class="shadow rounded-circle" />
                  </div>
                </div>

              </div>
            </div>

            <div>
              <h2>Credit / Debit Card</h2>
              <div class="d-flex gap-3">
                <div class="border p-2 rounded payment-item-name"><img src={BCA} alt="" />
                </div>
                <div class="border p-2 rounded payment-item-name"><img src={BNI} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- flight price detail --> */}
          <div class="price-detail-header payment-price">
            <div class="card overflow-hidden">
              <div class="price-detail">
                <div class="card p-3 border-0 border-bottom rounded-0">Price Details</div>
                <div class="p-3 d-flex justify-content-between">
                  <div class="d-flex flex-column gap-3">
                    <div>Subtotal</div>
                    <div>Dewasa 1x</div>
                    <div>Additional Cost</div>
                  </div>
                  <div class="d-flex flex-column gap-3">
                    <div>Rp 4.416.500</div>
                    <div>Rp 4.416.500</div>
                    <div>Rp 0</div>
                  </div>
                </div>
                <div class="d-flex justify-content-between border-top mx-3 py-3 px-0">
                  <div>Total Price</div>
                  <div class="text-primary">Rp 4.416.500</div>
                </div>
              </div>
            </div>
            <div class="text-center mt-4 mb-5">
              <Link to={''}>
                <div
                  class="d-flex border-1 rounded text-white col-12 justify-content-center border-0 price-button">Continue</div>
              </Link>
            </div>
          </div>

          {/* <!-- flight detail --> */}
          <div class="price-detail-header payment-flight-detail">
            <div class="card overflow-hidden">
              <div class="price-detail pb-3 pb-lg-0">

                <div class="card p-3 border-0 border-bottom rounded-0">Flight Details</div>

                <div class="p-3 d-flex flex-column gap-1">
                  <div>Departure Flight</div>
                  <div class="fw-lighter">Thu, 01 December 2022</div>
                </div>

                <div class="p-3 pb-0 pt-0 d-flex justify-content-between">
                  <div class="d-flex flex-column gap-2">
                    <div>Garuda Indonesia</div>
                    <div class="fw-lighter">GA828</div>
                  </div>
                  <div class="d-flex flex-column gap-3">
                    <div>
                      <img src={Garuda} alt="" />
                    </div>
                  </div>
                </div>

                <div class="border-top m-3 mb-0 pt-3 d-flex flex-column gap-4">
                  <div class="d-flex flex-column gap-1">
                    <div>Jakarta (CGK)</div>
                    <div class="fw-lighter">Soekarno Hatta International Airport</div>
                    <div>08:05 - 01 Dec</div>
                  </div>

                  <div class="fw-lighter d-flex gap-1">
                    <div><img src={Clock} alt="" /></div>
                    <div>1h 45m</div>
                  </div>

                  <div class="d-flex flex-column gap-1">
                    <div>Singapore (SIN)</div>
                    <div class="fw-lighter">Changi Intl Airport</div>
                    <div>08:05 - 01 Dec</div>
                  </div>
                </div>

                <div class="d-flex gap-2 items-center m-3 mb-0 pt-3 border-top fw-lighter">
                  <div><img src={Bagasi} alt="" /></div>
                  <p>Bagasi 30 kg</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- short contact detail --> */}
          <div class="price-detail-header payment-contact-detail">
            <div class="card overflow-hidden">
              <div class="price-detail">

                <div class="card p-3 border-0 border-bottom rounded-0">Contact Details</div>

                <div class="p-3 d-flex flex-column gap-2">
                  <div>Departure Flight</div>
                  <div class="fw-lighter d-flex flex-column gap-1">
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
