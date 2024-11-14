const wghtMax = 900;
const wghtMin = 100;

window.addEventListener('load', function(){
  
  checkWeather();

  const refreshButton = document.getElementById('update');

  refreshButton.addEventListener('click', function(){
    checkWeather();
  });

});

function checkWeather(){
  //get value from input field
  let cityInput = document.getElementById('cityinput').value;
  console.log(cityInput);

  const messageElement = document.getElementById('message');
  //See documentation at https://openweathermap.org/current
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityInput+'&appid=a0be2ca7d3101a5b3e8a3bbf580143f6&units=imperial')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if( data.cod == '404' ){
        //error in getting data, display error
        messageElement.innerText = data.message;
      }else{
        messageElement.innerText = ""; //clear message
        processWeatherData(data);
      }      
    })
    .catch(error => console.log(error));


  function processWeatherData(data){

       let currentTemp = data["main"]["temp"];
       let feelsTemp = data["main"]["feels_like"];

       document.getElementById('temp').innerText = currentTemp;
       document.getElementById('feels').innerText = feelsTemp;

      let fontWeight = feelsTemp*10; // wght, goes from 100 to 1000 — font weight
      
      //limit range to maximum / minimum values of design space
      if( fontWeight > wghtMax){
        fontWeight = wghtMax;
      }else if( fontWeight < wghtMin){
        fontWeight = wghtMin;
      }

      console.log(fontWeight);

      let element = document.querySelector('.highlight');
      element.style.setProperty('--wght', fontWeight);
  }
}
