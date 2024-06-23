function redirectLink(url) {
    const linkReg = /[A-Za-z]+\.reddit\.com/i;
    let newUrl = url.replace(linkReg, "libreddit.bus-hit.me");
    window.location.replace(newUrl);
}

redirectLink(document.URL);