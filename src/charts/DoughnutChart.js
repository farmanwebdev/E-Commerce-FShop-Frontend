import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJs.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {

    const data = {
        labels: ['Desktop', 'Laptop', 'Printer', 'Scanner', 'Tablet', 'Monitor'],
        datasets: [{
            label: '# of prods',
            data: [6, 6, 2, 1, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: false
            }
        }
    };

    return (
        <Doughnut data={data} options={options} />
    );
};


export default DoughnutChart;