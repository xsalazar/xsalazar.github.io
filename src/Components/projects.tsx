import React from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  Grid,
  CardContent,
  Link,
} from "@mui/material";
import { Public } from "@mui/icons-material";
import { LinkIcon } from "@primer/octicons-react";

interface Project {
  name: string;
  description: string;
  url: string;
  thumbnail: string;
}

export default class Projects extends React.Component {
  private projects: Array<Project> = [
    {
      name: "Fluent Emoji",
      description:
        'Browse Microsoft\'s catalog of "familiar, friendly, and modern" Fluent Emoji, comprehensively available online',
      url: "https://fluentemoji.com",
      thumbnail: "https://fluentemoji.com/social.png",
    },
    {
      name: "Emoji Mosaic",
      description:
        "Easily convert your favorite images into tiny emoji mosaics to share on Slack",
      url: "https://emojimosaic.dev",
      thumbnail: "https://emojimosaic.dev/social.png",
    },
    {
      name: "Emoji Kitchen",
      description:
        "Easily browse and save over 20,000 unique emoji mashups, prepared fresh from Google's kitchen!",
      url: "https://emojikitchen.dev",
      thumbnail: "https://emojikitchen.dev/social.png",
    },
    {
      name: "Download Emoji",
      description:
        "Download and save copies of your favorite emoji for easy reuse of .jpeg and .png images.",
      url: "https://downloademoji.dev",
      thumbnail: "https://downloademoji.dev/social.png",
    },
    {
      name: "Learn Emoji",
      description:
        "A simple guessing game for learning the emoji :short_names: on websites such as GitHub, Slack, Discord, and more!",
      url: "https://learnemoji.dev",
      thumbnail: "https://learnemoji.dev/social.png",
    },
    {
      name: "Lyman Art",
      description:
        "Andrew Lyman original artwork, created as a static Jekyll website with image optimization",
      url: "https://ablyman.com",
      thumbnail: "https://ablyman.com/images/social.png",
    },
    {
      name: "Personal Website",
      description:
        "A website for showcasing my programming portfolio, including a number of projects, open source contributions, and contact information",
      url: "https://xsalazar.com",
      thumbnail: "https://xsalazar.com/social.png",
    },
  ];

  render(): React.ReactNode {
    return (
      <Container sx={{ pb: 2 }}>
        <Typography variant="body1" color="textSecondary" sx={{ pb: "15px" }}>
          Projects I've Published.
        </Typography>

        <Grid container spacing={2}>
          {this.projects.map((project) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={project.name}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Image */}
                  <CardMedia
                    component="img"
                    height="150"
                    image={project.thumbnail}
                  ></CardMedia>

                  {/* Description */}
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    {/* Title */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        paddingBottom: "15px",
                      }}
                    >
                      <Public style={{ fontSize: "16px" }} />
                      <Typography variant="body2">
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener"
                          style={{ paddingLeft: "5px" }}
                          underline="hover"
                        >
                          {project.name}
                        </Link>
                      </Typography>
                    </div>

                    {/* Description */}
                    <div style={{ flex: 1 }}>
                      <Typography variant="body2" gutterBottom>
                        {project.description}
                      </Typography>
                    </div>

                    {/* Link */}
                    <div>
                      <Typography variant="body2">
                        <LinkIcon size="small" />
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener"
                          style={{ paddingLeft: "5px" }}
                        >
                          {project.url}
                        </Link>
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }
}