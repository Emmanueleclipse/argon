import React from 'react';

const SocialTrafficTableData = props => (
    <tr>
        <td>{props.referrel}</td>
        <td>{props.visitors}</td>
        <td>
            <div className='AragonFlex'>
                {props.rank}
                <div style={{ background: '#E9ECEF', display: 'inline-block', margin: 'auto 0 auto 10px', width: '130px' }}>
                    <div style={{
                        width: props.rank,
                        background: 'linear-gradient(87deg,' + props.color1 + ' 0,' + props.color2 + ' 100%)',
                        height: '3px'
                    }}></div>
                </div>
            </div>
        </td>
    </tr>
)

export default SocialTrafficTableData;