"use strict";

const firstName = document.querySelector(".firstName");
const secondName = document.querySelector(".secondName");
const thirdName = document.querySelector(".thirdName");
const arrName = [firstName, secondName, thirdName];

const firstVotes = document.querySelector(".countFirst");
const secondVotes = document.querySelector(".countSecond");
const thirdVotes = document.querySelector(".countThird");
const arrVotes = [firstVotes, secondVotes, thirdVotes];

const firstImage = document.querySelector(".firstImage");
const secondImage = document.querySelector(".secondImage");
const thirdImage = document.querySelector(".thirdImage");
const arrImage = [firstImage, secondImage, thirdImage];
const time = document.querySelector(".update");

const renderVotes = function (data) {
  console.log(data);
  const date = new Date();

  const timeHTML = `Last updated: ${date.getHours() % 12}:00 ${
    date.getHours() < 12 ? "am" : "pm"
  }`;
  time.textContent = timeHTML;

  for (let i = 0; i < arrName.length; i++) {
    arrName[i].textContent = data[i].name;
    arrVotes[i].textContent = data[i].votes;
    arrImage[i].src = `images\\${data[i].name.split(" ")[0]}.jpg`;
  }
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
