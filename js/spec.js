document.addEventListener("DOMContentLoaded", function() {
let loadbtn = document.getElementById("loaddata");
let spectable = document.getElementById("spectable");

loadbtn.addEventListener("click", function() {
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "data/spec.json", true);

    ajax.onload = function() {
        let data = JSON.parse(ajax.responseText);
        let ships = data.spacex.vehicles;
        let html = "<tr><th>Name</th><th>Status</th><th>Height</th><th>Sea level engines</th><th>Vacuum optimized engines</th></tr>";
        for (let i = 0; i < ships.length; i++) {
            html += `<tr>`;
            html += `<td>${ships[i].name}</td>`;
            html += `<td>${ships[i].status}</td>`;
            html += `<td>${ships[i].specifications.height}</td>`;
            html += `<td>${ships[i].specifications.engines.raptor}</td>`;
            html += `<td>${ships[i].specifications.engines.raptor_vacuum}</td>`;
            html += `</tr>`;
        }
        spectable.innerHTML = html;
    };
    ajax.send();
});
});