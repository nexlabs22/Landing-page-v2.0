'use client'
import * as React from 'react';
import { areaElementClasses, LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import { useYScale, useDrawingArea } from '@mui/x-charts/hooks';
import { ScaleLinear } from 'd3-scale';
import { green, red } from '@mui/material/colors';
import theme from '@theme/theme';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

type ColorSwichProps = {
    threshold: number;
    color1: string;
    color2: string;
    id: string;
};

function ColorPalette({ id }: { id: string }) {
    const { top, height, bottom } = useDrawingArea();
    const svgHeight = top + bottom + height;

    const scale = useYScale() as ScaleLinear<number, number>; // You can provide the axis Id if you have multiple ones

    return (
        <defs>
            <linearGradient
                id={id}
                x1="0"
                x2="0"
                y1="0"
                y2={`${svgHeight}px`}
                gradientUnits="userSpaceOnUse" // Use the SVG coordinate instead of the component ones.
            >
                <stop
                    offset={scale(5000) / svgHeight}
                    stopColor={theme.palette.NexCardGradient1_1.main}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(4000) / svgHeight}
                    stopColor={theme.palette.NexCardGradient1_1.main}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(4000) / svgHeight}
                    stopColor={theme.palette.NexCardGradient1_1.main}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(3000) / svgHeight}
                    stopColor={theme.palette.NexCardGradient1_1.main}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(3000) / svgHeight}
                    stopColor={theme.palette.NexCardGradient1_1.main}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(2000) / svgHeight}
                    stopColor={theme.palette.NexCardGradient1_1.main}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(2000) / svgHeight}
                    stopColor={theme.palette.NexCardGradient1_1.main}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(1000) / svgHeight}
                    stopColor={theme.palette.NexCardGradient1_2.main}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(1000) / svgHeight}
                    stopColor={theme.palette.NexCardGradient1_2.main}
                    stopOpacity={1}
                />
                <stop offset={scale(0) / svgHeight} stopColor={theme.palette.NexCardGradient1_2.main} stopOpacity={1} />
                <stop offset={scale(0) / svgHeight} stopColor={theme.palette.NexCardGradient1_2.main} stopOpacity={1} />
                <stop
                    offset={scale(-1000) / svgHeight}
                    stopColor={theme.palette.NexCardGradient1_2.main}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(-1000) / svgHeight}
                    stopColor={theme.palette.NexCardGradient1_2.main}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(-2000) / svgHeight}
                    stopColor={theme.palette.NexCardGradient1_2.main}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(-3000) / svgHeight}
                    stopColor={theme.palette.NexCardGradient1_2.main}
                    stopOpacity={1}
                />
            </linearGradient>
        </defs>
    );
}

const AreaLineChart = () => {
    return (
        <LineChart
            series={[{
                data: uData,
                area: true,
                showMark: true,
                type: 'line',
            }]}
            leftAxis={null}
            bottomAxis={null}
            slotProps={{
                legend: { hidden: true },
                area: { begin: 'url(#colorUv)' }

            }}
            margin={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }}
            sx={{
                [`& .${areaElementClasses.root}`]: {
                    fill: 'url(#swich-color-id-2)',
                },
            }}
        >
            <ColorPalette id="swich-color-id-2" />

            <rect x={0} y={0} width={5} height="100%" fill="url(#swich-color-id-2)" />
        </LineChart>
    );
}

export default AreaLineChart