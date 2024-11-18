import { Stack, Typography, Divider } from "@mui/material";
import DottedBackground from "@assets/dotted.webp";
import StatsShadows from "@components/StatsShadows";

const StatsSection = () => {
    return (
        <Stack width={'100%'} alignItems={'center'} marginTop={{xs: 8, lg: 0}} justifyContent={'center'} position={'relative'} zIndex={10} sx={{
            overflowX: 'hidden',
            overflowY: 'hidden',
            backgroundImage: `url('${DottedBackground.src}')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <StatsShadows />
            <Stack width={'100%'} paddingY={{xs: 0, lg: 8}} paddingX={{xs: 2, lg: 8}} alignItems={'start'} justifyContent={'start'} zIndex={9} gap={4}>
                <Typography variant="h5">
                    NEX: A Growing Ecosystem
                </Typography>
                <Stack width={'100%'} alignItems={'center'} gap={3}>
                    <Stack width={'100%'} direction={{xs: 'column', lg: 'row'}} alignItems={{lg: 'end'}} justifyContent={'space-around'} gap={{xs: 3, lg: 0}}>
                        <Stack gap={1.5}>
                            <Typography variant="h1">2</Typography>
                            <Stack gap={1}>
                                <Typography variant="h5">Networks</Typography>
                                <Typography variant="subtitle1">X+ more to come in 2025</Typography>
                            </Stack>
                        </Stack>
                        <Divider sx={{ borderColor: 'white', display: {xs: 'block', lg: 'none'} }} />
                        <Stack gap={1.5}>
                            <Typography variant="h1">3</Typography>
                            <Stack gap={1}>
                                <Typography variant="h5">Asset Types</Typography>
                                <Typography variant="subtitle1">X+ more to come in 2025</Typography>
                            </Stack>
                        </Stack>
                        <Divider sx={{ borderColor: 'white', display: {xs: 'block', lg: 'none'} }} />
                        <Stack gap={1.5}>
                            <Typography variant="h1">4</Typography>
                            <Stack gap={1}>
                                <Typography variant="h5">Trading Products</Typography>
                                <Typography variant="subtitle1">10+ more to come in 2025</Typography>
                            </Stack>
                        </Stack>
                        <Divider sx={{ borderColor: 'white', display: {xs: 'block', lg: 'none'} }} />
                    </Stack>
                    <Stack width={{xs: '100%', lg: '75%'}} direction={{xs: 'column', lg: 'row'}} alignItems={{lg: 'end'}} justifyContent={'space-around'} gap={{xs: 3, lg: 0}}>
                        <Stack gap={1.5}>
                            <Typography variant="h1">x2</Typography>
                            <Stack gap={1}>
                                <Typography variant="h5">Time Saved</Typography>
                                <Typography variant="subtitle1">Compared to other platforms</Typography>
                            </Stack>
                        </Stack>
                        <Divider sx={{ borderColor: 'white', display: {xs: 'block', lg: 'none'} }} />
                        <Stack gap={1.5}>
                            <Typography variant="h1">24</Typography>
                            <Stack gap={1}>
                                <Typography variant="h5">Underlying Assets</Typography>
                                <Typography variant="subtitle1">30+ more to come in 2025</Typography>
                            </Stack>
                        </Stack>
                        <Divider sx={{ borderColor: 'white', display: {xs: 'block', lg: 'none'} }} />
                    </Stack>
                </Stack>

            </Stack>
        </Stack>
    )
}

export default StatsSection