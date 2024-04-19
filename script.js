function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  if (name === "" || email === "" || phone === "") {
    alert("Please fill out all required fields.");
    return false;
  }
  if (phone.length != 10) {
    alert("phone number is invalid");
    return false;
  }
  if (!email.endsWith("@gmail.com")) {
    alert("Email should be from Gmail domain.");
    return false;
  }
  var registerNumberPattern = /^\d{2}[a-zA-Z]{3}\d{4}$/;
  if (!registerNumberPattern.test(username)) {
    alert(
      "name should have 2 digits, 3 alphabets, and 4 digits in the specified format."
    );
    return false;
  }
}

var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime(); // Replace this with required date

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#counter-days").innerHTML = `${days} <br />Days`;
  document.querySelector("#counter-hours").innerHTML = `${hours} <br />Hours`;
  document.querySelector(
    "#counter-minutes"
  ).innerHTML = `${minutes} <br />Minutes`;
  document.querySelector(
    "#counter-seconds"
  ).innerHTML = `${seconds} <br />Seconds`;
}, 1000);
