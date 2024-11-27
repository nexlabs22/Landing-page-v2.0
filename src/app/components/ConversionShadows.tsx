import { Box } from "@mui/material";
import theme from "@theme/theme";

const ConversionShadows = () => {
    return (
        <>
        <Box
                height={'5vh'}
                width={'100%'}
                position={'absolute'}
                left={0}
                top={0}
                zIndex={8}
                sx={{
                    background: 'linear-gradient(to right, rgba(17,17,17,1), rgba(17,17,17,1))',
                    boxShadow: '0px 0px 150px 100px rgba(17,17,17,0.8)'
                }}
            />
            <Box
                height={'100%'}
                width={'10vw'}
                position={'absolute'}
                left={0}
                top={0}
                zIndex={8}
                sx={{
                    background: 'linear-gradient(to right, rgba(17,17,17,1), rgba(17,17,17,1))',
                    boxShadow: '0px 5px 250px 150px rgba(17,17,17,1)'
                }}
            />
            <Box
                height={'100%'}
                width={'10vw'}
                position={'absolute'}
                right={0}
                top={0}
                zIndex={8}
                sx={{
                    background: 'linear-gradient(to left, rgba(17,17,17,1), rgba(17,17,17,1))',
                    boxShadow: '0px -5px 250px 150px rgba(17,17,17,1)',
                }}
            />
            <Box
                height={'5vh'}
                width={'100%'}
                position={'absolute'}
                left={0}
                bottom={0}
                zIndex={8}
                sx={{
                    background: 'linear-gradient(to right, rgba(17,17,17,1), rgba(17,17,17,1))',
                    boxShadow: '-5px 0px 200px 100px rgba(17,17,17,1)'
                }}
            />
        </>
    )
}

export default ConversionShadows