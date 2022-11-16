fetch("./vehiculo.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (vehiculo) {
    let placerholder = document.querySelector("#data-output");
    let out = "";
    for (let veh of vehiculo) {
      out += `<tr>
                <td><img src='${veh.foto}' width="100px"></td>
                <td>${veh.placa}</td>
                <td>${veh.marca}</td>
                <td>${veh.modelo}</td>
                <td>${veh.precio}</td>
                <td>${veh.color}</td>
                <td>${veh.fabricacion}</td>
            </tr>`
    }
    placerholder.innerHTML = out;
  })