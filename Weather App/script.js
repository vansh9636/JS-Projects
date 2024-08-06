// day :24 Weather app

// this use for weather images 

let images = {
    "Haze": "https://cdn-icons-png.flaticon.com/128/2910/2910067.png",
    "Drizzle": "https://cdn-icons-png.flaticon.com/128/3076/3076129.png",
    "Clouds": "https://cdn-icons-png.flaticon.com/128/2698/2698213.png",
    "Mist": "https://cdn-icons-png.flaticon.com/128/4151/4151022.png",
   "clearSky": "https://cdn-icons-png.flaticon.com/128/869/869767.png",//clear
    "Clear": "https://cdn-icons-png.flaticon.com/128/869/869767.png",
    "Rain": "https://cdn-icons-png.flaticon.com/128/2864/2864403.png",//rain
    "Thunderstorm": "https://cdn-icons-png.flaticon.com/128/1779/1779927.png",
    humidity: "https://cdn-icons-png.flaticon.com/128/5664/5664979.png",
    wind: "https://cdn-icons-png.flaticon.com/128/11742/11742598.png",
};
let imgsKeys = Object.keys(images);

// this is mainlly body of code 
function getLocation() {
    let SearchLocation = document.getElementById('location');
    let searchbtn = document.getElementById('search');
    searchbtn.addEventListener("click", () => {
        if (SearchLocation.value != "") {

            // Api call and get data 

            let apikey = 'efbe10f0fe6f96374bb2f0fa5c4c811e';
            let cityname = SearchLocation.value;
            const fetchweater = async () => {
                try {
                    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`);
                    let newdata = await data.json();
                    console.log(newdata);

                    document.getElementById('temp').innerHTML = `<h1>${((newdata.main.temp) - 273.15).toFixed()}<sup> ℃</sup></h1>
                    <h3>${newdata.weather[0].main}</h3>`;

                    document.getElementById('humidity').innerHTML = `<img src="${images.humidity}" alt="humidity"> ${(newdata.main.humidity)}%<br>Humidity`
                    document.getElementById('wind').innerHTML = `<img src="${images.wind}" alt="wind">${((newdata.wind.speed) * 3.6).toFixed(1)}km/h<br>Wind Speed`;
                    
                    // display weather images++++ with DSA  

                    let weatherImg = newdata.weather[0].main;
                    for (let i = 0; i < imgsKeys.length; i++) {
                        if (weatherImg == imgsKeys[i]) {

                            document.getElementById('watherimgs').innerHTML = `<img src="${images[Object.keys(images)[i]]}" alt=weatherImgs>`
                        }

                    }
                    // if any error in Api and city name;

                } catch (error) {
                    alert("● City not found \n● Api Error");
                }
            };

            fetchweater();

            setTimeout(() => {
                document.getElementById("WeatherDetails").style.display = "block";
            }, 200);

        }
        else {
            alert("Enter City First");
        }


    })

}
getLocation();


