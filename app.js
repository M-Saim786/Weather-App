const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "548d6622a0mshd5fdd11d991d42fp1cac2fjsnd636ae1fe16a",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

 getweather =(city)=>{
    cityname.innerHTML=city
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +city,
        options
)
.then((response) => response.json())
.then((response) => {
    console.log(response);
    cloud_pct.innerHTML = response.cloud_pct;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    max_temp.innerHTML = response.max_temp;
    min_temp.innerHTML = response.min_temp;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
    temp.innerHTML = response.temp;
    wind_degrees.innerHTML = response.wind_degrees;
ctemp.innerHTML=response.temp
wind_speed.innerHTML = response.wind_speed;
feellike.innerHTML = response.feels_like
winds.innerHTML = response.wind_speed
})
.catch((err) => console.error(err));
}

submit.addEventListener('click', (e)=>{
    e.preventDefault()
getweather(city.value)
getkar()
getlhr()
getisl()
gethyd()
})


getweather('Islamabad')

function getkar(){
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=karachi",
        options
)
.then((response) => response.json())
.then((response) => {
    console.log(response);
    cloudpct.innerHTML = response.cloud_pct;
    feelslike.innerHTML = response.feels_like;
    humidity_kar.innerHTML = response.humidity;
    max_temp_kar.innerHTML = response.max_temp;
    min_temp_kar.innerHTML = response.min_temp;
    sunrise_kar.innerHTML = response.sunrise;
    sunset_kar.innerHTML = response.sunset;
    temp_kar.innerHTML = response.temp;
    wind_degrees_kar.innerHTML = response.wind_degrees;

    // wind_degrees_kar.innerHTML = response.wind_degrees;
    // wind_speed_kar.innerHTML = response.wind_speed;
// ctemp.innerHTML=response.temp
// feellike.innerHTML = response.feels_like
// winds.innerHTML = response.wind_speed
})
.catch((err) => console.error(err));
}


function getlhr(){
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lahore",
        options
)
.then((response) => response.json())
.then((response) => {
    console.log(response);
    cloudpct_lhr.innerHTML = response.cloud_pct;
    feelslike_lhr.innerHTML = response.feels_like;
    humidity_lhr.innerHTML = response.humidity;
    max_temp_lhr.innerHTML = response.max_temp;
    min_temp_lhr.innerHTML = response.min_temp;
    sunrise_lhr.innerHTML = response.sunrise;
    sunset_lhr.innerHTML = response.sunset;
    temp_lhr.innerHTML = response.temp;
    wind_degrees_lhr.innerHTML = response.wind_degrees;
    wind_speed_lhr.innerHTML = response.wind_speed;

    // wind_degrees_kar.innerHTML = response.wind_degrees;
// ctemp.innerHTML=response.temp
// feellike.innerHTML = response.feels_like
// winds.innerHTML = response.wind_speed
})
.catch((err) => console.error(err));
}

// gethyd(hyd)

function getisl(){

    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Islamabad",
        options
)
.then((response) => response.json())
.then((response) => {
    console.log(response);
    cloudpct_isl.innerHTML = response.cloud_pct;
    feelslike_isl.innerHTML = response.feels_like;
    humidity_isl.innerHTML = response.humidity;
    max_temp_isl.innerHTML = response.max_temp;
    min_temp_isl.innerHTML = response.min_temp;
    sunrise_isl.innerHTML = response.sunrise;
    sunset_isl.innerHTML = response.sunset;
    temp_isl.innerHTML = response.temp;
    wind_degrees_isl.innerHTML = response.wind_degrees;
    wind_speed_isl.innerHTML = response.wind_speed;

    // wind_degrees_kar.innerHTML = response.wind_degrees;
// ctemp.innerHTML=response.temp
// feellike.innerHTML = response.feels_like
// winds.innerHTML = response.wind_speed
})
.catch((err) => console.error(err));
}


function gethyd(){
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad",
        options
)
.then((response) => response.json())
.then((response) => {
    console.log(response);
    cloudpct_hyd.innerHTML = response.cloud_pct;
    feelslike_hyd.innerHTML = response.feels_like;
    humidity_hyd.innerHTML = response.humidity;
    max_temp_hyd.innerHTML = response.max_temp;
    min_temp_hyd.innerHTML = response.min_temp;
    sunrise_hyd.innerHTML = response.sunrise;
    sunset_hyd.innerHTML = response.sunset;
    temp_hyd.innerHTML = response.temp;
    wind_degrees_hyd.innerHTML = response.wind_degrees;

    // wind_degrees_kar.innerHTML = response.wind_degrees;
    // wind_speed_kar.innerHTML = response.wind_speed;
// ctemp.innerHTML=response.temp
// feellike.innerHTML = response.feels_like
// winds.innerHTML = response.wind_speed
})
.catch((err) => console.error(err));
}