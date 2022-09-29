const inputEl = document.getElementById("input");
const addEl = document.getElementById("btn");
const containerDiv = document.querySelector(".container");




const getCityApi = (city) => {
  const key = "b13b8906e7252e5d9c591a000fe691db";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      createWeatherCity(data);
      console.log(data);
    });
};

const createWeatherCity = (data) => {
  const {
    name,
    main: { temp },
    sys:{country},
   

  } = data;
  
  containerDiv.innerHTML +=`
  <div class="card " style="width: 18rem">
        <img src="" class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text text-danger">
            ${temp}℃
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Country:${country} <i class="fa-solid fa-flag"></i></li>
          
        </ul>
        
      </div>
  `
};
inputEl.addEventListener("keydown", (e) => {
    if(e.code=== "Enter"){
        let key= inputEl.value
        getCityApi(key);
        
        inputEl.value=""
    }
})

