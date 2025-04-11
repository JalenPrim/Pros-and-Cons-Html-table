const TheProsDiv = document.getElementById('ThePros');
const TheConsDiv = document.getElementById('TheCons');
const TheInfoDiv = document.getElementById('info');

// Add a click event listener to the "ThePros div
TheProsDiv.addEventListener('click', function() {
  TheInfoDiv.innerHTMl = 'What are some pros';
});
TheConsDiv.addEventListener('click', function() {
  TheInfoDiv.innerHTML = 'what are some cons';
});





document.getElementById("checkButton").addEventListener("click", function() {
  let age = document.getElementById("ageInput").value;
  let resultText = document.getElementById("resultText");
  let resultImage = document.getElementById("resultImage");

  if (age <= 15 ) {
    resultText.innerText = "You cannot drive";
    resultText.style.color = "red"; // change color
    resultImage.src = "https://i5.walmartimages.com/seo/26-Huffy-Rock-Creek-Mountain-Bike-18-Speeds-13-Years-or-Older-Blue_24d665f8-d419-47ac-bd7e-fa6549db11f8.d1c9bf17152098f64db4d14979790853.jpeg";
  } else if (age >= 16 && age  <= 24 ) {
    resultText.innerText = "You can drive but can't rent";
    resultText.style.color = "blue"; // change color
    resultImage.src = "https://listings-prod.tcimg.net/listings/9912/86/32/1G1ZD5ST2NF103286/001.jpg";
  } else  {
    resultText.innerText = "You can drive and rent";
    resultText.style.color = "green"; // change color
    resultImage.src = "https://1000logos.net/wp-content/uploads/2021/08/Enterprise-Rent-A-Car-Logo.png";
  }
});
