import { Box } from "@mui/material";
import theme from "@theme/theme";

const OpaqueDot = () => {
    return(
        <Box width={'0.15rem'} borderRadius={'50%'} sx={{
            backgroundColor: theme.palette.NexOpaqueDot.main,
            aspectRatio: 1
        }}></Box>
    )
}

export default OpaqueDot;