import { Stack, Typography } from "@mui/material";
import CustomCard from "@components/CustomCard";
import theme from "@theme/theme";

const FeaturesSection = () => {
    return (
        <Stack width={'100%'} alignItems={'center'} justifyContent={'start'} gap={{xs: 3, lg: 4}} paddingX={{xs: 2, lg: 8}}>
            <Typography variant="h5">
                Features
            </Typography>
            <Stack width={'100%'} direction={{xs: 'column', lg: 'row'}} alignItems={{xs: 'center', lg: 'stretch'}} justifyContent={{xs: 'start', lg: 'center'}} gap={2}>
                <Stack width={{xs: '100%', lg: '33%'}}>
                    <CustomCard gradient={`linear-gradient(10.81deg, ${theme.palette.NexCardGradient1_1.main} 8.01%, ${theme.palette.NexCardGradient1_2.main} 96.61%)`} shadow="0px 40px 180px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                        <Stack alignItems={'start'} justifyContent={'space-between'} gap={2}>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>{/*Box for Animated Icon*/}</Stack>
                            <Stack width={'100%'} direction={'column'} justifyContent={'space-evenly'} gap={1}>
                                <Typography variant="h5" sx={{
                                    textAlign: 'center',
                                    width: '100%',
                                }}>One-stop-shop</Typography>
                                <Stack gap={1}>
                                    <Typography variant="h6">✔ Managged TradiFi & Crypto Assets</Typography>
                                    <Typography variant="h6">✔ Spot Products & Derivatives</Typography>
                                    <Typography variant="h6">✔ Multi Chain Availability & Single Chain Experience</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CustomCard>
                </Stack>
                <Stack width={{xs: '100%', lg: '33%'}}>
                    <CustomCard gradient={`linear-gradient(10.81deg, ${theme.palette.NexCardGradient1_1.main} 8.01%, ${theme.palette.NexCardGradient1_2.main} 96.61%)`} shadow="0px 40px 180px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                        <Stack alignItems={'start'} justifyContent={'space-between'} gap={2}>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>{/*Box for Animated Icon*/}</Stack>
                            <Stack width={'100%'} direction={'column'} justifyContent={'space-evenly'} gap={1}>
                                <Typography variant="h5" sx={{
                                    textAlign: 'center',
                                    width: '100%',
                                }}>Smart Index Platform</Typography>
                                <Stack gap={1}>
                                    <Typography variant="h6">✔ Narrative-Based indices.</Typography>
                                    <Typography variant="h6">✔ Machine Learning driven trading.</Typography>
                                    <Typography variant="h6">✔ Auto reinvest dividends.</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CustomCard>
                </Stack>
                <Stack width={{xs: '100%', lg: '33%'}}>
                    <CustomCard gradient={`linear-gradient(10.81deg, ${theme.palette.NexCardGradient1_1.main} 8.01%, ${theme.palette.NexCardGradient1_2.main} 96.61%)`} shadow="0px 40px 180px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                        <Stack alignItems={'start'} justifyContent={'space-between'} gap={2}>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>{/*Box for Animated Icon*/}</Stack>
                            <Stack width={'100%'} direction={'column'} justifyContent={'space-evenly'} gap={1}>
                                <Typography variant="h5" sx={{
                                    textAlign: 'center',
                                    width: '100%',
                                }}>Self custody</Typography>
                                <Stack gap={1}>
                                    <Typography variant="h6">✔ Smart contract enbaled 24/7 trading.</Typography>
                                    <Typography variant="h6">✔ Social login with MFA</Typography>
                                    <Typography variant="h6">✔ Build your own index, become a fund manager</Typography>
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