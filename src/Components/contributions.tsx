import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Link,
} from "@mui/material";
import { GitMergeIcon, DotFillIcon } from "@primer/octicons-react";

interface ContributionMetadata {
  owner: string;
  repo: string;
  pullNumber: number;
  description: string;
  language: string;
}

export default class Contributions extends React.Component {
  private contributionMetadata: Array<ContributionMetadata> = [
    {
      owner: "hashicorp",
      repo: "terraform-provider-aws",
      pullNumber: 11984,
      description: "Add Sensitive flag to private ssh_key properties",
      language: "Go",
    },
    {
      owner: "hashicorp",
      repo: "terraform-provider-aws",
      pullNumber: 10175,
      description: "Fix permanent diff on aws_opsworks ssh_key and password",
      language: "Go",
    },
    {
      owner: "hashicorp",
      repo: "terraform-provider-aws",
      pullNumber: 10017,
      description:
        "Add Computed flag set to true for Port property in ElastiCache Cluster",
      language: "Go",
    },
    {
      owner: "hashicorp",
      repo: "terraform-provider-aws",
      pullNumber: 10015,
      description:
        "Add support for getting EndpointURL directly from ElasticBeanstalk Environment resource",
      language: "Go",
    },
    {
      owner: "hashicorp",
      repo: "terraform-provider-aws",
      pullNumber: 17625,
      description:
        "Move Lambda Function handler and runtime arguments to optional arguments section",
      language: "Go",
    },
    {
      owner: "dependabot",
      repo: "fetch-metadata",
      pullNumber: 34,
      description:
        "Update README to close code-block and add proper version reference",
      language: "TypeScript",
    },
    {
      owner: "glennjones",
      repo: "hapi-swagger",
      pullNumber: 727,
      description:
        "Adds types for securityDefinitions, securitySchemes, and scopes",
      language: "JavaScript",
    },
    {
      owner: "glennjones",
      repo: "hapi-swagger",
      pullNumber: 728,
      description: "Add security requirements type to root document",
      language: "JavaScript",
    },
    {
      owner: "hashicorp",
      repo: "terraform-provider-aws",
      pullNumber: 10962,
      description: "Add LoadBasedAutoscaling to OpsWorks Layer",
      language: "Go",
    },
    {
      owner: "microsoft",
      repo: "fluentui-emoji",
      pullNumber: 73,
      description: "Add Prince emoji metadata",
      language: "JSON",
    },
  ];

  render(): React.ReactNode {
    return (
      <Container sx={{ pb: 2 }}>
        <Typography variant="h5" gutterBottom>
          My Contributions
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ pb: "15px" }}>
          Open source contributions I've made.
        </Typography>
        <Grid container spacing={2}>
          {this.contributionMetadata.map((contribution) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={contribution.pullNumber}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    display: "flex",
                  }}
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
                        <GitMergeIcon size="small" />
                      </div>
                      <Typography variant="body2">
                        <Link
                          href={`https://github.com/${contribution.owner}/${contribution.repo}/pull/${contribution.pullNumber}`}
                          target="_blank"
                          rel="noopener"
                          underline="hover"
                        >
                          {contribution.repo}
                        </Link>
                      </Typography>
                    </div>

                    {/* Description */}
                    <div style={{ flex: 1 }}>
                      <Typography variant="body2" gutterBottom>
                        {contribution.description}
                      </Typography>
                    </div>

                    {/* Language */}
                    <div>
                      <span
                        style={{
                          color: this.getColorForLanguage(
                            contribution.language
                          ),
                        }}
                      >
                        <DotFillIcon size="small" />
                      </span>
                      <Typography variant="caption">
                        {contribution.language}
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
