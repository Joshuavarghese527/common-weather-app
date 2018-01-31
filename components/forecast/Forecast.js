import React from "react";

const Forecast = props => (
   <div>
      { props.temperature && <p>Temperature: { props.temperature}</p> }
      { props.error && <p> { props.error} </p> }
    </div>
);

export default Forecast;