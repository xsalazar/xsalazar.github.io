import React from "react";
import { Avatar, Grid, Link, Typography } from "@mui/material";
import {
  LinkedIn,
  Instagram,
  GitHub,
  MailOutline,
  WorkOutline,
  ContactPage,
  LocationOn,
} from "@mui/icons-material";

interface AboutMetadata {
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
}

export default class About extends React.Component {
  private aboutMetadata: AboutMetadata = {
    description:
      "Software engineer from the Pacific Northwest. My mom's favorite programmer. 👨‍💻 My dog's favorite photographer. 📸🐶",
    email: "contact@xsalazar.com",
    location: "Portland, OR",
    githubUsername: "xsalazar",
    includeResume: false,
    instagramUsername: "xsalazar3",
    linkedInUsername: "xsalazar",
    name: "Xavier Salazar",
    organization: "Slack",
    profilePictureUrl: "https://avatars.githubusercontent.com/u/14851080?v=4",
  };

  render(): React.ReactNode {
    return (
      <Grid container xs={12} sx={{ display: "flex", flexDirection: "column" }}>
        {/* Icon */}
        <Grid item xs sx={{ pb: 2 }}>
          <Avatar
            src={this.aboutMetadata.profilePictureUrl}
            sx={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: 150,
              height: "auto",
            }}
          ></Avatar>
        </Grid>

        {/* Name */}
        <Grid item xs>
          <Typography variant="h4" gutterBottom>
            {this.aboutMetadata.name}
          </Typography>
        </Grid>

        {/* Bio */}
        <Grid item xs>
          <Typography variant="body1" sx={{ pb: 2 }} gutterBottom>
            {this.aboutMetadata.description}
          </Typography>
        </Grid>

        {/* Location */}
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <div style={{ paddingRight: "5px" }}>
            <LocationOn />
          </div>
          <Typography>{this.aboutMetadata.location}</Typography>
        </Grid>

        {/* Work Organization */}
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <div style={{ paddingRight: "5px" }}>
            <WorkOutline />
          </div>
          <Typography>
            <Link
              href="https://github.com/slackhq"
              target="_blank"
              rel="noopener"
            >
              {this.aboutMetadata.organization}
            </Link>
          </Typography>
        </Grid>

        {/* GitHub Link */}
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <div style={{ paddingRight: "5px" }}>
            <GitHub />
          </div>
          <Typography>
            <Link
              href={`https://www.github.com/${this.aboutMetadata.githubUsername}`}
              target="_blank"
              rel="noopener"
            >
              GitHub
            </Link>
          </Typography>
        </Grid>

        {/* LinkedIn Link */}
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <div style={{ paddingRight: "5px" }}>
            <LinkedIn />
          </div>
          <Typography>
            <Link
              href={`https://www.linkedin.com/in/${this.aboutMetadata.linkedInUsername}`}
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </Link>
          </Typography>
        </Grid>

        {/* Instagram Link */}
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <div style={{ paddingRight: "5px" }}>
            <Instagram />
          </div>
          <Typography>
            <Link
              href={`https://www.instagram.com/${this.aboutMetadata.instagramUsername}`}
              target="_blank"
              rel="noopener"
            >
              Instagram
            </Link>
          </Typography>
        </Grid>

        {/* Resume Link */}
        {this.aboutMetadata.includeResume ? (
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "10px",
            }}
          >
            <div style={{ paddingRight: "5px" }}>
              <ContactPage />
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
          item
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <div style={{ paddingRight: "5px" }}>
            <MailOutline />
          </div>
          <Typography>
            <Link href={`mailto:${this.aboutMetadata.email}`}>
              {this.aboutMetadata.email}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
