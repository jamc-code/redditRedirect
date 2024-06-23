function saveSettings(e) {
    e.preventDefault();
    browser.storage.sync.set({
        redlib_instance: document.querySelector("#redlib_instance").value,
    });
}

function restoreSettings() {
    function setCurrentChoice(result) {
        document.querySelector("#redlib_instance").value = result.redlib_instance || "libreddit.bus-hit.me";
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting = browser.storage.sync.get("redlib_instance");
    getting.then(setCurrentChoice, onError);
}

function onClick() {
    let redlib_instance = document.querySelector("#redlib_instance").value;
    document.getElementById("output-box").innerHTML = `Instance updated to ${redlib_instance}.`;
}

document.addEventListener("DOMContentLoaded", restoreSettings);
document.querySelector("form").addEventListener("submit", saveSettings);
document.querySelector("form").addEventListener("submit", onClick);