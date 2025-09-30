console.log("vis.js is connected and running!")

let circles = document.querySelectorAll("circle");

circles.forEach((circle) => {
    circle.addEventListener("click", () => {
        let randColour = Math.floor(Math.random() * 676767);
        circle.setAttribute("fill", `#${randColour}`);
    });
});