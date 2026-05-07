document.getElementById("current-year").textContent = new Date().getFullYear();

document.getElementById("weekday").textContent = new Date().toLocaleString('en-US', { weekday: 'short' });

function getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return `${month}/${day}/${year}`;
}

function getCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
}

let intervalId;

document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("mmddyy");
    const timeElement = document.getElementById("current-time");
    dateElement.textContent = getCurrentDate();
    timeElement.textContent = getCurrentTime();
    intervalId = setInterval(() => {
        dateElement.textContent = getCurrentDate();
        timeElement.textContent = getCurrentTime();
    }, 1000);
});

function convertDayNumberToString(number) {

    switch (number) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day number";
    }
}

const stopTimer = () => {
    clearInterval(intervalId);
};
document.getElementById("stop-timer").addEventListener("click", stopTimer);
