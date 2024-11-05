import { Box, Container } from "@mui/material";
import HeroBG from "@assets/heroBG";
import HeroSection from "@sections/Hero";
import StatsSection from "@sections/Stats";

export default function Home() {
  return (
    <Box width={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'}>
      <HeroBG />
      <Container maxWidth="xl" sx={{ padding: { xs: 1, sm: 1, md: 4 } }}>
        <HeroSection />
        <StatsSection />
      </Container>
    </Box>
  );
}
