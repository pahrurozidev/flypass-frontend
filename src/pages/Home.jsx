import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Navbar from '../components/homepage/navbar/Navbar';
import Jumbotron from '../components/homepage/jumbotron/Jumbotron';
import Search from '../components/homepage/search/Search';
import Service from '../components/homepage/service/Service';
import Offer from '../components/homepage/offer/Offer';
import Contact from '../components/homepage/contact/Contact';
import Footer from '../components/homepage/footer/Footer';
import { actionType } from '../redux/reducer/globalActionType';

// style homepage
import '../styles/homepage.css'
import Searched from "../components/homepage/searched/Searched";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Jumbotron />
                <Search />
                {(this.props.flights.length !== 0) && <Searched />}
                <Service />
                <Offer />
                <Contact />

                <Footer />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        flights: state.flights
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        plusCounter: () => dispatch({
            type: actionType.PLUS_COUNTER,
        }),
        minCounter: () => dispatch({
            type: actionType.MIN_COUNTER,
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);