import React, { useEffect, useState } from "react";
import "./UserEdit.css";
import { Box, Button, TableCell, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../../config";
import { useNavigate } from "react-router-dom";

const UserEdit = () => {
  const { id } = useParams();
  const [updateData, setUpdateData] = useState({
    id: id,
    fname: "",
    lname: "",
    email: "",
    department: "",
  });

  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get(config.endpoint + id);
      const result = response.data;
      setUpdateData(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = async () => {
    const response = await axios.put(`${config.endpoint}/${id}`, updateData);
    const result = response.data;
    console.log(result);
    alert("Data updated successfully");
    navigate("/");
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Box className="update">
        <TextField
          disabled
          required
          type='number'
          sx={{ marginRight: "15px" }}
          size="small"
          id="outlined-required"
          label="ID"
          value={updateData.id}
        />
        <br />
        <br />
        <TextField
          required
          sx={{ marginRight: "15px" }}
          size="small"
          id="outlined-required"
          label="First Name"
          value={updateData.fname}
          onChange={(e) =>
            setUpdateData({ ...updateData, fname: e.target.value })
          }
        />
        <br />
        <br />
        <TextField
          required
          sx={{ marginRight: "15px" }}
          size="small"
          id="outlined-required"
          label="Last Name"
          value={updateData.lname}
          onChange={(e) =>
            setUpdateData({ ...updateData, lname: e.target.value })
          }
        />
        <br />
        <br />
        <TextField
          required
          sx={{ marginRight: "15px" }}
          size="small"
          id="outlined-required"
          label="Email"
          value={updateData.email}
          onChange={(e) =>
            setUpdateData({ ...updateData, email: e.target.value })
          }
        />
        <br />
        <br />
        <TextField
          required
          sx={{ marginRight: "15px" }}
          size="small"
          id="outlined-required"
          label="Department"
          value={updateData.department}
          onChange={(e) =>
            setUpdateData({ ...updateData, department: e.target.value })
          }
        />
        <br />
        <br />
        <Button variant="contained" color="success" onClick={()=>handleSubmit()}>
          Update
        </Button>
      </Box>
    </>
  );
};

export default UserEdit;
