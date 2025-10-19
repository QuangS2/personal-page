import type { SvgIconComponent } from "@mui/icons-material";
import { Paper, Stack, Typography, Avatar } from "@mui/material";

type JourneyItemProps = {
  icon: SvgIconComponent;
  title: string;
  color: string;
};
export default function JourneyItem({ icon: Icon, title, color }: JourneyItemProps) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        textAlign: "center",
        borderRadius: 4,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Avatar
          sx={{
            bgcolor: color,
            width: 56,
            height: 56,
            boxShadow: 3,
          }}
        >
          <Icon sx={{ color: "#fff", fontSize: 28 }} />
        </Avatar>

        <Typography
          variant="subtitle1"
          fontWeight={600}
          sx={{ color: "text.primary" }}
        >
          {title}
        </Typography>
      </Stack>
    </Paper>
  );
}
