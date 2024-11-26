import { Stack, Chip, Typography, Paper, Link } from "@mui/material";
import CustomCard from "@components/CustomCard";
import Image from "next/image";
import theme from "@theme/theme";
import { type Index } from "../Indices";

import AreaLineChart from "./LineChart";

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import HelpIcon from '@mui/icons-material/Help';
import CallMadeIcon from '@mui/icons-material/CallMade';



interface ChartCardProps {
    product: Index;
}

const ChartCard: React.FC<ChartCardProps> = ({ product }) => {



    return (
        <CustomCard gradient={`linear-gradient(0deg, ${theme.palette.NexCardGradient3_2.main} 0%, ${theme.palette.NexCardGradient2_2.main} 100%)`} shadow="0px 40px 180px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
            <Stack height={'100%'} width={'100%'} direction={'column'} alignItems={'start'} justifyContent={'space-between'}>
                <Stack width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'start'} gap={1}>
                        <Image src={product.logo} alt="nex labs nexlabs ANFI index anti inflation" height={50} width={50} />
                        <Stack direction={'column'}>
                            <Typography variant="h5">
                                {product.symbol.toUpperCase()}
                            </Typography>
                            <Typography variant="subtitle2">
                                {product.name}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Chip label={product.tag} />
                </Stack>
                <Stack width={'100%'} height={{ xs: '20vh', lg: '50%' }} marginX={'auto'} paddingY={{xs: 3, lg: 0}} direction={'row'} alignItems={'center'} justifyContent={'center'}>
                    <AreaLineChart />
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
                            <Typography variant='body1' color={product.chg24h >= 0 ? theme.palette.success.main : theme.palette.error.main}>
                                {product.chg24h}%
                            </Typography>
                            {
                                product.chg24h >= 0 ? (<KeyboardDoubleArrowUpIcon fontSize="small" color="success" />) : (<KeyboardDoubleArrowDownIcon fontSize="small" color="error" />)
                            }
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'start'} gap={0.5}>
                            <Typography variant='body1'>YTD</Typography>
                            <HelpIcon fontSize="small" color="info" sx={{
                                scale: '0.75',
                                opacity: "0.75"
                            }} />
                        </Stack>
                    </Paper>
                    <Link href={`https://app.nexlabs.io/tradeIndex?index=${product.symbol}`} target="_blank" underline="none" color={theme.palette.text.primary}>
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
                    </Link>
                </Stack>
            </Stack>
        </CustomCard>
    )
}

export default ChartCard