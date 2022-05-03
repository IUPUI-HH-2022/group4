// Accessability JavaScript - Miska

function darkMode() {
    const theme = document.querySelector("#theme");

    if(theme.getAttribute("href") == "styles/style.css") {
        theme.href = "styles/style-dark.css";
    }
    else {
        theme.href = "styles/style.css";
    }
}

function increaseFontSize() {
    //TODO
}

function decreaseFontSize() {
    //TODO
