import React from 'react';
import './AragonCards.css';

const AragonCards = props => (
    <div className={'AragonCards ' + props.className2}>
        <div className='AragonCardsChild'>
            <div className='AragonFlex'>
                <div>
                    <b style={{ color: '#8898AA', fontSize: '13px' }}>{props.title}</b>
                    <h2 style={{ color: '#32325D', margin: "2px 0 20px 0", fontSize: '19px' }}>{props.numbers}</h2>
                </div>
                <b className={props.className + ' material-icons ml-a'}>{props.icon}</b>
            </div>
            <span style={{ color: '#2DCE89', display: 'inline-block', marginRight: '12px' }}><i className='material-icons' style={{ fontSize: '14px' }}>arrow_upward</i> 3.48%</span>
            Since last month
        </div>
    </div>
)

export default AragonCards;