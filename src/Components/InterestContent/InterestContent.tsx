import { Card, CardContent, Grid, Link, Typography } from '@material-ui/core';
import { Component, ReactNode } from 'react';

interface Interest {
  title: string;
  logoUrl: string;
  topicUrl: string;
}

export class InterestContent extends Component {
  interests: Array<Interest> = [
    {
      title: 'AWS',
      topicUrl: 'https://github.com/topics/aws',
      logoUrl: 'https://raw.githubusercontent.com/github/explore/fbceb94436312b6dacde68d122a5b9c7d11f9524/topics/aws/aws.png',
    },
    {
      title: 'Terraform',
      topicUrl: 'https://github.com/topics/terraform',
      logoUrl: 'https://www.terraform.io/assets/images/product-icons/terraform-icon-color-7fbc9ecc.svg',
    },
    {
      title: 'Typescript',
      topicUrl: 'https://github.com/topics/typescript',
      logoUrl: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png',
    },
    {
      title: 'React',
      topicUrl: 'https://github.com/topics/react',
      logoUrl: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
    },
    {
      title: 'Go',
      topicUrl: 'https://github.com/topics/go',
      logoUrl: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/go/go.png',
    },
    {
      title: '.NET',
      topicUrl: 'https://github.com/topics/dotnet',
      logoUrl: 'https://raw.githubusercontent.com/github/explore/93d8a67084f94b2a444e510199a6e7622e5b09a3/topics/dotnet/dotnet.png',
    },
  ];

  render(): ReactNode {
    return this.interests.map((interest) => {
      return (
        <Grid item key={interest.title}>
          <Link href={interest.topicUrl} target="_blank" rel="noopener">
            <Card
              variant="outlined"
              style={{
                width: '300px',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CardContent
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Image */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: '10px',
                  }}
                >
                  <img src={interest.logoUrl} alt={interest.title} style={{ width: '64px', height: '64px' }} />
                </div>

                {/* Title */}
                <Typography>{interest.title}</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      );
    });
  }
}
