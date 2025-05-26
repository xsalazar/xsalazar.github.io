import { Code, OpenInNew } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DotFillIcon } from "@primer/octicons-react";
import { getColorForLanguage } from "./utils";

type Project = {
  name: string;
  description: string;
  url: string;
  thumbnail: string;
  frontend?: {
    name: string;
    language: string;
  };
  backend?: {
    name: string;
    language: string;
  };
};

export default function Projects() {
  const projects: Array<Project> = [
    {
      name: "Emoji Mosaic",
      description:
        "Easily convert your favorite images into tiny emoji mosaics to share on Slack",
      url: "emojimosaic.dev",
      thumbnail: "https://emojimosaic.dev/social.png",
      frontend: {
        name: "emoji-mosaic",
        language: "Typescript",
      },
      backend: {
        name: "emoji-mosaic-backend",
        language: "HCL",
      },
    },
    {
      name: "Project Template",
      description:
        "Template repository used to bootstrap Typescript React projects with GitHub Actions CI/CD and VSCode devcontainer support",
      url: "template.xsalazar.com",
      thumbnail: "https://template.xsalazar.com/social.png",
      frontend: {
        name: "project-template",
        language: "TypeScript",
      },
    },
    {
      name: "Rhine Street Public Library",
      description: "Local book drop showcasing available and checked out books",
      url: "rhinestreetpubliclibrary.com",
      thumbnail: "https://rhinestreetpubliclibrary.com/social.png",
      frontend: {
        name: "rhine-street-public-library",
        language: "TypeScript",
      },
    },
    {
      name: "Learn Emoji",
      description:
        "A simple guessing game for learning the emoji :short_names: on websites such as GitHub, Slack, Discord, and more!",
      url: "learnemoji.dev",
      thumbnail: "https://learnemoji.dev/social.png",
      frontend: {
        name: "learn-emoji",
        language: "TypeScript",
      },
    },
    {
      name: "Emoji Kitchen",
      description:
        "Easily browse and save over 100,000 unique emoji mashups, prepared fresh from Google's kitchen!",
      url: "emojikitchen.dev",
      thumbnail: "https://emojikitchen.dev/social.png",
      frontend: {
        name: "emoji-kitchen",
        language: "TypeScript",
      },
      backend: {
        name: "emoji-kitchen-backend",
        language: "HCL",
      },
    },
    {
      name: "Fluent Emoji",
      description:
        'Browse Microsoft\'s catalog of "familiar, friendly, and modern" Fluent Emoji, comprehensively available online',
      url: "fluentemoji.com",
      thumbnail: "https://fluentemoji.com/social.png",
      frontend: {
        name: "fluent-emoji",
        language: "TypeScript",
      },
    },
    {
      name: "Wow Emoji",
      description:
        "This website allows for automated and quick creation of :wow: emoji, frequently and joyfully used at Slack.",
      url: "wowemoji.dev",
      thumbnail: "https://wowemoji.dev/social.png",
      frontend: {
        name: "wow-emoji",
        language: "TypeScript",
      },
      backend: {
        name: "wow-emoji-backend",
        language: "HCL",
      },
    },
    {
      name: "Download Emoji",
      description:
        "Download and save copies of your favorite emoji for easy reuse of .jpeg and .png images.",
      url: "downloademoji.dev",
      thumbnail: "https://downloademoji.dev/social.png",
      frontend: {
        name: "download-emoji",
        language: "TypeScript",
      },
      backend: {
        name: "download-emoji-backend",
        language: "HCL",
      },
    },
    {
      name: "Photography Portfolio",
      description: "Personal portfolio of my film and digital photography",
      url: "portfolio.xsalazar.com",
      thumbnail: "https://portfolio.xsalazar.com/social.png",
      frontend: {
        name: "portfolio",
        language: "TypeScript",
      },
      backend: {
        name: "portfolio-backend",
        language: "HCL",
      },
    },
    {
      name: "Are The Elevators Broken",
      description:
        "A basic community-report system for pedestrian infrastructure here in Portland, OR.",
      url: "aretheelevatorsbroken.com",
      thumbnail: "https://aretheelevatorsbroken.com/social.png",
      frontend: {
        name: "are-the-elevators-broken",
        language: "TypeScript",
      },
      backend: {
        name: "are-the-elevators-broken-backend",
        language: "HCL",
      },
    },
    {
      name: "Personal Website",
      description:
        "A website for showcasing my programming portfolio, including a number of projects, open source contributions, and contact information",
      url: "xsalazar.com",
      thumbnail: "https://xsalazar.com/social.png",
      frontend: {
        name: "xsalazar.github.io",
        language: "TypeScript",
      },
    },
  ];

  return (
    <Container sx={{ pb: 2 }}>
      <Typography variant="h5" gutterBottom>
        My Projects
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ pb: "15px" }}>
        Websites I've Published.
      </Typography>

      <Grid container spacing={2}>
        {projects.map((project) => {
          return (
            <Grid
              size={{
                xs: 12 /* One column */,
                sm: 6 /* Two columns */,
              }}
              key={project.name}
            >
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
                  <Typography gutterBottom variant="body1">
                    {project.name}
                  </Typography>

                  {/* Description */}
                  <Typography variant="caption" mb={2}>
                    {project.description}
                  </Typography>

                  {/* URL + Source Code Container */}
                  <Stack direction="column" spacing={1}>
                    {/* Link */}
                    <Stack direction="row" spacing={1}>
                      <OpenInNew fontSize="small" />
                      <Typography variant="caption">
                        <Link
                          href={`https://${project.url}`}
                          target="_blank"
                          rel="noopener"
                        >
                          {project.url}
                        </Link>
                      </Typography>
                    </Stack>

                    {/* Divider */}
                    <Divider>
                      <Typography variant="caption">Source Code</Typography>
                    </Divider>

                    {/* Repo Information */}
                    <Grid container>
                      {project.frontend && (
                        <Stack direction="row" spacing={1} width="100%">
                          {/* Code Icon */}
                          <Code fontSize="small" />

                          {/* Repo Name */}
                          <Typography variant="caption" flexGrow={1}>
                            <Link
                              href={`https://github.com/xsalazar/${project.frontend.name}`}
                              target="_blank"
                              rel="noopener"
                            >
                              {project.frontend.name}
                            </Link>
                          </Typography>

                          {/* Repo Language */}
                          <div>
                            <span
                              style={{
                                color: getColorForLanguage(
                                  project.frontend.language
                                ),
                              }}
                            >
                              <DotFillIcon size="small" />
                            </span>
                            <Typography variant="caption">
                              {project.frontend.language}
                            </Typography>
                          </div>
                        </Stack>
                      )}

                      {project.backend && (
                        <Stack direction="row" spacing={1} width="100%">
                          {/* Code Icon */}
                          <Code fontSize="small" />

                          {/* Repo Name */}
                          <Typography variant="caption" flexGrow={1}>
                            <Link
                              href={`https://github.com/xsalazar/${project.backend.name}`}
                              target="_blank"
                              rel="noopener"
                            >
                              {project.backend.name}
                            </Link>
                          </Typography>

                          {/* Repo Language */}
                          <div>
                            <span
                              style={{
                                color: getColorForLanguage(
                                  project.backend.language
                                ),
                              }}
                            >
                              <DotFillIcon size="small" />
                            </span>
                            <Typography variant="caption">
                              {project.backend.language}
                            </Typography>
                          </div>
                        </Stack>
                      )}
                    </Grid>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
