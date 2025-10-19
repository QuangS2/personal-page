import { Typography } from "@mui/material";
import { Box } from "@mui/system";
// import { useEffect, useState } from "react";
import type { User } from "../../types/User";
import { useQuery } from "@tanstack/react-query";
import { userApi } from "../../services/userApi";
// import { getUserByUsername } from "../../services/userApi";

export default function HeroInfo() {
    //  const [user, setUser] = useState<User | null>(null);
    //      useEffect(() => {
    //          const fetchUser = async () => {
    //              const userData = await getUserByUsername("lehoang_92");
    //              setUser(userData);
    //          };
    //          fetchUser();
    //      }, []);
    //      if (!user) return <div>Loading...</div>; 
    const {data: user, isLoading, isError} = useQuery<User>({
        queryKey: ['user', 'lehoang_92'],
        queryFn: () => userApi.getUserByUsername('lehoang_92'),
    })
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading user data.</div>;
    if (!user) return <div>No user data found.</div>;
    return (
        <Box>
            <Typography variant="h5" sx={{ color: "text.secondary", fontWeight: 500 }}>
            Hello, I&apos;m
            </Typography>
            <Typography
            variant="h3"
            sx={{ fontWeight: 800, lineHeight: 1.05, mt: 0.5, mb: 0.5, color: "primary.main" }}
            >
            {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
            {user.title}
            </Typography>
        </Box>
    );
}