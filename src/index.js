// Declaro los elementos DOM
    const nombre = document.getElementById("nombre");
    const position = document.getElementById("position");
    const txtEncode = document.getElementById("txtEncode");
    const btnEncode = document.getElementById("btnEncode");
    const btnDecode = document.getElementById("btnDecode");
    const txtDecode = document.getElementById("txtDecode");
    const btnClear = document.getElementById("btnClear");
    
    // Esta función se ejecuta al hacer click en el boton "codificar"
    btnEncode.addEventListener("click", () => {
        let offset = parseInt(document.getElementById("position").value);
        let txtUser = document.getElementById("txtEncode").value;
        let cipherTxt = window.cipher.encode(offset, txtUser);
        txtDecode.value = cipherTxt;

    });
    // Esta función se ejecuta al hacer click en el boton "Borrar"
  btnClear.addEventListener("click",() =>{
      nombre.value = "";
      position.value = "";
      txtEncode.value = "";
      txtDecode.value = "";
      });

      // Esta función se ejecuta al hacer click en el boton "decodificar"
      btnDecode.addEventListener("click", () => {
          let offset = parseInt(document.getElementById("position").value);
          let txtUser = document.getElementById("txtEncode").value;
          let decipherTxt = window.cipher.decode(offset, txtUser);
          txtDecode.value = decipherTxt;
          
      });
      

