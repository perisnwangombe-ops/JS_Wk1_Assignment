// Motivational Quote
const quote = "The only way to do great work is to love what you do.";

// Convert age to months
function calculateAgeInMonths(age) {
    return age * 12;
}

// Display motivational quotes
function displayQuotes() {
    const container = document.getElementById('quotesContainer');
    container.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        const div = document.createElement('div');
        div.className = 'quote';
        div.innerHTML = `"${quote}" <br><small>Quote #${i}</small>`;
        container.appendChild(div);
    }
}

// Load user data from localStorage
function loadUserData() {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');

    if (name && age) {
        document.getElementById('formSection').classList.add('hidden');
        document.getElementById('displaySection').classList.remove('hidden');

        document.getElementById('greeting').innerHTML = `Hello ${name}! 👋`;

        const months = calculateAgeInMonths(parseInt(age));
        document.getElementById('ageMonths').textContent = `${months} months`;

        const adultSection = document.getElementById('adultSection');
        if (parseInt(age) >= 18) {
            adultSection.innerHTML = `
                <p style="color: green; font-weight: bold;">
                    ✅ You are old enough for age‑restricted content
                </p>
                <p>You are ${age} years old.</p>
            `;
        } else {
            adultSection.innerHTML = `
                <p style="color: red; font-weight: bold;">
                    ❌ You are not old enough for age‑restricted content
                </p>
                <p>Please come back when you are older.</p>
            `;
        }

        displayQuotes();
    }
}

// Form submit handler
document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value;

    if (name && age) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userAge', age);
        loadUserData();
    }
});

// Clear localStorage
function clearData() {
    if (confirm("Clear all saved data?")) {
        localStorage.clear();
        location.reload();
    }
}

// Run on load
window.onload = loadUserData;