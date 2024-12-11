import React from 'react';
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function Googlemap(){
    const mapContainerStyle = {
        width: "625px",
        height: "510px",
    
      };
    
      const center = {
        lat: 26.846695, // Example: Latitude for San Francisco
        lng: 80.946167, // Longitude for San Francisco
      };
       
      
    
      
    
    
    return(
        <React.Fragment> 
        <div className='mt-[130px] ml-[0.2px] fixed left-0 z-[-1]'>
            <LoadScript googleMapsApiKey="AIzaSyAY7dW0aGLqyEKR5mqDnK7gN_XECy_9_oo">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
       
      />
    </LoadScript> 
 
    </div>
        </React.Fragment>
    )
}

export default Googlemap;
