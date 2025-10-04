import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { getProfile } from "../../services/profileService";
import type { Profile } from "../../types/profile";

export default function HeroInfo() {
     const [profile, setProfile] = React.useState<Profile | null>(null);
      useEffect(() => {
        getProfile().then((data) => setProfile(data));
      }, []);
      if (!profile) return <div>Loading...</div>;
    return (
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
    );
}