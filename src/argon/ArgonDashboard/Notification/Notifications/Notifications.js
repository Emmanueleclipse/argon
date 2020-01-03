import React from 'react';

const Notifications = props => (
    <div className='SettingPadding ArgonNotifyCard' style={{paddingBottom: '15px'}}>
        <div style={{height: '48px'}}>
            <img src={props.avtar} alt='' style={{width: '48px', borderRadius: '24px', padding: '0'}} />
        </div>
        <div style={{marginLeft: '18px'}}>
            <b style={{color: '#32325d',display: 'block', margin: '4px 0'}}>{props.title}</b>
            {props.children}
        </div>
        <div className='Argontime'>{props.time}</div>
    </div>
)

export default Notifications;