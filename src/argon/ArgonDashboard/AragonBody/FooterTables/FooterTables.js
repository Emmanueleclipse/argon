import React from 'react';
import './FooterTables.css';
import VisitedTableData from './VisitedTableData';
import SocialTrafficTableData from './SocialTrafficTableData';

const FooterTables = props => (
    <div className='AragonFooterTables AragonFlex'>
        <div className='PageVisitsTable'>
            <div className='AragonWorkCards PageVisitsTable'>
                <div className='AragonPaddiing AragonWorkCardsTitle AragonFlex'>
                    Page visits <button >See All</button>
                </div>
                <table>
                    <thead>
                        <th>PAGE NAME</th>
                        <th>VISITORS</th>
                        <th>UNIQUE USERS</th>
                        <th>BOUNAS RATE</th>
                    </thead>
                    <tbody>
                        <VisitedTableData page='/argon/' visitors='4,569' users='340' rate='46,53%' arrow='arrow_upward' />
                        <VisitedTableData page='/argon/index.html' visitors='3,985' users='319' rate='46,53%' arrow='arrow_downward' />
                        <VisitedTableData page='/argon/charts.html' visitors='3,513' users='294' rate='46,53%' arrow='arrow_upward' />
                        <VisitedTableData page='/argon/tables.html' visitors='2,050' users='147' rate='46,53%' arrow='arrow_downward' />
                        <VisitedTableData page='/argon/profile.html' visitors='1,795' users='190' rate='46,53%' arrow='arrow_upward' />
                    </tbody>
                </table>
            </div>
        </div>
        <div className='AragonWorkCards SocialTraffic'>
            <div className='AragonPaddiing AragonWorkCardsTitle AragonFlex'>
                Social traffic <button >See All</button>
            </div>
            <table>
                <tbody>
                    <th>REFERRAL</th>
                    <th>VISITORS</th>
                    <th></th>
                </tbody>
                <tbody>
                    <SocialTrafficTableData
                        referrel='Facebook'
                        visitors='1,480'
                        rank='60%'
                        color1='#f5365c'
                        color2='#f56036'
                    />
                    <SocialTrafficTableData
                        referrel='Facebook'
                        visitors='5,480'
                        rank='70%'
                        color1='#2dce89'
                        color2='#2dcecc'
                    />
                    <SocialTrafficTableData
                        referrel='Google'
                        visitors='4,807'
                        rank='80%'
                        color1='#5e72e4'
                        color2='#825ee4'
                    />
                    <SocialTrafficTableData
                        referrel='Instagram'
                        visitors='3,678'
                        rank='75%'
                        color1='#11cdef'
                        color2='#1171ef'
                    />
                    <SocialTrafficTableData
                        referrel='twitter'
                        visitors='2,645'
                        rank='30%'
                        color1='#fb6340'
                        color2='#fbb140'
                    />
                </tbody>
            </table>
        </div>
    </div>
)

export default FooterTables;