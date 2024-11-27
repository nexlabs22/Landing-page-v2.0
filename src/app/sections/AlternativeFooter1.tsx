import { Stack, Typography, Link, Button } from "@mui/material";
import Image from "next/image";
import theme from "@theme/theme";
import ConversionShadows from "@components/ConversionShadows";

import logo from '@assets/logo.webp'
import DottedBackground from "@assets/smallDottedGreen.webp";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaMedium } from "react-icons/fa6";

const AlternativeFooter1 = () => {
    return (
        <Stack width={'100%'}>
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
                    <Typography variant="h2">Elevate your trading experience</Typography>
                    <Typography variant="subtitle1" textAlign={'center'} width={{xs: '100%', lg: '60%'}}>Step into the future of investing with NEX! Access our dApp to discover a world of new opportunities and transform your investing journey.</Typography>
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
            <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems={'start'} justifyContent={{ xs: 'start', lg: 'space-between' }} paddingY={{ xs: 4, lg: 4 }} paddingX={{ xs: 2, lg: 8 }}>
                <Stack width={{ xs: '100%', lg: '25%' }} height={'100%'} gap={3}>
                    <Stack gap={0.5}>
                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                            <Image src={logo} alt="NexLabs Nex Labs logo xlogo" height={34} width={34} style={{
                                filter: 'brightness(0) invert(1)'
                            }} />
                            <Typography variant="h2">NexLabs</Typography>
                        </Stack>
                        <Typography variant="subtitle1" lineHeight={1.4}>Bring real-world assets (RWAs) on-chain and simplifying the investing process for users.</Typography>
                    </Stack>
                    <Stack direction={'row'} gap={2}>
                        <Link href="https://www.linkedin.com/company/nex-labs/" target="_blank" underline="none" color={theme.palette.text.primary}>
                            <LinkedInIcon color="info" />

                        </Link>
                        <Link href="https://twitter.com/NEX_Protocol" target="_blank" underline="none" color={theme.palette.text.primary}>

                            <XIcon color="info" />

                        </Link>
                        <Link href="https://nexlabs.medium.com/" target="_blank" underline="none" color={theme.palette.text.primary}>
                            <FaMedium color="info" size={24} />
                        </Link>
                        <Link href="https://github.com/nexlabs22" target="_blank" underline="none" color={theme.palette.text.primary}>
                            <GitHubIcon color="info" />

                        </Link>
                    </Stack>
                </Stack>
                <Stack width={{ xs: '100%', lg: '75%' }} height={'100%'} direction={{ xs: 'column', lg: 'row' }} gap={10} justifyContent={'end'} >
                    <Stack gap={3}>
                        <Typography variant="h5">About Nex</Typography>
                        <Stack gap={2}>
                            <Link href="https://app.nexlabs.io/" target="_blank" underline="none" color={theme.palette.text.primary}>
                                <Typography variant="body1">dApp</Typography>
                            </Link>
                            <Link href="https://github.com/nexlabs22/%E2%80%A6ices-Model-Contracts" target="_blank" underline="none" color={theme.palette.text.primary}>
                                <Typography variant="body1">Public repository</Typography>
                            </Link>
                            <Link href="https://nex-labs.gitbook.io/nex-dex/" target="_blank" underline="none" color={theme.palette.text.primary}>
                                <Typography variant="body1">Whitepaper</Typography>
                            </Link>
                            <Link href="https://www.nexlabs.io/license" target="_blank" underline="none" color={theme.palette.text.primary}>
                                <Typography variant="body1">Licences</Typography>
                            </Link>
                        </Stack>
                    </Stack>
                    <Stack gap={3}>
                        <Typography variant="h5">Whitepaper pieces</Typography>
                        <Stack gap={2}>
                            <Link href="https://nex-labs.gitbook.io/nex-dex/spot-indices/nex-labs-spot-index-standard-model" target="_blank" underline="none" color={theme.palette.text.primary}>
                                <Typography variant="body1">Spot - Indices</Typography>
                            </Link>
                            <Link href="https://nex-labs.gitbook.io/nex-dex/" target="_blank" underline="none" color={theme.palette.text.primary}>
                                <Typography variant="body1">Protocol Structure</Typography>
                            </Link>
                            <Link href="https://nex-labs.gitbook.io/nex-dex/token-and-smart-contract-details/address-and-ticker" target="_blank" underline="none" color={theme.palette.text.primary}>
                                <Typography variant="body1">Token & Smart contract details</Typography>
                            </Link>
                            <Link href="https://nex-labs.gitbook.io/nex-dex/additional-information/roadmap" target="_blank" underline="none" color={theme.palette.text.primary}>
                                <Typography variant="body1">Roadmap</Typography>
                            </Link>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack display={{ xs: 'none', lg: 'flex' }} width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'center'} paddingTop={6} gap={{ xs: 1, lg: 2 }} position={'relative'} zIndex={10}>
                <Link href="/terms_and_conditions" target="_blank" underline="none" color={theme.palette.text.primary}>
                    <Typography variant="caption" sx={{ fontWeight: 700 }}>Terms & Conditions</Typography>
                </Link>
                |
                <Link href="privacy_policy" target="_blank" underline="none" color={theme.palette.text.primary}>
                    <Typography variant="caption" sx={{ fontWeight: 700 }}>Privacy Policy</Typography>
                </Link>
            </Stack>
        </Stack>
    )
}

export default AlternativeFooter1;

