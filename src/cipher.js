window.cipher = {
  encode: (offset, txtCode) => {

    // Aqui se esta declarando la función para cifrar
      let resultCode = "";

    for ( let position=0; position < txtCode.length; position++) {

         let txtAscii = txtCode.charCodeAt(position);
          let code ="";
        // Si se cumple la condición para las letras mayusculas, aplicamos la fórmula de Michell
          if (txtAscii >=65 && txtAscii <=90){
             code = (txtAscii - 65 + parseInt(offset)) % 26 + 65;
          }
          // Si se cumple la condición para las letras minusculas, aplicamos la fórmula de Michell
          if (txtAscii >=97 && txtAscii <=122){
              code = (txtAscii - 97 + parseInt(offset)) % 26 + 97;
          }
          // Si se cumple la condición para los números, aplicamos la fórmula de Michell
          if (txtAscii >=48 && txtAscii <=57){
              code = (txtAscii - 48 + parseInt(offset)) % 10 + 48;
          }
          // Si se cumple la condición para los caracteres especiales, aplicamos la fórmula de Michell
          if (txtAscii >=32 && txtAscii <=47){
              code = (txtAscii - 32 + parseInt(offset)) % 16 + 32;
          }
          // Si se cumple la condición para  los caracteres especiales, aplicamos la fórmula de Michell
          if (txtAscii >=58 && txtAscii <=64){
              code = (txtAscii - 58 + parseInt(offset)) % 7 + 58;
          }
          // Si se cumple la condición para los caracteres especiales, aplicamos la fórmula de Michell
          if (txtAscii >=91 && txtAscii <=96){
              code = (txtAscii - 91 + parseInt(offset)) % 6 + 91;
          }
          // Si se cumple la condición para los caracteres especiales, aplicamos la fórmula de Michell
          if (txtAscii >=123 && txtAscii <=126){
              code = (txtAscii - 123 + parseInt(offset)) % 4 + 123;
          }
          // Aquí utilizo el metodo strig.fromCharCode para pedirle que convierta el resultado en letras
         resultCode+= String.fromCharCode(code);
      }
      return resultCode;
      
  },
  // Aqui declaro la función para decodificar
  decode: (offset, txtDcode) => {
      let resultDecode = "";

      for (let position=0; position < txtDcode.length; position++) {

          let txtAscii = txtDcode.charCodeAt(position);
          let dcode ="";
         // Si se cumple la condición para las letras mayusculas, aplicamos la fórmula de Michell
         if (txtAscii >=65 && txtAscii <=90) {
             dcode = (txtAscii - 90 - parseInt(offset)) % 26 + 90;
           }
           // Si se cumple la condición para las letras minusculas, aplicamos la fórmula de Michell
          if (txtAscii >=97 && txtAscii <=122){
              dcode = (txtAscii - 122 - parseInt(offset)) % 26 + 122;
          }
          // Si se cumple la condición para los números, aplicamos la fórmula de Michell
          if (txtAscii >=48 && txtAscii <=57){
              dcode = (txtAscii - 57 - parseInt(offset)) % 10 + 57;
          }
          // Si se cumple la condición para los caracteres especiales, aplicamos la fórmula de Michell
          if (txtAscii >=32 && txtAscii <=47){
              dcode = (txtAscii - 47 - parseInt(offset)) % 16 + 47;
          }
          // Si se cumple la condición para los caracteres especiales, aplicamos la fórmula de Michell
          if (txtAscii >=58 && txtAscii <=64){
              dcode = (txtAscii - 64 - parseInt(offset)) % 7 + 64;
          }
          // Si se cumple la condición para los caracteres especiales, aplicamos la fórmula de Michell
          if (txtAscii >=91 && txtAscii <=96){
              dcode = (txtAscii - 96 - parseInt(offset)) % 6 + 96;
          }
          // Si se cumple la condición para los caracteres especiales, aplicamos la fórmula de Michell
          if (txtAscii >=123 && txtAscii <=126){
              dcode = (txtAscii - 126 - parseInt(offset)) % 4 + 126;
          }
            // Aquí utilizo el metodo strig.fromCharCode para pedirle que convierta el resultado en letras
           resultDecode+= String.fromCharCode(dcode);
      }
      return resultDecode;
      

  }
      
  
}

