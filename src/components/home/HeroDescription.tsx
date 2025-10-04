import React, { useEffect } from "react";
import type { Profile } from "../../types/profile";
import { getProfile } from "../../services/profileService";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

export default function HeroDescription() {
    const [profile, setProfile] = React.useState<Profile | null>(null);
  useEffect(() => {
    getProfile().then((data) => setProfile(data));
  }, []);
  if (!profile) return <div>Loading...</div>;
    return (
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
    );
}