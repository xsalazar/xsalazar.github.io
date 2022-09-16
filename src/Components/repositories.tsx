import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Octokit } from "octokit";
import { RepoIcon, DotFillIcon } from "@primer/octicons-react";
import LinguistLanguages from "linguist-languages";

interface RepositoriesProps {}

interface RepositoriesState {
  isLoading: boolean;
  repositories: Array<any>;
}

export default class Repositories extends React.Component<
  RepositoriesProps,
  RepositoriesState
> {
  private languagesToColors: Map<string, LinguistLanguages.Language> = new Map(
    Object.entries(LinguistLanguages)
  );

  constructor(props: RepositoriesProps) {
    super(props);

    this.state = {
      isLoading: true,
      repositories: [],
    };
  }

  render(): React.ReactNode {
    const { isLoading, repositories } = this.state;

    return (
      <Container sx={{ pb: 2 }}>
        <Box>
          <Typography variant="h5" gutterBottom>
            My Projects
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ pb: "15px" }}>
            GitHub repositories I've built.
          </Typography>

          {isLoading ? (
            <div />
          ) : (
            <Grid container spacing={2}>
              {repositories.map((r) => {
                return (
                  <Grid item xs={4} key={r.id}>
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
                            paddingBottom: "10px",
                          }}
                        >
                          <div style={{ paddingRight: "5px" }}>
                            <RepoIcon size="small" />
                          </div>
                          <Typography variant="subtitle1">
                            <Link
                              href={r.html_url}
                              target="_blank"
                              rel="noopener"
                              underline="hover"
                            >
                              {r.name}
                            </Link>
                          </Typography>
                        </div>

                        {/* Description */}
                        <div style={{ flex: 1 }}>
                          <Typography variant="body2" gutterBottom>
                            {r.description}
                          </Typography>
                        </div>

                        {/* Language */}
                        <div>
                          <span
                            style={{
                              color: this.getColorForLanguage(r.language),
                            }}
                          >
                            <DotFillIcon size="small" />
                          </span>
                          <Typography variant="caption">
                            {r.language}
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
    let response = await octokit.rest.repos.listForUser({
      username: "xsalazar",
      sort: "pushed",
      type: "owner",
    });

    const repositories = response.data.filter((r) => !r.fork).slice(0, 9);

    this.setState({
      repositories: repositories,
      isLoading: false,
    });
  }

  getColorForLanguage(language: string): string {
    if (this.languagesToColors.has(language)) {
      return this.languagesToColors.get(language)?.color ?? "#aaaaaa";
    } else {
      return "#aaaaaa";
    }
  }
}
