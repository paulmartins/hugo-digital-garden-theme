var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");

toggle.addEventListener("click", () => {    
    if (toggle.className === "btn fas fa-moon") {
        setTheme("dark");
    } else if (toggle.className === "btn fas fa-sun") {
        setTheme("light");
    }
});

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "btn fas fa-sun";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "btn fas fa-moon";
    }
}
