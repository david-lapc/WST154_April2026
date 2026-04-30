// using if/else statements with && operators

// if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
//     window.alert('Leap Year!')
// } else if (year % 4 == 0 && year % 100 == 0 && year % 400 != 0) {
//     window.alert('Not a leap year!')
// } else if (year % 4 == 0 && year % 100 != 0) {
//     window.alert('Leap Year')
// } else if (year % 4 != 0) {
//     window.alert('Not a leap year')
// }

let result = document.getElementById('result')

let leapYearForm = document.getElementById('leapYearForm');

leapYearForm.addEventListener('submit', checkLeapYear)

function checkLeapYear(e) {
    e.preventDefault()
    let year = document.getElementById('year').value

    // using if/else statements with nested if statements

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                result.innerHTML = 'Leap Year'
            } else {
                result.innerHTML = 'Not a Leap Year'
            }
        } else {
            result.innerHTML = 'Leap Year'
        }
    } else {
        result.innerHTML = 'Not a leap year'
    }
}

// using switch statements with && operators

switch (year) {
    case year % 4 == 0 && year % 100 == 0 && year % 400 == 0:
        window.alert('Leap Year!')
        break;
    case year % 4 == 0 && year % 100 == 0 && year % 400 != 0:
        window.alert('Not a leap year!')
        break;
    case year % 4 == 0 && year % 100 != 0:
        window.alert('Leap Year')
        break;
    case year % 4 != 0:
        window.alert('Not a leap year')
        break;
    default:
        window.alert('Please enter a valid year')
}

// using ternary operators with && operators
let leapYear = (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) ? 'Leap Year!' :
    (year % 4 == 0 && year % 100 == 0 && year % 400 != 0) ? 'Not a leap year!' :
        (year % 4 == 0 && year % 100 != 0) ? 'Leap Year' :
            (year % 4 != 0) ? 'Not a leap year' :
                'Please enter a valid year'
window.alert(leapYear)

