import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
export default class Maps extends Component {
  render() {
    return (
      <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyB-mWELlrgmjuTIgIPjyuGukrdtJ5xDTfY"}

          style={{ height: "100%", width: "50%", position: "absolute" }}
          zoom={12}
          center={{
            lat: 39.466667,
            lng: -0.375000
          }}
          markers={[
            { lat: 40.409711, lng: -3.692569 },
            { lat: 40.412072, lng: -3.676463 },
            { lat: 40.451824, lng: -3.690759 }
          ]}
        />
      </div>
    );
  }
}