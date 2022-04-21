// Accessability JavaScript - Miska

function darkMode() {
    const theme = document.querySelector("#theme");

    if(theme.getAttribute("href") == "/styles/placeholder.css") {
        theme.href = "/styles/placeholder-dark.css";
    }
    else {
        theme.href = "/styles/placeholder.css";
    }
}

function increaseFontSize() {
    //TODO
}

function decreaseFontSize() {
    //TODO
}