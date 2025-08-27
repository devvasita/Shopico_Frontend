import { Close } from '@mui/icons-material';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material';



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

const CustomModal = ({ modalColor, handleCloseAction, handleSubmitBtn, isModalOpen, modalTitle, modalSubTitle, icon, submitBtnText }) => {
    return (
        <Modal open={isModalOpen} onClose={handleCloseAction}>
            <Box sx={style}>
                {/* Close button */}
                <IconButton
                    onClick={handleCloseAction}
                    sx={{ position: "absolute", top: 8, right: 8 }}
                >
                    <Close />
                </IconButton>

                {/* Red circle with delete icon */}
                <Box
                    sx={{
                        border: "2px solid ",
                        borderColor: `${modalColor}.main`,
                        borderRadius: "50%",
                        width: 60,
                        height: 60,
                        mx: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                    }}
                >
                    {icon}
                </Box>

                <Box textAlign={'center'}>

                    <Typography variant="h6" gutterBottom>
                        {modalTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={3}>
                        {modalSubTitle}
                    </Typography>
                </Box>

                {/* Buttons for cancel and delete  */}
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                    <Button
                        onClick={handleCloseAction}
                        fullWidth
                        variant="outlined"
                    >
                        Cancel
                    </Button>
                    <Button onClick={handleSubmitBtn} variant="contained" color={modalColor} fullWidth>
                        {submitBtnText}
                    </Button>
                </Box>
            </Box>
        </Modal>

    );
};

export default CustomModal;