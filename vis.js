console.log("vis.js is connected and running!")

const myName = document.getElementById("name");

myName.addEventListener("click", function(){
    window.location.href = "index.html";
});

const secondVis = document.querySelectorAll("#visualization-container svg")[1];

    const moon = secondVis.querySelector("circle");
    const rects = secondVis.querySelectorAll("rect");
    const mountains = secondVis.querySelector("polyline");
    const hoverText = document.getElementById("hover-text");

    secondVis.addEventListener("mouseenter", () => {
        hoverText.style.display = "block";
    });
    secondVis.addEventListener("mouseleave", () =>{
        hoverText.style.display = "none";
    });

    secondVis.addEventListener("click", () => {
    
        if (moon.getAttribute("fill") !== "Gold"){
            moon.setAttribute("fill", "Gold");
            mountains.setAttribute("fill", "LightSlateGrey");
            alert("Good Morning!")
        }
        else{
            moon.setAttribute("fill", "LemonChiffon");
            mountains.setAttribute("fill", "Black")
            alert("Good Night!")
        }
        
        if(rects[0].getAttribute("fill") !== "LightSkyBlue"){
            rects[0].setAttribute("fill", "LightSkyBlue");
        }
        else{
            rects[0].setAttribute("fill", "DarkBlue");
        }

        rects.forEach((r, i) => {
            if(i === 0) return;
            if (r.getAttribute("fill") !== "white"){
                r.setAttribute("fill", "white");
            }
            else{
                r.setAttribute("fill", "DodgerBlue");
            }
        });
    });



