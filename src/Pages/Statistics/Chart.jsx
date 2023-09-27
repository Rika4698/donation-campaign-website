import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';

const Chart = () => {

    const [donation, setDonation] = useState(0);

    useEffect(() => {
        const storedItem = JSON.parse(localStorage.getItem('donate')); // replace 'donate' with your localStorage keyName
        if (storedItem !== null) {
            setDonation(storedItem.length);
        }
    }, [])

    const data = [
        { label: 'Your Donation', value: donation, color: '#95e572' },
        { label: 'Total Donation', value: 12 - donation, color: '#6fa8dc' },
    ];

    const sizing = {
        margin: { right: 10 },
        width: 500,
        height: 500,
        
    };

    return (
        <div className="flex justify-center items-center">
            
            <PieChart
                series={[
                    {
                        outerRadius: 150,
                        data,
                        arcLabel: (params) => `${((params.value / 12) * 100).toFixed(1)}%`,
                    },
                ]}
                legend={{
                    direction: "row",
                    position: {
                        vertical: "middle",
                        horizontal: "middle"
                    }
                }}
                sx={{
                    "--ChartsLegend-rootOffsetX": "0px",
                    "--ChartsLegend-rootOffsetY": "200px",
                    "--ChartsLegend-itemWidth": "130px",
                }}
                {...sizing}
            />
        </div>
    )
};

export default Chart;