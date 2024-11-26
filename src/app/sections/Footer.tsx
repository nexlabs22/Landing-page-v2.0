import { Stack, Typography, Link } from "@mui/material";
import Image from "next/image";
import theme from "@theme/theme";

import logo from '@assets/logo.webp'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaMedium } from "react-icons/fa6";
import FooterShadows from "@components/FooterShadows";
import FooterBG from "@assets/footerBG";


const Footer = () => {
    return (
        <Stack width={'100%'} height={{ xs: 'auto', lg: '60vh' }} alignItems={'center'} justifyContent={{ xs: 'end', lg: 'start' }} paddingX={{ xs: 2, lg: 8 }} paddingBottom={{ xs: 3, lg: 0 }} gap={{ xs: 3, lg: 8 }} position={'relative'} overflow={'hidden'}>
            <Stack>
                <FooterShadows />
            </Stack>
            <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems={'start'} justifyContent={{ xs: 'start', lg: 'space-between' }} paddingTop={{ xs: 8, lg: 4 }} position={'relative'} zIndex={10} gap={{ xs: 3, lg: 0 }}>
                <Stack width={{ xs: '100%', lg: '40%' }} gap={3}>
                    <Stack direction={'row'} alignItems={'start'} gap={1}>
                        <Image src={logo} alt="NexLabs Nex Labs logo xlogo" height={34} width={34} style={{
                            filter: 'brightness(0) invert(1)'
                        }} />
                        <Typography variant="h5">NexLabs</Typography>
                    </Stack>
                    <Stack gap={2}>
                        <Link href="https://www.linkedin.com/company/nex-labs/" target="_blank" underline="none" color={theme.palette.text.primary}>
                            <Stack direction={'row'} alignItems={'center'} gap={1}>
                                <LinkedInIcon color="info" />
                                <Typography variant="body1">NEX Labs</Typography>
                            </Stack>
                        </Link>
                        <Link href="https://twitter.com/NEX_Protocol" target="_blank" underline="none" color={theme.palette.text.primary}>
                            <Stack direction={'row'} alignItems={'center'} gap={1}>
                                <XIcon color="info" />
                                <Typography variant="body1">@Nex_Protocol</Typography>
                            </Stack>
                        </Link>
                        <Link href="https://nexlabs.medium.com/" target="_blank" underline="none" color={theme.palette.text.primary}>
                            <Stack direction={'row'} alignItems={'center'} gap={1}>
                                <FaMedium color="info" size={24} />
                                <Typography variant="body1">Nex Labs</Typography>
                            </Stack>
                        </Link>
                        <Link href="https://github.com/nexlabs22" target="_blank" underline="none" color={theme.palette.text.primary}>
                            <Stack direction={'row'} alignItems={'center'} gap={1}>
                                <GitHubIcon color="info" />
                                <Typography variant="body1">github.com/nexlabs22</Typography>
                            </Stack>
                        </Link>
                    </Stack>
                </Stack>
                <Stack width={{ xs: '100%', lg: '30%' }} gap={3}>
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
                <Stack width={{ xs: '100%', lg: '30%' }} gap={3}>
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
            <Stack display={{ xs: 'none', lg: 'flex' }} width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'center'} gap={{ xs: 1, lg: 2 }} position={'relative'} zIndex={10}>
                <Link href="/terms_and_conditions" target="_blank" underline="none" color={theme.palette.text.primary}>
                    <Typography variant="caption" sx={{ fontWeight: 700 }}>Terms & Conditions</Typography>
                </Link>
                |
                <Link href="privacy_policy" target="_blank" underline="none" color={theme.palette.text.primary}>
                    <Typography variant="caption" sx={{ fontWeight: 700 }}>Privacy Policy</Typography>
                </Link>
            </Stack>
            <FooterBG />
        </Stack>
    )
}

export default Footer;