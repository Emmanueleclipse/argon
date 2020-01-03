import React from 'react';
import { Link } from 'react-router-dom';
import './ActiveField.css';
import avtar from '../../../assets/team-5.jpg';
import background from '../../../assets/img-1-1000x600.jpg';
import avtar2 from '../../../assets/team-2.jpg';
import avtar3 from '../../../assets/team-3.jpg';
import AragonPostComments from './AragonPostComments/AragonPostComments'

const ActiveField = props => (
    <div className={'AragonActiveField ' + props.className + ' AragonWorkCards'}>
        <div className='AragonPaddiing AragonWorkCardsTitle'>
            Active field
        </div>
        <div className='AragonPaddiing AragonFlex'>
            <img src={avtar} alt='' width='48' style={{ borderRadius: '6px' }} />
            <div className='AragonML-12'>
                <Link to='/' className='AragonCardTitle'>John Snow</Link>
                <div className='AragonSmall' style={{ marginTop: '3px' }}>3 days ago</div>
            </div>
            <div className='ml-a'>
                <button className='AragonAddButton'> <span className='AragonMR-6' >+</span> Follow</button>
            </div>
        </div>

        <div className='AragonPost'>
            <p>
                Personal profiles are the perfect way for you to grab their attention and persuade recruiters to continue reading your CV because you’re telling them from the off exactly why they should hire you.
            </p>
            <img src={background} className='AragonBackground' alt='' />
            <div className='AragonFlex AragonPostStatus'>
                <div>
                    <Link to='/'><i className='material-icons AragonBlue'>thumb_up</i> 150</Link>
                    <Link to='/'><i className='material-icons'>comment</i> 136</Link>
                    <Link to='/'><i className='material-icons'>share</i> 12</Link>
                </div>
                <div className='ml-a AragonPostPersonActions AragonMR-6 ArgonHideOnSmall'>
                    <img src={avtar} alt='' />
                    <img src={avtar2} alt='' />
                    <img src={avtar3} alt='' />
                </div>
                <div className='ArgonHideOnSmall'>and +30 more</div>
            </div>
            <div className='AragonCommentsMain'>
                <AragonPostComments avtar={avtar} user='Michael Lewis' likes='3' shares='2'>
                    Cras sit amet nibh libero nulla vel metus scelerisque ante sollicitudin. Cras purus odio vestibulum in vulputate viverra turpis.
                </AragonPostComments>
                <AragonPostComments avtar={avtar2} user='Jessica Stones' likes='10' shares='1'>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                </AragonPostComments>
            </div>
            <div className='AragonFlex AragonCommentBox'>
                <img src={avtar3} alt='' className='AragonMemberIcon' />
                <textarea style={{flexGrow: '100'}} placeholder='Type your comment'></textarea>
            </div>
        </div>
    </div>
)

export default ActiveField;