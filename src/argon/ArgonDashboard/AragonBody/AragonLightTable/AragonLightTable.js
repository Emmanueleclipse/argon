import React from "react";
import './AragonLightTable.css';
import TableData from './TableData/TableData';
import angular from '../../../assets/angular.jpg';
import bootstrap from '../../../assets/bootstrap.jpg';
import react from '../../../assets/react.jpg';
import sketch from '../../../assets/sketch.jpg';
import vue from '../../../assets/vue.jpg';

import avtar from '../../../assets/team-5.jpg';
import avtar2 from '../../../assets/team-2.jpg';
import avtar3 from '../../../assets/team-3.jpg';
import avtar4 from '../../../assets/team-4.jpg';
import bitcoinIcon from '../../../assets/bitcoin.png';

const AragonLightTable = props => (
    <div className={'AragonLightTable ' + props.className}>
        <div className='AragonLightTableChild AragonWorkCards'>
            <div className='AragonPaddiing AragonWorkCardsTitle'>
                Light Table
            </div>
            <table>
                <thead>
                    <th>PROJECT</th>
                    <th>BUDGET</th>
                    <th>STATUS</th>
                    <th>USERS</th>
                    <th>COMPLETION</th>
                    <th></th>
                </thead>
                <tbody>
                    <TableData icon={bootstrap} i={0} title='Aragon Design System' dollar='2500' status='pending' users={[avtar, avtar2, avtar3, avtar4]} progress='60%' />
                    <TableData icon={angular} i={1} title='Angular Now UI Kit PRO' dollar='1800' status='completed' users={[avtar, avtar2, avtar3, avtar4]} progress='100%' />
                    <TableData icon={sketch} i={2} title='Black Dashboard' dollar='3150' status='delayed' users={[avtar, avtar2, avtar3, avtar4]} progress='72%' />
                    <TableData icon={react} i={3} title='React Material Dashboard' dollar='4400' status='on schedule' users={[avtar, avtar2, avtar3, avtar4]} progress='90%' />
                    <TableData icon={vue} i={4} title='Vue Paper UI Kit PRO' dollar='2200' status='completed' users={[avtar, avtar2, avtar3, avtar4]} progress='100%' />
                    <TableData icon={bootstrap} i={5} title='Aragon Design System' dollar='2500' status='pending' users={[avtar, avtar2, avtar3, avtar4]} progress='60%' />
                    <TableData icon={angular} i={6} title='Angular Now UI Kit PRO' dollar='1800' status='completed' users={[avtar, avtar2, avtar3, avtar4]} progress='100%' />
                    <TableData icon={sketch} i={7} title='Black Dashboard' dollar='3150' status='delayed' users={[avtar, avtar2, avtar3, avtar4]} progress='72%' />
                    <TableData icon={angular} i={8} title='Angular Now UI Kit PRO' dollar='1800' status='completed' users={[avtar, avtar2, avtar3, avtar4]} progress='100%' />
                </tbody>
            </table>
        </div>
        <div className='AragonFlex AragonPinkPurpleCard'>
            <div className='AragonPurpleCard aragonGrey'>
                <h3 className='aragonWhite AragonFlex'><span>$</span>3,300</h3>
                <div className='aragonGrey'>Your current balance</div>
                <h3 className='aragonAmount aragonGrey'><span className='aragonGreen'>+15%</span>($250)</h3>
                <button className='AragonBlue'>Add credit</button>
                <div className='AragonFlex'>
                    <div style={{ width: '50%' }} className='AragonCardsMR'>
                        Orders: 60%
                        <div className='AragonTransparentBorder'>
                            <div style={{ width: '60%', border: '2px solid #1AAE6F' }}></div>
                        </div>
                    </div>
                    <div style={{ width: '50%' }} className='AragonCardsML' >
                        Sales: 40%
                        <div className='AragonTransparentBorder'>
                            <div style={{ width: '40%', border: '2px solid #FB6340' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='AragonPinkCard aragonGrey'>
                <div className='AragonFlex'>
                    <img src={bitcoinIcon} alt='' />
                    <button className='ml-a'>ACTIVE</button>
                </div>
                <span>USERNAME</span>
                <h1>@johnsnow</h1>
                <span>NAME</span>
                <h3>John Snow</h3>
            </div>
        </div>
    </div>
)

export default AragonLightTable;