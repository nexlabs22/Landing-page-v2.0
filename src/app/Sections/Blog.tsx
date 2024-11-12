'use client'

import { Stack, Typography, Button, Link } from "@mui/material";
import CustomCard from "@components/CustomCard";
import theme from "@theme/theme";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { type ArrowProps } from 'react-multi-carousel/lib/types';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import mediaBG from '@assets/NEX_media_bg.webp'

import { type Article, articlesList } from "../Articles";

interface CustomLeftArrowProps extends ArrowProps {
    myOwnStuff: string;
}

interface CustomRightArrowProps extends ArrowProps {
    myOwnStuff: string;
}

const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} position={'absolute'} left={0} marginX={{ xs: 0.5, lg: 2 }} sx={{
            scale: { xs: '0.6', lg: '0.8' },
            top: {xs: '35%', lg: '45%'},
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

const CustomRightArrow = ({ onClick }: CustomRightArrowProps) => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} position={'absolute'} right={0} marginX={{ xs: 0.5, lg: 2 }} sx={{
            scale: { xs: '0.6', lg: '0.8' },
            top: {xs: '35%', lg: '45%'},
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

const BlogSection = () => {
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
        <Stack width={'100%'} alignItems={'center'} justifyContent={'start'} gap={{ xs: 3, lg: 4 }} paddingTop={{xs: 4, lg: 0}} paddingX={{ xs: 2, lg: 8 }} sx={{
            backgroundColor: 'transparent',
            '& .carousel-container': {
                width: '100%',
                padding: {xs: 0, lg: '20px 0'}
            },
            '& .carousel-item': {
                padding: {xs: '0 5px', lg: '0 0px'}
            }
        }}>
            <Typography variant="h5">
                Blog
            </Typography>
            <Carousel
                responsive={responsive}
                customLeftArrow={<CustomLeftArrow myOwnStuff="" />}
                customRightArrow={<CustomRightArrow myOwnStuff="" />}
                infinite={true}
                containerClass="carousel-container"
                itemClass="carousel-item"
            >
                {articlesList.map((article: Article, index) => (
                    <Link href={article.link} target="_blank" underline="none" color={theme.palette.text.primary}>
                        <Stack
                            key={index}
                            height={{xs: 200, lg: 250}}
                            width="100%"
                            alignItems={'center'}
                            gap={2}
                            marginX={0}
                            paddingX={{lg: 1 }}
                        >
                            <CustomCard gradient={`url('${mediaBG.src}') top/cover repeat`} shadow={`0px 2px 10px ${theme.palette.NexGradientBorder1_2}`} border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                                <Stack height={'100%'} width={'100%'} justifyContent={'end'} gap={1} paddingTop={8}>
                                    <Typography variant="subtitle2">{article.source}</Typography>
                                    <Typography variant="h6" fontWeight={600}>{article.title}</Typography>
                                </Stack>
                            </CustomCard>
                        </Stack>
                    </Link>
                ))}
            </Carousel>
        </Stack>
    );
};

export default BlogSection;