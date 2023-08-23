import React from "react";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { RepoIcon, DotFillIcon } from "@primer/octicons-react";

interface RepositoryMetadata {
  name: string;
  description: string;
  language: string;
}

export default class Repositories extends React.Component {
  private repositories: Array<RepositoryMetadata> = [
    {
      name: "emoji-mosaic",
      description:
        "✂️ This repository contains the source code for the website https://emojimosaic.dev allows for taking a source image, slicing it into smaller images that can be uploaded as individual emoji to create mosaics in Slack, Discord, or other messaging platforms.",
      language: "TypeScript",
    },
    {
      name: "project-template",
      description:
        "Template repository used to bootstrap Typescript React projects with GitHub Actions CI/CD and VSCode devcontainer support",
      language: "TypeScript",
    },
    {
      name: "learn-emoji",
      description:
        "📚 This repository contains the website source code for https://learnemoji.dev. This website is aimed at creating a simple guessing game for learning the emoji :short_names: on websites such as GitHub, Slack, Discord, and more!",
      language: "TypeScript",
    },
    {
      name: "emoji-kitchen",
      description:
        "🧑‍🍳 This repository contains the source code for the website https://emojikitchen.dev and allows for quick and easy browsing of the over 30,000 supported emoji mashups as part of Google's Emoji Kitchen.",
      language: "TypeScript",
    },
    {
      name: "fluent-emoji",
      description:
        '🚀 This repository contains the website source code for https://fluentemoji.com. This website allows for browsing Microsoft\'s "familiar, friendly, and modern emoji". Including additional features such as: browsing supported skintones, swapping illustration styles, and quickly downloading the source images',
      language: "TypeScript",
    },
    {
      name: "wow-emoji",
      description:
        '🌈 This repository contains the website source code for https://wowemoji.dev. This website allows for automated and quick creation of :wow: emoji, frequently and joyfully used at Slack. These emoji are used to celebrate and uplift coworkers that make you say "wow".',
      language: "TypeScript",
    },
    {
      name: "download-emoji",
      description:
        "💾 This repository contains the website source code for https://downloademoji.dev. This website allows users to quickly download large high-quality versions of their favorite emojis in .png or .jpeg formats!",
      language: "TypeScript",
    },
    {
      name: "portfolio",
      description:
        "📸 This repository contains the source code for the website https://portfolio.xsalazar.com and showcases my personal film and digital photography.",
      language: "TypeScript",
    },
    {
      name: "portfolio-backend",
      description:
        "📸 This repository holds both the Terraform infrastructure code as well as the simple Javascript application that runs inside the AWS Lambda function.",
      language: "HCL",
    },
    {
      name: "xsalazar.github.io",
      description:
        "🍄 This repository holds the source code for my personal website, hosted on GitHub Pages. The website is written in Typescript/React and deployed via GitHub Actions.",
      language: "TypeScript",
    },
    {
      name: "xsalazar",
      description:
        "✨ Special repo that adds a README.md on my public GitHub profile. Fully automated ocean generator.",
      language: "JavaScript",
    },
    {
      name: "image-downloader",
      description:
        "💿 This repository contains the backend AWS Lambda source code to download Google's Emoji Kitchen images for the front-end website hosted at https://emojikitchen.dev",
      language: "HCL",
    },
    {
      name: "image-slicer",
      description:
        " ✂️ This repository contains the backend AWS Lambda source code to slice mosaic images for the front-end website hosted at https://emojimosaic.dev",
      language: "HCL",
    },
    {
      name: "image-wower",
      description:
        '🌈 This application code is an "image wowing" service that takes an input image, removes the background, and overlays it on top of a colorful gif. The backend application is used to support the website https://wowemoji.dev',
      language: "HCL",
    },
    {
      name: "terraform-aws-docker-deploy",
      description:
        "🍳 This repository holds simple boilerplate code to deploy a basic Typescript API application within a Fargate-managed ECS cluster. This repository also leverages GitHub Actions to lay the CI/CD groundwork to automatically deploy application changes to ECR and redeploy the ECS cluster with updates.",
      language: "HCL",
    },
    {
      name: "drawio-twemoji-library",
      description:
        "🐦 Twitter Emoji Libraries for use with draw.io and diagrams.net. Works with the VSCode drawio plugin!",
      language: "JavaScript",
    },
  ];

  render(): React.ReactNode {
    return (
      <Container sx={{ pb: 2 }}>
        <Typography variant="body1" color="textSecondary" sx={{ pb: "15px" }}>
          GitHub repositories I've built.
        </Typography>

        <Grid container spacing={2}>
          {this.repositories.map((repository) => {
            return (
              <Grid item xs={12} md={4} key={repository.name}>
                <Card
                  variant="outlined"
                  sx={{ height: "100%", display: "flex" }}
                >
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    {/* Title */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        paddingBottom: "15px",
                      }}
                    >
                      <div style={{ paddingRight: "5px" }}>
                        <RepoIcon size="small" />
                      </div>
                      <Typography variant="body2">
                        <Link
                          href={`https://github.com/xsalazar/${repository.name}`}
                          target="_blank"
                          rel="noopener"
                          underline="hover"
                        >
                          {repository.name}
                        </Link>
                      </Typography>
                    </div>

                    {/* Description */}
                    <div style={{ flex: 1 }}>
                      <Typography variant="body2" gutterBottom>
                        {repository.description}
                      </Typography>
                    </div>

                    {/* Language */}
                    <div>
                      <span
                        style={{
                          color: this.getColorForLanguage(repository.language),
                        }}
                      >
                        <DotFillIcon size="small" />
                      </span>
                      <Typography variant="caption">
                        {repository.language}
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

  getColorForLanguage(language: string): string {
    switch (language) {
      case "TypeScript":
        return "#3178c6";
      case "HCL":
        return "#844FBA";
      case "JavaScript":
        return "#f1e05a";
      case "Go":
        return "#00ADD8";
      case "JSON":
        return "#292929";
      default:
        return "#aaaaaa";
    }
  }
}
