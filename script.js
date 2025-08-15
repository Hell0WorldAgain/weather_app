const button = document.getElementById("search_button");
const input = document.getElementById("city_input");

const cityName = document.getElementById('city_name');
const cityTemp = document.getElementById('city_temp');
const cityTime = document.getElementById('city_time');

async function getData(cityName){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=124034dbb2504f938cd200528251508&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}

button.addEventListener('click', async () => {
    //console.log(input.value);
    // alert('Clicked');

    const value = input.value;
    const result = await getData(value);

    //console.log(result);

    cityName.innerText = `Location: ${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTime.innerText = `Localtime: ${result.location.localtime}`;
    cityTemp.innerText = `Temperature: ${result.current.temp_c}°C`;

})