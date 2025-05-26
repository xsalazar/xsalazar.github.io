import { Code } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DotFillIcon } from "@primer/octicons-react";
import { getColorForLanguage } from "./utils";

type RepositoryMetadata = {
  name: string;
  description: string;
  frontend?: {
    name: string;
    language: string;
  };
  backend?: {
    name: string;
    language: string;
  };
};

export default function Repositories() {
  const repositories: Array<RepositoryMetadata> = [
    {
      name: "✨ xsalazar",
      description:
        "Special repo that adds a README.md on my public GitHub profile. Fully automated ocean generator.",
      frontend: {
        name: "xsalazar",
        language: "JavaScript",
      },
    },
    {
      name: "🍳 terraform-aws-docker-deploy",
      description:
        "Boilerplate code to deploy a basic Typescript API application within a Fargate-managed ECS cluster. This repository also leverages GitHub Actions to lay the CI/CD groundwork to automatically deploy application changes to ECR and redeploy the ECS cluster with updates.",
      backend: {
        name: "terraform-aws-docker-deploy",
        language: "HCL",
      },
    },
    {
      name: "🧮 terraform-aws-lambda-networking",
      description:
        "Template for allowing Lambda access to both private VPC resources and public internet access, leveraging VPC, Internet Gateway, NAT Gateway, and Route Tables",
      backend: {
        name: "terraform-aws-lambda-networking",
        language: "HCL",
      },
    },
    {
      name: "🐦 drawio-twemoji-library",
      description:
        "Twitter Emoji Libraries for use with draw.io and diagrams.net. Works with the VSCode drawio plugin!",
      backend: {
        name: "drawio-twemoji-library",
        language: "JavaScript",
      },
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
            <Grid
              size={{
                xs: 12 /* One column */,
                sm: 6 /* Two columns */,
              }}
              key={repository.name}
            >
              <Card variant="outlined" sx={{ height: "100%", display: "flex" }}>
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                  {/* Title */}
                  <Typography gutterBottom variant="body1">
                    {repository.name}
                  </Typography>

                  {/* Description */}
                  <Typography sx={{ flex: 1 }} variant="caption" gutterBottom>
                    {repository.description}
                  </Typography>

                  {/* Divider */}
                  <Divider sx={{ marginBottom: "8px" }}>
                    <Typography variant="caption">Source Code</Typography>
                  </Divider>

                  {/* Repo Information */}
                  {repository.frontend ? (
                    <Stack direction="row" spacing={1}>
                      {/* Code Icon */}
                      <Code fontSize="small" />

                      {/* Repo Name */}
                      <Typography variant="caption" flexGrow={1}>
                        <Link
                          href={`https://github.com/xsalazar/${repository.frontend.name}`}
                          target="_blank"
                          rel="noopener"
                        >
                          {repository.frontend.name}
                        </Link>
                      </Typography>

                      {/* Repo Language */}
                      <div>
                        <span
                          style={{
                            color: getColorForLanguage(
                              repository.frontend.language
                            ),
                          }}
                        >
                          <DotFillIcon size="small" />
                        </span>
                        <Typography variant="caption">
                          {repository.frontend.language}
                        </Typography>
                      </div>
                    </Stack>
                  ) : null}

                  {repository.backend ? (
                    <Stack direction="row" spacing={1}>
                      {/* Code Icon */}
                      <Code fontSize="small" />

                      {/* Repo Name */}
                      <Typography variant="caption" flexGrow={1}>
                        <Link
                          href={`https://github.com/xsalazar/${repository.backend.name}`}
                          target="_blank"
                          rel="noopener"
                        >
                          {repository.backend.name}
                        </Link>
                      </Typography>

                      {/* Repo Language */}
                      <div>
                        <span
                          style={{
                            color: getColorForLanguage(
                              repository.backend.language
                            ),
                          }}
                        >
                          <DotFillIcon size="small" />
                        </span>
                        <Typography variant="caption">
                          {repository.backend.language}
                        </Typography>
                      </div>
                    </Stack>
                  ) : null}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
