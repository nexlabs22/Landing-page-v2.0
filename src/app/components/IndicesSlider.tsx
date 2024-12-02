'use client'
import { Stack, Button } from "@mui/material";
import theme from "@theme/theme";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { type ArrowProps } from 'react-multi-carousel/lib/types';
import ChartCard from "./ChartCard";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { type Index, IndicesWithDetails } from "../Indices";


const CustomLeftArrow = ({ onClick }: ArrowProps) => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} position={'absolute'} left={0} marginX={{ xs: 0, lg: 2 }} sx={{
            scale: { xs: '0.6', lg: '0.8' },
            top: { xs: '35%', lg: '45%' },
        }}>
            <Button onClick={onClick} sx={{
                backgroundColor: theme.palette.NexOpaqueDot.main,
                paddingX: '0.1rem',
                borderRadius: '50%',
                aspectRatio: 1
            }}>
                <ArrowBackIosIcon fontSize="medium" color="info" sx={{
                    marginLeft: 1
                }} />
            </Button>
        </Stack>
    );
};

const CustomRightArrow = ({ onClick }: ArrowProps) => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} position={'absolute'} right={0} marginX={{ xs: 0, lg: 2 }} sx={{
            scale: { xs: '0.6', lg: '0.8' },
            top: { xs: '35%', lg: '45%' },
        }}>
            <Button onClick={onClick} sx={{
                backgroundColor: theme.palette.NexCardGradient2_1.main,
                paddingX: '0.1rem',
                borderRadius: '50%',
                aspectRatio: 1
            }}>
                <ArrowForwardIosIcon fontSize="medium" color="info" />
            </Button>
        </Stack>
    );
};

const IndicesSlider = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Stack
            display={{ xs: 'none', lg: 'flex' }}
            width={'100%'}
            height={'100%'}
            alignItems={'center'}
            gap={{ xs: 3, lg: 4 }}
            paddingY={{ xs: 2, lg: 0 }}
            sx={{
                backgroundColor: 'transparent',
                '& .carousel-container': {
                    width: '100%',
                    height: '100%',
                    paddingX: { xs: 0, lg: '20px 0' },
                    borderRadius: '1.2rem',
                },
                '& .react-multi-carousel-track': {
                    height: '100%'
                },
                '& .carousel-item': {
                    padding: { xs: '0 0px', lg: '0 0px' },
                    height: '100%',
                }
            }}
        >
            <Carousel
                responsive={responsive}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                infinite={true}
                containerClass="carousel-container"
                itemClass="carousel-item"
                autoPlay={true}
                autoPlaySpeed={3000}
            >
                {IndicesWithDetails.map((item: Index, key) => (
                    <Stack
                        key={key}
                        height='100%'
                        width="100%"
                        alignItems={'center'}
                        gap={2}
                        marginX={0}
                    >
                        <ChartCard product={item} />
                    </Stack>
                ))}
            </Carousel>
        </Stack>
    )
}

export default IndicesSlider