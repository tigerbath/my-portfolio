import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { ContactMe } from "../components/ContactMe";
import { Title } from "../components/title";

export const Contact = () => {
  return (
    <>
      <Box sx={{ maxWidth: "750px", margin: "auto", textAlign: "center" }}>
        <Title title="Contact"></Title>
      </Box>
      <Box sx={{ maxWidth: "750px", margin: "auto" }}>
        <Typography
          component="h3"
          variant="h5"
          sx={{ textAlign: "center", mt: "25px", fontWeight: "300" }}
        >
          Reach out to me using the form below.
        </Typography>
      </Box>
      <ContactMe />
    </>
  );
};
