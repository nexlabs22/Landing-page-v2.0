import { Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import logo from '@assets/logo.webp'

const Navbar = () => {
    return(
        <Stack width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'space-between'} position={'relative'} zIndex={10}>
                <Image src={logo} alt="NexLabs Nex Labs logo xlogo" height={40} width={40} style={{
                    filter: 'brightness(0) invert(1)'
                }} />
                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={8}>
                    <Typography variant="h6">Home</Typography>
                    <Typography variant="h6">Docs</Typography>
                </Stack>
                <Button variant='outlined'>Open dApp</Button>
            </Stack>
    )
}

export default Navbar