import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <>
      <Divider sx={{ marginTop: "50px", marginBottom: "25px" }}></Divider>
      <Stack
        component="footer"
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        marginBottom="20px"
      >
        <IconButton
          href="https://www.linkedin.com/in/matthew-palmer-a13aab156/"
          sx={{ color: "var(--carolina-blue)" }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="https://github.com/tigerbath"
          target="_blank"
          sx={{ color: "var(--carolina-blue)" }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="mailto:mattjpalmer92@gmail.com"
          target="_blank"
          sx={{ color: "var(--carolina-blue)" }}
        >
          <EmailIcon fontSize="large" />
        </IconButton>
      </Stack>
      <Typography sx={{ textAlign: "center" }}>
        <span style={{ fontSize: "1.2rem" }}>©</span> 2022 Matthew J Palmer
      </Typography>
    </>
  );
};
