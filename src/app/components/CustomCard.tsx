import { Stack, Box, Button } from "@mui/material";

interface CustomCardProps {
    gradient: string;
    border: string;
    shadow: string;
    children: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ gradient, border, shadow, children }) => {
    return (
        <Stack width={'100%'} height={'100%'} border={border} boxShadow={shadow} borderRadius={"1rem"} padding={3} position={'relative'} overflow={'hidden'} sx={{
            background: gradient
        }}>
            {children}
        </Stack>
    )
}

export default CustomCard