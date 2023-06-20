
 /* I have completed all and make comments for all, It's helps me to complete all because there are many problems
  and can be same names, variables etc and you also can check one by one */



// 1.Date Object:

/* a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. 
The function should use the Date object. */

/*

function getDayOfWeek(newDate) {
    const date = new Date(newDate);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const getDay = date.getDay();
    return daysOfWeek[getDay];
  }

const date = '2023-06-19';
const dayOfWeek = getDayOfWeek(date);
document.write("Today is: ", dayOfWeek);

*/


// b. Implement the function to display the day of the week for the current date.

/*

function getCurrentDayOfWeek() {
    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = currentDate.getDay();
    return daysOfWeek[dayIndex];
  }
  
const currentDayOfWeek = getCurrentDayOfWeek();
document.write("Current Day: ", currentDayOfWeek);

*/

// 2.Math Object:


/* a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares
 of all the numbers. Use the Math object to perform the necessary calculations. */

 /*

function squareRootOfSumOfSquares(numbers) {
    const sumOfAllSquares = numbers.reduce((count, number) =>  count + Math.pow(number, 2), 0);
    const squareRoot = Math.sqrt(sumOfAllSquares);

    return squareRoot;
  }

const numbers = [6, 4, 5, 10];
const result = squareRootOfSumOfSquares(numbers);
document.write("Square root of the sum of squares: ", result);

*/

// b. Implement the function to display the square root of the sum of squares for an array of numbers.

/*

function squareRootSumOfSquares(numbers) {
    const sumOfSquares = numbers.reduce((count, number) => count + Math.pow(number, 2), 0);
    const squareRoot = Math.sqrt(sumOfSquares);
    
    document.write("square root of the sum of squares: ",squareRoot)
  }
  
const number_s = [3, 5, 7, 10, 15];
squareRootSumOfSquares(number_s);

*/

// 3.Numbers:

/* a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number,
 otherwise returns false. */


 /*
const number = 10;

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

   return true;
  }

const result_prime = isPrime(number);
document.write(result_prime);

*/

// Implement the function to check if a given positive integer is a prime number.

/*

let number_prime = 97;
if (isPrime2(number_prime)) {
  document.write(number_prime + " is a prime number");
} else {
  document.write(number_prime + " is not a prime number");
}

function isPrime2(n) {
  if (n <= 1) {
    return false;
  }

  // Check divisibility by numbers up to the square root of n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

*/


// 4.Window Object:

// a. Create a function that opens a new window with a specified URL and dimensions (width and height).

/* 
function openWindow(url, width, height) {
  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;

  window.open(url, "_blank", `height=${height}, width=${width}, top=${top}, left=${left}`);
}

openWindow("www.google.com", 800, 600);

*/

// b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.

/*

function openNewWindow() {
  const width = 800;
  const height = 600;
  const url = "https://www.example.com";

  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;

  window.open(url, "_blank", ` height=${height}, width=${width}, left=${left}, top=${top}`);
}

openNewWindow();

*/

// 5.Navigator Object:


// a. Write a JavaScript function that detects the user's browser name and version using the navigator object.

/*

function Browser() {
  const userAgent = navigator.userAgent;
  let name;
  let version;


  if (/Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor)) {
    name = 'Google Chrome';
    version = userAgent.match(/Chrome\/(\d+)/)[1];
  }
  
  else {
    name = "Not Detected";
    version = "Not Detected";
  }

  return {
    name: name,
    version: version
  }
}

const browserInfo = Browser();
console.log(browserInfo.name);
console.log(browserInfo.version);

*/

// b. Implement the function to display the user's browser name and version.

/*

function Browser2() {
  const user = navigator.user;
  let name;
  let version;


  if (/Chrome/.test(user) && /Google Inc/.test(navigator.vendor)) {
    name = "Google Chrome";
    version = user.match(/Chrome\/(\d+)/)[1];
  }
  
  else {
    name = "Not Detected";
    version = "Not Detected";
  }

  return {
    name: name,
    version: version
  }
}

const browserInfo = Browser2();
document.write(browserInfo.name);
document.write(browserInfo.version);

*/

