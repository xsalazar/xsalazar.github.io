import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import About from "./Components/about";
import Certifications from "./Components/certifications";
import Contributions from "./Components/contributions";
import Projects from "./Components/projects";
import Repositories from "./Components/repositories";

export default function App() {
  return (
    <div>
      {/* Entire Content Container */}
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <Grid container>
          {/* Left-Side About */}
          <Grid size={{ xs: 12, sm: 3 }} sx={{ pb: 2 }}>
            <Container>
              <About />
            </Container>
          </Grid>

          {/* Right-Side Content */}
          <Grid size={{ xs: 12, sm: 9 }}>
            <Container maxWidth="md">
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
