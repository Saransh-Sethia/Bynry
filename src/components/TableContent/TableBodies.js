import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Button } from "@mui/material";
import TableRow from "@mui/material/TableRow";
const TableBodies = ({ user, id, performEdit }) => {
  return (
    <TableRow key={user.id}>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.fname}</TableCell>
      <TableCell>{user.lname}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.department}</TableCell>
      <TableCell align="center">
      <Button variant='contained' color='success'>Edit</Button>
        <Button variant='contained' color='error'>DELETE</Button>
      </TableCell>
    </TableRow>
  );
};

export default TableBodies;
