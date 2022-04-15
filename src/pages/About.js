import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { useMediaQuery } from "react-responsive";

import { Title } from "../components/title";
import { Bio } from "../components/Bio";

import selfie from "../images/selfie.jpg";

export const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 499px)" });

  const notMobile = useMediaQuery({ query: "(min-width: 500px)" });

  const largeAvatarStyles = {
    display: "flex",
    justifyContent: "center",
    height: "300px",
    width: "300px",
    marginTop: "30px",
    marginBottom: "-30px",
    marginLeft: "30px",
    bgcolor: "var(--carolina-blue)",
  };

  const smallAvatarStyles = {
    height: "150px",
    width: "150px",
    marginTop: "50px",
    bgcolor: "var(--carolina-blue)",
  };

  return (
    <Box sx={{ maxWidth: "750px", margin: "auto", textAlign: "center" }}>
      {isMobile && (
        <Avatar
          alt="Matt with a fresh trim"
          src={selfie}
          sx={largeAvatarStyles}
        ></Avatar>
      )}

      {notMobile && (
        <Avatar
          alt="Matt with a fresh trim"
          src={selfie}
          sx={smallAvatarStyles}
        >
          MATT
        </Avatar>
      )}

      <Title title="About me" />
      <Bio />
    </Box>
  );
};
