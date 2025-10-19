import { Box, Typography, LinearProgress } from "@mui/material";

export default function SkillsExpertise() {
  return (
    <Box>
      <Typography variant="h6" mb={2}>Skills & Expertise</Typography>
      <Typography>UI Design</Typography>
      <LinearProgress variant="determinate" value={90} sx={{ mb: 1 }} />
      <Typography>Frontend Dev</Typography>
      <LinearProgress variant="determinate" value={80} sx={{ mb: 1 }} />
      <Typography>UX Research</Typography>
      <LinearProgress variant="determinate" value={75} />
    </Box>
  );
}
