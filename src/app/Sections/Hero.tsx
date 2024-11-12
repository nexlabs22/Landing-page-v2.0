import { Stack, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Navbar from "@sections/Navbar";
import HeroShadows from "@components/HeroShadows";
import HeroCard from "@components/HeroCard";
import ChartCard from "@components/ChartCard";
import MobileIndicesSlider from "@components/MobileIndicesSlider";

import { IndicesWithDetails } from "../Indices";

const HeroSection = () => {
    return (
        <Box width={'100%'} height={{xs: 'auto',lg: '100vh'}} position={'relative'}>
            <HeroShadows />
            <Navbar />
            <Stack width={'100%'} height={{xs: '100%', lg: '88%'}} position={'relative'} zIndex={3} marginX={'auto'} marginTop={{xs: 4, lg: 2}} padding={{xs: 0, lg: 3}} direction={{xs: 'column', lg: 'row'}} alignItems={'center'} gap={{xs: 1, lg: 2}}>
                <Box display={'flex'} width={{xs: '100%', lg: '35%'}} height={{xs: '70vh', lg: '100%'}}>
                    <HeroCard />
                </Box>
                <Grid display={{xs: 'none', lg: 'flex'}} container rowSpacing={2} columnSpacing={2} width={{xs: '100%', lg: '65%'}} height={'100%'}>
                    {IndicesWithDetails.map((item, index) => (
                        <Grid size={{xs: 12, lg: 6}} key={index}>
                            <Box display={'flex'} width={'100%'} height={'100%'}>
                                <ChartCard product={item} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <MobileIndicesSlider />

            </Stack>
        </Box>
    )
}

export default HeroSection;