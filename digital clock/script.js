const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("Miuntes"); // Corrected typo in variable name
const secondE1 = document.getElementById("Seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock() { // Corrected function name
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h < 10? "0" +h:h;
    
    hourE1.innerText = h;
    minuteE1.innerText = m; // Corrected variable name
    secondE1.innerText = s;
    ampmE1.innerText = ampm; // Corrected variable name
}

// Call the updateClock function at regular intervals
setInterval(updateClock, 1000);
