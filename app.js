const button = document.querySelectorAll("#searchbtn")[0];

button.onclick = function () {
    fetch("superheroes.php")
        .then(response => response.text())
        .then(data => alert(data));
};