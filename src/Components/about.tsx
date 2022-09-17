import React from "react";
import { Octokit } from "octokit";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import {
  LocationIcon,
  OrganizationIcon,
  MarkGithubIcon,
  MailIcon,
  FileIcon,
} from "@primer/octicons-react";
import { LinkedIn, Instagram } from "@mui/icons-material";

interface AboutProps {}

interface AboutState {
  description: string;
  email: string;
  githubLocation: string;
  githubUrl: string;
  githubUsername: string;
  includeResume: boolean;
  instagramUsername: string;
  isLoading: boolean;
  linkedInUsername: string;
  name: string;
  organization: string;
  profilePictureUrl: string;
}

export default class About extends React.Component<AboutProps, AboutState> {
  constructor(props: AboutProps) {
    super(props);

    this.state = {
      description: "",
      email: "contact@xsalazar.com",
      githubLocation: "",
      githubUrl: "",
      githubUsername: "",
      includeResume: false,
      instagramUsername: "xsalazar3",
      isLoading: true,
      linkedInUsername: "xsalazar",
      name: "Xavier Salazar",
      organization: "Slack",
      profilePictureUrl: "",
    };
  }

  render(): React.ReactNode {
    const {
      description,
      email,
      githubLocation,
      githubUrl,
      includeResume,
      instagramUsername,
      isLoading,
      linkedInUsername,
      name,
      organization,
      profilePictureUrl,
    } = this.state;

    return (
      <Container maxWidth="xs" sx={{ pb: 2 }}>
        {isLoading ? (
          <div></div>
        ) : (
          <Box>
            <Grid container xs={12} justifyContent="flex-start">
              <Paper elevation={0}>
                <div>
                  {/* Icon */}
                  <Avatar
                    src={profilePictureUrl}
                    style={{
                      width: "150px",
                      height: "150px",
                      marginBottom: "25px",
                    }}
                  ></Avatar>

                  {/* Name */}
                  <Typography
                    variant="h4"
                    align="left"
                    style={{ paddingBottom: "15px" }}
                  >
                    {name}
                  </Typography>

                  {/* Bio */}
                  <Typography
                    variant="body1"
                    align="left"
                    style={{ paddingBottom: "15px" }}
                  >
                    {description}
                  </Typography>

                  {/* Location */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <div style={{ paddingRight: "5px" }}>
                      <LocationIcon size={20}></LocationIcon>
                    </div>
                    <Typography>{githubLocation}</Typography>
                  </div>

                  {/* Work Organization */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <div style={{ paddingRight: "5px" }}>
                      <OrganizationIcon size={20}></OrganizationIcon>
                    </div>
                    <Typography>
                      <Link
                        href="https://github.com/slackhq"
                        target="_blank"
                        rel="noopener"
                      >
                        {organization}
                      </Link>
                    </Typography>
                  </div>

                  {/* GitHub Link */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <div style={{ paddingRight: "5px" }}>
                      <MarkGithubIcon size={20}></MarkGithubIcon>
                    </div>
                    <Typography>
                      <Link href={githubUrl} target="_blank" rel="noopener">
                        GitHub
                      </Link>
                    </Typography>
                  </div>

                  {/* LinkedIn Link */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <div style={{ paddingRight: "5px" }}>
                      <LinkedIn style={{ fontSize: "20px" }}></LinkedIn>
                    </div>
                    <Typography>
                      <Link
                        href={`https://www.linkedin.com/in/${linkedInUsername}`}
                        target="_blank"
                        rel="noopener"
                      >
                        LinkedIn
                      </Link>
                    </Typography>
                  </div>

                  {/* Instagram Link */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <div style={{ paddingRight: "5px" }}>
                      <Instagram
                        fontSize="large"
                        style={{ fontSize: "20px" }}
                      ></Instagram>
                    </div>
                    <Typography>
                      <Link
                        href={`https://www.instagram.com/${instagramUsername}`}
                        target="_blank"
                        rel="noopener"
                      >
                        Instagram
                      </Link>
                    </Typography>
                  </div>

                  {/* Resume Link */}
                  {includeResume ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        paddingBottom: "10px",
                      }}
                    >
                      <div style={{ paddingRight: "5px" }}>
                        <FileIcon size={20}></FileIcon>
                      </div>
                      <Typography>
                        <Link
                          href={`https://xsalazar.com/resume.pdf`}
                          target="_blank"
                          rel="noopener"
                        >
                          Resume
                        </Link>
                      </Typography>
                    </div>
                  ) : (
                    <div />
                  )}

                  {/* Mail Link */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <div style={{ paddingRight: "5px" }}>
                      <MailIcon size={20}></MailIcon>
                    </div>
                    <Typography>
                      <Link href={`mailto:${email}`}>contact@xsalazar.com</Link>
                    </Typography>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Box>
        )}
      </Container>
    );
  }

  async componentDidMount(): Promise<void> {
    const octokit = new Octokit();
    const user = await octokit.rest.users.getByUsername({
      username: "xsalazar",
    });
    this.setState({
      name: user.data.name as string,
      profilePictureUrl: user.data.avatar_url as string,
      description: user.data.bio as string,
      githubUrl: user.data.html_url as string,
      githubUsername: user.data.login as string,
      githubLocation: user.data.location as string,
      isLoading: false,
    });
  }
}
