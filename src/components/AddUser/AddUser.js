import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const AddUser = ({formData, setFormData, handleSubmit}) => {
  return (
    <Box className="add-user">
      <TextField 
      required sx={{marginRight:'15px'}} 
      size='small' 
      id="outlined-required" 
      label="Username" 
      value={formData.username}
      onChange={(e)=>setFormData({...formData, username:e.target.value})}
       />
      <TextField 
      required sx={{marginRight:'15px'}} 
      size='small' 
      id="outlined-required" 
      label="Name" 
      value={formData.name}
      onChange={(e)=>setFormData({...formData, name:e.target.value})}
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
      label="City" 
      value={formData.city}
      onChange={(e)=>setFormData({...formData, city:e.target.value})}
       />
      <Button variant='contained' sx={{backgroundColor:"#03136b", color:"#ffffff", fontSize:'14px'}} onClick={()=>handleSubmit()}>Add</Button>
    </Box>
  );
};

export default AddUser;
