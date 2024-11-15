import { Button, Stack, Typography, Link } from "@mui/material";
import CustomCard from "@components/CustomCard";
import theme from "@theme/theme";
import Image from "next/image";
import abstractShape from '@assets/abstractShape1.webp'

const ConversionSection = () => {
    return (
        <Stack width={'100%'} alignItems={'center'} justifyContent={'start'} gap={4} paddingY={{ xs: 4, lg: 8 }} paddingX={{ xs: 2, lg: 8 }}>
            <CustomCard gradient={`linear-gradient(10.81deg, ${theme.palette.NexCardGradient1_1.main} 8.01%, ${theme.palette.NexCardGradient1_2.main} 96.61%)`} shadow="0px 40px 180px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                <Stack width={{ xs: '100%', lg: '40%' }} justifyContent={'center'} gap={{ xs: 8, lg: 2 }} position={'relative'} zIndex={2}>
                    <Stack>
                        <Typography variant="h5">Elevate Your Investment Experience</Typography>
                        <Typography variant="h6">
                            Step into the future of investing with NEX! Access our dApp to discover a world of new opportunities and transform your investing journey.
                        </Typography>
                    </Stack>
                    <Link href="https://app.nexlabs.io/" target="_blank">
                        <Button variant='outlined' sx={{
                            width: 'fit-content',
                        }}>Open dApp</Button>
                    </Link>
                </Stack>
                <Stack display={{ xs: 'none', lg: 'block' }}>
                    <Image src={abstractShape} alt="nex labs nexlabs shape loop 3D dark" height={400} width={400} style={{
                        position: 'absolute',
                        right: '0%',
                        top: '-10%',
                        zIndex: 2
                    }} />
                </Stack>
                <Stack display={{ xs: 'block', lg: 'none' }}>
                    <Image src={abstractShape} alt="nex labs nexlabs shape loop 3D dark" height={350} width={350} style={{
                        position: 'absolute',
                        right: '-7rem',
                        bottom: '-11rem',
                        zIndex: 0
                    }} />
                </Stack>
            </CustomCard>
        </Stack>
    )
}

export default ConversionSection;