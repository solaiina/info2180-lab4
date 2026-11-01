const button = document.querySelectorAll("#searchbtn")[0];
const txt = document.querySelectorAll("#searchbox")[0];
const result = document.querySelectorAll("#result")[0]

button.onclick = function () {
    const read = txt.value;
    const wrapped = encodeURIComponent(read)
    fetch("superheroes.php?query=" + wrapped)
        .then(response => response.text())
        .then(data => result.innerHTML = data);
};