import { Stack, Typography, Link } from "@mui/material";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import theme from "@theme/theme";

// logos
import mood from '@assets/mood.webp'
import chainlink from '@assets/Chainlink.webp'
import buren from '@assets/buren.webp'
import rwascan from '@assets/rwa.webp'
import tv from '@assets/tradingview.webp'

const PartnersSection = () => {
    return (
        <Stack width={'100%'} alignItems={'center'} justifyContent={'start'} gap={4} paddingX={{ xs: 2, lg: 8 }} paddingBottom={8} paddingTop={{ xs: 4, lg: 0 }} position={'relative'} overflow={'hidden'}>
            <Stack width={{ xs: '5vw', lg: '8vw' }} height={'100%'} position={'absolute'} left={0} zIndex={2} sx={{
                boxShadow: `5px 0px 50px 20px ${theme.palette.background.default}`,
                backgroundColor: theme.palette.background.default,
                blur: '8px'
            }}></Stack>
            <Typography variant="h5">
                Our Partners
            </Typography>
            <Stack width={'100%'} display={{ xs: 'none', lg: 'flex' }}>
                <Marquee speed={30} pauseOnHover style={{
                    position: 'relative',
                    zIndex: 1
                }}>
                    <Link href="https://moodglobalservices.com/" target="_blank">
                        <Image src={mood} alt="mood global services" style={{
                            filter: 'brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.burenlegal.com/en" target="_blank">
                        <Image src={buren} alt="buren legal tax notary" style={{
                            filter: 'brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://chain.link/badge" target="_blank">
                        <Image src={chainlink} alt="chainlink build program badge" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2.2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.rwa-scan.com/" target="_blank">
                        <Image src={rwascan} alt="rwa scan" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '1.4rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.tradingview.com/" target="_blank">
                        <Image src={tv} alt="trading view tradingview" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://moodglobalservices.com/" target="_blank">
                        <Image src={mood} alt="mood global services" style={{
                            filter: 'brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.burenlegal.com/en" target="_blank">
                        <Image src={buren} alt="buren legal tax notary" style={{
                            filter: 'brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://chain.link/badge" target="_blank">
                        <Image src={chainlink} alt="chainlink build program badge" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2.2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.rwa-scan.com/" target="_blank">
                        <Image src={rwascan} alt="rwa scan" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '1.4rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.tradingview.com/" target="_blank">
                        <Image src={tv} alt="trading view tradingview" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://moodglobalservices.com/" target="_blank">
                        <Image src={mood} alt="mood global services" style={{
                            filter: 'brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.burenlegal.com/en" target="_blank">
                        <Image src={buren} alt="buren legal tax notary" style={{
                            filter: 'brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://chain.link/badge" target="_blank">
                        <Image src={chainlink} alt="chainlink build program badge" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2.2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.rwa-scan.com/" target="_blank">
                        <Image src={rwascan} alt="rwa scan" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '1.4rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.tradingview.com/" target="_blank">
                        <Image src={tv} alt="trading view tradingview" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://moodglobalservices.com/" target="_blank">
                        <Image src={mood} alt="mood global services" style={{
                            filter: 'brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.burenlegal.com/en" target="_blank">
                        <Image src={buren} alt="buren legal tax notary" style={{
                            filter: 'brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://chain.link/badge" target="_blank">
                        <Image src={chainlink} alt="chainlink build program badge" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2.2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.rwa-scan.com/" target="_blank">
                        <Image src={rwascan} alt="rwa scan" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '1.4rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.tradingview.com/" target="_blank">
                        <Image src={tv} alt="trading view tradingview" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://moodglobalservices.com/" target="_blank">
                        <Image src={mood} alt="mood global services" style={{
                            filter: 'brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.burenlegal.com/en" target="_blank">
                        <Image src={buren} alt="buren legal tax notary" style={{
                            filter: 'brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://chain.link/badge" target="_blank">
                        <Image src={chainlink} alt="chainlink build program badge" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2.2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.rwa-scan.com/" target="_blank">
                        <Image src={rwascan} alt="rwa scan" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '1.4rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.tradingview.com/" target="_blank">
                        <Image src={tv} alt="trading view tradingview" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://moodglobalservices.com/" target="_blank">
                        <Image src={mood} alt="mood global services" style={{
                            filter: 'brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.burenlegal.com/en" target="_blank">
                        <Image src={buren} alt="buren legal tax notary" style={{
                            filter: 'brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://chain.link/badge" target="_blank">
                        <Image src={chainlink} alt="chainlink build program badge" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2.2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.rwa-scan.com/" target="_blank">
                        <Image src={rwascan} alt="rwa scan" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '1.4rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                    <Link href="https://www.tradingview.com/" target="_blank">
                        <Image src={tv} alt="trading view tradingview" style={{
                            filter: 'invert(1) brightness(0.75)',
                            marginLeft: '1.4rem',
                            marginRight: '1.4rem',
                            height: '2rem',
                            width: 'auto'
                        }}></Image>
                    </Link>
                </Marquee>
            </Stack>
            <Stack width={'100%'} display={{ xs: 'flex', lg: 'none' }}>
            <Marquee speed={30} pauseOnHover style={{
                position: 'relative',
                zIndex: 1
            }}>
                <Link href="https://moodglobalservices.com/" target="_blank">
                    <Image src={mood} alt="mood global services" style={{
                        filter: 'brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '2.2rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://www.burenlegal.com/en" target="_blank">
                    <Image src={buren} alt="buren legal tax notary" style={{
                        filter: 'brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '2.6rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://chain.link/badge" target="_blank">
                    <Image src={chainlink} alt="chainlink build program badge" style={{
                        filter: 'invert(1) brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '3rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://www.rwa-scan.com/" target="_blank">
                    <Image src={rwascan} alt="rwa scan" style={{
                        filter: 'invert(1) brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '1.6rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://www.tradingview.com/" target="_blank">
                    <Image src={tv} alt="trading view tradingview" style={{
                        filter: 'invert(1) brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '2.6rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://moodglobalservices.com/" target="_blank">
                    <Image src={mood} alt="mood global services" style={{
                        filter: 'brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '2.2rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://www.burenlegal.com/en" target="_blank">
                    <Image src={buren} alt="buren legal tax notary" style={{
                        filter: 'brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '2.6rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://chain.link/badge" target="_blank">
                    <Image src={chainlink} alt="chainlink build program badge" style={{
                        filter: 'invert(1) brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '3rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://www.rwa-scan.com/" target="_blank">
                    <Image src={rwascan} alt="rwa scan" style={{
                        filter: 'invert(1) brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '1.6rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://www.tradingview.com/" target="_blank">
                    <Image src={tv} alt="trading view tradingview" style={{
                        filter: 'invert(1) brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '2.6rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://moodglobalservices.com/" target="_blank">
                    <Image src={mood} alt="mood global services" style={{
                        filter: 'brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '2.2rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://www.burenlegal.com/en" target="_blank">
                    <Image src={buren} alt="buren legal tax notary" style={{
                        filter: 'brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '2.6rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://chain.link/badge" target="_blank">
                    <Image src={chainlink} alt="chainlink build program badge" style={{
                        filter: 'invert(1) brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '3rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://www.rwa-scan.com/" target="_blank">
                    <Image src={rwascan} alt="rwa scan" style={{
                        filter: 'invert(1) brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '1.6rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://www.tradingview.com/" target="_blank">
                    <Image src={tv} alt="trading view tradingview" style={{
                        filter: 'invert(1) brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '2.6rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://moodglobalservices.com/" target="_blank">
                    <Image src={mood} alt="mood global services" style={{
                        filter: 'brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '2.2rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://www.burenlegal.com/en" target="_blank">
                    <Image src={buren} alt="buren legal tax notary" style={{
                        filter: 'brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '2.6rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://chain.link/badge" target="_blank">
                    <Image src={chainlink} alt="chainlink build program badge" style={{
                        filter: 'invert(1) brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '3rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://www.rwa-scan.com/" target="_blank">
                    <Image src={rwascan} alt="rwa scan" style={{
                        filter: 'invert(1) brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '1.6rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://www.tradingview.com/" target="_blank">
                    <Image src={tv} alt="trading view tradingview" style={{
                        filter: 'invert(1) brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '2.6rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://moodglobalservices.com/" target="_blank">
                    <Image src={mood} alt="mood global services" style={{
                        filter: 'brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '2.2rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://www.burenlegal.com/en" target="_blank">
                    <Image src={buren} alt="buren legal tax notary" style={{
                        filter: 'brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '2.6rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://chain.link/badge" target="_blank">
                    <Image src={chainlink} alt="chainlink build program badge" style={{
                        filter: 'invert(1) brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '3rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://www.rwa-scan.com/" target="_blank">
                    <Image src={rwascan} alt="rwa scan" style={{
                        filter: 'invert(1) brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '1.6rem',
                        width: 'auto'
                    }}></Image>
                </Link>
                <Link href="https://www.tradingview.com/" target="_blank">
                    <Image src={tv} alt="trading view tradingview" style={{
                        filter: 'invert(1) brightness(0.75)',
                        marginLeft: '1.4rem',
                        marginRight: '1.4rem',
                        height: '2.6rem',
                        width: 'auto'
                    }}></Image>
                </Link>
            </Marquee>
            </Stack>

            <Stack width={{ xs: '5vw', lg: '8vw' }} height={'100%'} position={'absolute'} right={0} zIndex={2} sx={{
                boxShadow: `-5px 0px 50px 20px ${theme.palette.background.default}`,
                backgroundColor: theme.palette.background.default,
                blur: '8px'
            }}></Stack>
        </Stack>
    )
}

export default PartnersSection;