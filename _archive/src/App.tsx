import {
  AppBar,
  Container,
  createStyles,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  HiddenProps,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SidebarComponent } from "./Components/SidebarComponent/SidebarComponent";
import { RepoComponent } from "./Components/RepoComponent/RepoComponent";
import { ProjectComponent } from "./Components/ProjectComponent/ProjectComponent";
import { ContributionComponent } from "./Components/ContributionComponent/ContributionContent";
import { InterestComponent } from "./Components/InterestComponent/InterestComponent";
import { CertificationComponent } from "./Components/CertificationComponent/CertificationComponent";

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      background: theme.palette.background.default,
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      padding: "40px",
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

interface MyHiddenProps {
  children: React.ReactElement<any, any>;
}

export default function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const CustomHidden = React.forwardRef(
    (props: MyHiddenProps & HiddenProps, ref) => {
      return <Hidden {...props} />;
    }
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <CustomHidden mdUp>
        <AppBar
          position="fixed"
          className={classes.appBar}
          color="default"
          elevation={0}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography>Xavier Salazar - Software Engineer</Typography>
          </Toolbar>
        </AppBar>
      </CustomHidden>
      <nav className={classes.drawer}>
        <CustomHidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <SidebarComponent></SidebarComponent>
          </Drawer>
        </CustomHidden>
        <CustomHidden smDown>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <SidebarComponent></SidebarComponent>
          </Drawer>
        </CustomHidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container style={{ maxWidth: "1000px" }}>
          {/* My Repositories */}
          <Grid style={{ paddingBottom: "25px" }}>
            <Typography variant="h5">My Projects</Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              style={{ paddingBottom: "15px" }}
            >
              GitHub repositories I've built.
            </Typography>
            <Grid container spacing={2}>
              <RepoComponent></RepoComponent>
            </Grid>
          </Grid>

          {/* My Published Projects */}
          <Grid style={{ paddingBottom: "25px" }}>
            <Typography
              variant="body1"
              color="textSecondary"
              style={{ paddingBottom: "15px" }}
            >
              Projects I've Published.
            </Typography>
            <Grid container spacing={2}>
              <ProjectComponent></ProjectComponent>
            </Grid>
          </Grid>

          {/* My Contributions */}
          <Grid style={{ paddingBottom: "25px" }}>
            <Typography variant="h5">My Contributions</Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              style={{ paddingBottom: "15px" }}
            >
              Open source contributions I've made.
            </Typography>
            <Grid container spacing={2}>
              <ContributionComponent></ContributionComponent>
            </Grid>
          </Grid>

          {/* My Certifications */}
          <Grid style={{ paddingBottom: "25px" }}>
            <Typography variant="h5">My Certifications</Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              style={{ paddingBottom: "15px" }}
            >
              Professional certifications I've received.
            </Typography>
            <Grid container spacing={2}>
              <CertificationComponent></CertificationComponent>
            </Grid>
          </Grid>

          {/* My Interests */}
          <Grid style={{ paddingBottom: "25px" }}>
            <Typography variant="h5">My Interests</Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              style={{ paddingBottom: "15px" }}
            >
              Topics that I want to learn more about.
            </Typography>
            <Grid container spacing={2}>
              <InterestComponent></InterestComponent>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
