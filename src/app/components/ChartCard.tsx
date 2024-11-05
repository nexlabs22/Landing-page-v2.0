import { Stack, Chip, Typography, Paper } from "@mui/material";
import CustomCard from "@components/CustomCard";
import Image from "next/image";
import theme from "@theme/theme";

import ANFILogo from '@assets/anfi.webp'
import CR5Logo from '@assets/cr5.webp'
import MAG7Logo from '@assets/mag7.webp'
import ARBEILogo from '@assets/arb.webp'

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import HelpIcon from '@mui/icons-material/Help';
import CallMadeIcon from '@mui/icons-material/CallMade';


interface ChartCardProps {
    product: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ product }) => {

    

    return (
        <CustomCard gradient={`linear-gradient(0deg, ${theme.palette.NexCardGradient3_2.main} 0%, ${theme.palette.NexCardGradient2_2.main} 100%)`} shadow="0px 40px 180px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
            <Stack height={'100%'} width={'100%'} direction={'column'} alignItems={'start'} justifyContent={'space-between'}>
                <Stack width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'start'} gap={1}>
                        <Image src={product == 'ANFI' ? ANFILogo : product == 'CR5' ? CR5Logo : product == 'MAG7' ? MAG7Logo : ARBEILogo} alt="nex labs nexlabs ANFI index anti inflation" height={50} width={50} />
                        <Stack direction={'column'}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                {product.toUpperCase()}
                            </Typography>
                            <Typography variant="subtitle2">
                                Anti Inflation Index
                            </Typography>
                        </Stack>
                    </Stack>
                    <Chip label='RWA' />
                </Stack>
                <Stack width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Paper sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2
                    }}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'start'}>
                            <Typography variant='body1' color={theme.palette.error.main}>-9.88</Typography>
                            <KeyboardDoubleArrowDownIcon fontSize="small" color="error" />
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'start'} gap={0.5}>
                            <Typography variant='body1'>YTD</Typography>
                            <HelpIcon fontSize="small" color="info" sx={{
                                scale: '0.75', 
                                opacity: "0.75"
                            }} />
                        </Stack>
                    </Paper>
                    <Paper sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 0.5
                    }}>
                        <Typography variant='body1'>Trade</Typography>
                        <CallMadeIcon fontSize="small" color="info" />
                    </Paper>
                </Stack>
            </Stack>
        </CustomCard>
    )
}

export default ChartCard