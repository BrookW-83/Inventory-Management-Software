'use client'

import { useState, useEffect } from "react";
import {Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from "chart.js";


ChartJS.register(
    CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
);

const ReportChart = () => {
    const [reportData, setreportData ] = useState({ datasets: []});
    const [reportOptions, setreportOptions ] = useState({});

    useEffect(() => {
        setreportData({
             labels: ['Monday', 'Tuseday', 'Wedensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }
        ]
    })

        setreportOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: "Weekly Repost"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })

    }, [])

    return ( 
        <div>
            <div className="w-3/4 mb-12 md:col-span-2 relative lg:h-[60vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
                <Bar data={reportData} options={reportOptions}/>
            </div>
        </div>
     );
}
 
export default ReportChart;