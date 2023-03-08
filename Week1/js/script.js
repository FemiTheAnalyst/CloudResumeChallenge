
"use strict";


document.addEventListener("DOMContentLoaded", function() {
    fetch("YOUR_AWS_API_ENDPOINT_HERE", {
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
