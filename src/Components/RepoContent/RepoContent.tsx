import { Card, CardContent, Grid, Link, Typography } from '@material-ui/core';
import { DotFillIcon, RepoIcon } from '@primer/octicons-react';
import { Octokit } from 'octokit';
import { Component, ReactNode } from 'react';
import LinguistLanguages from 'linguist-languages';

interface RepoContentProps {}

interface RepoContentState {
  loading: boolean;
  repositories: any[];
}

export class RepoContent extends Component<RepoContentProps, RepoContentState> {
  languagesToColors: Map<string, LinguistLanguages.Language> = new Map(Object.entries(LinguistLanguages));

  constructor(props: RepoContentProps) {
    super(props);
    this.state = {
      loading: true,
      repositories: [],
    };
  }

  async componentDidMount(): Promise<void> {
    const octokit = new Octokit();
    let response = await octokit.rest.repos.listForUser({
      username: 'xsalazar',
      sort: 'pushed',
      type: 'owner',
    });

    const repositories = response.data.filter((r) => !r.fork).slice(0, 6);

    this.setState({
      repositories: repositories,
      loading: false,
    });
  }

  render(): ReactNode {
    if (this.state.loading) {
      return <div></div>;
    }

    return this.state.repositories.map((repo) => {
      return (
        <Grid item key={repo.id}>
          <Card variant="outlined" style={{ width: '300px', height: '100%', display: 'flex' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Title */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingBottom: '10px',
                }}
              >
                <div style={{ paddingRight: '5px' }}>
                  <RepoIcon size="small" />
                </div>
                <Link href={repo.html_url} target="_blank" rel="noopener">
                  {repo.name}
                </Link>
              </div>

              {/* Description */}
              <div style={{ flex: 1 }}>
                <Typography variant="body2">{repo.description}</Typography>
              </div>

              {/* Language */}
              <div style={{ paddingTop: '15px' }}>
                <span style={{ color: this.getColorForLanguage(repo.language) }}>
                  <DotFillIcon size="small" />
                </span>
                <Typography variant="caption">{repo.language}</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      );
    });
  }

  getColorForLanguage(language: string): string {
    if (this.languagesToColors.has(language)) {
      return this.languagesToColors.get(language)?.color ?? '#aaaaaa';
    } else {
      return '#aaaaaa';
    }
  }
}
