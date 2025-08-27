import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import TablePagination from "@mui/material/TablePagination";

// Mock data to demonstrate the table structure.
// In a real application, you would use props passed from the parent component.
const mockUsers = [
  {
    _id: "1",
    firstname: "Alice",
    email: "alice@example.com",
    userprofile: "https://i.pravatar.cc/150?img=1",
  },
  {
    _id: "2",
    firstname: "Bob",
    email: "bob@example.com",
    userprofile: "https://i.pravatar.cc/150?img=2",
  },
  {
    _id: "3",
    firstname: "Charlie",
    email: "charlie@example.com",
    userprofile: "https://i.pravatar.cc/150?img=3",
  },
  {
    _id: "4",
    firstname: "David",
    email: "david@example.com",
    userprofile: "https://i.pravatar.cc/150?img=4",
  },
  {
    _id: "5",
    firstname: "Eve",
    email: "eve@example.com",
    userprofile: "https://i.pravatar.cc/150?img=5",
  },
];

const AdminuserTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const usersToDisplay = mockUsers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleMenuClick = (event, userId) => {
    setAnchorEl(event.currentTarget);
    setSelectedUserId(userId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedUserId(null);
  };

  const handleDeleteuser = (id) => {
    // In your real application, you would dispatch a Redux action here.
    // console.log(`Deleting user with ID: ${id}`);
    handleMenuClose();
    // Replaced alert with a mock action, as alerts are not ideal in this environment.
    console.log(
      `This is a mock deletion. In a real app, user ${id} would be deleted.`
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer sx={{ maxHeight: 400, overflowY: "auto", pr: 2 }}>
        <Table stickyHeader aria-label="user table">
          <TableHead
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? theme.palette.grey[900]
                  : theme.palette.grey[200],
              "& .MuiTableCell-root": {
                fontWeight: "bold",
                color: (theme) => theme.palette.text.primary,
              },
            }}
          >
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Profile</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersToDisplay.length > 0 ? (
              usersToDisplay.map((user, index) => (
                <TableRow key={user._id}>
                  <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                  <TableCell>{user.firstname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Avatar src={user.userprofile} alt={user.firstname} />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="more"
                      aria-controls={`action-menu-${user._id}`}
                      aria-haspopup="true"
                      onClick={(event) => handleMenuClick(event, user._id)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id={`action-menu-${user._id}`}
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl) && selectedUserId === user._id}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={() => handleDeleteuser(user._id)}>
                        <DeleteIcon sx={{ mr: 1, color: "red" }} />
                        <Typography>Delete</Typography>
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography variant="body1" color="text.secondary">
                    No Users Available
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={mockUsers.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </>
  );
};

export default AdminuserTable;
