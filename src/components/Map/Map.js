import "./Map.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import config from "../../config";
import React,{useState, useEffect} from "react";

import { Icon, divIcon, point } from "leaflet";
import axios from "axios";

// create custom icon
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("../../assets/placeholder.png"),
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};



const Map = () => {
  const [userDetails, setUserDetails] = useState([]);

  const fetchData = async() => {
    const response = await axios.get(`${config.endpoint}`);
    const result = response.data;
    let userArr = [];
    let resArr = [];
    userArr.push(result);
    for(let i=0; i<=userArr[0].length-1; i++){
      let res = [];
      res.push(result[i].address.geo.lat);
      res.push(result[i].address.geo.lng);
      res.push(result[i].name)
      resArr.push(res)
    }
    setUserDetails(resArr)
  }

  useEffect(()=>{
    fetchData();
  },[]);

return(
    <MapContainer center={[-37.3159, 81.1496]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />


      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >

        {userDetails.map((user) => (
          <Marker key={user.id} position={user} icon={customIcon}>
            <Popup>{user[2]}</Popup>
          </Marker>
        ))}

      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Map;