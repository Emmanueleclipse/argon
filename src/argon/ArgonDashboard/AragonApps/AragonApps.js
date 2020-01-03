import React from 'react';
import './AragonApps.css';

const AragonApps = props => (
    <div className={'AragonApps ' + props.className}>
        <div className='AragonAppsPadding'>
            <div className='AragonFlex'>
                <div className='AragonAppsIcon'>
                    <i className='material-icons orangeGre'>today</i>
                    <b>Calender</b>
                </div>
                <div className='AragonAppsIcon'>
                    <i className='material-icons orangeGre2'>email</i>
                    <b>Email</b>
                </div>
                <div className='AragonAppsIcon'>
                    <i className='material-icons blueGre'>payment</i>
                    <b>Payment</b>
                </div>
            </div>
            <div className='AragonFlex'>
                <div className='AragonAppsIcon'>
                    <i className='material-icons tealGre'>report</i>
                    <b>Reports</b>
                </div>
                <div className='AragonAppsIcon'>
                    <i className='material-icons pupleGre'>my_location</i>
                    <b>Maps</b>
                </div>
                <div className='AragonAppsIcon'>
                    <i className='material-icons yellowGre'>shop</i>
                    <b>Shop</b>
                </div>
            </div>
        </div>
    </div>
)

export default AragonApps;