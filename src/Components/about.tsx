import React from "react";
import { Avatar, Grid, Link, Typography } from "@mui/material";
import {
  LocationIcon,
  OrganizationIcon,
  MarkGithubIcon,
  MailIcon,
  FileIcon,
} from "@primer/octicons-react";
import { LinkedIn, Instagram } from "@mui/icons-material";

interface AboutMetadata {
  description: string;
  email: string;
  githubLocation: string;
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
    githubLocation: "Portland, OR",
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
        <Grid item>
          <Avatar
            src={this.aboutMetadata.profilePictureUrl}
            sx={{ minWidth: 56, minHeight: 56 }}
          ></Avatar>
        </Grid>

        {/* Name */}
        <Grid item>
          <Typography variant="h4" gutterBottom>
            {this.aboutMetadata.name}
          </Typography>
        </Grid>

        {/* Bio */}
        <Grid item>
          <Typography gutterBottom>{this.aboutMetadata.description}</Typography>
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
            <LocationIcon size={20}></LocationIcon>
          </div>
          <Typography>{this.aboutMetadata.githubLocation}</Typography>
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
            <OrganizationIcon size={20}></OrganizationIcon>
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
            <MarkGithubIcon size={20}></MarkGithubIcon>
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
            <LinkedIn style={{ fontSize: "20px" }}></LinkedIn>
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
            <Instagram fontSize="large" sx={{ fontSize: "20px" }}></Instagram>
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
              <FileIcon size={20}></FileIcon>
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
            <MailIcon size={20}></MailIcon>
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
