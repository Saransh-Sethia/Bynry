import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import "./TableContent.css";
import config from "../../config";
import TableBodies from "./TableBodies";
import { Button, TableBody } from "@mui/material";
import NewUser from "../NewUser/NewUser";
import UserEdit from "../UserEdit/UserEdit";

export default function TableContent() {
  const [users, setUsers] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [editUserId, setEditUserId] = useState(-1);

  const performApi = async () => {
    try {
      const response = await axios.get(config.endpoint);
      const result = response.data;
      setUsers(result);
      console.log("result", result);
    } catch (error) {
      console.log("error", error);
    }
  };

  const postApi = async (event) => {
    try {
      event.preventDefault();
      let id = users.length + 1;
      const response = await axios.post(config.endpoint, {
        id: id,
        fname: fname,
        lname: lname,
        email: email,
        department: department,
      });
      const result = response.data;
      console.log(result);
      // setFname(users.data.fname)
      // setLname(users.data.lname)
      // setEmail(users.data.email)
      // setDepartment(users.data.department)
      //setUsers(result)
      // setFname('')
      // setLname('')
      // setEmail('')
      // setDepartment('')
      
    } catch (error) {
      console.log("error", error);
    }
  };

  // const deleteApi = async (id) => {
  //   const response = await axios.delete(config.endpoint + id);
  //   const result = response.data;
  //   setUsers(result);
  // };

  const performEdit = async (id) => {
    setEditUserId(id);
  };

  const performUpdate = async() => {
    try{
      const response = await axios.put(`${config.endpoint}/` + editUserId, fname, lname, email, department);
      console.log(response);
      Location.reload();
      setEditUserId(-1);
    } catch(error){
      console.log('error', error)
    }

  }

  useEffect(() => {
    performApi();
    postApi();
    // deleteApi();
    performUpdate();
  }, []);

  return (
    <>
      <div>
        <NewUser
          setFname={setFname}
          setLname={setLname}
          setEmail={setEmail}
          setDepartment={setDepartment}
          handleSubmit={postApi}
          users={users}
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Department</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user, id) =>
              user.id === editUserId ? (
                <TableRow>
                  <UserEdit
                    setFname={setFname}
                    setLname={setLname}
                    setEmail={setEmail}
                    setDepartment={setDepartment}
                    handleUpdate={performUpdate}
                    user={user}
                  />
                </TableRow>
              ) : (
                <TableBodies
                  user={user}
                  key={id}
                  id={id}
                  //handleDelete={deleteApi}
                  performEdit={performEdit}
                />
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
