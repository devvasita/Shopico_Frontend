import React from "react";
import {
    Box,
    Container,
    Typography,
    Link,
    TextField,
    Stack,

} from "@mui/material";
import { grey } from "@mui/material/colors";

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: "primary.main", color: grey[50], py: 6, mt: 'auto' }}>
            <Container >
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={4}
                    justifyContent="space-between"
                >
                    {/* Column 1 */}
                    <Box sx={{ maxWidth: 250 }}>
                        <Typography variant="h5" sx={{
                            fontWeight: 700,
                            letterSpacing: 1,
                            mb: 2
                        }}>
                            Shop<span style={{ color: "#17e2d1ff" }}>ico</span>
                        </Typography>
                        <Typography variant="body2" color={grey[300]} sx={{ mb: 2 }}>
                            The customer is at the heart of our unique business model,
                            which includes design.
                        </Typography>
                        <Box
                            component="img"
                            src="https://i.postimg.cc/Nj9dgJ98/cards.png"
                            alt="Payment Cards"
                            sx={{ width: "100%", maxWidth: 200 }}
                        />
                    </Box>

                    {/* Column 2 */}
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            SHOPPING
                        </Typography>
                        <Stack spacing={1}>
                            <Link href="#" underline="hover" color="inherit">
                                Clothing Store
                            </Link>
                            <Link href="#" underline="hover" color="inherit">
                                Trending Shoes
                            </Link>
                            <Link href="#" underline="hover" color="inherit">
                                Accessories
                            </Link>
                            <Link href="#" underline="hover" color="inherit">
                                Sale
                            </Link>
                        </Stack>
                    </Box>

                    {/* Column 3 */}
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            SHOPPING
                        </Typography>
                        <Stack spacing={1}>
                            <Link href="#" underline="hover" color="inherit">
                                Contact Us
                            </Link>
                            <Link href="#" underline="hover" color="inherit">
                                Payment Methods
                            </Link>
                            <Link href="#" underline="hover" color="inherit">
                                Delivery
                            </Link>
                            <Link href="#" underline="hover" color="inherit">
                                Return and Exchange
                            </Link>
                        </Stack>
                    </Box>

                    {/* Column 4 */}
                    <Box sx={{ maxWidth: 250 }}>
                        <Typography variant="h6" gutterBottom>
                            NEWSLETTER
                        </Typography>
                        <Typography variant="body2" color={grey[300]} sx={{ mb: 2 }}>
                            Be the first to know about new arrivals, look books, sales & promos!
                        </Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Your Email"
                            fullWidth
                            sx={{
                                bgcolor: "primary.main",
                                borderRadius: "25px",
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "white", // visible border
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "white",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "white",
                                        borderWidth: 2, // thicker on focus
                                    },
                                },
                                "& .MuiInputBase-input": {
                                    color: "white", // text color
                                    padding: "10px 14px",
                                },
                                "& input::placeholder": {
                                    color: "rgba(255,255,255,0.7)", // placeholder color
                                    opacity: 1,
                                },
                            }}
                        />
                    </Box>
                </Stack>
            </Container>


        </Box>
    );
};

export default Footer;
