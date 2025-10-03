
// import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Button,
  Stack,
  Chip,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import type { JSX } from "@emotion/react/jsx-runtime";
import React, { useEffect } from "react";
import type { Profile } from "../types/profile";
import { getProfile } from "../services/profileService";

export default function HeroSection(): JSX.Element {
  const projects = [
    {
      title: "Project Alpha - UI/X Redesign",
      desc: "Đoạn mô tả ngắn gọn về dự án, ý tưởng và kết quả chính.",
    },
    {
      title: "Project Beta - Brand Refresh",
      desc: "Mô tả ngắn gọn, phạm vi công việc, visual & research.",
    },
    {
      title: "Project Gamma - Mobile App",
      desc: "Thiết kế giao diện và trải nghiệm cho ứng dụng di động.",
    },
  ];
  const [profile, setProfile] = React.useState<Profile | null>(null);
  useEffect(() => {
    getProfile().then((data) => setProfile(data));
  }, []);
  if (!profile) return <div>Loading...</div>;
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
                {/* Avatar with blue ring */}
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // ring
                    borderWidth: "6px",
                    borderStyle: "solid",
                    borderColor: "primary.light",
                    bgcolor: "background.paper",
                  }}
                >
                  <Avatar
                    sx={{ width: 96, height: 96, bgcolor: "primary.main", fontSize: 28 }}
                  >
                    AJ
                  </Avatar>
                </Box>

                {/* Text headings */}
                <Box>
                  <Typography variant="h5" sx={{ color: "text.secondary", fontWeight: 500 }}>
                    Hello, I&apos;m
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 800, lineHeight: 1.05, mt: 0.5, mb: 0.5, color: "primary.main" }}
                  >
                    Le Anh Quang
                    {profile.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
                    {profile.title}
                    Creative Developer & Designer
                  </Typography>
                </Box>
              </Stack>

              {/* Description + CTA */}
              <Box>
                <Typography
                  sx={{
                    color: "text.secondary",
                    maxWidth: { xs: "100%", md: "70%" },
                    mb: 2,
                  }}
                >
                  {profile.description}
                  I lorem ipsum those lines you get — a short paragraph introducing yourself,
                  what you build and what you love to do. Keep it concise and focused so visitors
                  instantly understand your value.
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: "999px",
                    px: 4,
                    py: 1.1,
                    textTransform: "none",
                    boxShadow: 3,
                  }}
                >
                  View My Work
                </Button>
              </Box>

              {/* Skills + social */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Stack direction="row" spacing={1}>
                  <Chip
                    icon={<CodeIcon />}
                    label="HTML"
                    variant="outlined"
                    sx={{ textTransform: "uppercase", fontWeight: 600 }}
                  />
                  <Chip
                    icon={<BrushIcon />}
                    label="CSS"
                    variant="outlined"
                    sx={{ textTransform: "uppercase", fontWeight: 600 }}
                  />
                  <Chip label="React" variant="outlined" sx={{ fontWeight: 600 }} />
                </Stack>

                {/* spacer */}
                <Box sx={{ flex: 1 }} />

                {/* Social icons */}
                <Stack direction="row" spacing={0.5}>
                  <IconButton aria-label="twitter" size="small">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton aria-label="linkedin" size="small">
                    <LinkedInIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          {/* RIGHT */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
              <Box sx={{ width: { xs: "100%", md: 360 } }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                  Featured Projects
                </Typography>

                <Stack spacing={2}>
                  {projects.map((p) => (
                    <Card
                      key={p.title}
                      elevation={0}
                      sx={{
                        borderRadius: 2,
                        boxShadow: "0px 6px 18px rgba(21, 32, 43, 0.06)",
                        overflow: "visible",
                      }}
                    >
                      <CardContent sx={{ py: 2.5 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                          {p.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                          {p.desc}
                        </Typography>
                        <Button size="small" sx={{ textTransform: "none", pl: 0 }}>
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
