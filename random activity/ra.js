const activityBox = document.getElementById("activity");
const typeBox = document.getElementById("type");
const participantsBox = document.getElementById("participants");
const message = document.getElementById("message");
const typeSelect = document.getElementById("typeSelect");
const btn = document.getElementById("btn");


async function fetchActivity() {
    message.textContent = "";
    activityBox.textContent = "Loading...";
    typeBox.textContent = "";
    participantsBox.textContent = "";

    let selectedType = typeSelect.value;

    let api = "https://www.boredapi.com/api/activity";

    if (selectedType !== "") {
        api = `https://www.boredapi.com/api/activity?type=${selectedType}`;
    }

    let finalURL = `https://api.allorigins.win/raw?url=${encodeURIComponent(api)}`;

    try {
        const response = await fetch(finalURL);
        const data = await response.json();

        activityBox.textContent = "Activity: " + data.activity;
        typeBox.textContent = "Type: " + data.type;
        participantsBox.textContent = "Participants: " + data.participants;

    } catch (err) {
        activityBox.textContent = "";
        message.textContent = "Oops, something went wrong — please try again.";
    }
}

fetchActivity();
btn.addEventListener("click", fetchActivity);
