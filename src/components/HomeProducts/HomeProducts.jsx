import camera from '../../assets/shoes.png';
import bag from '../../assets/bag.png';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Box,
  Grid
} from '@mui/material';

const HomeProducts = () => {
  return (
    <Container >
      <Typography variant="h3" gutterBottom color='text.secondary' mt={3}>
        Products
      </Typography>
      <Grid container spacing={4}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item size={{ xs: 12, sm: 3 }} key={index}>
            <Card key={index} >
              <CardActionArea disableRipple
              //  sx={{
              //   '& .MuiCardActionArea-focusHighlight': {
              //     bgcolor: 'transparent', // overlay remove
              //     boxShadow: 'none',              // shadow remove
              //   },
              // }} 
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={camera}
                  alt="green iguana"

                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" variant="contained">
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>




      {/*  New Arrivals */}

      <Typography variant="h3" color='text.secondary' gutterBottom>
        New Arrivals
      </Typography>

      <Grid container spacing={4}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item size={{ xs: 12, sm: 3 }} key={index}>
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={bag}
                  alt="green iguana"
                  sx={{
                    objectFit: 'cover'
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" variant="contained">
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        {/* </Box> */}
      </Grid>
    </Container >
  );
};

export default HomeProducts;
