import React from 'react';
import './ProgressTrack.css';

const ProgressTrack = props => (
    <div className='AragonPaddiing AragonFlex'>
        <img src={props.avtar} alt='' className='AragonMemberIcon' style={{marginRight: '27px'}} />
        <div style={{flexGrow: 100}}>
            <div style={{ fontSize: '13px', color: '#32325D', margin: '12px 0 10px 0', fontWeight: 'bold' }}>
                {props.title}
            </div>
            <div style={{background: 'rgb(82, 95, 127, 0.2)'}}>
                <div style={{border: '1.5px solid ' + props.color, width: props.width}}></div>
            </div>
        </div>
    </div>
)

export default ProgressTrack;