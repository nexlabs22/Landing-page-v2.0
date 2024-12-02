'use client'
import { Stack, Typography, Link, Button, keyframes, Box, ListItem, ListItemText, List } from "@mui/material";
import Image from "next/image";
import theme from "@theme/theme";
import ConversionShadows from "@components/ConversionShadows";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CustomCard from "@components/CustomCard";


import DottedBackground from "@assets/smallDottedGreen.webp";
import blocks from "@assets/blocks.webp";
import { ReactNode } from "react";

const floatAnimation = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
`;

interface Step {
    title: string;
    description?: string;
    details?: ReactNode;
}

const BuildIndex = () => {

    const steps: Step[] = [
        {
            title: 'Select a smart contract',
            details: <List dense disablePadding>
                <ListItem key="defi">
                    <ListItemText
                        primary="DeFi"
                        secondary='Basic single chain'
                        sx={{
                            '& .MuiListItemText-primary': {
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                            },
                            '& .MuiListItemText-primary:before': {
                                content: '""',
                                display: 'inline-block',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                marginRight: 0.5,
                                backgroundColor: theme.palette.NexCardGradient1_2.main,
                            },
                            '& .MuiListItemText-secondary': {
                                color: theme.palette.grey[500],
                                marginLeft: 1.2
                            }
                        }}
                    />
                </ListItem>
                <ListItem key="cross-chain">
                    <ListItemText
                        primary="Cross-hain"
                        secondary='CCIP compatible assets'
                        sx={{
                            '& .MuiListItemText-primary': {
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                            },
                            '& .MuiListItemText-primary:before': {
                                content: '""',
                                display: 'inline-block',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                marginRight: 0.5,
                                backgroundColor: theme.palette.NexCardGradient1_2.main,
                            },
                            '& .MuiListItemText-secondary': {
                                color: theme.palette.grey[500],
                                marginLeft: 1.2
                            }
                        }}
                    />
                </ListItem>
                <ListItem key="stocks">
                    <ListItemText
                        primary="Stocks"
                        secondary='Stocks, bonds, yield bearing, stables'
                        sx={{
                            '& .MuiListItemText-primary': {
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                            },
                            '& .MuiListItemText-primary:before': {
                                content: '""',
                                display: 'inline-block',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                marginRight: 0.5,
                                backgroundColor: theme.palette.NexCardGradient1_2.main,
                            },
                            '& .MuiListItemText-secondary': {
                                color: theme.palette.grey[500],
                                marginLeft: 1.2
                            }
                        }}
                    />
                </ListItem>
            </List>
        },
        {
            title: 'Select a strategy',
            details: <List dense disablePadding>
            <ListItem key="active">
                <ListItemText
                    primary="Active"
                    secondary='Select an asset pool, then select regression factors'
                    sx={{
                        '& .MuiListItemText-primary': {
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                        },
                        '& .MuiListItemText-primary:before': {
                            content: '""',
                            display: 'inline-block',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            marginRight: 0.5,
                            backgroundColor: theme.palette.NexCardGradient1_2.main,
                        },
                        '& .MuiListItemText-secondary': {
                            color: theme.palette.grey[500],
                            marginLeft: 1.2
                        }
                    }}
                />
            </ListItem>
            <ListItem key="passive">
                <ListItemText
                    primary="Passive"
                    secondary='Seelct assets, then select weighting (mcap, equal weights, custom)'
                    sx={{
                        '& .MuiListItemText-primary': {
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                        },
                        '& .MuiListItemText-primary:before': {
                            content: '""',
                            display: 'inline-block',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            marginRight: 0.5,
                            backgroundColor: theme.palette.NexCardGradient1_2.main,
                        },
                        '& .MuiListItemText-secondary': {
                            color: theme.palette.grey[500],
                            marginLeft: 1.2
                        }
                    }}
                />
            </ListItem>
        </List>
        },
        {
            title: 'Define weights and fees',
            details: <List dense disablePadding>
            <ListItem key="auto-rebalance">
                <ListItemText
                    primary="Auto rebalance"
                    sx={{
                        '& .MuiListItemText-primary': {
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                        },
                        '& .MuiListItemText-primary:before': {
                            content: '""',
                            display: 'inline-block',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            marginRight: 0.5,
                            backgroundColor: theme.palette.NexCardGradient1_2.main,
                        },
                    }}
                />
            </ListItem>
            <ListItem key="dividend">
                <ListItemText
                    primary="Dividend"
                    secondary='Dividend reinvestment or payout currency'
                    sx={{
                        '& .MuiListItemText-primary': {
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                        },
                        '& .MuiListItemText-primary:before': {
                            content: '""',
                            display: 'inline-block',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            marginRight: 0.5,
                            backgroundColor: theme.palette.NexCardGradient1_2.main,
                        },
                        '& .MuiListItemText-secondary': {
                            color: theme.palette.grey[500],
                            marginLeft: 1.2
                        }
                    }}
                />
            </ListItem>
            <ListItem key="management-fee">
                <ListItemText
                    primary="Management fee type and %"
                    sx={{
                        '& .MuiListItemText-root': {
                            padding: '2px'
                        },
                        '& .MuiListItem-dense': {
                            padding: 0
                        },
                        '& .MuiListItemText-primary': {
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                        },
                        '& .MuiListItemText-primary:before': {
                            content: '""',
                            display: 'inline-block',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            marginRight: 0.5,
                            backgroundColor: theme.palette.NexCardGradient1_2.main,
                        },
                    }}
                />
            </ListItem>
            <ListItem key="risk-management">
                <ListItemText
                    primary="Risk management"
                    secondary='Max asset weight, max rebalance change, currency exposure'
                    sx={{
                        '& .MuiListItemText-primary': {
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                        },
                        '& .MuiListItemText-primary:before': {
                            content: '""',
                            display: 'inline-block',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            marginRight: 0.5,
                            backgroundColor: theme.palette.NexCardGradient1_2.main,
                        },
                        '& .MuiListItemText-secondary': {
                            color: theme.palette.grey[500],
                            marginLeft: 1.2
                        }
                    }}
                />
            </ListItem>
        </List>
        },
    ];

    return (
        <Stack width={'100%'} height={'100%'} paddingX={{ xs: 2, lg: 8 }}>
            <Stack alignItems={'center'} justifyContent={'center'} position={'relative'} zIndex={10} paddingBottom={8} sx={{
                overflowX: 'hidden',
                overflowY: 'hidden',
                backgroundImage: `url('${DottedBackground.src}')`,
                backgroundSize: { xs: 'cover', lg: '150%' },
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <ConversionShadows />

                <Stack alignItems={'center'} justifyContent={'center'} gap={2} position={'relative'} zIndex={9}>
                    <Box sx={{
                        animation: `${floatAnimation} 3s ease-in-out infinite`,
                    }}>
                        <Image src={blocks} alt="build your own index" width={300} height={250} />
                    </Box>
                    <Typography variant="h2">Build your own index</Typography>
                    <Typography variant="subtitle1" textAlign={'center'} width={{ xs: '100%', lg: '60%' }}>NexLabs allows you to build your own index by turning your portfolio into a tradable index. You can choose from a variety of crypto assets, RWAs or commodities, customize weights and management fees.</Typography>
                    <Box width={'100%'} display={{ xs: 'none', lg: 'flex' }}>
                        <Timeline sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'center',
                            gap: 2,
                            alignItems: 'stretch'
                        }}>
                            {
                                steps.map((step, index) => (
                                    <TimelineItem key={index} sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        flex: 1
                                    }}>
                                        <TimelineContent sx={{
                                            marginTop: 2,
                                            width: '90%',
                                            paddingX: 0,
                                            flexGrow: 1,
                                            minHeight: '80%',
                                        }}>
                                            <CustomCard padding={2} gradient={`linear-gradient(180deg, ${theme.palette.NexCardGradient2_2.main} 0%, ${theme.palette.background.default} 80%)`} shadow="0px 0px 0px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                                                <Stack gap={1} height={'100%'}>
                                                    <Typography variant="h5" color={theme.palette.NexCardGradient1_2.main} sx={{ minHeight: '2rem' }}>{step.title}</Typography>
                                                    <Typography variant="subtitle1">{step.description}</Typography>
                                                    {step.details}
                                                </Stack>
                                            </CustomCard>
                                        </TimelineContent>
                                        <TimelineSeparator sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'end',
                                            gap: 2,
                                            width: '100%'
                                        }}>
                                            <Box sx={{
                                                position: 'relative',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <TimelineDot sx={{
                                                    backgroundColor: theme.palette.NexCardGradient1_2.main,
                                                    position: 'relative',
                                                    width: '2rem',
                                                    height: '2rem'
                                                }} />
                                                <Typography variant="subtitle1" sx={{
                                                    position: 'absolute',
                                                    color: theme.palette.common.white,
                                                    fontWeight: 600,
                                                    padding: 0.5
                                                }}>
                                                    {index + 1}
                                                </Typography>
                                            </Box>
                                            <TimelineConnector sx={{
                                                flexGrow: 1,
                                                height: '1px',
                                                backgroundColor: theme.palette.grey[500],
                                                paddingLeft: 2,
                                                width: '95%'
                                            }} />
                                        </TimelineSeparator>
                                    </TimelineItem>
                                ))
                            }
                        </Timeline>
                    </Box>
                    <Box display={{ xs: 'flex', lg: 'none' }}>
                        <Timeline position="right" sx={{
                            [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                            },
                            paddingX: 0,
                        }}>
                            {
                                steps.map((step, index) => (
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <CustomCard padding={2} gradient={`linear-gradient(180deg, ${theme.palette.NexCardGradient2_2.main} 0%, ${theme.palette.background.default} 80%)`} shadow="0px 0px 0px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                                                <Stack gap={1} height={'100%'}>
                                                    <Typography variant="h5" color={theme.palette.NexCardGradient1_2.main} sx={{ minHeight: '2rem' }}>{step.title}</Typography>
                                                    <Typography variant="subtitle1">{step.description}</Typography>
                                                </Stack>
                                            </CustomCard>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))
                            }
                        </Timeline>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default BuildIndex;

