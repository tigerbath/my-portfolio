import { Routes, Route } from "react-router-dom";

import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/work" element={<Work />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      // any other path route to about
      <Route path="*" element={<About />}></Route>
    </Routes>
  );
};
