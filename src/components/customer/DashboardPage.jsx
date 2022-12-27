import React from 'react'
import Sidebar from '../users/layouts/sidebar/Sidebar'
import Navbar from '../users/layouts/navbar/Navbar'
import CardList from './dashboard/card/Card'

function DasboardPage() {
    return (

        // <div className='d-flex'>
        //     <Sidebar />
        //     <div className='main-container'>
        //         <div id='content-wrapper' className='d-flex flex-column'>
        //             <div id="content">
        //                 <Navbar />
        //                 <CardList />
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div className="main-container">
                <CardList />
                </div>
            </div>
        </div>
    )
}
export default DasboardPage