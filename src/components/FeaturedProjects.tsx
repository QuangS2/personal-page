import { Stack, Typography, Card, CardContent, Button } from "@mui/material";

const projects = [
    {
      title: "Project Alpha - UI/X Redesign",
      desc: "Đoạn mô tả ngắn gọn về dự án, ý tưởng và kết quả chính.",
    },
    {
      title: "Project Beta - Brand Refresh",
      desc: "Mô tả ngắn gọn, phạm vi công việc, visual & research.",
    },
    {
      title: "Project Gamma - Mobile App",
      desc: "Thiết kế giao diện và trải nghiệm cho ứng dụng di động.",
    },
  ];

export default function FeaturedProjects() {
  return (
    <Stack spacing={2}>
      <Typography variant="h6" fontWeight={700}>
        Featured Projects
      </Typography>
      {projects.map((p) => (
        <Card key={p.title} sx={{ boxShadow: 2, borderRadius: 2 }}>
          <CardContent>
            <Typography fontWeight={700}>{p.title}</Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              {p.desc}
            </Typography>
            <Button size="small" sx={{ textTransform: "none", pl: 0 }}>
              Learn More
            </Button>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
