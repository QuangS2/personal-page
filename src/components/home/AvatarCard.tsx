import { Box, Avatar } from "@mui/material";

export default function AvatarCard({ name }: { name: string }) {
  return (
    <Box sx={{ width: 120, height: 120, borderRadius: "50%", border: "6px solid #90caf9", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Avatar sx={{ width: 96, height: 96, bgcolor: "primary.main", fontSize: 28 }}>
        {name?.[0] ?? "A"}
      </Avatar>
    </Box>
  );
}
