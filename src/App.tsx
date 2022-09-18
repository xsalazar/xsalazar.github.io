import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import About from "./Components/about";
import Certifications from "./Components/certifications";
import Contributions from "./Components/contributions";
import Projects from "./Components/projects";
import Repositories from "./Components/repositories";

export default function App() {
  return (
    <div>
      {/* Entire Content Container */}
      <Container maxWidth="lg">
        <Grid container>
          {/* Left-Side About */}
          <Grid item xs={12} sm={3}>
            <Container>
              <About />
            </Container>
          </Grid>

          {/* Right-Side Content */}
          <Grid item xs={12} sm={9}>
            <Container maxWidth="md">
              <Repositories />
              <Projects />
              <Contributions />
              <Certifications />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
