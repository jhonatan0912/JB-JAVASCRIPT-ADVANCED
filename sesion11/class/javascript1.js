var vCod = []
var vNom = []
var vApe = []
var vDir = []
var vTel = []

var fil = 0;

function agregar(cod, nom, ape, dir, tel) {
  vCod.push(cod);
  vNom.push(nom);
  vApe.push(ape);
  vDir.push(dir);
  vTel.push(tel);

  fil++

  document.getElementById('lblReg').innerHTML = "Registro Nº " + fil

  window.alert("Registro guardado")
}

function listado() {
  var lista = window.open('', 'ventana', 'width=640px', 'height=480')

  lista.document.write("<h1>REPORTE DE AGENDA</h1><hr>")
  lista.document.write("CODIGO NOMBRE APELLIDO DIRECCION TELEFONO <br><hr>")

  for (let x = 0; x < vCod.length; x++) {
    lista.document.write
      (vCod[x] + "-" + vNom[x] + "-" + vApe[x] + "-" + vDir[x] + "-" + vTel[x] + "<br>")
  }
  lista.document.write("<h2>Fin de reporte</h2><br><hr>")

  lista.document.write(`<input type="button" value="Cerrar" onclick="opener.cerrar(window)">`)

}
function cerrar(obj) {
  obj.close()
}
function llenar(xReg) {
  document.getElementById('txtCod').value = vCod[xReg]
  document.getElementById('txtNom').value = vNom[xReg]
  document.getElementById('txtApe').value = vApe[xReg]
  document.getElementById('txtDir').value = vDir[xReg]
  document.getElementById('txtTel').value = vTel[xReg]
}
function consulta() {
  var xCod = prompt("Que codigo desea consultar? ")

  for (let x = 0; x < vCod.length; x++) {

    if (xCod == vCod[x]) {
      fil = x
      llenar(x)

      document.getElementById('lblReg').innerHTML = "Posicion: " + parseInt(x)
      break;
    }
  }
}
function elimina() {
  var xCod = prompt("Que codigo desea eliminar?")
  for (let x = 0; x < vCod.length; x++) {
    if (xCod == vCod[x]) {
      llenar(x)

      var res = confirm("Seguro de eliminar? ")
      if (res) {
        vCod.splice(x, 1)
        vNom.splice(x, 1)
        vApe.splice(x, 1)
        vDir.splice(x, 1)
        vTel.splice(x, 1)
        llenar(0)
        fil = 0
        document.getElementById('lblReg').innerHTML = "Registro Nº" + (parseInt(fil))
      }
      break;
    }

  }
}
function siguiente() {
  fil++
  if (fil < vCod.length) {
    llenar(fil)
    document.getElementById('lblReg'.innerHTML = "Registro Nº" + (parseInt(fil) + 1))
  } else {
    fil = vCod.length - 1
    window.alert("Fin de Registros")
  }
}
function anterior() {
  fil--
  if (fil >= 0) {
    llenar(fil)
    document.getElementById('lblReg').innerHTML = "Registro Nº" + (parseInt(fil) + 1)
  } else {
    fil = 0
    window.alert("Inicio de registros")
  }
}
