
import { Stack } from '@mui/material';
import AboutIntro from './AboutIntro';
import AboutJourney from './AboutJourney';

export default function LeftContent() {
  return (
    <Stack spacing={4}>
      <AboutIntro />
      <AboutJourney />
    </Stack>
  );
}