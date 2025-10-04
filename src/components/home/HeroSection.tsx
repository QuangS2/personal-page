
// import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
} from "@mui/material";

import type { JSX } from "@emotion/react/jsx-runtime";
import AvatarCard from "./AvatarCard";
import FeaturedProjects from "../FeaturedProjects";
import HeroInfo from "./HeroInfo";
import HeroDescription from "./HeroDescription";
import HeroSkills from "./HeroSkills";

export default function HeroSection(): JSX.Element {
  
  
  return (
    <Box component="main" sx={{ backgroundColor: "#fafafa", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Grid: left (hero) | right (featured projects) */}
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          {/* LEFT */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              {/* Avatar + greeting */}
              <Stack direction="row" spacing={3} alignItems="center">
                <AvatarCard name={"Quang"} />
                <HeroInfo />
              </Stack>
              <HeroDescription />
              {/* Skills + social */}
              <HeroSkills />
            </Stack>
          </Grid>

          {/* RIGHT */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
              <Box sx={{ width: { xs: "100%", md: 360 } }}>
               <FeaturedProjects />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
