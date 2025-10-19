import { Container, Grid } from "@mui/system";
import LeftContent from "../components/about/LeftContent";
import RightContent from "../components/about/RightContent";

 export default function About() {
    return (
        <>
         <Container sx={{ py: 6 }}>
            <Grid container spacing={4}>
                <Grid size={{xs:12,md:8}}>
                    <LeftContent/>
                </Grid>
                <Grid size={{xs:12,md:4}}>
                    <RightContent/>
                </Grid>
            </Grid>
        </Container>
         </>
    );
}