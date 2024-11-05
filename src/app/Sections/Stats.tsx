import { Stack, Typography, Box } from "@mui/material";
import DottedBackground from "@components/DottedBackground";
import StatsShadows from "@components/StatsShadows";
import theme from "@theme/theme";

const StatsSection = () => {
    return (
        <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} position={'relative'} zIndex={10} sx={{
            overflowX: 'hidden',
            overflowY: 'hidden'
        }}>
            
            <DottedBackground />
            <StatsShadows />
            <Stack width={'100%'} padding={8} alignItems={'start'} justifyContent={'start'} zIndex={9} gap={4}>
                <Typography variant="h5">
                    NEX: A Growing Ecosystem
                </Typography>
                <Stack width={'100%'} alignItems={'center'} gap={3}>
                    <Stack width={'100%'} direction={'row'} alignItems={'end'} justifyContent={'space-around'}>
                        <Stack gap={1.5}>
                            <Typography variant="h1">2</Typography>
                            <Stack gap={1}>
                                <Typography variant="h5">Networks</Typography>
                                <Typography variant="subtitle1">X+ more to come in 2025</Typography>
                            </Stack>
                        </Stack>
                        <Stack gap={1.5}>
                            <Typography variant="h1">3</Typography>
                            <Stack gap={1}>
                                <Typography variant="h5">Asset Types</Typography>
                                <Typography variant="subtitle1">X+ more to come in 2025</Typography>
                            </Stack>
                        </Stack>
                        <Stack gap={1.5}>
                            <Typography variant="h1">4</Typography>
                            <Stack gap={1}>
                                <Typography variant="h5">Trading Products</Typography>
                                <Typography variant="subtitle1">10+ more to come in 2025</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack width={'75%'} direction={'row'} alignItems={'end'} justifyContent={'space-around'}>
                        <Stack gap={1.5}>
                            <Typography variant="h1">x2</Typography>
                            <Stack gap={1}>
                                <Typography variant="h5">Time Saved</Typography>
                                <Typography variant="subtitle1">Compared to other platforms</Typography>
                            </Stack>
                        </Stack>
                        <Stack gap={1.5}>
                            <Typography variant="h1">24</Typography>
                            <Stack gap={1}>
                                <Typography variant="h5">Underlying Assets</Typography>
                                <Typography variant="subtitle1">30+ more to come in 2025</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>

            </Stack>
        </Stack>
    )
}

export default StatsSection