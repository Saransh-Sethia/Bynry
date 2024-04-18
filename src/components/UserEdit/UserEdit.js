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
    username: "",
    name: "",
    email: "",
    city: "",
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
    try {
      if(updateData.username.length === 0 || updateData.name.length === 0 || updateData.email.length ===0 || updateData.city.length === 0){
        alert("Kindly Fill all the details");
        return;
      }
      const response = await axios.put(`${config.endpoint}/${id}`, updateData);
      const result = response.data;
      console.log('Updated Successfully',result);
      alert("Data updated successfully");
      navigate("/");
    } catch(error){
      console.log('error',error)
    }

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
          label="Username"
          value={updateData.username}
          onChange={(e) =>
            setUpdateData({ ...updateData, username: e.target.value })
          }
        />
        <br />
        <br />
        <TextField
          required
          sx={{ marginRight: "15px" }}
          size="small"
          id="outlined-required"
          label="Name"
          value={updateData.name}
          onChange={(e) =>
            setUpdateData({ ...updateData, name: e.target.value })
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
          label="City"
          value={updateData.department}
          onChange={(e) =>
            setUpdateData({ ...updateData, city: e.target.value })
          }
        />
        <br />
        <br />
        <Button variant="contained" sx={{backgroundColor:'#020030'}} onClick={()=>handleSubmit()}>
          Update
        </Button>
      </Box>
    </>
  );
};

export default UserEdit;
