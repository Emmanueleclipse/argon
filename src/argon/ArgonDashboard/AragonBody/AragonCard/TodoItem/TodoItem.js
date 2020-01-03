import React, { useState, useEffect } from 'react';
import './TodoItem.css';
import checkIcon from '../../../../assets/checkIcon.png';

const TodoItem = props => {
    let [state, setState] = useState({
        color: '#fff',
        children: props.children,
        title: props.title,
        borderColor: 'rgb(82, 95, 127, 0.4)',
        check: props.check,
    })
    useEffect(() => compJob(), []);
    const compJob = () => {
        if (state.check) {
            setState({
                color: props.color,
                children: <del>{props.children}</del>,
                title: <del>{props.title}</del>,
                borderColor: props.color,
                check: false
            })
        }
        else {
            InCompJob();
        }
    }
    const InCompJob = () => {
        setState({
            color: '#fff',
            children: props.children,
            title: props.title,
            borderColor: 'rgb(82, 95, 127, 0.4)',
            check: true
        })
    }
    return (
        <div className='AragonPaddiing AragonFlex'>
            <div style={{ borderLeft: '3px solid ' + props.color, borderRadius: '2px', paddingLeft: '8px' }}>
                <div style={{ fontSize: '13px', color: '#32325D', margin: '4px 0 4px 0', fontWeight: 'bold' }}>
                    {state.title}
                </div>
                <div style={{ margin: '4px 0 4px 0' }} className='AragonSmall'>{state.children}</div>
            </div>
            <div className='ml-a AragonCheckBox' style={{
                backgroundImage: 'url(' + checkIcon + ')', backgroundColor: state.color,
                borderColor: state.borderColor
            }}
                onClick={compJob}
            >
            </div>
        </div>
    )
}

export default TodoItem;