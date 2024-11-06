import { Box, Container, Stack } from "@mui/material";
import HeroBG from "@assets/heroBG";
import HeroSection from "@sections/Hero";
import StatsSection from "@sections/Stats";
import BentoSection from "@sections/Bento";
import FeaturesSection from "@sections/Features";
import PartnersSection from "@sections/Partners";
import ConversionSection from "@sections/Conversion";
import FAQSection from "@sections/Faq";
import Footer from "@sections/Footer";
import FooterBG from "@assets/footerBG";

export default function Home() {
  return (
    <Box width={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'} position={'relative'}>
      <HeroBG />
      
      <Container maxWidth="xl">
        <Stack padding={{xs: 1, sm: 1, md: 4}}>
          <HeroSection />
          <StatsSection />
          <BentoSection />
          <FeaturesSection />
          <ConversionSection />
          <FAQSection />
          <Footer />
        </Stack>
      </Container>
      <FooterBG />

    </Box>
  );
}
