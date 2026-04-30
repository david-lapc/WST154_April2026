

let guestList = ["John", "Jane", "Doe", "Smith"];

let clubForm = document.getElementById("clubForm");
let ageInput = document.getElementById("age");
let nameInput = document.getElementById("name");

clubForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let age = parseInt(ageInput.value);
    let name = nameInput.value;

    if (age >= 18 && guestList.some(function (guest) {
        return guest.toUpperCase() === name.toUpperCase();
    })) {
        alert("Welcome to the club!");
    } else {
        alert("Sorry, you are not allowed.");
    }
});
