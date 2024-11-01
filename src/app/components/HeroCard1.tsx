import { Stack, Button, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import Image from "next/image";
import theme from "../theme/theme";

import shape1 from '@assets/shape1.webp'

const HeroCard1 = () => {

    return (
        <CustomCard gradient={`linear-gradient(10.81deg, ${theme.palette.NexCardGradient1_1.main} 8.01%, ${theme.palette.NexCardGradient1_2.main} 96.61%)`} shadow="0px 40px 180px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
            <Stack height={'100%'} width={'100%'} direction={'column'} alignItems={'start'} justifyContent={'space-between'} position={'relative'} zIndex={3}>
                <Stack gap={1} width={'85%'}>
                    <Typography variant="subtitle1">
                        Simplifying RWA Index Products and Beyond
                    </Typography>
                    <Typography variant="h4">
                        Your one-stop-shop for asset management
                    </Typography>
                    <Typography variant="h6">
                        Bring real-world assets (RWAs) on-chain and simplifying the investing process for users.
                    </Typography>
                </Stack>
                <Button variant='outlined' sx={{
                    width: '50%',
                }}>Explore our indices</Button>
            </Stack>
            <Image src={shape1} alt="nex labs nexlabs shape loop 3D dark" height={550} width={550} style={{
                position: 'absolute',
                right: '-30%',
                bottom: '-20%',
                zIndex: 2
            }} />
        </CustomCard>
    )
}

export default HeroCard1