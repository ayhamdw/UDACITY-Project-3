/* Global Variables */
const apiKey = "&appid=b8b3db4c2aa888ef7d532971fcdd72bb";
const url = `https://api.openweathermap.org/data/2.5/weather?zip=`;
const zipValue = document.getElementById("zip").value;

let date = new Date();
let newDate = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();

const getWeather = async function (url = "", zip = "", key = "") {
  const data = await fetch(url + zip + key);
  try {
    const myData = await data.json();
    return myData;
  } catch (error) {
    console.log("error  ", error);
  }
};

const postData = async function (url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

document.getElementById("generate").addEventListener("click", function () {
  const zipValue = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;
  getWeather(url, zipValue, apiKey)
    .then(function (data) {
      postData("http://localhost:8785/PostData", {
        date: newDate,
        temp: data.main.temp,
        content: feelings,
      });
    })
    .then(updateUI());
});

const updateUI = async function () {
  const response = await fetch("http://localhost:8785/all");
  console.log(response.data);
  try {
    const data = await response.json();
    document.getElementById("date").innerHTML = data.date;
    document.getElementById("temp").innerHTML = data.temperature;
    document.getElementById("content").innerHTML = data.userResponse;
  } catch (error) {
    console.log("error", error);
  }
};
