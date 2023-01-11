import React from 'react';
import Instagram from '../../../assets/homepage/instagram.png';
import Twitter from '../../../assets/homepage/twitter.png';
import Whatsapp from '../../../assets/homepage/whatsapp.png';
import Fligh from '../../../assets/homepage/flight.webp';
import Logo from '../../../assets/homepage/Logo.png';

export default function Contact() {
    return (
        <section className="container contact" id='contact'>
            <div className="contact-detail">
                <img src={Logo} alt="" className="flypass-logo" />
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                </p>

                <h6>Jln. Diponegoro No.53 Telp.</h6>
                <h6>Telp. (0361) 257688,245925</h6>
                <h6>HP. 085 7391 40565, 085 637 04 800</h6>
                <div className="social-media">
                    <div>
                        <img src={Instagram} alt="" />
                    </div>
                    <div>
                        <img src={Twitter} alt="" />
                    </div>
                    <div>
                        <img src={Whatsapp} alt="" />
                    </div>
                </div>
            </div>
            <img src={Fligh} alt="" className="fligh" style={{ height: '100%' }} />
        </section>
    );
}
