document.addEventListener("DOMContentLoaded", () => {
  console.log("main.js is connected and running!");
});

const myName = document.getElementById("name");

myName.addEventListener("click", function(){
    window.location.href = "index.html";
});
