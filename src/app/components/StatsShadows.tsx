import { Stack, Box } from "@mui/material";
import theme from "@theme/theme";

const StatsShadows = () => {
    return (
        <>
            
            <Box height={'100%'} width={'0.5vw'} position={'absolute'} left={0} top={0} bgcolor={theme.palette.background.default} zIndex={8} sx={{
                boxShadow: '0px 5px 200px 150px rgba(18,18,18,1)'
            }} />
            <Box height={'100%'} width={'0.5vw'} position={'absolute'} right={0} top={0} bgcolor={theme.palette.background.default} zIndex={8} sx={{
                boxShadow: '0px -5px 200px 150px rgba(18,18,18,1)'
            }} />
        </>
    )
}

export default StatsShadows