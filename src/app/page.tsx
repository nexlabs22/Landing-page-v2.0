import { Box, Container } from "@mui/material";
import HeroBG from "@assets/heroBG";
import HeroSection from "./Sections/Hero";

export default function Home() {
  return (
    <Box width={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'}>
      <HeroBG />
      <Container maxWidth="xl" sx={{ padding: { xs: 1, sm: 1, md: 4 } }}>
        <HeroSection></HeroSection>
      </Container>
    </Box>
  );
}
