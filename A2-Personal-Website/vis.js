console.log("vis.js is connected and running!")

// let circles = document.querySelectorAll("circle");

// circles.forEach((circle) => {
//     circle.addEventListener("click", () => {
//         let randColour = Math.floor(Math.random() * 676767);
//         circle.setAttribute("fill", `#${randColour}`);
//     });
// });

const secondVis = document.querySelectorAll("#visualization-container svg")[1];

    const moon = secondVis.querySelector("circle");
    const rects = secondVis.querySelectorAll("rect");

    secondVis.addEventListener("click", () => {
    
        if (moon.getAttribute("fill") !== "Gold"){
            moon.setAttribute("fill", "Gold");
            alert("Good Morning!")
        }
        else{
            moon.setAttribute("fill", "LemonChiffon");
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

// secondVis.addEventListener("click", () => {
    
    
//     const moon = secondVis.querySelectorAll("circle");
    
//     moon.forEach(m => {
//         if (m.getAttribute("fill") !== "orange"){
//             m.setAttribute("fill", "orange");
//         }
//         else{
//             m.setAttribute("fill", "LemonChiffon")
//         }
//     });

// });

