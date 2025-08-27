import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

// Pure full-page loading overlay with circular loader (always visible)
export default function LoadingOverlay() {
    return (
        <Backdrop
            sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={true}
        >
            <CircularProgress color="inherit" size={80} />
        </Backdrop>
    );
}