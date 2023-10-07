import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const AddUser = ({formData, setFormData, handleSubmit}) => {
  return (
    <Box>
      <TextField 
      required sx={{marginRight:'15px'}} 
      size='small' 
      id="outlined-required" 
      label="First Name" 
      value={formData.fname}
      onChange={(e)=>setFormData({...formData, fname:e.target.value})}
       />
      <TextField 
      required sx={{marginRight:'15px'}} 
      size='small' 
      id="outlined-required" 
      label="Last Name" 
      value={formData.lname}
      onChange={(e)=>setFormData({...formData, lname:e.target.value})}
       />
      <TextField 
      required sx={{marginRight:'15px'}} 
      size='small' 
      id="outlined-required" 
      label="Email" 
      value={formData.email}
      onChange={(e)=>setFormData({...formData, email:e.target.value})}
       />
      <TextField 
      required sx={{marginRight:'15px'}} 
      size='small' 
      id="outlined-required" 
      label="Department" 
      value={formData.department}
      onChange={(e)=>setFormData({...formData, department:e.target.value})}
       />
      <Button variant='contained' color='success' onClick={handleSubmit}>Add</Button>
    </Box>
  );
};

export default AddUser;
