import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AdminAddCategory } from "../../redux/slice/ProductSlice/ProductSlice";
import { useToast } from "../../components/common/ToastProvider";

export default function AdminCategory() {
  const dispatch = useDispatch();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (categoryData) => {
    try {
      await dispatch(AdminAddCategory(categoryData)).unwrap();
      reset();
      toast("Category added successfully", "success");
    } catch (error) {
      toast(error, "error");
    }
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
            {...register("categoryName", {
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
