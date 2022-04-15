import { PageTitle } from "../components/title";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Content from "../components/ProjectSection/content";
import Box from "@mui/material/Box";

export const Work = () => {
  return (
    <>
      <Box sx={{ maxWidth: "750px", margin: "auto", textAlign: "center" }}>
        <PageTitle title="Projects" sx={{ alignText: "center" }}></PageTitle>
      </Box>
      <Container sx={{ py: 10 }} maxWidth="lg" align="center">
        <Grid container direction="column">
          <Grid item container>
            <Grid sm={2} xs={0} />
            <Grid xs={12} sm={8}>
              <Content sx={{ padding: "10px" }} />
            </Grid>
            <Grid item xs={6} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
