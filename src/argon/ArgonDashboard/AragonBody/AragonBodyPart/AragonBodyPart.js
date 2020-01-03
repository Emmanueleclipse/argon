import React from 'react';
import './AragonBodyPart.css';
import AragonCards from './AragonCards/AragonCards';

const AragonBodyPart = props => (
    <div className='AragonBodyPart'>
        <div className='AragonFlex ArgonHomeLinks'>
            <h2>Default</h2>
            <i className='material-icons'>house</i>
            <span className='ArgonHyfon'>-</span>
            <b>Dashboards</b>
            <span className='ArgonHyfon'>-</span>
            <b>Default</b>
            <div className='ml-a'>
                <button>New</button>
                <button>Filters</button>
            </div>
        </div>
        <div className='AragonFlex AragonCardsParentMain'>
            <div className='AragonCardsMR AragonCardsParent'>
                <AragonCards title='TOTAL TRAFFIC' numbers='350,897' className='orangeGre' icon='thumb_up' className2='AragonCardsMR' />
                <AragonCards title='NEW USER' numbers='924' className='orangeGre2' icon='pie_chart' className2='AragonCardsML' />
            </div>
            <div className='AragonCardsML AragonCardsParent'>
                <AragonCards title='SALES' numbers='2,356' className='tealGre' icon='money' className2='AragonCardsMR' />
                <AragonCards title='PERFORMANCE' numbers='2,356' className='blueGre' icon='bar_chart' className2='AragonCardsML' />
            </div>
        </div>
    </div>
)

export default AragonBodyPart;