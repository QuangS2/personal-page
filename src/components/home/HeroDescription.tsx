// import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import type { User } from "../../types/User";
import { userApi } from "../../services/userApi";
import { useQuery } from "@tanstack/react-query";

export default function HeroDescription() {
    // const [user, setUser] = useState<User | null>(null);
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const userData = await getUserByUsername("lehoang_92");
    //         setUser(userData);
    //     };
    //     fetchUser();
    // }, []);
    // if (!user) return <div>Loading...</div>; 
    const {data: user, isLoading, isError} = useQuery<User>({
        queryKey: ['user', 'lehoang_92'],
        queryFn: () => userApi.getUserByUsername('lehoang_92'),
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading user data.</div>;
    return (
        <Box>
            <Typography
                sx={{
                color: "text.secondary",
                maxWidth: { xs: "100%", md: "70%" },
                mb: 2,
                }}
            >
                {user?.bio}
                {/* I lorem ipsum those lines you get — a short paragraph introducing yourself,
                what you build and what you love to do. Keep it concise and focused so visitors
                instantly understand your value. */}
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