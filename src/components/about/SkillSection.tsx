import { Box, Stack } from "@mui/system";
import type { Skill } from "../../types/skill";
import Typography from '@mui/material/Typography'
import { LinearProgress } from "@mui/material";


const skills: Skill[] = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML", level: 75 },
    { name: "CSS", level: 70 },
]
export default function SkillSection() {
    return (
        <Box >
            <Typography variant="h6" mb={2} color="text.secondary">
                Skills & Expertise
            </Typography>
            <Stack spacing={2}>
                {skills.map((skill) => (
                    <Box key={skill.name}>
                    <Typography fontWeight={500} color="text.secondary">
                        {skill.name}
                    </Typography>
                    <LinearProgress 
                    variant="determinate"
                    value={skill.level}
                    sx={{ height: 8,borderRadius: 5}}/>
                </Box>
                ))}
                
            </Stack>
        </Box>
    );
}