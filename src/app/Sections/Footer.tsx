import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from '@assets/logo.webp'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaMedium } from "react-icons/fa6";
import FooterShadows from "@components/FooterShadows";


const Footer = () => {
    return (
        <Stack width={'100%'} alignItems={'center'} justifyContent={'start'} paddingX={8} gap={8} position={'relative'}>
            <Stack>
                <FooterShadows />
            </Stack>
            <Stack width={'100%'} direction={'row'} alignItems={'start'} justifyContent={'space-between'} paddingTop={10} position={'relative'} zIndex={10}>
                <Stack width={'40%'} gap={3}>
                    <Stack direction={'row'} alignItems={'start'} gap={1}>
                        <Image src={logo} alt="NexLabs Nex Labs logo xlogo" height={34} width={34} style={{
                            filter: 'brightness(0) invert(1)'
                        }} />
                        <Typography variant="h4">NexLabs</Typography>
                    </Stack>
                    <Stack gap={2}>
                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                            <LinkedInIcon color="info" />
                            <Typography variant="subtitle1">NEX Labs</Typography>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                            <XIcon color="info" />
                            <Typography variant="subtitle1">@Nex_Protocol</Typography>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                            <FaMedium color="info" size={24} />
                            <Typography variant="subtitle1">Nex Labs</Typography>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                            <GitHubIcon color="info" />
                            <Typography variant="subtitle1">github.com/nexlabs22</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack width={'30%'} gap={3}>
                    <Typography variant="h5">About Nex</Typography>
                    <Stack gap={2}>
                        <Typography variant="subtitle1">dApp</Typography>
                        <Typography variant="subtitle1">Public repository</Typography>
                        <Typography variant="subtitle1">Whitepaper</Typography>
                        <Typography variant="subtitle1">Licences</Typography>
                    </Stack>
                </Stack>
                <Stack width={'30%'} gap={3}>
                    <Typography variant="h5">Whitepaper pieces</Typography>
                    <Stack gap={2}>
                        <Typography variant="subtitle1">Spot - Indices</Typography>
                        <Typography variant="subtitle1">Protocol Structure</Typography>
                        <Typography variant="subtitle1">Token & Smart contract details</Typography>
                        <Typography variant="subtitle1">Roadmap</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'center'} gap={2} position={'relative'} zIndex={10}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Terms & Conditions</Typography>
                |
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Privacy Policy</Typography>
            </Stack>
        </Stack>
    )
}

export default Footer;