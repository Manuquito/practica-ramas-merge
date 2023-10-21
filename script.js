function agregarALaPantalla(value) {
    document.getElementById('pantalla').value += value;
  }
  
  function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
  }
  
  function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
  }
  function borraUltimoCaracter()
  {

    const value = document.getElementById("pantalla").value;
    const result = value.substring(0, value.length-1);
    document.getElementById("pantalla").value = result;
    
  }