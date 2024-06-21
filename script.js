// here we are getting elements
const bagImage = document.getElementById('bag-image');
const punchButton = document.getElementById('punch-button');
const restartButton = document.getElementById('restart-button');
const healthBar = document.getElementById('health-bar');

// Setting health here
let health = 100;

// Function to update health bar
function updateHealthBar() {
    healthBar.style.width = health + '%';
}

// Function to handle punch
function handlePunch() {
    if (health > 0) {
        health -= 20; 
        updateHealthBar();

        if (health <= 0) {
            bagImage.src = 'images/bag-burst.png'; 
        }
    }
}

// Function to handle restart
function handleRestart() {
    health = 100; 
    updateHealthBar();
    bagImage.src = 'images/bag.png';
}

// Event listeners
punchButton.addEventListener('click', handlePunch);
restartButton.addEventListener('click', handleRestart);
