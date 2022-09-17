import { Container } from "@mui/system";
import React from "react";
import About from "./Components/about";
import Certifications from "./Components/certifications";
import Contributions from "./Components/contributions";
import Projects from "./Components/projects";
import Repositories from "./Components/repositories";

function App() {
  return (
    <div>
      <Container maxWidth="md">
        <About />
        <Repositories />
        <Projects />
        <Contributions />
        <Certifications />
      </Container>
    </div>
  );
}

export default App;
