import { Stack, Typography } from "@mui/material";
import CustomCard from "@components/CustomCard";
import theme from "@theme/theme";
import CheckIcon from '@mui/icons-material/Check';
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const FeaturesSection = () => {
    return (
        <Stack width={'100%'} alignItems={'center'} justifyContent={'start'} gap={{ xs: 3, lg: 4 }} paddingX={{ xs: 2, lg: 8 }} paddingY={{ xs: 4, lg: 4 }}>
            <Typography variant="h3">
                Features
            </Typography>
            <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems={{ xs: 'center', lg: 'stretch' }} justifyContent={{ xs: 'start', lg: 'center' }} gap={2}>
                <Stack width={{ xs: '100%', lg: '33%' }}>
                    <CustomCard gradient={`linear-gradient(180deg, ${theme.palette.NexCardGradient2_2.main} 0%, ${theme.palette.background.default} 80%)`} shadow="0px 0px 0px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                        <Stack alignItems={'start'} justifyContent={'space-between'} gap={2}>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>{/*Box for Animated Icon*/}</Stack>
                            <Stack width={'100%'} direction={'column'} justifyContent={'space-evenly'} gap={2}>
                                <Typography variant="h4" sx={{
                                    textAlign: 'center',
                                    width: '100%',
                                }}>One-stop-shop</Typography>
                                <Stack gap={1.5}>
                                    <Stack direction={'row'} alignItems={'start'} gap={0.5}>
                                        <IoCheckmarkDoneOutline color={theme.palette.NexCardGradient1_2.main} size={24} />
                                        <Typography variant="body1">Managged TradiFi & Crypto Assets</Typography>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'start'} gap={0.5}>
                                        <IoCheckmarkDoneOutline color={theme.palette.NexCardGradient1_2.main} size={24} />
                                        <Typography variant="body1">Spot Products & Derivatives</Typography>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'start'} gap={0.5}>
                                        <IoCheckmarkDoneOutline color={theme.palette.NexCardGradient1_2.main} size={24} />
                                        <Typography variant="body1">Multi Chain Availability & Single Chain Experience</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CustomCard>
                </Stack>
                <Stack width={{ xs: '100%', lg: '33%' }}>
                    <CustomCard gradient={`linear-gradient(180deg, ${theme.palette.NexCardGradient2_2.main} 0%, ${theme.palette.background.default} 80%)`} shadow="0px 0px 180px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                        <Stack alignItems={'start'} justifyContent={'space-between'} gap={2}>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>{/*Box for Animated Icon*/}</Stack>
                            <Stack width={'100%'} direction={'column'} justifyContent={'space-evenly'} gap={2}>
                                <Typography variant="h4" sx={{
                                    textAlign: 'center',
                                    width: '100%',
                                }}>Smart Index Platform</Typography>
                                <Stack gap={1.5}>
                                    <Stack direction={'row'} alignItems={'start'} gap={0.5}>
                                        <IoCheckmarkDoneOutline color={theme.palette.NexCardGradient1_2.main} size={24} />
                                        <Typography variant="body1">Narrative-Based indices.</Typography>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'start'} gap={0.5}>
                                        <IoCheckmarkDoneOutline color={theme.palette.NexCardGradient1_2.main} size={24} />
                                        <Typography variant="body1">Machine Learning driven trading.</Typography>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'start'} gap={0.5}>
                                        <IoCheckmarkDoneOutline color={theme.palette.NexCardGradient1_2.main} size={24} />
                                        <Typography variant="body1">Auto reinvest dividends.</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CustomCard>
                </Stack>
                <Stack width={{ xs: '100%', lg: '33%' }}>
                    <CustomCard gradient={`linear-gradient(180deg, ${theme.palette.NexCardGradient2_2.main} 0%, ${theme.palette.background.default} 80%)`} shadow="0px 0px 0px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                        <Stack alignItems={'start'} justifyContent={'space-between'} gap={2}>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>{/*Box for Animated Icon*/}</Stack>
                            <Stack width={'100%'} direction={'column'} justifyContent={'space-evenly'} gap={2}>
                                <Typography variant="h4" sx={{
                                    textAlign: 'center',
                                    width: '100%',
                                }}>Self custody</Typography>
                                <Stack gap={1.5}>
                                    <Stack direction={'row'} alignItems={'start'} gap={0.5}>
                                        <IoCheckmarkDoneOutline color={theme.palette.NexCardGradient1_2.main} size={24} />
                                        <Typography variant="body1">Smart contract enbaled 24/7 trading.</Typography>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'start'} gap={0.5}>
                                        <IoCheckmarkDoneOutline color={theme.palette.NexCardGradient1_2.main} size={24} />
                                        <Typography variant="body1">Social login with MFA</Typography>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'start'} gap={0.5}>
                                        <IoCheckmarkDoneOutline color={theme.palette.NexCardGradient1_2.main} size={24} />
                                        <Typography variant="body1">Build your own index, become a fund manager</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CustomCard>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default FeaturesSection;