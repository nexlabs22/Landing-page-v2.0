import { Stack, Typography, Button, Link } from "@mui/material";
import Image from "next/image";
import logo from '@assets/logo.webp'
import theme from "@theme/theme";

const Navbar = () => {
    return (
        <Stack width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'space-between'} paddingTop={{ xs: 3, lg: 0 }} position={'relative'} zIndex={10}>
            <Image src={logo} alt="NexLabs Nex Labs logo xlogo" height={40} width={40} style={{
                filter: 'brightness(0) invert(1)'
            }} />
            <Stack display={{ xs: 'none', lg: 'flex' }} direction={'row'} alignItems={'center'} justifyContent={'center'} gap={8}>
                <Link href="/" underline="none" color={theme.palette.text.primary}><Typography variant="h5">Home</Typography></Link>
                <Link href="https://nex-labs.gitbook.io/nex-dex" target="_blank" underline="none" color={theme.palette.text.primary}><Typography variant="h5">Docs</Typography></Link>
            </Stack>
            <Link href="https://app.nexlabs.io/" target="_blank">
                <Button variant='outlined'>Open dApp</Button>
            </Link>
        </Stack>
    )
}

export default Navbar