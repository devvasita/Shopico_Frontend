import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Divider,
} from "@mui/material";

import { useForm } from "react-hook-form";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

export default function AdminCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log("Form Submitted: ", data);
  };

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
        sx={{ fontWeight: "bold", color: "text.secondary" }}
      >
        <CategoryOutlinedIcon
          fontSize="large"
          sx={{ verticalAlign: "middle", mr: 1 }}
        />
        Add Category
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Paper
        sx={{
          p: 5,
          borderRadius: 4,
          backdropFilter: "blur(6px)",
          background: "rgba(255,255,255,0.9)", // semi-transparent white
        }}
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <TextField
            fullWidth
            label="Category"
            size="small"
            type="text"
            margin="normal"
            {...register("category", {
              required: "Category is required",
            })}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />

          {/* Description */}
          <TextField
            label="Description"
            {...register("description", {
              required: "Description is required",
            })}
            type="text"
            multiline
            margin="normal"
            minRows={4}
            maxRows={8}
            variant="outlined"
            fullWidth
          />

          {/* Submit Button */}
          <Button
            fullWidth
            variant="contained"
            type="submit"
            size="large"
            sx={{
              mt: 3,
            }}
            disabled={!isValid || isSubmitting}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </>
  );
}
