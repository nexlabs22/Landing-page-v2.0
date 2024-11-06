import { Button, Stack, Typography } from "@mui/material";
import CustomCard from "@components/CustomCard";
import theme from "@theme/theme";
import Image from "next/image";
import abstractShape from '@assets/abstractShape1.webp'

const ConversionSection = () => {
    return (
        <Stack width={'100%'} alignItems={'center'} justifyContent={'start'} gap={4} paddingY={8} paddingX={4}>
            <CustomCard gradient={`linear-gradient(10.81deg, ${theme.palette.NexCardGradient1_1.main} 8.01%, ${theme.palette.NexCardGradient1_2.main} 96.61%)`} shadow="0px 40px 180px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                <Stack width={'40%'} justifyContent={'center'} gap={2}>
                    <Stack>
                        <Typography variant="h5">Elevate Your Investment Experience</Typography>
                        <Typography variant="h6">
                            Step into the future of investing with NEX! Access our dApp to discover a world of new opportunities and transform your investing journey.
                        </Typography>
                    </Stack>
                    <Button variant='outlined' sx={{
                        width: 'fit-content',
                    }}>Open dApp</Button>
                </Stack>
                <Image src={abstractShape} alt="nex labs nexlabs shape loop 3D dark" height={400} width={400} style={{
                    position: 'absolute',
                    right: '0%',
                    top: '-10%',
                    zIndex: 2
                }} />
            </CustomCard>
        </Stack>
    )
}

export default ConversionSection;