import React from 'react';
import './AragonBody.css';
import AragonBodyPart from './AragonBodyPart/AragonBodyPart';
import Charts from './Charts/Charts';
import AragonCard from './AragonCard/AragonCard';
import ActiveField from './ActiveField/ActiveField';
import AragonLightTable from './AragonLightTable/AragonLightTable';
import FooterTables from './FooterTables/FooterTables';

const AragonBody = props => (
    <div className='AragonBody'>
        <AragonBodyPart />
        <Charts />
        <AragonCard />
        <div className='AragonFlex ActivityLightFields'>
            <ActiveField className='AragonCardsMR' />
            <AragonLightTable className='AragonCardsML' />
        </div>
        <FooterTables />
        <div className='AragonFlex AragonFooterCreative'>
            <h6>© 2019 <span className='AragonBlue' style={{display: 'inline-block', marginLeft: '8px'}}>Creative Tim</span></h6>
            <div className='ml-a'>
                <a href='/'>Create Trim</a>
                <a href='/'>About Us</a>
                <a href='/'>Blog</a>
                <a href='/'>Licence</a>
            </div>
        </div>
    </div>
)

export default AragonBody;