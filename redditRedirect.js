function onError(error) {
    console.log(`Error: ${error}`);
}

function onGot(item) {
    function redirectLink(url, instance) {
        const linkReg = /[A-Za-z]+\.reddit\.com/i;
        let newUrl = url.replace(linkReg, instance);
        window.location.replace(newUrl);
    }

    let redlib_instance = "libreddit.bus-hit.me";
    if (item.redlib_instance) {
        redlib_instance = item.redlib_instance;
    }
    redirectLink(document.URL, redlib_instance);
}


const getting = browser.storage.sync.get("redlib_instance");
getting.then(onGot, onError);