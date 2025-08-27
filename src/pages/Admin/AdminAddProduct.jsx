import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  CircularProgress,
  Paper,
  Divider,
  Avatar,
  Grid,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  FormHelperText,
} from "@mui/material";
import { Close, Upload } from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function RegisterProduct() {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitting, isValid },
    trigger,
  } = useForm({
    mode: "all",
    defaultValues: {
      category: "",
    },
  });

  const fileInputRef = useRef(null);

  // To remove the uploaded file
  const handleRemoveFile = () => {
    setPreview(null);
    setValue("productImage", null);
    trigger();
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Handle API call on form submission
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    setLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      setPreview(null);
      reset();
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      console.log("Product registered successfully!");
    }, 2000); // Simulate a 2-second loading period
  };

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
        sx={{ fontWeight: "bold", color: "text.secondary" }}
      >
        <AddBoxIcon fontSize="large" sx={{ verticalAlign: "middle", mr: 1 }} />
        Add Product
      </Typography>

      <Divider sx={{ mb: 4 }} />
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="60vh"
        >
          <CircularProgress size={60} sx={{ color: "white" }} />
        </Box>
      ) : (
        <Paper
          sx={{
            maxWidth: "lg", // Use a larger max width for the product form
            p: 5,
            borderRadius: 4,
            backdropFilter: "blur(6px)",
            background: "rgba(255,255,255,0.9)",
          }}
        >
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              {/* Left Column for Form Fields (8/12 on medium screens) */}
              <Grid size={{ xs: 12, md: 8 }} sx={{ order: { xs: 2, md: 1 } }}>
                {/* Product Name */}
                <TextField
                  fullWidth
                  label="Product Name"
                  size="small"
                  margin="normal"
                  {...register("productName", {
                    required: "Product name is required",
                  })}
                  error={Boolean(errors.productName)}
                  helperText={errors.productName?.message}
                />

                {/* Product Category */}

                <FormControl
                  fullWidth
                  size="small"
                  error={!!errors.category}
                  margin="normal"
                >
                  <InputLabel id="category-label">Country</InputLabel>
                  <Controller
                    name="category"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Category is required" }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="category-label"
                        label="category"
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 48 * 5 + 8,
                            },
                          },
                        }}
                      >
                        <MenuItem> One</MenuItem>
                        <MenuItem> Two</MenuItem>
                        <MenuItem> Three</MenuItem>
                        {/* {countryList.map((c) => (
                          <MenuItem key={c.isoCode} value={c.isoCode}>
                            {c.name}
                          </MenuItem>
                        ))} */}
                      </Select>
                    )}
                  />
                  {errors.category && (
                    <FormHelperText>{errors.category.message}</FormHelperText>
                  )}
                </FormControl>

                <Grid container spacing={2}>
                  {/* Price */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Price"
                      type="number"
                      size="small"
                      margin="normal"
                      {...register("price", {
                        required: "Price is required",
                        valueAsNumber: true,
                        min: { value: 0, message: "Price must be positive" },
                      })}
                      error={Boolean(errors.price)}
                      helperText={errors.price?.message}
                    />
                  </Grid>

                  {/* Discount */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Discount (%)"
                      type="number"
                      size="small"
                      margin="normal"
                      {...register("discount", {
                        valueAsNumber: true,
                        min: {
                          value: 0,
                          message: "Discount can't be negative",
                        },
                      })}
                      error={Boolean(errors.discount)}
                      helperText={errors.discount?.message}
                    />
                  </Grid>
                </Grid>

                {/* Quantity */}
                <TextField
                  fullWidth
                  label="Quantity"
                  type="number"
                  size="small"
                  margin="normal"
                  {...register("quantity", {
                    required: "Quantity is required",
                    valueAsNumber: true,
                    min: {
                      value: 1,
                      message: "Quantity must be at least 1",
                    },
                  })}
                  error={Boolean(errors.quantity)}
                  helperText={errors.quantity?.message}
                />

                {/* Product Description */}
                <TextField
                  fullWidth
                  label="Product Description"
                  multiline
                  rows={4}
                  margin="normal"
                  {...register("productDescription", {
                    required: "Description is required",
                    minLength: {
                      value: 20,
                      message: "Description must be at least 20 characters",
                    },
                  })}
                  error={Boolean(errors.productDescription)}
                  helperText={errors.productDescription?.message}
                />
              </Grid>

              {/* Right Column for Image Upload (4/12 on medium screens) */}
              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "start",
                  order: { xs: 1, md: 2 },
                }}
              >
                <input
                  accept="image/*"
                  hidden
                  id="upload-product-image-file"
                  type="file"
                  {...register("productImage", {
                    required: "Product image is required",
                    validate: {
                      lessThan2MB: (file) =>
                        file.size < 2 * 1024 * 1024 ||
                        "File size should be < 2MB",
                      acceptedFormats: (file) =>
                        ["image/jpeg", "image/png"].includes(file.type) ||
                        "Only JPG/PNG are allowed",
                    },
                  })}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setPreview(URL.createObjectURL(file));
                      setValue("productImage", file, { shouldValidate: true });
                    }
                  }}
                  ref={fileInputRef}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                  }}
                >
                  {!preview ? (
                    <label
                      htmlFor="upload-product-image-file"
                      style={{ display: "block", cursor: "pointer" }}
                    >
                      <Box
                        sx={{
                          height: 300,
                          width: 300,
                          borderRadius: "10px",
                          border: "2px dashed",
                          borderColor: "primary.main",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          "&:hover": {
                            backgroundColor: "rgba(0,0,0,0.05)",
                          },
                        }}
                      >
                        <Upload sx={{ color: "grey.500", fontSize: 50 }} />
                      </Box>
                    </label>
                  ) : (
                    <Box
                      sx={{
                        position: "relative",
                        height: 300,
                        width: 300,
                        borderRadius: "10px",
                      }}
                    >
                      <Avatar
                        src={preview}
                        variant="rounded"
                        alt="Product Image Preview"
                        sx={{ width: 300, height: 300 }}
                      />
                      <IconButton
                        onClick={handleRemoveFile}
                        color="primary"
                        size="small"
                        sx={{
                          position: "absolute",
                          top: -30,
                          right: 0,
                          transform: "translate(25%, -25%)",
                          backgroundColor: "rgba(255,255,255,0.8)",
                          "&:hover": {
                            backgroundColor: "rgba(255,255,255,1)",
                          },
                        }}
                      >
                        <Close />
                      </IconButton>
                    </Box>
                  )}
                  {errors.productImage && (
                    <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                      {errors.productImage.message}
                    </Typography>
                  )}
                </Box>
              </Grid>
            </Grid>

            {/* Submit Button */}
            <Button
              fullWidth
              variant="contained"
              type="submit"
              size="large"
              sx={{ mt: 4 }}
              disabled={!isValid || isSubmitting}
            >
              Add Product
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
}
