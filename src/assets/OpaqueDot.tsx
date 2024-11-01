import { Stack } from "@mui/material";
import { useTheme } from "@mui/material";

const OpaqueDot = () => {
    const theme = useTheme();
    return(
        <Stack width={'.2rem'} borderRadius={'50%'} sx={{
            backgroundColor: theme.palette.NexOpaqueDot.main,
            aspectRatio: 1
        }}></Stack>
    )
}

export default OpaqueDot;