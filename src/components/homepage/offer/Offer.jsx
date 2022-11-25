import React from 'react';
import Love from '../../../assets/homepage/love.png';
import Rates from '../../../assets/homepage/rates.png';
import UserTesting from '../../../assets/homepage/user-testing.png';


export default function Offer() {
    return (
        <section className="container offer">

            <img src={Love} alt="" className="favorite" />

            <div className="card user-testing">
                <div>
                    <img src={Rates} alt="" />
                    <p>
                        Thank you for helping
                        <br />
                        my vacation. Amazing!
                    </p>
                </div>
                <div className="user">
                    <div>
                        <img src={UserTesting} alt="" />
                    </div>
                    <p>
                        <span>Sova Nerds</span>
                        <br />
                        Backpacker
                    </p>
                </div>
            </div>

            <div>
                <h6>New User</h6>
                <h2>
                    Dont Miss The 50% Discount
                    <br />
                    If You Register Today
                </h2>
                <p>
                    Let's maximize your next holiday with us
                    <br />
                    with the best experience.
                </p>
                <button type="submit">Register Account</button>
            </div>
        </section>
    );
}
