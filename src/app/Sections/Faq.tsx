import { Stack, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import theme from "@theme/theme";
import { red, grey } from '@mui/material/colors';

const FAQSection = () => {
    return (
        <Stack width={'100%'} alignItems={'center'} justifyContent={'start'} gap={4} paddingBottom={{ xs: 0, lg: 8 }} paddingX={{ xs: 2, lg: 8 }} position={'relative'} zIndex={10}>
            <Typography variant="h5">
                FAQ
            </Typography>
            <Stack gap={2}>
                <Accordion slotProps={{ heading: { component: 'h5' } }}>
                    <AccordionSummary
                        expandIcon={<AddIcon color="info" />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Stack direction={'row'} alignItems={'center'} gap={2}>
                            <Typography variant="h4" color={theme.palette.text.disabled}>01</Typography>
                            <Typography variant="h6" fontWeight={700}>What trading hours do your products have?</Typography>
                        </Stack>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            The cryptocurrency market operates 24/7, allowing users to trade at any time.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion slotProps={{ heading: { component: 'h5' } }}>
                    <AccordionSummary
                        expandIcon={<AddIcon color="info" />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Stack direction={'row'} alignItems={'center'} gap={2}>
                            <Typography variant="h4" color={theme.palette.text.disabled}>02</Typography>
                            <Typography variant="h6" fontWeight={700}>What is TP and SL?</Typography>
                        </Stack>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Take Profit (TP): This type of order is used to close a position once it reaches a predetermined price. Its purpose is to secure a specified amount of profit, making it a useful tool in situations where a trader cannot actively monitor their positions.
                            <br />
                            Stop Loss (SL): This type of order is used to close a position once it reaches a predetermined price. Its primary purpose is to restrict potential losses incurred, making it a critical tool for effective risk management.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion slotProps={{ heading: { component: 'h5' } }}>
                    <AccordionSummary
                        expandIcon={<AddIcon color="info" />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Stack direction={'row'} alignItems={'center'} gap={2}>
                            <Typography variant="h4" color={theme.palette.text.disabled}>03</Typography>
                            <Typography variant="h6" fontWeight={700}>How much are the management fees on Nex?</Typography>
                        </Stack>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion slotProps={{ heading: { component: 'h5' } }}>
                    <AccordionSummary
                        expandIcon={<AddIcon color="info" />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Stack direction={'row'} alignItems={'center'} gap={2}>
                            <Typography variant="h4" color={theme.palette.text.disabled}>04</Typography>
                            <Typography variant="h6" fontWeight={700}>How much are the management fees on Nex?</Typography>
                        </Stack>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Stack>
        </Stack>
    )
}

export default FAQSection;