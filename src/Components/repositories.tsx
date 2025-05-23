import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { DotFillIcon, RepoIcon } from "@primer/octicons-react";

type RepositoryMetadata = {
  name: string;
  description: string;
  language: string;
};

export default function Repositories() {
  const repositories: Array<RepositoryMetadata> = [
    {
      name: "emoji-mosaic",
      description:
        "✂️ This repository contains the source code for the website https://emojimosaic.dev allows for taking a source image, slicing it into smaller images that can be uploaded as individual emoji to create mosaics in Slack, Discord, or other messaging platforms.",
      language: "TypeScript",
    },
    {
      name: "emoji-mosaic-backend",
      description:
        " ✂️ This repository contains the backend AWS Lambda source code to slice mosaic images for the front-end website hosted at https://emojimosaic.dev",
      language: "HCL",
    },
    {
      name: "project-template",
      description:
        "Template repository used to bootstrap Typescript React projects with GitHub Actions CI/CD and VSCode devcontainer support",
      language: "TypeScript",
    },
    {
      name: "rhine-street-public-library",
      description:
        "📚 This repository contains the source code for the website https://rhinestreetpubliclibrary.com. This website allows for viewing available and checked out books from the library.",
      language: "TypeScript",
    },
    // {
    //   name: "rhine-street-public-library-backend",
    //   description:
    //     "📚 This repository holds both the Terraform infrastructure code as well as the simple Javascript application that runs inside the AWS Lambda function.",
    //   language: "HCL",
    // },
    {
      name: "learn-emoji",
      description:
        "📚 This repository contains the website source code for https://learnemoji.dev. This website is aimed at creating a simple guessing game for learning the emoji :short_names: on websites such as GitHub, Slack, Discord, and more!",
      language: "TypeScript",
    },
    {
      name: "emoji-kitchen",
      description:
        "🧑‍🍳 This repository contains the source code for the website https://emojikitchen.dev and allows for quick and easy browsing of the over 100,000 supported emoji mashups as part of Google's Emoji Kitchen.",
      language: "TypeScript",
    },
    {
      name: "emoji-kitchen-backend",
      description:
        "🧑‍🍳 This repository contains the backend AWS Lambda source code to support search for the front-end website hosted at https://emojikitchen.dev",
      language: "HCL",
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
      name: "wow-emoji-backend",
      description:
        '🌈 This application code is an "image wowing" service that takes an input image, removes the background, and overlays it on top of a colorful gif. The backend application is used to support the website https://wowemoji.dev',
      language: "HCL",
    },
    {
      name: "download-emoji",
      description:
        "💾 This repository contains the website source code for https://downloademoji.dev. This website allows users to quickly download large high-quality versions of their favorite emojis in .png or .jpeg formats!",
      language: "TypeScript",
    },
    {
      name: "download-emoji-backend",
      description:
        "💾 This repository contains the backend AWS Lambda source code to convert .svg images into .png or .jpeg images for the front-end website hosted at https://downloademoji.dev",
      language: "HCL",
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
      name: "are-the-elevators-broken",
      description:
        "🛗 A basic community-report system for pedestrian infrastructure here in Portland, OR.",
      language: "TypeScript",
    },
    {
      name: "are-the-elevators-broken-backend",
      description:
        "🛗 This backend application is used to support the website https://aretheelevatorsbroken.com for a basic community-report system for pedestrian infrastructure here in Portland, OR.",
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

  return (
    <Container sx={{ pb: 2 }}>
      <Typography variant="body1" color="textSecondary" sx={{ pb: "15px" }}>
        GitHub repositories I've built.
      </Typography>

      <Grid container spacing={2}>
        {repositories.map((repository) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={repository.name}>
              <Card variant="outlined" sx={{ height: "100%", display: "flex" }}>
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
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
                        color: getColorForLanguage(repository.language),
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

  function getColorForLanguage(language: string): string {
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
