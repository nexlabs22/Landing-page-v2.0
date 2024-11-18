import { Stack, Typography, Link } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import theme from "@theme/theme";

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
                            <Typography variant="h6" fontWeight={700}>How does Nexlabs ensure the safety of my funds?</Typography>
                        </Stack>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Our security measures encompass a range of best practices and coding standards. Developers utilize battle-tested libraries from OpenZeppelin as the foundation for our smart contracts and Foundry for testing. Each contract has restricted upgrade capabilities, limited owner rights, and controlled modification of critical variables to prevent unauthorized changes. The protocol is permission-less and only uses servers to enhance trading functionality. More info about our smart contract design,&nbsp;
                            <Link href="https://nex-labs.gitbook.io/nex-dex/spot-indices/built-to-last-smart-contract-design" color="info" fontWeight={700} target="_blank">
                                here
                            </Link>.<br />
                            Additionally, in collaboration with the Chainlink BUILD program, we plan to adopt Olympix's in-house testing tools to enhance our security protocols and test our protocol with one of the listed (high quality) audit partners. For more info about audits,&nbsp;
                            <Link href="https://nex-labs.gitbook.io/nex-dex/token-and-smart-contract-details/audits" color="info" fontWeight={700} target="_blank">
                                click here
                            </Link>.

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
                            <Typography variant="h6" fontWeight={700}>What chains will you be available on?</Typography>
                        </Stack>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        The first index product will launch on Arbitrum. Our smart contracts are multichain-compatible via Chainlink CCIP, starting with EVM-compatible chains. In the future, we plan to expand to non-EVM chains like Solana, leveraging tools such as Solang for compatibility. Finally, through 3rd party integration, bridging (and swap and on/off-ramp) will be made available to enable widespread access, all from a single dashboard.
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
                            <Typography variant="h6" fontWeight={700}>I see index called [name], but I would like to change [x], can Nexlabs change this?</Typography>
                        </Stack>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Congratulations, you have taken the first step in becoming a fund manager. Recognizing market need often start with your own. Build your own index is a tool that will enable you to start your own index, permissionless. Want a degenbox high yield index through money-market loops? No problem. Build a note product using government bonds to reduce loss risk? Grab an audience and join the open fundmanager competition, coming soon...
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
                            <Typography variant="h6" fontWeight={700}>How can you have index products history going back several years?</Typography>
                        </Stack>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Nexlabs has collected a substantial amount of historical data ranging from crypto protocols and transaction details per block to stock-market assets. Fund performance automatically calculated using api calls to, a.o., Nexlabs' subgraph and is daily updated. Once funds go live on mainnet(s), recent performance will be based on assets under management from the smart contracts. Backtesting data will also be made available for backtest result in the 'Build Your Own Index' program.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                
            </Stack>
        </Stack>
    )
}

export default FAQSection;