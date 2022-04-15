import { HashRouter as Router } from "react-router-dom";
import Container from "@mui/material/Container";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppRoutes } from "./AppRoutes";

import "./App.css";

export const App = () => {
  return (
    <Router>
      <Header />
      <Container component="main">
        <AppRoutes />
      </Container>
      <Footer />
    </Router>
  );
};
