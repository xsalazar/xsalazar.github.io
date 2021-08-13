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
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { RepoContent } from './Components/RepoContent/RepoContent';
import { ProjectContent } from './Components/ProjectContent/ProjectContent';
import { ContributionContent } from './Components/ContributionContent/ContributionContent';
import { InterestContent } from './Components/InterestContent/InterestContent';

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      background: theme.palette.background.default,
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      padding: '40px',
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color="default" elevation={0}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography>Xavier Salazar - Software Engineer</Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden mdUp>
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
            <Sidebar></Sidebar>
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <Sidebar></Sidebar>
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container style={{ maxWidth: '1000px' }}>
          {/* My Repositories */}
          <Grid style={{ paddingBottom: '25px' }}>
            <Typography variant="h5">My Projects</Typography>
            <Typography variant="body1" color="textSecondary" style={{ paddingBottom: '15px' }}>
              GitHub repositories that I've built.
            </Typography>
            <Grid container spacing={2}>
              <RepoContent></RepoContent>
            </Grid>
          </Grid>

          {/* My Published Projects */}
          <Grid style={{ paddingBottom: '25px' }}>
            <Typography variant="body1" color="textSecondary" style={{ paddingBottom: '15px' }}>
              Projects I've Published.
            </Typography>
            <Grid container spacing={2}>
              <ProjectContent></ProjectContent>
            </Grid>
          </Grid>

          {/* My Contributions */}
          <Grid style={{ paddingBottom: '25px' }}>
            <Typography variant="h5">My Contributions</Typography>
            <Typography variant="body1" color="textSecondary" style={{ paddingBottom: '15px' }}>
              Open source contributions I've made.
            </Typography>
            <Grid container spacing={2}>
              <ContributionContent></ContributionContent>
            </Grid>
          </Grid>

          {/* My Interests */}
          <Grid style={{ paddingBottom: '25px' }}>
            <Typography variant="h5">My Interests</Typography>
            <Typography variant="body1" color="textSecondary" style={{ paddingBottom: '15px' }}>
              Topics that I want to learn more about.
            </Typography>
            <Grid container spacing={2}>
              <InterestContent></InterestContent>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
