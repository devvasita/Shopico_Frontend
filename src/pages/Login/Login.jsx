import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AdminLoginAuth } from "../../redux/slice/AdminAuthSlice/AdminSlice";
import { useToast } from "../../components/common/ToastProvider";

export default function SignInPage() {
  const [passShow, setPassShow] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (formData) => {
    try {
      await dispatch(AdminLoginAuth(formData)).unwrap();
      toast("Login Successful!", "success");
      navigate("/admin/dashboard", { replace: true });
    } catch (err) {
      toast(err || "Login failed", "error");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #2196f3, #21cbf3)", // 💙 gradient
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: 4,
            backdropFilter: "blur(6px)",
            background: "rgba(255,255,255,0.9)", // semi-transparent white
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            align="center"
            color="primary.main"
          >
            Sign In
          </Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: "Enter a valid email",
                },
              })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />

            {/* Password */}
            <TextField
              fullWidth
              label="Password"
              type={passShow ? "text" : "password"}
              margin="normal"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Min length is 6 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Max length is 12 Characters",
                },
              })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setPassShow(!passShow)}>
                      {passShow ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
              startIcon={isSubmitting && <CircularProgress size={20} />}
            >
              Login
            </Button>

            {/* Links */}
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don't have an account?{" "}
              <NavLink
                to="/register"
                style={{ color: "primary.main", fontWeight: "bold" }}
              >
                Sign Up
              </NavLink>
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 1, fontWeight: "bold" }}
            >
              Forgot Password?{" "}
              <NavLink to="/forgotpassword" style={{ color: "primary.main" }}>
                Click Here
              </NavLink>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
