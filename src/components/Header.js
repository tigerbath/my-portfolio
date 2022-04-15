import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Logo from "../images/shipswheelandtextblack.png";
import ImageFadeIn from "react-image-fade-in";
import { Navigation } from "./Navigation";
import { useMediaQuery } from "react-responsive";
import { Container } from "@mui/material";

export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });

  const notMobile = useMediaQuery({ query: "(min-width: 600px)" });

  return (
    <Box
      component="header"
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      {isMobile && (
        <Typography
          component="h1"
          variant="h4"
          sx={{ textAlign: "center", mt: "20px", fontWeight: "300" }}
        >
          Matthew J Palmer
        </Typography>
      )}

      {notMobile && (
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ImageFadeIn
            loadAsBackgroundImage={false}
            opacityTransition={5}
            src={Logo}
          />
        </Container>
      )}

      <Navigation />
    </Box>
  );
};
