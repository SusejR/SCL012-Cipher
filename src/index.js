
    const nombre = document.getElementById("nombre");
    const position = document.getElementById("position");
    const txtEncode = document.getElementById("txtEncode");
    const btnEncode = document.getElementById("btnEncode");
    const btnDecode = document.getElementById("btnDecode");
    const txtDecode = document.getElementById("txtDecode");
    const btnClear = document.getElementById("btnClear");
    

    btnEncode.addEventListener("click", () => {
        let offset = parseInt(document.getElementById("position").value);
        let txtUser = document.getElementById("txtEncode").value;
        let cipherTxt = window.cipher.encode(offset, txtUser);
        txtDecode.value = cipherTxt;

    });

  btnClear.addEventListener("click",() =>{
      nombre.value = "";
      position.value = "";
      txtEncode.value = "";
      txtDecode.value = "";
      });


      btnDecode.addEventListener("click", () => {
          let offset = parseInt(document.getElementById("position").value);
          let txtUser = document.getElementById("txtEncode").value;
          let decipherTxt = window.cipher.decode(offset, txtUser);
          txtDecode.value = decipherTxt;
          
      });
      

