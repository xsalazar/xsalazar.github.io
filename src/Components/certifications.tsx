import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

type Certification = {
  title: string;
  certificateUrl: string;
  logoUrl: string;
};

export default function Certifications() {
  const certifications: Array<Certification> = [
    {
      title: "AWS Certified Cloud Practitioner",
      certificateUrl: "https://xsalazar.com/aws-cert.pdf",
      logoUrl:
        "https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Cloud-Practitioner_512x512.bc006f14f986fa4f3ca238b0b62be458ce1fb5ce.png",
    },
    {
      title: "Hashicorp Certified: Terraform Associate",
      certificateUrl: "https://xsalazar.com/terraform-cert.pdf",
      logoUrl:
        "https://www.datocms-assets.com/2885/1586800192-terraformassociateweb.png",
    },
  ];

  return (
    <Container sx={{ pb: 2 }}>
      <Typography variant="h5" gutterBottom>
        My Certifications
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ pb: "15px" }}>
        Professional certifications I've received.
      </Typography>

      <Grid container spacing={2}>
        {certifications.map((certification) => {
          return (
            <Grid size={{ xs: 6, sm: 6, md: 4 }} key={certification.title}>
              <Link
                href={certification.certificateUrl}
                target="_blank"
                rel="noopener"
              >
                <Card
                  variant="outlined"
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {/* Image */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={certification.logoUrl}
                        alt={certification.title}
                        style={{ width: "128px", height: "128x" }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
