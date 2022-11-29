import React, { Component, Fragment } from "react";
import Dashboard from '../components/admin/dashboard/Dashboard';

// style dashboard
import '../styles/dashboard.css';

class DashboardAdmin extends Component {
    render() {
        return (
            <Fragment>
                <Dashboard />
            </Fragment>
        )
    }
}

export default DashboardAdmin