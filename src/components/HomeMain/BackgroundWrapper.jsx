import Box from "@mui/material/Box";

export default function BackgroundWrapper({ image, children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `linear-gradient(to right ,rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.3)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}

    >
      {children}
    </Box>
  );
}
