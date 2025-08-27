import React from "react";
import {
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@mui/material";

export default function CustomSelect({
    label,
    value,
    onChange,
    options = [],
    fullWidth = true,
    minWidth = 120,
}) {
    return (
        <Box sx={{ minWidth }}>
            <FormControl fullWidth={fullWidth} size="small">
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={onChange} displayEmpty>
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
