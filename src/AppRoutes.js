import { Route, Routes } from "react-router-dom";

import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Work } from "./pages/Work";
import { References } from "./pages/References";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>

      <Route path="/work" element={<Work />}></Route>

      <Route path="/contact" element={<Contact />}></Route>

      <Route path="/references" element={<References />}></Route>

      <Route path="/*" element={<About />}></Route>
    </Routes>
  );
};
