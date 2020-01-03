import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = props => {
    let state = {
        data: {
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                data: props.data,
                backgroundColor: 'transparent',
                borderColor: '#5e72e4',
                borderWidth: 3,
                pointRadius: 0
            }],
        },
        options: {
            legend: {
                display: false,
            },
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: '#8898AA',
                        padding: 12
                    },
                    gridLines: {
                        borderDash: [1, 2],
                        drawBorder: false,
                        color: 'rgb(136, 152, 170, 0.5)',
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#8898AA',
                        padding: 10
                    },
                    gridLines: {
                        borderDash: [1, 2],
                    }
                }]
            }
        },
    }
    return <Line
        data={state.data}
        options={state.options}
    />
}

export default LineChart;