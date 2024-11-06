import { Stack, Box } from "@mui/material";
import theme from "@theme/theme";

const FooterShadows = () => {
    return (
        <>
            <Box width={'2vw'} height={'2vw'} position={'absolute'} borderRadius={'50%'} top={0} right={'5%'} zIndex={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '10px 0px 250px 200px rgba(18,18,18,1)'
            }}></Box>
            <Box width={'2vw'} height={'2vw'} position={'absolute'} borderRadius={'50%'} top={'50%'} right={0} zIndex={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '10px 0px 250px 200px rgba(18,18,18,1)'
            }}></Box>
            <Box width={'2vw'} height={'2vw'} position={'absolute'} borderRadius={'50%'} bottom={0} right={0} zIndex={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '10px 0px 250px 200px rgba(18,18,18,1)'
            }}></Box>

            <Box width={'2vw'} height={'2vw'} position={'absolute'} borderRadius={'50%'} top={0} left={'5%'} zIndex={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '10px 0px 250px 200px rgba(18,18,18,1)'
            }}></Box>
            <Box width={'2vw'} height={'2vw'} position={'absolute'} borderRadius={'50%'} top={'50%'} left={0} zIndex={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '10px 0px 250px 200px rgba(18,18,18,1)'
            }}></Box>
            <Box width={'2vw'} height={'2vw'} position={'absolute'} borderRadius={'50%'} bottom={0} left={0} zIndex={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '10px 0px 250px 200px rgba(18,18,18,1)'
            }}></Box>

            <Box width={'2vw'} height={'2vw'} position={'absolute'} borderRadius={'50%'} bottom={0} left={'33%'} zIndex={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '10px 0px 250px 200px rgba(18,18,18,1)'
            }}></Box>
            <Box width={'2vw'} height={'2vw'} position={'absolute'} borderRadius={'50%'} bottom={0} left={'66%'} zIndex={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '10px 0px 250px 200px rgba(18,18,18,1)'
            }}></Box>

            <Box width={'100%'} height={'2vw'} position={'absolute'} top={'20%'} left={0} zIndex={1} sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: '0px 10px 150px 100px rgba(18,18,18,1)'
            }}></Box>
        </>
    )
}

export default FooterShadows;