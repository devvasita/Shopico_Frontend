import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Paper,
  InputLabel,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Country, State } from "country-state-city";

export default function Register() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isValid },
    control,
    setValue,
  } = useForm({
    mode: "all",
    defaultValues: {
      country: "",
      //   state: "",
    },
  });

  const countryList = Country.getAllCountries();

  const selectedCountry = watch("country");

  const statesList = selectedCountry
    ? State.getStatesOfCountry(selectedCountry)
    : [];

  // Agar koi state nahi hai, to state field ko optional kar de
  const isStateRequired = statesList.length > 0;

  // handle api call on submit
  const onSubmit = (data) => {
    console.log("Form Submitted: ", data);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      reset();
    }, 1000);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #2196f3, #21cbf3)",
      }}
    >
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
          elevation={6}
          sx={{
            maxWidth: "sm",
            p: 5,
            borderRadius: 4,
            backdropFilter: "blur(6px)",
            background: "rgba(255,255,255,0.9)",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            align="center"
            color="primary.main"
          >
            Shipping Details
          </Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            {/* Mobile Number */}
            <TextField
              fullWidth
              label="Mobile Number"
              size="small"
              type="tel"
              margin="normal"
              {...register("phoneNumber", {
                required: "Mobile Number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only digits are allowed.",
                },
                minLength: {
                  value: 10,
                  message: "Please enter a valid 10-digit mobile number",
                },
              })}
              error={Boolean(errors.phoneNumber)}
              helperText={errors.phoneNumber?.message}
            />

            {/* Country Dropdown */}
            <FormControl
              fullWidth
              size="small"
              error={!!errors.country}
              margin="normal"
              required
            >
              <InputLabel id="country-label">Country</InputLabel>
              <Controller
                name="country"
                control={control}
                defaultValue=""
                rules={{ required: "Country is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    labelId="country-label"
                    label="Country"
                    onChange={(e) => {
                      field.onChange(e);
                      // Jab country badle, to state ko reset karein
                      setValue("state", "");
                    }}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 48 * 5 + 8,
                        },
                      },
                    }}
                  >
                    {countryList.map((c) => (
                      <MenuItem key={c.isoCode} value={c.isoCode}>
                        {c.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              {errors.country && (
                <FormHelperText>{errors.country.message}</FormHelperText>
              )}
            </FormControl>

            {/* State Dropdown */}
            {isStateRequired ? (
              <FormControl
                fullWidth
                margin="normal"
                size="small"
                error={!!errors.state}
                disabled={!selectedCountry || !isStateRequired}
                required
              >
                <InputLabel id="state-label">State</InputLabel>
                <Controller
                  name="state"
                  control={control}
                  rules={{ required: "State is required" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      labelId="state-label"
                      label="State"
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 48 * 5 + 8,
                          },
                        },
                      }}
                    >
                      {statesList.map((s) => (
                        <MenuItem key={s.isoCode} value={s.isoCode}>
                          {s.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {errors.state && (
                  <FormHelperText>{errors.state.message}</FormHelperText>
                )}
              </FormControl>
            ) : null}

            {/* City */}
            <TextField
              fullWidth
              label="City"
              size="small"
              type="text"
              margin="normal"
              {...register("city", {
                required: "City is required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Only letters are allowed.",
                },
              })}
              error={Boolean(errors.city)}
              helperText={errors.city?.message}
            />

            {/* Pin code */}
            <TextField
              fullWidth
              label="Pin Code"
              type="text"
              margin="normal"
              size="small"
              {...register("pinCode", {
                required: "Pincode is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only digits are allowed.",
                },
              })}
              error={Boolean(errors.pinCode)}
              helperText={errors.pinCode?.message}
            />

            <TextField
              label="Enter Your Address"
              {...register("address", {
                required: "Address is required",
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
              sx={{ mt: 3 }}
              disabled={!isValid || isSubmitting}
            >
              Go to Orders
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
}
