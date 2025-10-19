import { Box, Typography, Stack, IconButton } from "@mui/material";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";

export default function SiteAndLife() {
  return (
    <Box>
      <Typography variant="h6" mb={2}>Site & Life</Typography>
      <Stack direction="row" spacing={1}>
        <IconButton><Twitter /></IconButton>
        <IconButton><LinkedIn /></IconButton>
        <IconButton><GitHub /></IconButton>
      </Stack>
    </Box>
  );
}
