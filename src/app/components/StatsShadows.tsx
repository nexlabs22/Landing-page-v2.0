import { Box } from "@mui/material";
import theme from "@theme/theme";

const StatsShadows = () => {
    return (
        <>
            <Box
                height={'100%'}
                width={'0.5vw'}
                position={'absolute'}
                left={0}
                top={0}
                zIndex={8}
                sx={{
                    background: 'linear-gradient(to right, rgba(18,18,18,1), rgba(18,18,18,1))',
                    boxShadow: '0px 5px 250px 150px rgba(18,18,18,1)'
                }}
            />
            <Box
                height={'100%'}
                width={'0.5vw'}
                position={'absolute'}
                right={0}
                top={0}
                zIndex={8}
                sx={{
                    background: 'linear-gradient(to left, rgba(18,18,18,1), rgba(18,18,18,1))',
                    boxShadow: '0px -5px 250px 150px rgba(18,18,18,1)',
                }}
            />
        </>
    )
}

export default StatsShadows