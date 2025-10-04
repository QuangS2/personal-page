import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Stack } from "@mui/system";
import Typography from '@mui/material/Typography'
import { Avatar } from "@mui/material";
const items = [
  { icon: <WorkIcon color="primary" />, title: "Work Experience" },
  { icon: <SchoolIcon color="primary" />, title: "Education" },
  { icon: <MailIcon color="primary" />, title: "Projects" },
];

export default function JourneySection() {
  return (
    <Box>
        <Typography variant="h6" mb={2} color="text.secondary">My Journey</Typography>
        <Stack direction="row" spacing={3}>
            {items.map((item, index) => (
                <Stack key={index} alignItems={"center"} spacing={1}>
                    <Avatar sx={{ bgcolor: "#E3F2FD",color: "#1976D2" }}>
                        {item.icon}</Avatar>
                    <Typography variant="body2" color="text.secondary">{item.title}</Typography>
                </Stack>
            ))}
        </Stack>
    </Box>
  );
}   