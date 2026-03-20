import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import About from "./Components/about.js";
import Certifications from "./Components/certifications.js";
import Contributions from "./Components/contributions.js";
import Projects from "./Components/projects.js";
import Repositories from "./Components/repositories.js";

export default function App() {
  return (
    <div>
      {/* Entire Content Container */}
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <Grid container>
          {/* Left-Side About */}
          <Grid size={{ sm: 12, md: 3 }} sx={{ pb: 2 }}>
            <Container>
              <About />
            </Container>
          </Grid>

          {/* Right-Side Content */}
          <Grid size={{ sm: 12, md: 9 }}>
            <Container sx={{ padding: "0px" }}>
              <Projects />
              <Repositories />
              <Contributions />
              <Certifications />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
