import { Card, CardContent, Grid, Link, Typography } from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import { LinkIcon } from "@primer/octicons-react";
import { Component, ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  url: string;
}

export class ProjectComponent extends Component {
  projects: Array<Project> = [
    {
      name: "Fluent Emoji",
      description:
        'Browse Microsoft\'s catalog of "familiar, friendly, and modern" Fluent Emoji, comprehensively available online',
      url: "https://fluentemoji.com",
    },
    {
      name: "Emoji Mosaic",
      description:
        "Easily convert your favorite images into tiny emoji mosaics to share on Slack",
      url: "https://emojimosaic.dev",
    },
    {
      name: "Emoji Kitchen",
      description:
        "Easily browse and save over 20,000 unique emoji mashups, prepared fresh from Google's kitchen!",
      url: "https://emojikitchen.dev",
    },
    {
      name: "Download Emoji",
      description:
        "Download and save copies of your favorite emoji for easy reuse of .jpeg and .png images.",
      url: "https://downloademoji.dev",
    },
    {
      name: "Learn Emoji",
      description:
        "A simple guessing game for learning the emoji :short_names: on websites such as GitHub, Slack, Discord, and more!",
      url: "https://learnemoji.dev",
    },
    {
      name: "Lyman Art",
      description:
        "Andrew Lyman original artwork, created as a static Jekyll website with image optimization",
      url: "https://ablyman.com",
    },
    {
      name: "Personal Website",
      description:
        "A website for showcasing my programming portfolio, including a number of projects, open source contributions, and contact information",
      url: "https://xsalazar.com",
    },
  ];

  render(): ReactNode {
    return this.projects.map((project) => {
      return (
        <Grid item key={project.name}>
          <Card
            variant="outlined"
            style={{ width: "300px", height: "100%", display: "flex" }}
          >
            <CardContent style={{ display: "flex", flexDirection: "column" }}>
              {/* Title */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "10px",
                }}
              >
                <PublicIcon style={{ fontSize: "16px" }} />
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener"
                  style={{ paddingLeft: "5px" }}
                >
                  {project.name}
                </Link>
              </div>

              {/* Description */}
              <div style={{ flex: 1 }}>
                <Typography variant="body2">{project.description}</Typography>
              </div>

              {/* Link */}
              <div style={{ paddingTop: "15px" }}>
                <LinkIcon size="small" />
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener"
                  style={{ paddingLeft: "5px" }}
                >
                  {project.url}
                </Link>
              </div>
            </CardContent>
          </Card>
        </Grid>
      );
    });
  }
}
