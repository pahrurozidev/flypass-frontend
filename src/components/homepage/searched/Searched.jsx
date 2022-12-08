import React from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/search.css';
import Garuda from '../../../assets/homepage/garuda.svg'
import Clock from '../../../assets/homepage/clock.png'
import FlightRing from '../../../assets/homepage/flight-ring.png'
import Bagasi from '../../../assets/homepage/bagasi.png'
import Food from '../../../assets/homepage/food.png'
import Entertain from '../../../assets/homepage/entertain.png'
import Warning from '../../../assets/homepage/warning.png'

export default function Searched() {
    return (
        <section class="container m-auto pb-1 mb-5">
            <div className="search_result-header card p-3">
                <h1>Select Flight</h1>
                <p className="col-12 col-md-10 col-lg-8 text-select">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores laborum eius aperiam ut adipisci cum, quia quam repudiandae perferendis a expedita nobis ipsa.</p>
            </div>
            <div class="search_result__first m-auto">
                <div class="card search_result p-0 rounded-0 rounded-top">
                    <div class="flight-name bg">
                        <div><img src={Garuda} alt="garuda logo" /></div>
                        <span>Garuda Indonesia</span>
                    </div>
                    <div class="flight-duration-ring bg">
                        <div class="cgk-time">
                            <div class="time">08:25</div>
                            <div class="cgk">CGK</div>
                        </div>
                        <div class="ring-time">
                            <div>Duration: 1h 45m</div>
                            <div class="ring"></div>
                            <div>Direct</div>
                        </div>
                        <div class="sn-time">
                            <div class="time">11:10</div>
                            <div class="sn">SN</div>
                        </div>
                    </div>
                    <div class="bg flight-service">
                        <div class="service-label">Service:</div>
                        <div>Bagasi 30kg, Makan, Hiburan</div>
                    </div>
                    <div class="bg flight-price">
                        <div class="price"><span class="value">Rp 8.016.500</span>/org</div>
                        <Link to={'/search/flight/detail'}>
                            <div className="pilih-btn shadow">Pilih</div>
                        </Link>
                    </div>
                    <div class="bg flight-detail-refaund">
                        <div class="flight-detail__btn">Flight Details</div>
                        <div class="flight-refaund__btn">Refaund</div>
                    </div>
                </div>

                <div class="search-detail card rounded-0 rounded-bottom border-top-0">
                    <div class="search-detail__time s-detail">
                        <div class="search-detail__time_departure">08:05 - 01 Dec</div>
                        <div class="search-detail__time_estimation">
                            <div><img src={Clock} alt="" /></div>
                            <div>1h 45m</div>
                        </div>
                        <div class="search-detail__time_arrival">10:50 - 01 Dec</div>
                    </div>
                    <div class="s-detail search-detail__ring">
                        <img src={FlightRing} alt="" />
                    </div>
                    <div class="s-detail search-detail__destination">
                        <div>
                            <div>Jakarta (CGK)</div>
                            <div>Soekarno Hatta International Airport</div>
                        </div>
                        <div>
                            <div>Singapore (SIN)</div>
                            <div>Changi Intl</div>
                        </div>
                    </div>
                    <div class="search-detail__attr">
                        <div class="search-detail__attr-item card">
                            <div class="attr_name">
                                <div><img src={Garuda} alt="" /></div>
                                <div>
                                    <div>Garuda Indonesia</div>
                                    <div>GA828 - Economy</div>
                                </div>
                            </div>
                            <div class="attr_service">
                                <div class="attr_service_item">
                                    <div><img src={Bagasi} alt="" /></div>
                                    <div>Bagasi 30 kg</div>
                                </div>
                                <div class="attr_service_item">
                                    <div><img src={Food} alt="" /></div>
                                    <div>Makanan di Pesawat</div>
                                </div>
                                <div class="attr_service_item">
                                    <div><img src={Entertain} alt="" /></div>
                                    <div>Hiburan di Pesawat</div>
                                </div>
                                <div class="attr_service_item">
                                    <div><img src={Warning} alt="" /></div>
                                    <div>
                                        <div><span class="fw-bold">Pesawat</span>: Airbus A330</div>
                                        <div><span class="fw-bold">Total Kursi</span>: 3-3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="card search_result search_result p-0">
                    <div class="flight-name bg">
                        <div><img src={Garuda} alt="garuda logo" /></div>
                        <span>Garuda Indonesia</span>
                    </div>
                    <div class="flight-duration-ring bg">
                        <div class="cgk-time">
                            <div class="time">08:25</div>
                            <div class="cgk">CGK</div>
                        </div>
                        <div class="ring-time">
                            <div>Duration: 1h 45m</div>
                            <div class="ring"></div>
                            <div>Direct</div>
                        </div>
                        <div class="sn-time">
                            <div class="time">11:10</div>
                            <div class="sn">SN</div>
                        </div>
                    </div>
                    <div class="bg flight-service">
                        <div class="service-label">Service:</div>
                        <div>Bagasi 30kg, Makan, Hiburan</div>
                    </div>
                    <div class="bg flight-price">
                        <div class="price"><span class="value">Rp 8.016.500</span>/org</div>
                        <Link to={'/search/flight/detail'}>
                            <div className="pilih-btn shadow">Pilih</div>
                        </Link>
                    </div>
                    <div class="bg flight-detail-refaund">
                        <div class="flight-detail__btn">Flight Details</div>
                        <div class="flight-refaund__btn">Refaund</div>
                    </div>
                </div>
            </div>

            <div>
                <div class="card search_result search_result p-0">
                    <div class="flight-name bg">
                        <div><img src={Garuda} alt="garuda logo" /></div>
                        <span>Garuda Indonesia</span>
                    </div>
                    <div class="flight-duration-ring bg">
                        <div class="cgk-time">
                            <div class="time">08:25</div>
                            <div class="cgk">CGK</div>
                        </div>
                        <div class="ring-time">
                            <div>Duration: 1h 45m</div>
                            <div class="ring"></div>
                            <div>Direct</div>
                        </div>
                        <div class="sn-time">
                            <div class="time">11:10</div>
                            <div class="sn">SN</div>
                        </div>
                    </div>
                    <div class="bg flight-service">
                        <div class="service-label">Service:</div>
                        <div>Bagasi 30kg, Makan, Hiburan</div>
                    </div>
                    <div class="bg flight-price">
                        <div class="price"><span class="value">Rp 8.016.500</span>/org</div>
                        <Link to={'/search/flight/detail'}>
                            <div className="pilih-btn shadow">Pilih</div>
                        </Link>
                    </div>
                    <div class="bg flight-detail-refaund">
                        <div class="flight-detail__btn">Flight Details</div>
                        <div class="flight-refaund__btn">Refaund</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
