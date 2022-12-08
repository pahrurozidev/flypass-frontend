import React, { Component, Fragment } from "react";
import Searched from "../components/homepage/searched/Searched";
import Navbar from '../components/homepage/navbar/Navbar';
import Footer from '../components/homepage/footer/Footer';

import '../styles/search.css';

class Search extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Searched />
                <Footer />
            </Fragment>
        )
    }
}

export default Search;