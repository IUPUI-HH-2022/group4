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
}

//adds the function to click a button and it will either show or hide words

function toggleText() {
    var text = document.getElementById("disappear");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
    
  }

  function toggleText2() {
    var text = document.getElementById("disappear2");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
    
  }

  function toggleText3() {
    var text = document.getElementById("disappear3");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
    
  }

  function toggleText4() {
    var text = document.getElementById("disappear4");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
    
  }