// 6.Geolocation:


/* a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API. */

/*

function Geolocation() {

  if (navigator.geolocation) {
    navigator.geolocation.Geolocation(

      function(location) {
        var latitude = location.coords.latitude;
        var longitude = location.coords.longitude;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
      },
      function(error) {
        console.error(error.message);
      }
    );

  } else {
    console.log("Geolocation Not Found");
  }
}

*/

// 7.JS Common Events:

// Implement a webpage with the following functionality:


// a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.

/*
document.addEventListener('click', function(e) {
  const x = e.pageX;
  const y = e.pageY;
  alert(`(${x}, ${y})`);
});

*/

// b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.

/*

document.addEventListener('keydown', function(e) {
  const keyPressed = e.keyCode || e.which;
  alert(`{keyPressed}`);
});

*/

// c. When the user moves the mouse over an image, change the image source to another image of your choice.

/*

const image = document.getElementById('image');
image.addEventListener('mouseover', function() {
  image.src = "./image/img1.jpg";
});

image.addEventListener('mouseout', function() {
  image.src = "./image/img2.jpg";
});

*/


// 8.HTML DOM Document:

// a. Create a webpage with a button and a paragraph element.

/*
const button = document.createElement('button');
const paragraph = document.createElement('p');

button.textContent = 'Click Me';
paragraph.textContent = 'This is a paragraph element.';

document.body.appendChild(button);
document.body.appendChild(paragraph);

*/

/* b. Implement a JavaScript function that changes the text content of the paragraph element to "Button Clicked!"
 when the button is clicked. */

 /*

const button = document.createElement('button');
const paragraph = document.createElement('p');

button.textContent = 'Click me';
paragraph.textContent = 'Initial Text';

document.body.appendChild(button);
document.body.appendChild(paragraph);

button.addEventListener('click', function() {
  paragraph.textContent = 'Button Clicked, Text Changed';
});

*/

// 9.JS DOM Working with Form Input:

/*
Implement a webpage with a form that has the following fields:
a. Name (text input)
b. Email (email input)
c. Password (password input)
d. Confirm Password (password input)
e. Submit (button)
*/

/*

const form = document.createElement('form');
const name = document.createElement('input');
const email = document.createElement('input');
const password = document.createElement('input');
const confirmPassword = document.createElement('input');
const submit = document.createElement('button');

name.type = 'text';
name.required = true;

email.type = 'email';
email.required = true;

password.type = 'password';
password.required = true;

confirmPassword.type = 'password';
confirmPassword.required = true;

submit.type = 'submit';
submit.textContent = 'Submit';

form.appendChild(name);
form.appendChild(email);
form.appendChild(password);
form.appendChild(confirmPassword);
form.appendChild(submit);

document.body.appendChild(form);

*/

/*
Implement JavaScript validation for the form fields:

f. Name should not be empty and should contain only letters.
g. Email should be a valid email address.
h. Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.
i. Confirm Password should match the Password field.
j. Display appropriate error messages for invalid fields.
*/

/*

const form = document.createElement('form');
const name = document.createElement('input');
const email = document.createElement('input');
const password = document.createElement('input');
const confirmPassword = document.createElement('input');
const submitButton = document.createElement('button');
const error = document.createElement('ul');

name.type = 'text';
name.required = true;
email.type = 'email';
email.required = true;
password.type = 'password';
password.required = true;
confirmPassword.type = 'password';
confirmPassword.required = true;
submitButton.type = 'submit';
submitButton.textContent = 'Submit';

form.appendChild(name);
form.appendChild(email);
form.appendChild(password);
form.appendChild(confirmPassword);
form.appendChild(submitButton);
form.appendChild(error);


document.body.appendChild(form);

form.addEventListener('submit', function(e) {
  e.preventDefault();
  errorMessages.innerHTML = '';

  if (name.value.trim() === '' || !/^[a-zA-Z]+$/.test(name.value)) {
    displayError('Name should not be empty and should contain only letters.');
  }

  if (!isValidEmail(email.value)) {
    displayError('Email should be a valid email address.');
  }

  if (!isValidPassword(password.value)) {
    displayError(
      'Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.'
    );
  }

  if (password.value !== confirmPassword.value) {
    displayError('Confirm Password should match the Password field.');
  }
})

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

function displayError(error) {
  const errorItem = document.createElement('li');
  errorItem.textContent = error;
  error.appendChild(errorItem);
}

*/


