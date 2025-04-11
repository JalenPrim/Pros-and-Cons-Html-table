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
    resultImage.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bicycling.com%2Ftraining%2Fa20048427%2Fbenefits-of-bike-riding%2F&psig=AOvVaw2CSP1sV_cBDoGCoS7XgENE&ust=1744391186512000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCNDt4fD5zYwDFQAAAAAdAAAAABA5";
  } else if (age >= 16 && age  <= 24 ) {
    resultText.innerText = "You can drive but can't rent";
    resultText.style.color = "blue"; // change color
    resultImage.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newsweek.com%2F2024-autos-awards%2Fbest-new-vehicle-your-lifestyle-first-time-new-car-buyers-1933985&psig=AOvVaw1H8rSJrC5wgrEcKBdFCTkJ&ust=1744474434282000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjCg4npr9CMAxW2HWIAHYWFBuIQjRx6BAgAEBs";
  } else  {
    resultText.innerText = "You can drive and rent";
    resultText.style.color = "green"; // change color
    resultImage.src = "https%3A%2F%2Fwww.carmax.com%2Fcars%2Fhonda%3Flocation%3Dsierra%2Bvista%2Baz&psig=AOvVaw1chC1OHGqrSY7VZtbZvyI8&ust=1744391292039000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCKjrnY36zYwDFQAAAAAdAAAAABAh";
  }
});
