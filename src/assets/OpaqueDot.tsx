import { Stack } from "@mui/material";
import theme from "@theme/theme";

const OpaqueDot = () => {
    return(
        <Stack width={'0.15rem'} borderRadius={'50%'} sx={{
            backgroundColor: theme.palette.NexOpaqueDot.main,
            aspectRatio: 1
        }}></Stack>
    )
}

export default OpaqueDot;