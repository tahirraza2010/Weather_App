const API_KEY = `ab5ff013d0fefc19edee0709f140f368`;
const divWork = document.getElementById("div");
const input = document.getElementById("inputfield")
const searchData = async () => {
    divWork.innerHTML = `<div class="spinner-border text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}&units=metric`;
    const fetchData = await fetch(API_URL);
    const response = await fetchData.json();
    console.log(response);
    return getData(response)
};

const getData = (data) => {
    if (data.cod=='404' || input.value == '') {
        divWork.innerHTML=`<p id='error-message'>${data.message}</p>`
    } else {
        
            
        divWork.innerHTML = `
            
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${data.name}</h1>
                <p>Temperature:${data.main.temp}</p>
                <p>Filing:${data.main.feels_like}</p>
                <p >Condition:${data.weather[0].main}</p>
                <p >Humidity:${data.main.humidity}</p>
                <h2>Wind</h2>
                <p>Speed:${data.wind.speed}</p>
                
                `
                
         

    }
};