// 10.DOM Manipulate CSS Class:


// a. Create a webpage with a button and a paragraph element.

/*
const button = document.createElement('button');
const paragraph = document.createElement('p');

button.textContent = 'Click Me';
paragraph.textContent = 'This is a paragraph element.';

document.body.appendChild(button);
document.body.appendChild(paragraph);

*/


/* b. Implement a JavaScript function that adds a CSS class named "highlight" to the paragraph element when the button is clicked. 
The "highlight" class should change the background color of the paragraph to yellow. */

 // Function that connect with HTMl page

 /*

function Highligh() {
  var paragraph = document.getElementById("myParagraph");
  paragraph.classList.add("highlight");
  paragraph.style.backgroundColor = "yellow";
}

*/


// 11.Create Element & Append Element:


// a. Create a webpage with an empty unordered list (<ul>).

/*

document.addEventListener("DOMContentLoaded", function() {
  var ul = document.createElement("ul");
  document.body.appendChild(ul);
});

*/

/* b. Implement a JavaScript function that dynamically creates five list items (<li>) with sequential numbers (1 to 5)
 and appends them to the unordered list. */

/*

 function createItems() {

  // Link with ul in HTML
  var ul = document.getElementById("ulList");

  for (var i = 1; i <= 5; i++) {
    var li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  }
}
createItems();

*/


// 12.DOM Change Attribute Value:

// a. Create a webpage with an image element (<img>) that has an initial source URL.

/*

document.addEventListener("DOMContentLoaded", function() {
  var image = document.createElement("img");
  image.src = "./image.jpg";
  document.body.appendChild(image);
}

*/

/* b. Implement a JavaScript function that changes the source URL of the image element when a button is clicked.
 Use a different image URL of your choice. */

 /*

 // Linked with HTML page

 document.addEventListener("DOMContentLoaded", function() {
  var image = document.getElementById("image");
  var button = document.getElementById("imgButton");

  button.addEventListener("click", function() {
    image.alt = "path/to/image.jpg";
  });
});

*/


// 13.DOM Query Selector:

// a. Create a webpage with multiple paragraphs containing different classes and IDs.

/*

  var class1 = document.querySelector(".class1");
  var class2 = document.querySelector(".class2");
 
  var id1 = document.getElementById("id1");
  var id2 = document.getElementById("id2");

  class1.textContent = "first paragraph with class.";
  class2.textContent = "second paragraph with class.";

  id1.textContent = "first paragraph with ID.";
  id2.textContent = "second paragraph with ID.";

*/

/* b. Implement a JavaScript function that selects all paragraphs with a specific class and changes their text color to red. */

/*

function changeTextColorForAllClasses() {
  var color = document.querySelectorAll(".classAll");

  for (var i = 0; i < color.length; i++) {
    color[i].style.color = "red";
  }
}

*/


// 14.AJAX Get Request:

/* a. Implement a JavaScript function that sends an AJAX GET request to the following URL: "https://api.example.com/data".*/ 

/*

function AjaxGetRequest() {
  fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
}

*/


// 15.AJAX Post Request:

/* a. Implement a JavaScript function that sends an AJAX POST request to the following URL: "https://api.example.com/submit". */

/*

function AjaxPostRequest() {
  fetch("https://api.example.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ key: "value" })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
}

*/

/* b. Send a JSON payload with the following data: { "name": "John Doe", "email": "johndoe@example.com" }. */

/*

function submitData() {
  var data = {
    name: "Abdullah Al Hadi",
    address: "Dhaka, Bangladesh"
  };

  fetch("https://api.example.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
}

*/





