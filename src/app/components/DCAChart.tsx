'use client'
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import theme from '@theme/theme';
import { Stack } from '@mui/material';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';

const dataset = [
    { x: 1, y: 2 },
    { x: 2, y: 5.5 },
    { x: 3, y: 2 },
    { x: 5, y: 8.5 },
    { x: 8, y: 1.5 },
    { x: 10, y: 5 },
];

// Calculate the average
const calculateAverage = (data: any[]) => {
    const sum = data.reduce((total: any, item: { y: any }) => total + item.y, 0);
    return sum / data.length;
};

const DCAChart = () => {
    const average = calculateAverage(dataset);

    // Chart dimensions
    const chartHeight = 300;
    const chartMargin = { left: 30, right: 30, top: 30, bottom: 30 };
    const yRange = 10; // Assuming a y-axis range from 0 to 10 for simplicity

    return (
        <Stack width="100%" height="100%" paddingX={{ xs: 2, lg: 0 }} position="relative">
            <LineChart
                height={chartHeight}
                dataset={dataset}
                tooltip={undefined}
                leftAxis={
                    {
                        stroke: 'rgba(255, 255, 255, 0.2)',
                        fill: 'rgba(255, 255, 255, 0.2)',
                    }
                }
                bottomAxis={
                    {
                        stroke: theme.palette.text.disabled,
                    }
                }
                slotProps={{
                    legend: { hidden: true },
                    
                }}
                xAxis={[
                    {
                        dataKey: 'x',
                        stroke: 'rgba(255, 255, 255, 0)',
                        fill: 'rgba(255, 255, 255, 0)',
                    },
                ]}
                yAxis={[
                    {
                        dataKey: 'y',
                        stroke: 'rgba(255, 255, 255, 0)',
                        fill: 'rgba(255, 255, 255, 0)',
                    },
                ]}
                series={[
                    {
                        dataKey: 'y',
                        color: theme.palette.text.disabled,
                    },
                ]}
                margin={chartMargin}
                grid={{
                    vertical: true,
                    horizontal: true,
                }}
                sx={{
                    [`& .${axisClasses.left} .${axisClasses.label}`]: {
                        transform: 'translateX(-10px)',
                    },
                    [`& .${chartsGridClasses.line}`]: {
                        strokeWidth: 0.5,
                        stroke: 'rgba(255, 255, 255, 0.2)',
                    },
                }}
            />
            {/* Add the horizontal median line */}
            <svg
                style={{
                    position: 'absolute',
                    top: chartMargin.top,
                    left: chartMargin.left,
                    width: `calc(100% - ${chartMargin.left + chartMargin.right}px)`,
                    height: `${chartHeight}px`,
                    pointerEvents: 'none',
                }}
            >
                <line
                    x1="0"
                    x2="100%"
                    y1={`40%`}
                    y2={`40%`}
                    stroke={'rgba(87, 225, 64, 0.8)'}
                    strokeWidth="2"
                />
            </svg>
        </Stack>
    );
};

export default DCAChart;
