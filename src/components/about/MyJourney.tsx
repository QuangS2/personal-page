import { Grid, Typography, Box } from "@mui/material";
import JourneyItem from "./JourneyItem";
import { journeyData } from "./journeyData";

export default function MyJourney() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        My Journey
      </Typography>

      <Grid container spacing={3}>
        {journeyData.map((item) => (
          <Grid size={{ xs: 12, md: 6 }} key={item.id}>
            <JourneyItem
              icon={item.icon}
              title={item.title}
              color={item.color}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
