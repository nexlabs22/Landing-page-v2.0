import { Box, Container, Stack } from "@mui/material";
import HeroBG from "@assets/heroBG";
import HeroSection from "@sections/Hero"
import StatsSection from "@sections/Stats";
import BentoSection from "@sections/Bento";
import FeaturesSection from "@sections/Features";
import BuildIndex from "@sections/BuildIndex";
import DCA from "@sections/DCA";
import PartnersSection from "@sections/Partners";
import FAQSection from "@sections/Faq";
import BlogSection from "@sections/Blog";
import AlternativeFooter1 from "@sections/AlternativeFooter1";

export default function Home() {
  return (
    <Box width={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'} position={'relative'}>
      {/* <HeroBG /> */}
      
      <Container maxWidth="xl">
        <Stack padding={{xs: 0, sm: 0, md: 4, lg: 2}}>
          <HeroSection />
          <StatsSection />
          <BentoSection />
          <FeaturesSection />
          <BuildIndex />
          <PartnersSection />
          <FAQSection />
          <BlogSection />
          <DCA />
          <AlternativeFooter1 />
        </Stack>
      </Container>
    </Box>
  );
}
