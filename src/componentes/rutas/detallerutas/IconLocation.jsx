
import React from "react";
import L from "leaflet"
import Icon from "../assets2/icon.svg"


 export const IconLocation = L.icon({
   
    iconUrl: Icon,
    iconRetinaUrl:  Icon,

    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize:  [35 , 35],
    className: "leaflet-venue-icon"

})
