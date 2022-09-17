import React from "react";
import { Octokit } from "octokit";
import LinguistLanguages from "linguist-languages";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Link,
} from "@mui/material";
import { GitMergeIcon, DotFillIcon } from "@primer/octicons-react";

interface ContributionsProps {}

interface ContributionsState {
  isLoading: boolean;
  contributions: Array<any>;
}

interface ContributionMetadata {
  owner: string;
  repo: string;
  pullNumber: number;
}

export default class Contributions extends React.Component<
  ContributionsProps,
  ContributionsState
> {
  private contributionMetadata: Array<ContributionMetadata> = [
    {
      owner: "hashicorp",
      repo: "terraform-provider-aws",
      pullNumber: 11984,
    },
    {
      owner: "hashicorp",
      repo: "terraform-provider-aws",
      pullNumber: 10175,
    },
    {
      owner: "hashicorp",
      repo: "terraform-provider-aws",
      pullNumber: 10017,
    },
    {
      owner: "hashicorp",
      repo: "terraform-provider-aws",
      pullNumber: 10015,
    },
    {
      owner: "hashicorp",
      repo: "terraform-provider-aws",
      pullNumber: 17625,
    },
    { owner: "dependabot", repo: "fetch-metadata", pullNumber: 34 },
    {
      owner: "glennjones",
      repo: "hapi-swagger",
      pullNumber: 727,
    },
    {
      owner: "glennjones",
      repo: "hapi-swagger",
      pullNumber: 728,
    },
  ];

  constructor(props: ContributionsProps) {
    super(props);

    this.state = { isLoading: true, contributions: [] };
  }

  render(): React.ReactNode {
    const { isLoading, contributions } = this.state;
    return (
      <Container sx={{ pb: 2 }}>
        <Box>
          <Typography variant="h5" gutterBottom>
            My Contributions
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ pb: "15px" }}>
            Open source contributions I've made.
          </Typography>

          {isLoading ? (
            <div />
          ) : (
            <Grid container spacing={2}>
              {contributions.map((contribution) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={contribution.id}>
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
                            paddingBottom: "10px",
                          }}
                        >
                          <div style={{ paddingRight: "5px" }}>
                            <GitMergeIcon size="small" />
                          </div>
                          <Typography variant="subtitle1">
                            <Link
                              href={contribution.html_url}
                              target="_blank"
                              rel="noopener"
                              underline="hover"
                            >
                              {contribution.base.repo.name}
                            </Link>
                          </Typography>
                        </div>

                        {/* Description */}
                        <div style={{ flex: 1 }}>
                          <Typography variant="body2" gutterBottom>
                            {contribution.title}
                          </Typography>
                        </div>

                        {/* Language */}
                        <div>
                          <span
                            style={{
                              color: this.getColorForLanguage(
                                contribution.base.repo.language
                              ),
                            }}
                          >
                            <DotFillIcon size="small" />
                          </span>
                          <Typography variant="caption">
                            {contribution.base.repo.language}
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Box>
      </Container>
    );
  }

  async componentDidMount(): Promise<void> {
    const octokit = new Octokit();

    const c = await Promise.all(
      this.contributionMetadata.map(async (contribution) => {
        let response = await octokit.rest.pulls.get({
          owner: contribution.owner,
          repo: contribution.repo,
          pull_number: contribution.pullNumber,
        });
        return response.data;
      })
    );

    this.setState({ isLoading: false, contributions: c });
  }

  private languagesToColors: Map<string, LinguistLanguages.Language> = new Map(
    Object.entries(LinguistLanguages)
  );

  getColorForLanguage(language: string): string {
    if (this.languagesToColors.has(language)) {
      return this.languagesToColors.get(language)?.color ?? "#aaaaaa";
    } else {
      return "#aaaaaa";
    }
  }
}
