import React from 'react';
import './AragonCard.css'
import Members from './Members/Members';
import avtar1 from '../../../assets/team-5.jpg';
import avtar2 from '../../../assets/team-2.jpg';
import avtar3 from '../../../assets/team-3.jpg';
import avtar4 from '../../../assets/team-4.jpg';

import TodoItem from './TodoItem/TodoItem';

import ProgressTrack from './ProgressTrack/ProgressTrack';
import bootstrap from '../../../assets/bootstrap.jpg';
import angular from '../../../assets/angular.jpg';
import sketch from '../../../assets/sketch.jpg';
import react from '../../../assets/react.jpg';

const AragonCard = props => (
    <div className='AragonCard AragonFlex'>
        <div className='AragonWorkCards AragonM-r'>
            <div className='AragonWorkCardsTitle'>
                Team members
            </div>
            <Members avtar={avtar1} title='John Michael' color='#2DCE89' to='/'>
                Online
            </Members>
            <Members avtar={avtar2} title='Alex Smith' color='#FB6340' to='/'>
                In a meeting
            </Members>
            <Members avtar={avtar3} title='Samantha Ivy' color='#F5365C' to='/'>
                Offline
            </Members>
            <Members avtar={avtar4} title='John Michael' color='#2DC389' to='/'>
                Online
            </Members>
        </div>
        <div className='AragonWorkCards AragonM-l AragonM-r'>
            <div className='AragonWorkCardsTitle'>
                To do list
            </div>
            <TodoItem title='Call with Dave' color='#2DCE89' check={true}>
                10:30 AM
            </TodoItem>
            <TodoItem title='Lunch meeting' color='#FB6340' >
                10:30 AM
            </TodoItem>
            <TodoItem title='Argon Dashboard Launch' color='#11CDEF' >
                10:30 AM
            </TodoItem>
            <TodoItem title='Winter Hackaton' color='#F5365C' check={true}>
                10:30 AM
            </TodoItem>
        </div>
        <div className='AragonWorkCards AragonM-l'>
            <div className='AragonWorkCardsTitle'>
                Progress Track
            </div>
            <ProgressTrack avtar={bootstrap} title='Argon Design System' color='#FB6340' width='60%' />
            <ProgressTrack avtar={angular} title='Angular Now UI Kit PRO' color='#2DCE89' width='100%' />
            <ProgressTrack avtar={sketch} title='Black Dashboard' color='#F5365C' width='70%' />
            <ProgressTrack avtar={react} title='React Material Dashboard' color='#11CDEF' width='90%' />
        </div>
    </div>
)

export default AragonCard;