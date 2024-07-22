/* Global Variables */
const apiKey = "&appid=b8b3db4c2aa888ef7d532971fcdd72bb";
const url = `https://api.openweathermap.org/data/2.5/weather?zip=`;
const zipValue = document.getElementById("zip").value;

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

const updateUI = async function () {
  const response = await fetch("/all");
  try {
    const data = await response.json();
    document.getElementById("date").innerHTML = data.date;
    document.getElementById("temp").innerHTML = data.temperature;
    document.getElementById("content").innerHTML = data.userResponse;
  } catch (error) {
    console.log("error", error);
  }
};

document.getElementById("generate").addEventListener("click", function () {
  const zipValue = document.getElementById("zip").value;
  getWeather(url, zipValue, apiKey)
    .then(function (data) {
      postData("postData", {
        data: data.date,
        temp: data.temp,
        content: data.content,
      });
    })
    .then(updateUI());
});
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
