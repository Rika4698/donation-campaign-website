/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2'; // Import Doughnut chart from react-chartjs-2
const Statistics = () => {
  const cards = useLoaderData();
  let totalDonation = cards.length;

  const donateItems = JSON.parse(localStorage.getItem('donate'));
  let myDonation = donateItems.length;
  let myPercentage = ((myDonation / totalDonation) * 100).toFixed(2);
  let remainingPercentage = (100 - myPercentage).toFixed(2);

  // Create data for the pie chart
  const data = {
    labels: ['My Donation', 'Remaining Donation'],
    datasets: [
      {
        data: [myPercentage, remainingPercentage],
        backgroundColor: ['#36A2EB', '#FF6384'], // You can customize the colors here
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div className='h-96 w-96'>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false, // Set to false to control the aspect ratio
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                return data.labels[tooltipItem.index] + ': ' + data.datasets[0].data[tooltipItem.index] + '%';
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Statistics;

