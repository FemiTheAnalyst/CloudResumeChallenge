
"use strict";


document.addEventListener("DOMContentLoaded", function() {
    fetch("https://hw3w8zp4xc.execute-api.us-east-1.amazonaws.com/Prod/visit", {
    method: "POST"
    })
    .then(response => response.text())
    .then(visitorCounter => {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#visits").textContent = visitorCounter;
    })
    .catch(error => {
    console.log("Error");
    console.log(error);
    });
});
