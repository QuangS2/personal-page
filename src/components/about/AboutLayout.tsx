
import { Grid } from '@mui/material'
import Container from '@mui/material/Container'
import AboutIntro from './AboutIntro';
import { Box } from '@mui/system';
import SkillSection from './SkillSection';
import JourneySection from './JourneySection';


export default function AboutLayout() {
    return (
        <Container maxWidth="lg" sx={{py: 8}} >
            <Grid container spacing={6}>
                {/* Left */}
              <Grid size={{ xs: 12, md: 6 }}>
                <AboutIntro />
              </Grid>
              {/* Right */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box display={"flex"} flexDirection={"column"} gap={4}>
                    <SkillSection />
                    <JourneySection />
                </Box>
              </Grid>
            </Grid>
        </Container>
    );
}