import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  Chip,
  Modal,
  Button,
  TablePagination,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Delete from "@mui/icons-material/Delete";

// A placeholder for the user's CustomModal component.
// In your application, you would replace this with your actual component.
const CustomModal = ({
  handleCloseAction,
  isModalOpen,
  handleSubmitBtn,
  icon,
  modalColor,
  modalTitle,
  modalSubTitle,
  submitBtnText,
}) => (
  <Modal open={isModalOpen} onClose={handleCloseAction}>
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
        textAlign: "center",
      }}
    >
      {icon}
      <Typography
        variant="h5"
        component="h2"
        sx={{ mt: 2, color: `${modalColor}.main`, fontWeight: "bold" }}
      >
        {modalTitle}
      </Typography>
      <Typography
        variant="body2"
        sx={{ mt: 1, mb: 3, color: "text.secondary" }}
      >
        {modalSubTitle}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button onClick={handleCloseAction} variant="contained" color="inherit">
          Cancel
        </Button>
        <Button
          onClick={handleSubmitBtn}
          variant="contained"
          color={modalColor}
        >
          {submitBtnText}
        </Button>
      </Box>
    </Box>
  </Modal>
);

// Dummy data to mimic the orders coming from a backend.
const DUMMY_ORDERS = [
  {
    id: "ORD101",
    totalPrice: 450,
    orderItems: [{ id: "item1" }, { id: "item2" }, { id: "item3" }],
    userId: "user-abc-123",
    orderStatus: "Processing",
  },
  {
    id: "ORD102",
    totalPrice: 1200,
    orderItems: [{ id: "item4" }],
    userId: "user-def-456",
    orderStatus: "Confirmed",
  },
  {
    id: "ORD103",
    totalPrice: 85,
    orderItems: [{ id: "item5" }, { id: "item6" }],
    userId: "user-ghi-789",
    orderStatus: "Shipped",
  },
  {
    id: "ORD104",
    totalPrice: 220,
    orderItems: [{ id: "item7" }],
    userId: "user-jkl-012",
    orderStatus: "Delivered",
  },
  {
    id: "ORD105",
    totalPrice: 50,
    orderItems: [{ id: "item8" }],
    userId: "user-mno-345",
    orderStatus: "Processing",
  },
  {
    id: "ORD106",
    totalPrice: 150,
    orderItems: [{ id: "item9" }],
    userId: "user-pqr-678",
    orderStatus: "Confirmed",
  },
  {
    id: "ORD107",
    totalPrice: 999,
    orderItems: [{ id: "item10" }],
    userId: "user-stu-901",
    orderStatus: "Shipped",
  },
];

// Helper function to get status color
const getStatusColor = (status) => {
  switch (status) {
    case "Processing":
      return "secondary";
    case "Confirmed":
      return "primary";
    case "Shipped":
      return "info";
    case "Delivered":
      return "success";
    default:
      return "default";
  }
};

const Orders = () => {
  // Use a state to hold the orders data
  const [orders, setOrders] = useState(DUMMY_ORDERS);
  // State for the delete confirmation modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  // State to hold the ID of the order to be deleted
  const [orderToDeleteId, setOrderToDeleteId] = useState(null);
  // States for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handle order status change
  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, orderStatus: newStatus } : order
      )
    );
  };

  // Open the delete confirmation modal and set the order ID
  const handleDeleteClick = (orderId) => {
    setOrderToDeleteId(orderId);
    setDeleteModalOpen(true);
  };

  // Handle the actual deletion after confirmation
  const handleConfirmDelete = () => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderToDeleteId)
    );
    // Close the modal after deletion
    handleCloseModal();
  };

  // Close the delete modal and reset the order ID state
  const handleCloseModal = () => {
    setDeleteModalOpen(false);
    setOrderToDeleteId(null);
  };

  // Handle pagination changes
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when rows per page changes
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: "text.secondary",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <StorefrontIcon fontSize="large" />
        Order Management
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell align="center">Total Price</TableCell>
                <TableCell align="center">Items</TableCell>
                <TableCell align="center">User ID</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.length > 0 ? (
                orders
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((order) => (
                    <TableRow
                      key={order.id}
                      sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                        "&:hover": { backgroundColor: "#e0f7fa" },
                      }}
                    >
                      <TableCell>{order.id}</TableCell>
                      <TableCell align="center">${order.totalPrice}</TableCell>
                      <TableCell align="center">
                        {order.orderItems.length}
                      </TableCell>
                      <TableCell>{order.userId}</TableCell>
                      <TableCell align="center">
                        {/* Conditional dropdown based on status */}
                        {order.orderStatus !== "Delivered" ? (
                          <FormControl variant="outlined" size="small">
                            <Select
                              value={order.orderStatus}
                              onChange={(e) =>
                                handleStatusChange(order.id, e.target.value)
                              }
                              sx={{
                                fontSize: "0.875rem",
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "transparent",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "transparent",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "none",
                                    borderColor: "transparent",
                                  },
                              }}
                              renderValue={(selected) => (
                                <Chip
                                  label={selected}
                                  color={getStatusColor(selected)}
                                  size="small"
                                />
                              )}
                            >
                              {/* Processing -> Confirmed */}
                              {order.orderStatus === "Processing" && (
                                <MenuItem value="Confirmed">Confirm</MenuItem>
                              )}
                              {/* Confirmed -> Shipped */}
                              {order.orderStatus === "Confirmed" && (
                                <MenuItem value="Shipped">Ship</MenuItem>
                              )}
                              {/* Shipped -> Delivered */}
                              {order.orderStatus === "Shipped" && (
                                <MenuItem value="Delivered">Deliver</MenuItem>
                              )}
                              {/* Current status as a disabled option for context */}
                              <MenuItem value={order.orderStatus} disabled>
                                {order.orderStatus}
                              </MenuItem>
                            </Select>
                          </FormControl>
                        ) : (
                          <Chip
                            label="Delivered"
                            color="success"
                            size="small"
                            sx={{ fontWeight: "bold" }}
                          />
                        )}
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleDeleteClick(order.id)}
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ py: 3 }}
                    >
                      No orders to display.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={5}
          component="div"
          count={orders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* Delete Confirmation Modal */}
      <CustomModal
        handleCloseAction={handleCloseModal}
        isModalOpen={deleteModalOpen}
        handleSubmitBtn={handleConfirmDelete}
        icon={<Delete sx={{ color: "error.main", fontSize: 35 }} />}
        modalColor={"error"}
        modalTitle={"Are You Sure ?"}
        modalSubTitle={
          "Do you really want to delete this record? This process cannot be undone."
        }
        submitBtnText={"Delete"}
        key={"DeleteModal"}
      />
    </>
  );
};

export default Orders;
