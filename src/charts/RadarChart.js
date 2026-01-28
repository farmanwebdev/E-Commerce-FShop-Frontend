import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJs, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJs.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {

    const data = {
        labels: ['Desktop', 'Laptop', 'Printer', 'Scanner', 'Tablet', 'Monitor'],
        datasets: [{
            label: '# of prods',
            data: [6, 6, 2, 1, 3, 5],
            backgroundColor: 'rgba(54, 162, 235, 0.3)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
        }],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                beginAtZero: true,
                max: 10
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            title: {
                display: false
            }
        }
    };

    return (
        <Radar data={data} options={options} />
    );
};


export default RadarChart;