import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';

export default function NewUser({setFname, setLname, setEmail, setDepartment, handleSubmit, users}) {
  return (
    // <FormControl onSubmit={handleSubmit}>
    <Box sx={{marginTop:'15px', marginLeft:'15px', marginBottom:'15px', gap:'5px'}}>
      <div>
        <h2>Add a new user:</h2>
        <TextField
          required
          sx={{paddingRight:'10px'}}
          id="outlined-required"
          label="First Name"
          placeholder="First Name"
          type="text"
          size="small"
          onChange={(e)=>setFname(e.target.value)}
        />
        <TextField
          required
          sx={{paddingRight:'10px'}}
          id="outlined-required"
          label="Last Name"
          placeholder="Last Name"
          type="text"
          size="small"
          onChange={(e)=>setLname(e.target.value)}
        />
        <TextField
        required
        sx={{paddingRight:'10px'}}
          id="outlined-required"
          label="Email"
          type="email"
          placeholder="Email"
          size="small"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <TextField
        required
        sx={{paddingRight:'10px'}}
          id="outlined-required"
          label="Departmant"
          type="text"
          placeholder="Department"
          size="small"
          onChange={(e)=>setDepartment(e.target.value)}
        />
<Button variant='contained' onClick={handleSubmit}>Add</Button>
      </div>
    </Box>
    // </FormControl>
  );
}
