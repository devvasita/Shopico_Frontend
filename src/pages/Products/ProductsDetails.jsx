import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Modal,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import bgImg from "../../assets/shoes.png";
import { Close, Delete } from "@mui/icons-material";
import { useState } from "react";
import CustomModal from "../../components/common/CustomModal";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";

const ProductsDetails = () => {
  const [open, setOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [description, setDescription] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);

  // for add modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // for delete Modal
  const handleDeleteModalOpen = () => setDeleteModal(true);
  const handleDeleteModalClose = () => setDeleteModal(false);

  const handleAddReview = () => {
    console.log("added Add review");
  };

  const handleAddToCart = () => {
    console.log("Add to cart functionality");
  };

  const handleDeleteReview = () => {
    console.log("To delete");
  };

  // Responsive modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90vw", sm: 520 },
    maxHeight: "90vh",
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: { xs: 2, sm: 3 },
    overflowY: "auto",
  };

  return (
    <Container sx={{ py: 4 }}>
      {/* Product details */}
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          component="h1"
          sx={{ fontWeight: "bold", color: "text.secondary" }}
        >
          <ListAltOutlinedIcon
            fontSize="large"
            sx={{ verticalAlign: "middle", mr: 1 }}
          />
          Product Details
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Paper sx={{ p: { xs: 2, md: 4 }, my: { xs: 2, md: 4 } }} elevation={4}>
          <Grid container spacing={{ xs: 3, md: 5 }} alignItems="stretch">
            {/* Image */}
            <Grid size={{ xs: 12, md: 5, lg: 4 }}>
              <CardMedia
                component="img"
                image={bgImg}
                alt="product image"
                sx={{
                  width: "100%",
                  height: { xs: 280, sm: 340, md: "100%" },
                  objectFit: "contain",
                  borderRadius: 2,
                  bgcolor: "background.default",
                }}
              />
            </Grid>

            {/* Details */}
            <Grid size={{ xs: 12, md: 7, lg: 8 }}>
              <Stack spacing={1.2}>
                <Typography variant="h5">Nike Shoes</Typography>

                <Rating value={3} readOnly />

                <Typography variant="subtitle1" color="secondary">
                  Discount : 20 %
                </Typography>

                <Typography variant="subtitle1">
                  <Box component="span" sx={{ fontWeight: 700 }}>
                    MRP
                  </Box>{" "}
                  : $ 200
                </Typography>

                <Typography variant="subtitle1">
                  <Box component="span" sx={{ fontWeight: 600 }}>
                    Items left
                  </Box>{" "}
                  : 5
                </Typography>

                <Typography variant="subtitle1">
                  <Box
                    component="span"
                    sx={{ fontWeight: 400, color: "primary.main" }}
                  >
                    Free Delivery
                  </Box>{" "}
                  :{" "}
                  <Box component="span" sx={{ fontWeight: 600 }}>
                    Oct 8 - 21
                  </Box>
                </Typography>

                <Typography variant="subtitle1">
                  <Box
                    component="span"
                    sx={{ fontWeight: 400, color: "text.secondary" }}
                  >
                    Fastest delivery
                  </Box>{" "}
                  : Tomorrow 11AM
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                  <Box component="span" sx={{ fontWeight: 600 }}>
                    About Item
                  </Box>{" "}
                  :{" "}
                  <Box sx={{ letterSpacing: "0.5px" }} component="span">
                    Built for performance and durability, these shoes feature
                    lightweight construction and responsive cushioning. Whether
                    you’re hitting the gym, going for a run, or walking around
                    the city, they deliver unmatched comfort and support.
                  </Box>
                </Typography>

                <Box>
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    onClick={handleAddToCart}
                    fullWidth={{ xs: true, sm: false }} // full width on mobile
                    sx={{ width: { xs: "100%", sm: "auto" } }}
                  >
                    Add To Cart
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      {/* Customer Reviews */}
      <Box mb={{ xs: 3, md: 4 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          mb={{ xs: 2, md: 4 }}
        >
          <Typography
            color="text.secondary"
            sx={{ typography: { xs: "h4", md: "h3" } }}
          >
            Customer Review
          </Typography>

          <Button
            size="medium"
            color="primary"
            variant="contained"
            onClick={handleOpen}
          >
            Add Review
          </Button>
        </Stack>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Paper
                sx={{ p: 2, maxHeight: 230, overflow: "auto" }}
                elevation={4}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6">User Name</Typography>

                  <IconButton
                    aria-label="delete"
                    size="large"
                    color="error"
                    onClick={handleDeleteModalOpen}
                  >
                    <Delete />
                  </IconButton>
                </Stack>

                <Rating value={2} readOnly sx={{ mb: 1 }} />

                <Typography variant="subtitle1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore molestiae veritatis architecto voluptas, vero rerum
                  labore
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Modal for add review */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-modal-title"
        aria-describedby="basic-modal-desc"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography
              id="basic-modal-title"
              variant="h6"
              sx={{ flexGrow: 1 }}
            >
              Write Your Review here
            </Typography>

            <IconButton aria-label="close" onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
          <Divider />

          <Stack gap={2} mt={2}>
            <Box>
              <Typography component="legend" sx={{ mb: 0.5 }}>
                Username :
              </Typography>
              <TextField
                id="userName"
                defaultValue={"Username"}
                disabled
                size="small"
                placeholder="Enter your Name"
                fullWidth
              />
            </Box>

            <Box>
              <Typography component="legend" sx={{ mb: 0.5 }}>
                Rating :
              </Typography>
              <Box
                sx={{
                  p: 0.5,
                  border: "1px solid rgba(0,0,0,0.23)",
                  borderRadius: "4px",
                  width: "100%",
                  "&:hover": { borderColor: "rgba(0,0,0,0.87)" },
                }}
              >
                <Rating
                  value={ratingValue}
                  onChange={(_, newValue) => setRatingValue(newValue)}
                />
              </Box>
            </Box>

            <Box>
              <Typography component="legend" sx={{ mb: 0.5 }}>
                Description :
              </Typography>
              <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Your Message"
                multiline
                minRows={4}
                maxRows={8}
                variant="outlined"
                fullWidth
              />
            </Box>

            <Button
              fullWidth
              size="medium"
              variant="contained"
              onClick={handleAddReview}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>

      {/* Modal for delete review */}
      <CustomModal
        handleCloseAction={handleDeleteModalClose}
        isModalOpen={deleteModal}
        handleSubmitBtn={handleDeleteReview}
        icon={<Delete sx={{ color: "error.main", fontSize: 35 }} />}
        modalColor={"error"}
        modalTitle={"Are You Sure ?"}
        modalSubTitle={
          "Do you really want to delete this record? This process cannot be undone."
        }
        submitBtnText={"Delete"}
        key={"DeleteModal"}
      />
    </Container>
  );
};

export default ProductsDetails;
