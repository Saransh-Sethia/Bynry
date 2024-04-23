import React,{useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import './UserDetails.css'
import { Button } from '@mui/material';

const UserDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    const navigate = useNavigate();
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.endpoint}/${id}`);
        const result =  response.data;
        console.log('results',result);
        let updatedArray = [];
        updatedArray.push(result)
        setDetails(updatedArray);
      } catch (error) {
        console.log("error", error);
      }
    };
    console.log(details)

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className='details-section'>
    {
        details.map((detail) => (
            <div key={detail.id}>
            <h2>Name : {detail.name}</h2>
            <h2>Email : {detail.email}</h2>
            <h3>Address : {detail.address.street}{" , "}{detail.address.suite}{" , "}{detail.address.city}</h3>
            <h4>Phone : {detail.phone}</h4>
            <h4>Website : {detail.website}</h4>
            </div>
        ))
    }
      <Button onClick={()=>navigate('/')} variant='contained' color='secondary' sx={{marginY:"50px"}}>Back</Button>
    </div>
    
  )
}

export default UserDetails
