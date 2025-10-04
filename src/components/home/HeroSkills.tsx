import { Chip, IconButton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
export default function HeroSkills() {
    return (
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
    );
}