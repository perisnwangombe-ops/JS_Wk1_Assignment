// Select elements
const form = document.getElementById("userForm");
const greetingDiv = document.getElementById("greeting");
const ageMonthsDiv = document.getElementById("ageMonths");
const adultContentDiv = document.getElementById("adultContent");
const quotesDiv = document.getElementById("quotes");

// Function: Calculate age in months
function calculateMonths(age) {
    return age * 12;
}

// Function: Display motivational quotes using loop
function displayQuotes() {
    quotesDiv.innerHTML = "";
    const quote = "Keep pushing forward — consistency beats talent.";

    for (let i = 0; i < 5; i++) {
        const p = document.createElement("p");
        p.textContent = quote;
        quotesDiv.appendChild(p);
    }
}

// Function: Load data from localStorage
function loadUserData() {
    const name = localStorage.getItem("name");
    const age = localStorage.getItem("age");

    if (name && age) {
        displayUserData(name, age);
    }
}

// Function: Display user data
function displayUserData(name, age) {
    // Greeting (template literal)
    greetingDiv.innerHTML = `<h2>Hello, ${name}!</h2>`;

    // Age in months
    const months = calculateMonths(age);
    ageMonthsDiv.innerHTML = `<p>You are ${months} months old.</p>`;

    // Conditional (if...else)
    if (age >= 18) {
        adultContentDiv.innerHTML = "<p>✅ You can access adult content.</p>";
    } else {
        adultContentDiv.innerHTML = "<p>❌ You are too young for adult content.</p>";
    }

    // Quotes
    displayQuotes();
}

// Form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    // Store in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);

    displayUserData(name, age);
});

// Load stored data on page refresh
window.onload = loadUserData;