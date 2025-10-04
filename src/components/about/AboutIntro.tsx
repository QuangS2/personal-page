import { Avatar, Button } from '@mui/material';
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system';

export default function AboutIntro() {
    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} textAlign={"center"} gap={2}>
            <Avatar src="../../assets/images/avatar.jpg" sx={{ width: 120, height: 120,border: "3px solid #2196f3" }} />
            <Typography variant="h5" fontWeight={600} color='text.secondary'>About Me</Typography>
            <Typography color='text.secondary' sx={{ maxWidth: 400 }}>I'm a passionate frontend developer with experience in React, TypeScript, and UI/UX design.</Typography>
            <Button variant='contained' sx={{ borderRadius: 10, textTransform: "none", mt: 1 }}>
                Download CV
            </Button>
        </Box>
    );
}