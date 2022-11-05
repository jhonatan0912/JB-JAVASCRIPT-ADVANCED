function finvertir(cant) {
  var ci = 0;
  while (cant > 0) {
    d = cant % 10
    ci = (ci * 10) + d
    cant = parseInt(cant / 10)
  }
  return ci
}