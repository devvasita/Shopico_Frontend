
import BackgroundWrapper from './BackgroundWrapper';
import bgImg from '../../assets/bg-Picsart-BackgroundChanger.jpg';
import { Box, Typography, Button, Container } from "@mui/material";

const HomeMain = () => {
  return (

    // wrappper of background image 
    <BackgroundWrapper image={bgImg}>

      <Container>
        <Box sx={{
          width: { sm: "70%", md: "50%" },
          position: "absolute",
          top: { xs: "32%", md: "40%" },
          borderRadius: 2,
          color: "white",
        }}>

          {/* Main heading  */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" }
            }}
          >
            WELCOME TO{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                fontSize: { xs: "2rem", md: "3rem" }
              }}
            >
              Shop
              <Box
                component="span"
                sx={{ color: "#17e2d1" }}
              >
                ico
              </Box>
            </Typography>
          </Typography>

          {/*Sub heading title  */}
          <Typography variant="h6" sx={{ mb: 3 }}>
            Your one-stop shop for quality products at unbeatable prices. From the latest trends to everyday essentials, we’ve got it all in one place.
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }}>
            Browse our collection today.
          </Typography>

          <Button
            variant="contained"
            size="large"
          >
            SHOP NOW
          </Button>
        </Box>
      </Container>
    </BackgroundWrapper >

  );
};

export default HomeMain;