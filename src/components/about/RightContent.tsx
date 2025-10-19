import { Stack } from "@mui/system";
import SkillsExpertise from "./SkillsExpertise";
import MyJourney from "./MyJourney";
import SiteAndLife from "./SiteAndLife";

export default function RightContent() {
  return (
    <Stack spacing={3}>
      <SkillsExpertise />
      <MyJourney />
      <SiteAndLife />
    </Stack>
  );
}