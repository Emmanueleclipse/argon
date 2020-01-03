import React from 'react';
import { Link } from 'react-router-dom';

const AragonPostComments = props => (
    <div className='AragonPostComments'>
        <img src={props.avtar} alt='' className='AragonMemberIcon' />
        <div className='AragonComments'>
            <div className='AragonSmallTitle'>{props.user}</div>
            <p className='AragonFont-14'>
                {props.children}
            </p>
            <Link to='/'><i className='material-icons AragonBlue'>thumb_up</i> <b>{props.likes} likes</b></Link>
            <Link to='/' className='ArgonDisplayBlockOnSmall'><i className='material-icons'>share</i> <b>{props.shares} shares</b></Link>
        </div>
    </div>
)

export default AragonPostComments;