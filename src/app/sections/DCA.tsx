import { Stack, Typography, Link, Button } from "@mui/material";
import Image from "next/image";
import theme from "@theme/theme";
import ConversionShadows from "@components/ConversionShadows";
import DCAChart from "@components/DCAChart";
import CustomCard from "@components/CustomCard";

import DottedBackground from "@assets/smallDottedGreen.webp";

const DCA = () => {
    const data = [
        { time: 1, value: 100 },
        { time: 2, value: 120 },
        { time: 3, value: 110 },
        { time: 4, value: 130 },
        { time: 5, value: 125 },
    ];

    return (
        <Stack width={'100%'} height={'100%'} paddingX={{ xs: 2, lg: 8 }} paddingBottom={8}>
            <CustomCard gradient={`linear-gradient(360deg, ${theme.palette.NexCardGradient1_1.main} 0%, ${theme.palette.background.default} 80%)`} shadow="0px 0px 0px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.background.default}`}>
                <Stack direction={{ xs: 'column', lg: 'row' }} alignItems={'center'} paddingX={{ xs: 2, lg: 2 }}>
                    <Stack direction={'column'} width={{ xs: '100%', lg: '50%' }} height={'100%'}>
                        <Stack alignItems={'start'} justifyContent={'center'}>
                            <Stack alignItems={'start'} justifyContent={'center'} gap={2}>
                                <Typography variant="h4">Nex Dollar Cost Average</Typography>
                                <Stack direction={'column'} width={{ xs: '100%', lg: '100%' }} alignItems={'center'}>
                                    <Typography variant="subtitle1">Assess index performance through Dollar Cost Averaging (DCA) buying strategies and get a simulated real-world performance experience for those looking to invest recurrently.</Typography>
                                    <Typography variant="subtitle1">Our DCA tool is able to compare its performance against indices such as S&P500 and Nasdaq.</Typography>
                                </Stack>
                                <Stack direction={'row'} gap={2}>
                                    <Link href="https://app.nexlabs.io/dcaCalculator" target="_blank">
                                        <Button variant='outlined' sx={{
                                            width: 'fit-content',
                                        }}>Open DCA Tool</Button>
                                    </Link>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack width={{ xs: '100%', lg: '50%' }} height={'100%'} paddingX={{ xs: 2, lg: 4 }}>
                        <DCAChart />
                    </Stack>
                </Stack>
            </CustomCard>
        </Stack>
    )
}

export default DCA;

