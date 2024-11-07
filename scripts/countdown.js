"use strict";

var releaseDate = new Date("2024, November, 7");

//calculates and writes time left for countdown
function writeDate() {
    var now = new Date();
    var timeUntilRelease = releaseDate - now;

    //calculating days left
    var daysLeft = timeUntilRelease / (24 * 60 * 60 * 1000);
    var daysLeftRounded = Math.floor(daysLeft);
    timeUntilRelease -= daysLeftRounded * (24 * 60 * 60 * 1000);

    //checking if after release date
    if (daysLeft <= 0) {
        timeUntilRelease = 0;
        daysLeftRounded = 0;
        
        //showing message for after release date
        document.getElementById("afterRelease").classList.remove("hide");
        document.getElementById("afterRelease").classList.add("show");
    }

    //writing days left
    document.getElementById("daysCounter").innerHTML = daysLeftRounded;

    //calculating hours left
    var hrsLeft = timeUntilRelease / (60 * 60 * 1000);
    var hrsLeftRounded = Math.floor(hrsLeft);
    timeUntilRelease -= hrsLeftRounded * (60 * 60 * 1000);
    //writing days left
    document.getElementById("hrsCounter").innerHTML = hrsLeftRounded;

    //calculating mins left
    var minsLeft = timeUntilRelease / (60 * 1000);
    var minsLeftRounded = Math.floor(minsLeft);
    timeUntilRelease -= minsLeftRounded * (60 * 1000);
    //writing mins left
    document.getElementById("minsCounter").innerHTML = minsLeftRounded;

    //calculating secs left
    var secsLeft = timeUntilRelease / 1000;
    var secsLeftRounded = Math.floor(secsLeft);
    //writing secs left
    document.getElementById("secsCounter").innerHTML = secsLeftRounded;
}

const observer = new IntersectionObserver ((entries) => { //takes list of entries, checks if they are onscreen
    entries.forEach((entry) => {
        if (entry.isIntersecting) { //if entry is on screen, start animated transition
            entry.target.classList.add("animate");
        } else {
            entry.target.classList.remove("animate");
        }
    })
}, {
    threshold: 0.1 //only acts when 10% of element is on screen
})


document.getElementById("afterRelease").classList.add("hide");
writeDate();
setInterval("writeDate()", 1000);

//getting array of elements to be animated
var animatedElements = document.querySelectorAll(".animateFromRight, .animateFromTop, .animateFromLeft");

for (let i = 0; i < animatedElements.length; i++) { //making observer observe all animated elements
    observer.observe(animatedElements[i]);
}