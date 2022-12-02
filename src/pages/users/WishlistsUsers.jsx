import React, { Component, Fragment } from 'react';
import Wishlist from '../../components/users/wishlists/Wistlists';

// style My Ticket - Dashboard Users
import '../../styles/wishlist.css';

class WishlistUsers extends Component {
    render() {
        return (
            <Fragment>
                <Wishlist />
            </Fragment>
        )
    }
}

export default WishlistUsers;
