import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// define the axios line for the (error of axios is not defined )  //
import axios from "axios";






function Kq() {


// create a const for the city
const [city, setcity] = React.useState({city:""});





 



// create a new const for the weatherdata //
const [weatherData, setWeatherData] = React.useState(null);





// create a new const for the data //
const [data, setData] = React.useState("")





// give a apikey for the application //
let apikey = "5f114b623b2c42d49c3102625230807";




// create a handlechange for the weather app  for input field
const handlechange = (e, type) => {
    setData({...data,[e.target.name]:e.target.value})
  };




// create a handlesubmit for the weather app //
const handlesubmit = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${data.city}&aqi=no`
      )       


      .then((msg) => {
        console.log("temp", msg.data.current.temp_c);
        console.log("fehenheit", msg.data.current.temp_f);



// This will give the condition for the data 
setWeatherData(msg.data); 
      
})

      
      .catch((err) => {
        console.log("Error: ", err);
      });
  };




  return (
    <>
      
      
{/* // this is a nav bar from the bootstrap */}
<Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <center> Current Weather Information </center>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <br></br>

      <hr></hr>

      <center>
        <b>city</b>

        <input
          type="text"
          name="city"

           value={data.city}

          onChange={(e) => handlechange(e, "city")}
        />

        <br></br>
        <br></br>
        <button type="button" className="btn btn-warning" onClick={handlesubmit}>
          submit
        </button>



<div class="weat">

{/*Add the card for displaying the data with the logo  */}
{weatherData && (
          <div className="card mt-4" style={{ width: "18rem" }}>
            
            {/* // this will give the images of the sun and other through this  */}
            
            <img
              src={weatherData.current.condition.icon}


              className="card-img-top"
              alt={weatherData.current.condition.text}
            />
            <div className="card-body">



            {/* this will give the location of the weather data  */}


              <h5 className="card-title">{weatherData.location.name}</h5>
              <p className="card-text">
                <b>Temperature:</b> {weatherData.current.temp_c} °C
                <br />

                <u>Condition:</u> {weatherData.current.condition.text}

                 {/* <u>status:</u> {weatherData.current.status.text} */}

{/* this will another best data for the different weather displays  */}

                 <br></br>
<strong>Feels like:</strong> {weatherData.current.feelslike_c} °C

            <br></br>
<strong>Humidity :</strong> {weatherData.current.humidity } °C

            <br></br>
<strong>speed :</strong> { weatherData.current.wind_kph } °C


                <br />
               
              </p>
            </div>
          </div>
        )}

<br></br>

<b>Thank you for using the weather app ☁️🌡️</b>

</div>
      </center>
      
    </>
  );
}

export default Kq;





