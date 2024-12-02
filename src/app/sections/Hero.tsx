import { Stack, Box, Button } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Navbar from "@sections/Navbar";
import HeroShadows from "@components/HeroShadows";
import HeroCard from "@components/HeroCard";
import ChartCard from "@components/ChartCard";
import MobileIndicesSlider from "@components/MobileIndicesSlider";
import IndicesSlider from "@components/IndicesSlider";
import theme from "@theme/theme";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { type ArrowProps } from 'react-multi-carousel/lib/types';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { type Index, IndicesWithDetails } from "../Indices";





const HeroSection = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Box width={'100%'} position={'relative'}>
            <HeroShadows />
            <Navbar />
            <Stack width={'100%'} height={'100%'} position={'relative'} zIndex={3} marginX={'auto'} marginTop={{ xs: 4, lg: 2 }} padding={{ xs: 0, lg: 3 }} direction={{ xs: 'column', lg: 'row' }} alignItems={'stretch'} gap={{ xs: 1, lg: 2 }}>
                <Box display={'flex'} width={{ xs: '100%', lg: '35%' }} flexGrow={1}>
                    <HeroCard />
                </Box>
                <Grid display={{xs: 'none', lg: 'flex'}} container rowSpacing={2} columnSpacing={2} width={{xs: '100%', lg: '65%'}} height={'100%'}>
                    {IndicesWithDetails.map((item: Index, index: number) => (
                        <Grid size={{xs: 12, lg: 6}} key={index}>
                            <Box display={'flex'} width={'100%'} height={'100%'} sx={{
                                aspectRatio: '1.5 / 1'
                            }}>
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