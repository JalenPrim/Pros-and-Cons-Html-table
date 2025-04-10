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
  let age = document.getElementById("ages").value;
  let resultText = document.getElementById("You cannot Drive");
  let resultImage = document.getElementById("cars");

  if (age < ) {
    resultText.innerText = "You cannot drive";
    resultText.style.color = "_____"; // change color
    resultImage.src = "YOUR_BICYCLE_IMAGE_LINK_HERE";
  } else if (age _____ && age _____) {
    resultText.innerText = "You cannot drive";
    resultText.style.color = "_____";
    resultImage.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bicycling.com%2Ftraining%2Fa20048427%2Fbenefits-of-bike-riding%2F&psig=AOvVaw2CSP1sV_cBDoGCoS7XgENE&ust=1744391186512000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCNDt4fD5zYwDFQAAAAAdAAAAABA5";
  } else if (age _____) {
    resultText.innerText = "_____";
    resultText.style.color = "_____";
    resultImage.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.carmax.com%2Fcars%2Fhonda%3Flocation%3Dsierra%2Bvista%2Baz&psig=AOvVaw1chC1OHGqrSY7VZtbZvyI8&ust=1744391292039000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCKjrnY36zYwDFQAAAAAdAAAAABAh";
  }
});
