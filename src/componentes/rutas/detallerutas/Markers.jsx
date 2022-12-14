import React from "react";
import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocation";
import { useEffect, useState } from "react";
import axios from "axios";

const Markers = (parametro) => {
  
  
  const [state, setState] = useState({
    la: 0,
    lo: 0,
  });

  const valores = () => {
    axios.get("http://127.0.0.1:8000/api/usuarios/").then((response) => {
      setState(response.data);
      console.log("*******************************");
      console.log(response.data);
      console.log("*******************************");
    });
  };

  useEffect(() => {
    valores();
  }, []);
  console.log(response.data);

  var la = -0;
  var lo = -0;

  if (parametro == 1) {
    la = -16.4622842;
    lo = -71.523988;
  }
  if (parametro == 2) {
    la = -16.4551901;
    lo = -71.5275793;
  }

  if (parametro == 4) {
    la = -16.4068084;
    lo = -71.5640785;
  }

  if (parametro == 7) {
    la = -16.4712077;
    lo = -71.4848218;
  }

  console.log(la)

  return <Marker position={{ lat: la, lng: lo }} icon={IconLocation} />;
};
export default Markers;
