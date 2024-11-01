import { Stack } from "@mui/material";
import theme from "src/app/theme/theme";

const OpaqueDot = () => {
    return(
        <Stack width={'.2rem'} borderRadius={'50%'} sx={{
            backgroundColor: theme.palette.NexOpaqueDot.main,
            aspectRatio: 1
        }}></Stack>
    )
}

export default OpaqueDot;