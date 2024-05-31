const img = document.querySelector('img');

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && searchBar.value != "") {
      fetch('https://api.weatherapi.com/v1/current.json?key=4b472e4784244bb2b1c01053241505&q=' + searchBar.value, {mode: 'cors'})
  .then(function(response) {
      return response.json();
  })
  .then(function(response) {
    document.getElementById("location").innerHTML = "The weather in " + response.location.name + ":";
    document.getElementById("condition").innerHTML = response.current.condition.text;
    // document.getElementById("celsius").innerHTML = response.current.temp_c;
    // document.getElementById("fahrenheit").innerHTML = response.current.temp_f;
    let radioButtons = document.getElementsByName('temp_choice');
    for (let radio of radioButtons) {
       if (radio.checked) {
          // console.log("The radio button's value is " + radio.value);
          if (radio.value == "Celsius") {
            document.getElementById("temperature").innerHTML = response.current.temp_c + "º C";
          }
          else if (radio.value == "Fahrenheit") {
            document.getElementById("temperature").innerHTML = response.current.temp_f + "º F";
          }
          else {
            document.getElementById("temperature").innerHTML = "";
          }
       }
    }
    img.src = response.current.condition.icon;
    // getSelectedRadio();
  })
  .catch(function() {
    alert("City not found. Try another search.");
  })
}
});

function getSelectedRadio() {
  let radioButtons = document.getElementsByName('temp_choice');
  for (let radio of radioButtons) {
     if (radio.checked) {
        // console.log("The radio button's value is " + radio.value);
        if (radio.value == "Celsius") {
          document.getElementById("celsius").innerHTML = response.current.temp_c;
        }
        else {
          document.getElementById("fahrenheit").innerHTML = response.current.temp_f;
        }
     }
  }
}