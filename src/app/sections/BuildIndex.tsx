'use client'

import { Stack, Typography, Link, Button, keyframes, Box } from "@mui/material";
import Image from "next/image";
import theme from "@theme/theme";
import ConversionShadows from "@components/ConversionShadows";

import DottedBackground from "@assets/smallDottedGreen.webp";
import blocks from "@assets/blocks.webp";

const floatAnimation = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
`;

const BuildIndex = () => {
    return (
        <Stack width={'100%'} height={'100%'} paddingTop={{xs: 4, lg: 0}} paddingX={{ xs: 2, lg: 8 }}>
            <Stack alignItems={'center'} justifyContent={'center'} position={'relative'} zIndex={10} paddingY={8} sx={{
                overflowX: 'hidden',
                overflowY: 'hidden',
                backgroundImage: `url('${DottedBackground.src}')`,
                backgroundSize: { xs: 'cover', lg: '150%' },
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <ConversionShadows />

                <Stack alignItems={'center'} justifyContent={'center'} gap={2} position={'relative'} zIndex={9}>
                    <Box sx={{
                        animation: `${floatAnimation} 3s ease-in-out infinite`,
                    }}>
                        <Image src={blocks} alt="build your own index" width={300} height={250} />
                    </Box>
                    <Typography variant="h2">Build your own index</Typography>
                    <Typography variant="subtitle1" textAlign={'center'} width={{xs: '100%', lg: '60%'}}>NexLabs allows you to build your own index by turning your portfolio into a tradable index. You can choose from a variety of crypto assets, RWAs or commodities, customize weights and management fees.</Typography>
                    <Stack direction={'row'} gap={2}>
                        <Link href="https://app.nexlabs.io/" target="_blank">
                            <Button variant='outlined' sx={{
                                width: '10rem',
                            }}>Open dApp</Button>
                        </Link>
                        <Link href="https://app.nexlabs.io/" target="_blank">
                            <Button variant='outlined' sx={{
                                width: '10rem',
                            }}>Docs</Button>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default BuildIndex;

