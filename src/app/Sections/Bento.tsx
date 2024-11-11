import { Button, Stack, Typography } from "@mui/material"
import CustomCard from "@components/CustomCard"
import theme from "@theme/theme"
import Image from "next/image"

import chainlink3D from '@assets/chainlink3D.webp'
import grains from '@assets/grains.webp'
import arbitrum3D from '@assets/arbitrum3D.webp'
import thirdwebCover from '@assets/thirdweb_cover.webp'
import thirdwebLogo from '@assets/thirdweb_logo.webp'

const BentoSection = () => {
    return (
        <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} paddingY={{ xs: 4, lg: 8 }} paddingX={{ xs: 2, lg: 8 }}>
            <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems="stretch" justifyContent={'center'} gap={1.5}>
                <Stack width={{ xs: '100%', lg: '50%' }} >
                    <CustomCard gradient={`linear-gradient(10.81deg, ${theme.palette.NexCardGradient1_1.main} 8.01%, ${theme.palette.NexCardGradient1_2.main} 96.61%)`} shadow="0px 40px 180px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                        <Stack height={{xs: 'fit-content', lg: '100%'}} width={'100%'} direction={'column'} alignItems={'start'} justifyContent={'space-between'} position={'relative'} zIndex={3} gap={{ xs: 4, lg: 0 }}>
                            <Stack gap={1} width={'100%'} position={'relative'} zIndex={2}>
                                <Typography variant="h5" sx={{
                                    width: '75%'
                                }}>Nex is building with Chainlink CCIP</Typography>
                                <Typography display={{xs: 'none', lg: 'block'}} variant="h6" sx={{
                                    width: '95%'
                                }}>
                                    Chainlink’s Cross-Chain Interoperability Protocol (CCIP) enhances blockchain interoperability by securely linking multiple networks. Using decentralized oracles, it ensures accurate, tamper-proof data transfer without single points of failure, making CCIP an essential tool in the blockchain ecosystem for cross-chain transactions and advanced decentralized applications.
                                </Typography>
                                <Typography variant="h6" display={{xs: 'block', lg: 'none'}} sx={{
                                    width: '100%'
                                }}>
                                    Chainlink’s Cross-Chain Interoperability Protocol (CCIP) enables secure, seamless blockchain communication with decentralized oracles, ensuring tamper-proof data transfer for cross-chain transactions and decentralized apps.
                                </Typography>
                            </Stack>
                            <Button variant='outlined' sx={{
                                background: theme.palette.info.main,
                                color: theme.palette.text.secondary,
                                fontWeight: 700,
                                position: 'relative',
                                zIndex: 2
                            }}>More About CCIP</Button>
                            <Stack display={{ xs: 'none', lg: 'block' }}>
                                <Image src={chainlink3D} alt="chainlink CCIP Nex Labs NexLabs Build Program" style={{
                                    position: 'absolute',
                                    height: '15rem',
                                    width: 'auto',
                                    bottom: '-4rem',
                                    right: '-4.5rem',
                                    zIndex: 1
                                }}></Image>
                            </Stack><Stack display={{ xs: 'block', lg: 'none' }}>
                                <Image src={chainlink3D} alt="chainlink CCIP Nex Labs NexLabs Build Program" style={{
                                    position: 'absolute',
                                    height: '15rem',
                                    width: 'auto',
                                    bottom: '-5rem',
                                    right: '-4.5rem',
                                    zIndex: 1
                                }}></Image>
                            </Stack>
                        </Stack>
                    </CustomCard>

                </Stack>
                <Stack width={{ xs: '100%', lg: '50%' }} direction={'column'} gap={1.5}>
                    <Stack width={'100%'} height={'50%'}>
                        <CustomCard gradient={`linear-gradient(180deg, ${theme.palette.NexArbCardGradient1.main} 0%, ${theme.palette.NexArbCardGradient2.main} 100%), url('${grains.src}') bottom/cover no-repeat`} shadow="0px 40px 180px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                            <Stack height={'100%'} width={'100%'} direction={'column'} alignItems={'start'} justifyContent={'space-between'} position={'relative'} gap={3} zIndex={3}>
                                <Stack gap={1} width={'100%'} position={'relative'} zIndex={2}>
                                    <Typography variant="h5" sx={{
                                        width: '75%'
                                    }}>Nex is on Arbitrum</Typography>
                                    <Typography variant="h6">Nex is part of the thriving Arbitrum ecosystem, the leading L2 technology, empowering builders of Ethereum.</Typography>
                                </Stack>
                                <Button variant='outlined' sx={{
                                    background: theme.palette.background.default,
                                    fontWeight: 700,
                                    position: 'relative',
                                    zIndex: 2,
                                    boxShadow: "rgba(255, 255, 255, 0.15) 0px 1px 4px 1px",
                                }}>More About Arbitrum</Button>
                                <Image src={arbitrum3D} alt="chainlink CCIP Nex Labs NexLabs Build Program" style={{
                                    position: 'absolute',
                                    height: '12rem',
                                    width: 'auto',
                                    bottom: '-6rem',
                                    right: '-4rem',
                                    zIndex: 1
                                }}></Image>
                            </Stack>
                        </CustomCard>
                    </Stack>
                    <Stack width={'100%'} height={'50%'}>
                        <CustomCard gradient={`url('${thirdwebCover.src}') left/cover no-repeat`} shadow="0px 40px 180px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                            <Stack height={'100%'} width={'100%'} direction={'column'} alignItems={'start'} justifyContent={'space-between'} position={'relative'} gap={3} zIndex={3}>
                                <Stack gap={1} width={'100%'} position={'relative'} zIndex={2}>
                                    <Typography variant="h5" sx={{
                                        width: '75%'
                                    }}>Nex is on Arbitrum</Typography>
                                    <Typography variant="h6">Nex is part of the thriving Arbitrum ecosystem, the leading L2 technology, empowering builders of Ethereum.</Typography>
                                </Stack>
                                <Button variant='outlined' sx={{
                                    background: theme.palette.info.main,
                                    color: theme.palette.text.secondary,
                                    fontWeight: 700,
                                    position: 'relative',
                                    zIndex: 2
                                }}>Visit Thirdweb</Button>
                                <Image src={thirdwebLogo} alt="chainlink CCIP Nex Labs NexLabs Build Program" style={{
                                    position: 'absolute',
                                    height: '10rem',
                                    width: 'auto',
                                    bottom: '-5.5rem',
                                    right: '-1.5rem',
                                    zIndex: 1,
                                    opacity: 0.8
                                }}></Image>
                            </Stack>
                        </CustomCard>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default BentoSection