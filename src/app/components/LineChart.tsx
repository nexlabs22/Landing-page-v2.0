'use client'
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import theme from '@theme/theme';

const uData = [400, 300, 200, 278, 189, 239, 349];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

const AreaLineChart = () => {
    return (
        <LineChart
            series={[{ data: uData, label: 'Index', area: false, showMark: false }]}
            xAxis={[{ scaleType: 'point', data: xLabels, hideTooltip: true }]}
            leftAxis={null}
            bottomAxis={null}
            tooltip={undefined}
            slotProps={{
                legend: { hidden: true },
            }}
            margin={{
                left: 0,
                right: 0,
                top: 25,
                bottom: 0
            }}
            colors={[theme.palette.NexCardGradient1_2.main]}
        >
        </LineChart>
    );
}

export default AreaLineChart