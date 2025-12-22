
let monthOffset = 0;

function getMonthlyCountdown(day, hour = 0,  minute = 0, second = 0) {
    
    const now = new Date();

    const target = new Date(
        now.getFullYear(), 
        now.getMonth() + monthOffset, 
        day, 
        hour, 
        minute, 
        second, 
        0
    );

    return target.getTime() - now.getTime();
}

function formatMs(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  let days = Math.floor(totalSeconds / (3600 * 24));
  let hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}


function updateCountdown() {

    const msLeft = getMonthlyCountdown(20, 19, 10, 0);

    const timeRun = document.getElementById("timeRun");
    const timeUp = document.getElementById("timeUp");

    if (msLeft <= 0) {
        timeRun.classList.add("hidden");
        timeUp.classList.remove("hidden");
    }
    else {
        timeRun.classList.remove("hidden");
        timeUp.classList.add("hidden");
    }


    if (msLeft > 0) {
        let { days, hours, minutes, seconds } = formatMs(msLeft);

        days = String(days).padStart(2, "0");
        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");

        document.getElementById("days").textContent = `${days}`;
        document.getElementById("hours").textContent = `${hours}`;
        document.getElementById("minutes").textContent = `${minutes}`;
        document.getElementById("seconds").textContent = `${seconds}`;
    }
}

document.getElementById("cancelBtn").addEventListener("click", () => {
    monthOffset++;
    updateCountdown(); 
});

document.getElementById("readBtn").addEventListener("click", () => {
    window.location.href = "https://mangaplus.shueisha.co.jp/titles/100269"; 
});

updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById("dave").addEventListener("click", () => {
    window.location.href = "https://github.com/d4ve-dev";
})


