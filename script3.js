
// Book Now Button
alert("javascript is working!");
document.getElementById("bookBtn").addEventListener("click", function () {
  alert("🎉 Booking Confirmed! You will receive an email shortly.");
  console.log("User booked the travel package.");
});

// Send Message Button
document.getElementById("sendBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("❌ Please fill in all the fields!");
  } else {
    alert("✅ Message Sent Successfully! We'll contact you soon.");
    console.log("Message sent by:", name, email, message);
  }
});

// Set current year in footer
document.getElementById("year").innerText = new Date().getFullYear();
document.getElementById("contactform").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank You for contacting us! we'll get back to you soon.");
});
document.getElementById("bookNow").addEventListener("click", function (){
    alert("Your booking has been recived!");
})