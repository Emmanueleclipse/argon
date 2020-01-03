import React, { useState } from 'react';
import './Charts.css'
import LineChart from './LineChart';
import BarChart from './BarChart'

const Charts = props => {
    let [state, setState] = useState({
        data: [0, 20, 10, 30, 15, 40, 20, 60]
    })
    let [btnClass, setBtnClass] = useState({
        class1: 'AragonBuleBtn',
        class2: ''
    })
    let dataHandler = (e) => {
        if (e.target.innerHTML === 'Month') {
            setState({
                data: [0, 20, 10, 30, 15, 40, 20, 60]
            });
            setBtnClass({
                class2: '',
                class1: 'AragonBuleBtn'
            })
        } else {
            setState({
                data: [0, 20, 5, 25, 10, 30, 15, 40]
            });
            setBtnClass({
                class2: 'AragonBuleBtn',
                class1: ''
            })
        }
    }
    return (
        <div className='AragonCharts AragonFlex'>
            <div className='AragonLineChartMain'>
                <div className='AragonLineChart'>
                    <div className='AragonFlex AragonLineChartOverView'>
                        <div>
                            <h6>OVERVIEW</h6>
                            <h3>Sales value</h3>
                        </div>
                        <div className='ml-a'>
                            <button className={btnClass.class1} onClick={dataHandler}>Month</button>
                            <button className={btnClass.class2} onClick={dataHandler}>Week</button>
                        </div>
                    </div>
                    <div style={{ height: '360px' }} className='lineabc'>
                        <LineChart data={state.data} />
                    </div>
                </div>
            </div>
            <div className='AragonBarChartMain'>
                <div className='AragonBarChart'>
                    <div>
                        <h6>PERFORMANCE</h6>
                        <h3>Total Orders</h3>
                    </div>
                    <div style={{ height: '360px' }}>
                        <BarChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts;