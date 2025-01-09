import {
  ContactPage,
  GitHub,
  Instagram,
  LinkedIn,
  LocationOn,
  MailOutline,
} from "@mui/icons-material";
import { SvgIcon } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { OrganizationIcon } from "@primer/octicons-react";

type AboutMetadata = {
  bskyUsername: string;
  description: string;
  email: string;
  location: string;
  githubUsername: string;
  includeResume: boolean;
  instagramUsername: string;
  linkedInUsername: string;
  name: string;
  organization: string;
  profilePictureUrl: string;
};

export default function About() {
  const aboutMetadata: AboutMetadata = {
    bskyUsername: "xsalazar",
    description:
      "Software engineer from the Pacific Northwest. My mom's favorite programmer. 👨‍💻 My dog's favorite photographer. 📸🐶",
    email: "contact@xsalazar.com",
    location: "Portland, OR",
    githubUsername: "xsalazar",
    includeResume: false,
    instagramUsername: "_xsalazar",
    linkedInUsername: "xsalazar",
    name: "Xavier Salazar",
    organization: "Slack",
    profilePictureUrl: "https://avatars.githubusercontent.com/u/14851080?v=4",
  };

  return (
    <Grid container>
      {/* Top level picture, name, bio container */}
      <Grid container>
        {/* Icon */}
        <Grid sx={{ pb: 2 }}>
          <Avatar
            src={aboutMetadata.profilePictureUrl}
            sx={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: 150,
              height: "auto",
              marginRight: "16px",
            }}
          ></Avatar>
        </Grid>

        <Grid container size={{ xs: 6, sm: 12 }}>
          {/* Name */}
          <Grid>
            <Typography variant="h4" gutterBottom>
              {aboutMetadata.name}
            </Typography>
          </Grid>

          {/* Bio */}
          <Grid>
            <Typography variant="body1" sx={{ pb: 2 }} gutterBottom>
              {aboutMetadata.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Location and employee container */}
      <Grid container>
        {/* Location */}
        <Grid
          container
          size={{ xs: 6, sm: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <Grid size={12}>
            <Typography variant="caption">Where I live:</Typography>
          </Grid>
          <div style={{ paddingRight: "5px" }}>
            <LocationOn sx={{ display: "block", margin: "auto" }} />
          </div>
          <Typography>{aboutMetadata.location}</Typography>
        </Grid>

        {/* Work Organization */}
        <Grid
          container
          size={{ xs: 6, sm: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <Grid size={12}>
            <Typography variant="caption">Where I work:</Typography>
          </Grid>
          <div style={{ paddingRight: "5px" }}>
            <OrganizationIcon size={24} verticalAlign="middle" />
          </div>
          <Typography>
            <Link
              href="https://github.com/slackhq"
              target="_blank"
              rel="noopener"
            >
              {aboutMetadata.organization}
            </Link>
          </Typography>
        </Grid>
      </Grid>

      {/* Social links container */}
      <Grid container>
        {/* Socials */}
        <Grid size={12}>
          <Typography variant="caption">Socials:</Typography>
        </Grid>

        {/* GitHub Link */}
        <Grid
          size={{ xs: 4, sm: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <div style={{ paddingRight: "5px" }}>
            <GitHub sx={{ display: "block", margin: "auto" }} />
          </div>
          <Typography>
            <Link
              href={`https://www.github.com/${aboutMetadata.githubUsername}`}
              target="_blank"
              rel="noopener"
            >
              GitHub
            </Link>
          </Typography>
        </Grid>

        {/* LinkedIn Link */}
        <Grid
          size={{ xs: 4, sm: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <div style={{ paddingRight: "5px" }}>
            <LinkedIn sx={{ display: "block", margin: "auto" }} />
          </div>
          <Typography>
            <Link
              href={`https://www.linkedin.com/in/${aboutMetadata.linkedInUsername}`}
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </Link>
          </Typography>
        </Grid>

        {/* Instagram Link */}
        <Grid
          size={{ xs: 4, sm: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <div style={{ paddingRight: "5px" }}>
            <Instagram sx={{ display: "block", margin: "auto" }} />
          </div>
          <Typography>
            <Link
              href={`https://www.instagram.com/${aboutMetadata.instagramUsername}`}
              target="_blank"
              rel="noopener"
            >
              Instagram
            </Link>
          </Typography>
        </Grid>

        {/* Bsky Link */}
        <Grid
          size={{ xs: 4, sm: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <div style={{ paddingRight: "5px" }}>
            <SvgIcon sx={{ display: "block", margin: "auto" }}>
              <svg
                viewBox="0 0 600 535"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m299.75 238.48c-26.326-51.007-97.736-146.28-164.21-193.17-63.677-44.919-88.028-37.186-103.82-29.946-18.428 8.3915-21.719 36.692-21.719 53.311s9.0496 136.57 15.138 156.48c19.745 66.145 89.674 88.522 154.17 81.282 3.2908-0.49362 6.5816-0.98723 10.037-1.3163-3.2908 0.49362-6.7461 0.98723-10.037 1.3163-94.445 13.986-178.52 48.374-68.284 170.96 121.1 125.38 166.02-26.82 189.06-104.15 23.035 77.169 49.526 223.94 186.75 104.15 103.17-104.15 28.301-156.97-66.145-170.96-3.2908-0.32908-6.7461-0.82269-10.037-1.3163 3.4553 0.49362 6.7461 0.82269 10.037 1.3163 64.499 7.2397 134.59-15.138 154.17-81.282 5.9234-20.074 15.138-139.86 15.138-156.48s-3.2908-44.919-21.719-53.311c-15.96-7.2397-40.148-14.973-103.82 29.946-66.967 47.058-138.38 142.16-164.7 193.17z" />
              </svg>
            </SvgIcon>
          </div>
          <Typography>
            <Link
              href={`https://bsky.app/profile/${aboutMetadata.bskyUsername}.bsky.social`}
              target="_blank"
              rel="noopener"
            >
              Bluesky
            </Link>
          </Typography>
        </Grid>

        {/* Resume Link */}
        {aboutMetadata.includeResume ? (
          <Grid
            size={{ xs: 4, sm: 12 }}
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "10px",
            }}
          >
            <div style={{ paddingRight: "5px" }}>
              <ContactPage sx={{ display: "block", margin: "auto" }} />
            </div>
            <Typography>
              <Link
                href={`https://xsalazar.com/resume.pdf`}
                target="_blank"
                rel="noopener"
              >
                Resume
              </Link>
            </Typography>
          </Grid>
        ) : (
          <div />
        )}

        {/* Mail Link */}
        <Grid
          size={{ xs: 4, sm: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <div style={{ paddingRight: "5px" }}>
            <MailOutline sx={{ display: "block", margin: "auto" }} />
          </div>
          <Typography>
            <Link href={`mailto:${aboutMetadata.email}`}>
              {aboutMetadata.email}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
