"use strict"

let weatherAPI = "http://api.openweathermap.org/data/2.5/forecast";
let accessToken = MAPBOX_TOKEN;
mapboxgl.accessToken = MAPBOX_TOKEN;


let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    zoom: 10,
    center: [-96.802944, 32.777995]

});



$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID,
    q:     "Dallas, US",
    units: "imperial",
    cnt: 7,


}).done(function(data) {
    for(let i = 0; i <= data.length;  i+=8){
    };
});

map.addControl(new mapboxgl.NavigationControl());

$('#search-btn').click(() => {
    const search = $('#search-input').val()
    geocode(search, mapboxgl.accessToken).then((location) => {
        map.setCenter(location)
        map.setZoom(11)

        let marker = new mapboxgl.Marker()
            .setLngLat([location[0], location[1]])
            .addTo(map)
    })
    ajaxCall(location)
    revGeo(location[0], location[1])


});

let ajaxCall = (arr) => {
    $.get(weatherAPI, {
        APPID: OPEN_WEATHER_APPID,
        lat: arr[1],
        lon: arr[0],
        units: "imperial"
    }).done(function (data) {

        let forecasts = data.list
        let forecastHTML = append(forecasts)
        $('#weather').html(forecastHTML)

        let city = data.city.name
        let country = data.city.country
        $('#city-name').html(`${city}, ${country}`);
    })

}

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHER_APPID,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
 let html = ``
    for (let i = 0; i < data.length; i += 8) {
        const {
            dt_txt,
            main: {humidity, temp, temp_max, temp_min},
            weather: [{description, icon}],
            wind: {speed}
        } = data[i]
        html += `
            <div class="card  col-xxl">
               <h6 class="card-header date text-center ">${dt_txt.substring(5, 7)}/${dt_txt.substring(8, 10)}/${dt_txt.substring(0, 4)}</h6>               
              <div class="card-body pt-0">
              <h4 class="card-title text-center">${temp.toFixed(1)}ºF</h4>
                <div class="d-flex justify-content-around" >
                <p class="card-text mb-0 text-warning pe-1"> H: ${temp_max.toFixed(1)}ºF </p>
                <p class="card-text mb-0 text-warning" > L: ${temp_min.toFixed(1)}ºF</p>
                </div>
              </div>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item humidity">Humidity: ${humidity}%</li>
                <li class="list-group-item wind">Wind: ${speed} mph</li>
              </ul>
              <div class="card-body p-0 ">
              <p class="list-group-item bg-secondary text-light text-center p-0 m-0">${description.toUpperCase()}</p>
              </div>
            </div>`
    }
    return html
})
function geoLocation() {
    const successCallback = (position) => {
        let lat = (position.coords.latitude)
        let lng = (position.coords.longitude)
        let currentLocation = [lng, lat];

    };

    const errorCallback = (error) => {
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};


//reverse geo location function
let revGeo = (lng, lat) => {
    reverseGeocode({lng, lat}, MAPBOX_TOKEN).then(function (results) {
        $('#city').text(`${results}`)

    })
}

