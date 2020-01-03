import React from 'react';
import './Members.css';
import {Link} from 'react-router-dom';

const Members = props => (
    <div className='AragonPaddiing AragonFlex'>
        <img src={props.avtar} alt='' className='AragonMemberIcon' />
        <div className='AragonML-12' style={{width: '100%'}}>
            <Link to={props.to} className='AragonCardTitle'>{props.title}</Link>
            <div className='AragonFlex'>
                <span className='argonStatus' style={{background: props.color}}></span>
                <span className='AragonSmall'>{props.children}</span>
            </div>
        </div>
        <div className='ml-a'>
            <button className='AragonAddButton'>Add</button>
        </div>
    </div>
)

export default Members;