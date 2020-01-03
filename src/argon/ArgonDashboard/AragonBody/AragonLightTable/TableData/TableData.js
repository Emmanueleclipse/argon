import React, { useState, useEffect } from 'react';

const TableData = props => {
    let [check, checkHandler] = useState({
        check: true
    })
    let [className, classNameHandler] = useState({
        className: 'AragonTableDataAction'
    })
    let color;
    if (props.status === 'pending') {
        color = '#FB6340'
    } else if (props.status === 'completed') {
        color = '#2DCE89'
    } else if (props.status === 'on schedule') {
        color = '#F5365C'
    } else {
        color = '#11CDEF'
    }
    let dropMenu = document.getElementsByClassName('AragonTableDataAction')
    const TableActionHandler = () => {
        for (let i = 0; i < dropMenu.length; i++) {
            dropMenu[i].style.display = 'none';
        }
        if (check.check === true) {
            dropMenu[props.i].style.display = 'block';
        }
        checkHandler({
            check: !check.check
        })
    }
    useEffect(() => {
        let dropMenuLength = dropMenu.length - 2;
        if (props.i >= dropMenuLength) {
            classNameHandler({
                className: 'AragonTableDataAction AragonTableDataActionMarginTop'
            })
        }
    }, [])
    return (
        <tr>
            <td>
                <img src={props.icon} width='48' align='center' className='techImg' alt='' />
                <b>{props.title}</b>
            </td>
            <td>${props.dollar} USD</td>
            <td><span className='AragonStatusDot' style={{ backgroundColor: color }}></span>{props.status}</td>
            <td>
                <div className='AragonPostPersonActions'>
                    {props.users.map((user, i) => <img src={user} alt='' />)}
                </div>
            </td>
            <td>
                <div className='AragonFlex AragonTechStatus'>
                    {props.progress}
                    <div className='AragonTechStatusBoard'>
                        <div style={{ border: '1.5px solid ' + color, width: props.progress }}></div>
                    </div>
                </div>
            </td>
            <td style={{ position: 'relative' }}>
                <i className='material-icons aragonMoreVert' onClick={TableActionHandler}>more_vert</i>
                <div className={className.className}>
                    <a href='/'>Action</a>
                    <a href='/'>Another Action</a>
                    <a href='/'>Something else here</a>
                </div>
            </td>
        </tr>
    )
}

export default TableData;