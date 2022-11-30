import React from 'react';
import JumbotronFlight from '../../../assets/homepage/jumbotron-flight.webp';

export default function Jumbotron() {
    return (
        <section className="jumbotron">
            <img src={JumbotronFlight} alt="" />
        </section>
    );
}
