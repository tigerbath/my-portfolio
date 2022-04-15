import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { PageTitle } from "../components/title";

export const Contact = () => {
  return (
    <>
      <Box sx={{ maxWidth: "750px", margin: "auto", textAlign: "center" }}>
        <PageTitle title="Contact"></PageTitle>
      </Box>
      <Box sx={{ maxWidth: "750px", margin: "auto" }}>
        <Typography
          component="h3"
          variant="h5"
          sx={{ textAlign: "center", mt: "25px", fontWeight: "300" }}
        >
          Lorem Ipsum 300000000000000000
        </Typography>
      </Box>
    </>
  );
};
