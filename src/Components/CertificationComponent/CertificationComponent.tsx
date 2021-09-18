import { Grid, Card, CardContent, Link } from '@material-ui/core';
import { Component, ReactNode } from 'react';

interface Certification {
  title: string;
  certificateUrl: string;
  logoUrl: string;
}

export class CertificationComponent extends Component {
  private certifications: Array<Certification> = [
    {
      title: 'AWS Certified Cloud Practitioner',
      certificateUrl: 'https://xsalazar.com/aws-cert.pdf',
      logoUrl:
        'https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Cloud-Practitioner_512x512.bc006f14f986fa4f3ca238b0b62be458ce1fb5ce.png',
    },
    {
      title: 'Hashicorp Certified: Terraform Associate',
      certificateUrl: 'https://xsalazar.com/terraform-cert.pdf',
      logoUrl: 'https://www.datocms-assets.com/2885/1586800192-terraformassociateweb.png',
    },
  ];

  render(): ReactNode {
    return this.certifications.map((certification) => {
      return (
        <Grid item key={certification.title}>
          <Link href={certification.certificateUrl} target="_blank" rel="noopener">
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
          </Link>
        </Grid>
      );
    });
  }
}
