import React from 'react';
import { Bar } from 'react-chartjs-2';

const LineChart = props => {
    let state = {
        data: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                data: [25, 20, 30, 22, 17, 28],
                backgroundColor: '#FB6340',
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
                        color: 'rgb(136, 152, 170, 0.4)',
                    }
                }],
                xAxes: [{
                    barThickness: 10,  // number (pixels) or 'flex'
                    ticks: {
                        fontColor: '#8898AA',
                        padding: 10
                    },
                    gridLines: {
                        color: 'rgb(0, 0, 0, 0)'
                    }
                }]
            }
        },
    }
    return <Bar
        data={state.data}
        options={state.options}
    />
}

export default LineChart;