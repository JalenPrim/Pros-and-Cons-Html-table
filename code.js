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
