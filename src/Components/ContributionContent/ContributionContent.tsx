import { Card, CardContent, Grid, Link, Typography } from '@material-ui/core';
import { DotFillIcon, GitMergeIcon } from '@primer/octicons-react';
import { Octokit } from 'octokit';
import { Component, ReactNode } from 'react';
import LinguistLanguages from 'linguist-languages';

interface ContributionContentProps {}

interface ContributionContentState {
  loading: boolean;
  contributions: any[];
}

interface Contribution {
  owner: string;
  repo: string;
  pullNumber: number;
}

export class ContributionContent extends Component<ContributionContentProps, ContributionContentState> {
  languagesToColors: Map<string, LinguistLanguages.Language> = new Map(Object.entries(LinguistLanguages));

  contributions: Array<Contribution> = [
    {
      owner: 'hashicorp',
      repo: 'terraform-provider-aws',
      pullNumber: 11984,
    },
    {
      owner: 'hashicorp',
      repo: 'terraform-provider-aws',
      pullNumber: 10175,
    },
    {
      owner: 'hashicorp',
      repo: 'terraform-provider-aws',
      pullNumber: 10017,
    },
    {
      owner: 'hashicorp',
      repo: 'terraform-provider-aws',
      pullNumber: 10015,
    },
    {
      owner: 'hashicorp',
      repo: 'terraform-provider-aws',
      pullNumber: 17625,
    },
    { owner: 'dependabot', repo: 'fetch-metadata', pullNumber: 34 },
    {
      owner: 'glennjones',
      repo: 'hapi-swagger',
      pullNumber: 727,
    },
    {
      owner: 'glennjones',
      repo: 'hapi-swagger',
      pullNumber: 728,
    },
  ];

  constructor(props: ContributionContentProps) {
    super(props);
    this.state = {
      loading: true,
      contributions: [],
    };
  }

  async componentDidMount(): Promise<void> {
    const octokit = new Octokit();

    const c = await Promise.all(
      this.contributions.map(async (contribution) => {
        let response = await octokit.rest.pulls.get({
          owner: contribution.owner,
          repo: contribution.repo,
          pull_number: contribution.pullNumber,
        });
        return response.data;
      })
    );

    this.setState({ loading: false, contributions: c });
  }

  render(): ReactNode {
    if (this.state.loading) {
      return <div></div>;
    }

    return this.state.contributions.map((contribution) => {
      return (
        <Grid item key={contribution.id}>
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
                  <GitMergeIcon size="small" />
                </div>
                <Link href={contribution.html_url} target="_blank" rel="noopener">
                  {contribution.base.repo.name}
                </Link>
              </div>

              {/* Description */}
              <div style={{ flex: 1 }}>
                <Typography variant="body2">{contribution.title}</Typography>
              </div>

              {/* Language */}
              <div style={{ paddingTop: '15px' }}>
                <span
                  style={{
                    color: this.getColorForLanguage(contribution.base.repo.language),
                  }}
                >
                  <DotFillIcon size="small" />
                </span>
                <Typography variant="caption">{contribution.base.repo.language}</Typography>
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
