var searchBtn = document.getElementById("btn")
var inputEl = document.getElementById("input")
var currentEl = document.getElementById("current")
var searchedEl = document.getElementById("searched")
var tomorrowEl = document.getElementById("tomorrow")
var twoDays = document.getElementById("2-days")
var threeDays = document.getElementById("3-days")
var fourDays = document.getElementById("4-days")
var fiveDays = document.getElementById("5-days")

var searchHistory = []


function searchWeather() {
    var searchInput = document.getElementById('input').value;
    searchHistory.push(searchInput);
    localStorage.setItem("history", JSON.stringify(searchHistory))
    console.log(searchHistory);

    fetch('http://api.positionstack.com/v1/forward?access_key=8b6705bd3db1ed3c15005b1f93926e8e&query=' + searchInput)
        .then(function (response) {
            return response.json();
        })
        .then(function (searchLatLong) {
            fetch('https://api.openweathermap.org/data/2.5/forecast?q=&units=imperial&lat='
                + searchLatLong.data[0].latitude +
                '&lon=' + searchLatLong.data[0].longitude +
                '&appid=ed1046bfd39dfccf90056ddb1ce2091e')
                .then(function (response) {
                    return response.json();
                })
                .then(function (weatherData) {
                    var temp = document.createElement("h4")
                    temp.innerHTML = weatherData.list[2].main.temp + " Degrees Farenheit"
                    var visibility = document.createElement("h4")
                    visibility.innerHTML = weatherData.list[2].weather[0].description
                    var time = document.createElement("h4")
                    time.innerHTML = weatherData.list[2].dt_txt
                    currentEl.prepend(time)
                    currentEl.appendChild(temp)
                    currentEl.appendChild(visibility)
                    console.log(weatherData)

                    var temp1 = document.createElement("h6")
                    temp1.innerHTML = weatherData.list[10].main.temp + " Degrees Farenheit"
                    var visibility1 = document.createElement("h6")
                    visibility1.innerHTML = weatherData.list[10].weather[0].description
                    var time1 = document.createElement("h5")
                    time1.innerHTML = weatherData.list[10].dt_txt
                    tomorrowEl.append(temp1)
                    tomorrowEl.appendChild(visibility1)
                    tomorrowEl.prepend(time1)

                    var temp2 = document.createElement("h6")
                    temp2.innerHTML = weatherData.list[18].main.temp + " Degrees Farenheit"
                    var visibility2 = document.createElement("h6")
                    visibility2.innerHTML = weatherData.list[18].weather[0].description
                    var time2 = document.createElement("h5")
                    time2.innerHTML = weatherData.list[18].dt_txt
                    twoDays.append(temp2)
                    twoDays.appendChild(visibility2)
                    twoDays.prepend(time2)

                    var temp3 = document.createElement("h6")
                    temp3.innerHTML = weatherData.list[26].main.temp + " Degrees Farenheit"
                    var visibility3 = document.createElement("h6")
                    visibility3.innerHTML = weatherData.list[26].weather[0].description
                    var time3 = document.createElement("h5")
                    time3.innerHTML = weatherData.list[26].dt_txt
                    threeDays.append(temp3)
                    threeDays.appendChild(visibility3)
                    threeDays.prepend(time3)

                    var temp4 = document.createElement("h6")
                    temp4.innerHTML = weatherData.list[34].main.temp + " Degrees Farenheit"
                    var visibility4 = document.createElement("h6")
                    visibility4.innerHTML = weatherData.list[34].weather[0].description
                    var time4 = document.createElement("h5")
                    time4.innerHTML = weatherData.list[34].dt_txt
                    fourDays.append(temp4)
                    fourDays.appendChild(visibility4)
                    fourDays.prepend(time4)

                    var temp5 = document.createElement("h6")
                    temp5.innerHTML = weatherData.list[39].main.temp + " Degrees Farenheit"
                    var visibility5 = document.createElement("h6")
                    visibility5.innerHTML = weatherData.list[39].weather[0].description
                    var time5 = document.createElement("h5")
                    time5.innerHTML = weatherData.list[39].dt_txt
                    fiveDays.append(temp5)
                    fiveDays.appendChild(visibility5)
                    fiveDays.prepend(time5)
                })
        })
}
// $("#input").blur(function () {

//     localStorage.getItem("history", searchHistory)
//     console.log(searchHistory)
//     searchHistory.forEach(value => {
//         var history = document.createElement("p")
//         history.innerHTML = searchHistory(value);
//         searchedEl.appendChild(history)
//     })

// })

searchBtn.addEventListener("click", searchWeather)