"use strict";
const Balen = document.querySelector(".countBalen");
const Sthapit = document.querySelector(".countSthapit");
const Sirjana = document.querySelector(".countSirjana");
const time = document.querySelector(".update");

const renderVotes = function (data) {
  console.log(data);
  const date = new Date();

  const timeHTML = `Last updated: ${date.getHours() % 12}:00 ${
    date.getHours() < 12 ? "am" : "pm"
  }`;
  time.textContent = timeHTML;
  Balen.textContent = data[0].votes;
  Sthapit.textContent = data[1].votes;
  Sirjana.textContent = data[2].votes;
};
const getCount = function () {
  const request = new XMLHttpRequest();
  request.open("GET", `https://electionupdate.herokuapp.com/api/v1/data`);
  request.send();
  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    //console.log(data);
    const [latestData] = data.slice(-1);
    console.log(latestData);
    renderVotes(latestData.data);
  });
};
getCount();
