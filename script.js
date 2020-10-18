const APIKEY = '0b5f28b7f8d8a240d3653b1eb5b0c166';
// Appel a l'API openWeather avec ville en parametre
let apiCall = function(city){
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then(response => 
        response.json().then(data => {
            console.log(data);
            document.querySelector("#city").innerHTML = data.name;
            document.querySelector("#temp").innerHTML ="<i class = 'fas fa-thermometer-half'></i>" + data.main.temp + '°';
            document.querySelector("#humidity").innerHTML = "<i class = 'fas fa-tint'></i>" + data.main.humidity + '%';
            document.querySelector("#wind").innerHTML = "<i class ='fas fa-wind'></i>" + data.wind.speed + 'km/h';
        
        })
    ).catch(err => console.log('Erreur : ' + err));
}

/// Ecouteur d'evenement  sur la soumission 
document.querySelector("form").addEventListener('submit', function(e){
    e.preventDefault();
   let ville = document.querySelector('#inputCity').value;
    
   apiCall(ville);
});
/// appel par defaut au chargement de la page 
apiCall('Niamey')