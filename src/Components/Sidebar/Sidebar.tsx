import { Component, ReactNode } from 'react';
import { Avatar, Link, Typography } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { LocationIcon, MailIcon, MarkGithubIcon } from '@primer/octicons-react';
import { Octokit } from 'octokit';

interface SidebarProps {}

interface SidebarState {
  name: string;
  email: string;
  profilePictureUrl: string;
  description: string;
  githubUrl: string;
  githubUsername: string;
  githubLocation: string;
  linkedInUsername: string;
  instagramUsername: string;
}

export class Sidebar extends Component<SidebarProps, SidebarState> {
  constructor(props: SidebarProps) {
    super(props);
    this.state = {
      name: '',
      email: 'contact@xsalazar.com',
      profilePictureUrl: '',
      description: '',
      githubUrl: '',
      githubUsername: '',
      githubLocation: '',
      linkedInUsername: 'xsalazar',
      instagramUsername: 'xsalazar3',
    };
  }

  async componentDidMount(): Promise<void> {
    const octokit = new Octokit();
    const user = await octokit.rest.users.getByUsername({
      username: 'xsalazar',
    });
    this.setState({
      name: user.data.name as string,
      profilePictureUrl: user.data.avatar_url as string,
      description: user.data.bio as string,
      githubUrl: user.data.html_url as string,
      githubUsername: user.data.login as string,
      githubLocation: user.data.location as string,
    });
  }

  render(): ReactNode {
    return (
      <div>
        {/* Icon */}
        <Avatar src={this.state.profilePictureUrl} style={{ width: '150px', height: '150px', marginBottom: '25px' }}></Avatar>

        {/* Name */}
        <Typography variant="h4" align="left" style={{ paddingBottom: '15px' }}>
          {this.state.name}
        </Typography>

        {/* Bio */}
        <Typography variant="body1" align="left" style={{ paddingBottom: '15px' }}>
          {this.state.description}
        </Typography>

        {/* Location */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingBottom: '10px',
          }}
        >
          <div style={{ paddingRight: '5px' }}>
            <LocationIcon size={20}></LocationIcon>
          </div>
          <Typography>{this.state.githubLocation}</Typography>
        </div>

        {/* GitHub Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingBottom: '10px',
          }}
        >
          <div style={{ paddingRight: '5px' }}>
            <MarkGithubIcon size={20}></MarkGithubIcon>
          </div>
          <Link href={this.state.githubUrl} target="_blank" rel="noopener">
            GitHub
          </Link>
        </div>

        {/* LinkedIn Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingBottom: '10px',
          }}
        >
          <div style={{ paddingRight: '5px' }}>
            <LinkedInIcon style={{ fontSize: '20px' }}></LinkedInIcon>
          </div>
          <Link href={`https://www.linkedin.com/in/${this.state.linkedInUsername}`} target="_blank" rel="noopener">
            LinkedIn
          </Link>
        </div>

        {/* Instagram Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingBottom: '10px',
          }}
        >
          <div style={{ paddingRight: '5px' }}>
            <InstagramIcon fontSize="large" style={{ fontSize: '20px' }}></InstagramIcon>
          </div>
          <Link href={`https://www.instagram.com/${this.state.instagramUsername}`} target="_blank" rel="noopener">
            Instagram
          </Link>
        </div>

        {/* Mail Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingBottom: '10px',
          }}
        >
          <div style={{ paddingRight: '5px' }}>
            <MailIcon size={20}></MailIcon>
          </div>
          <Link href={`mailto:${this.state.email}`}>contact@xsalazar.com</Link>
        </div>
      </div>
    );
  }
}
