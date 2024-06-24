function saveSettings(e) {
    let instance = document.querySelector("#redlib_instance").value;

    function checkInstance(e) {
        const regex = /(https?:\/\/)?(www\.)?reddit\.com/i;
        if (!instance.trim() || regex.test(instance)) {
            return false;
        } else {
            return true;
        }
    }

    function notifyChange() {
        document.getElementById("output-box").innerHTML = `Instance updated to: ${instance}.`;
    }

    if (checkInstance(e)) {
        e.preventDefault();
        browser.storage.sync.set({
            redlib_instance: instance,
        });
        notifyChange();
    } else {
        alert("Invalid instance; using last saved value.")
    }
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

function notifyChange() {
    let redlibInstance = document.querySelector("#redlib_instance").value;
    document.getElementById("output-box").innerHTML = `Instance updated to: ${redlibInstance}.`;
}

document.addEventListener("DOMContentLoaded", restoreSettings);
document.querySelector("form").addEventListener("submit", saveSettings);