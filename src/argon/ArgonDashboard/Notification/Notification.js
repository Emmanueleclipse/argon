import React from 'react';
import './Notification.css';
import Notifications from './Notifications/Notifications';
import avtar from '../../assets/team-5.jpg';
import avtar1 from '../../assets/team-2.jpg';
import avtar2 from '../../assets/team-3.jpg';
import avtar3 from '../../assets/team-4.jpg';

const Notification = props => (
    <div className={'ArgonNotifications ' + props.className}>
        <div className='SettingPadding'>
            <b>
                You have <span className='ArgonBlue'>13</span> notifications.
            </b>
        </div>
        <Notifications avtar={avtar} title='John Snow' time='2 hrs ago'>
            Lets meet at Starbucks at 11:30. Wdyt?
        </Notifications>
        <Notifications avtar={avtar1} title='John Snow' time='3 hrs ago'>
            A new issue has been reported for Argon.
        </Notifications>
        <Notifications avtar={avtar2} title='John Snow' time='5 hrs ago'>
            Your post have been liked a lot.
        </Notifications>
        <Notifications avtar={avtar3} title='John Snow' time='2 hrs ago'>
            Lets meet at Starbucks at 11:30. Wdyt?
        </Notifications>
        <Notifications avtar={avtar} title='John Snow' time='2 hrs ago'>
            A new issue has been reported for Argon.
        </Notifications>
        <div className='notificationViewAll'>
            View all
        </div>
    </div>
)

export default Notification;