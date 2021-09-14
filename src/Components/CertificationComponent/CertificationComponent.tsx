import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import React, { Component, ReactNode } from 'react';

interface Certification {
  title: string;
  logoUrl: string;
}

export class CertificationComponent extends Component {
  private certifications: Array<Certification> = [
    {
      title: 'AWS Certified Cloud Practitioner',
      logoUrl:
        'https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Cloud-Practitioner_512x512.bc006f14f986fa4f3ca238b0b62be458ce1fb5ce.png',
    },
  ];

  render(): ReactNode {
    return this.certifications.map((certification) => {
      return (
        <Grid item key={certification.title}>
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
                }}
              >
                <img src={certification.logoUrl} alt={certification.title} style={{ width: '128px', height: '128x' }} />
              </div>
            </CardContent>
          </Card>
        </Grid>
      );
    });
  }
}
