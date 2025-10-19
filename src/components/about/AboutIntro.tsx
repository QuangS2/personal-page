import { Box, Typography, Avatar } from "@mui/material";
import AvatarImage from "../../assets/images/avatar.jpg";
export default function AboutIntro() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
      <Avatar src={AvatarImage} sx={{ width: 120, height: 120 }} />
      <Box>
        <Typography variant="h4" fontWeight="bold">About Me</Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        </Typography>
      </Box>
    </Box>
  );
}
