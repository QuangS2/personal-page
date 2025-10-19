import { Box, Stack, Button, Chip } from "@mui/material";

export default function AboutJourney() {
  return (
    <Box>
      <Stack direction="row" spacing={1} mb={2}>
        <Chip label="HTML" />
        <Chip label="CSS" />
        <Chip label="React" />
        <Chip label="NodeJS" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Download CV</Button>
        <Button variant="outlined">Digital Companion</Button>
      </Stack>
    </Box>
  );
}
