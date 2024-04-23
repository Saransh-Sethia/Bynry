import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import config from "../../config";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AddUser from "../AddUser/AddUser";
import "./TableContents.css";


export default function TableContents() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    city: "",
  });
 

  const performApi = async () => {
    const response = await axios.get(config.endpoint);
    const result = response.data;
    setUsers(result);
  };

  const performDelete = async (id) => {
    try {
      const confirm = window.confirm("Would you like to delete?");
      if (confirm) {
        await axios.delete(`${config.endpoint}/${id}`);
        alert("User Deleted Successfully");
        navigate("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      // e.preventDefault()
      // const id = users.id + 1;
      const response = await axios.post(`${config.endpoint}`, formData);
      const result = response.data;
      console.log("Added Successfully", result);
      alert("User Added Successfully");
      setFormData({ username: "", name: "", email: "", city: "" });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    performApi();
  }, []);

  return (
    <>
      <div className="form-container">
        <h3>Add User:</h3>
        <AddUser
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </div>
      <TableContainer sx={{ marginLeft: "20px", marginRight: "20px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <h3>ID</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Username</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Name</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Email</h3>
              </TableCell>
              <TableCell align="center">
                <h3>City</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Actions</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="center">{user.username}</TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.address.city}</TableCell>
                <TableCell align="center" className="secondary-buttons">
                  <Link
                    className="Edit-button"
                    to={`${user.id}`}
                    variant="outlined"
                    color="primary"
                  >
                    Edit
                  </Link>
                  
                  <Button
                    variant="contained"
                    color="error"
                    className="delete-button"
                    onClick={() => performDelete(user.id)}
                  >
                    Delete
                  </Button>
                  <Link
                    className="Details-button"
                    to={`${user.id}/details`}
                    variant="outlined"
                    color="secondary"
                  >
                    Details
                  </Link>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
