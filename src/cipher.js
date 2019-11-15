window.cipher = {
  encode: (offset, txtCode) => {
      let resultCode = "";

    for ( let position=0; position < txtCode.length; position++) {

         let txtAscii = txtCode.charCodeAt(position);
          let code ="";

          if (txtAscii >=65 && txtAscii <=90){
             code = (txtAscii - 65 + parseInt(offset)) % 26 + 65;
          }
          if (txtAscii >=97 && txtAscii <=122){
              code = (txtAscii - 97 + parseInt(offset)) % 26 + 97;
          }
          if (txtAscii >=48 && txtAscii <=57){
              code = (txtAscii - 48 + parseInt(offset)) % 10 + 48;
          }
          if (txtAscii >=32 && txtAscii <=47){
              code = (txtAscii - 32 + parseInt(offset)) % 16 + 32;
          }
          if (txtAscii >=58 && txtAscii <=64){
              code = (txtAscii - 58 + parseInt(offset)) % 7 + 58;
          }
          if (txtAscii >=91 && txtAscii <=96){
              code = (txtAscii - 91 + parseInt(offset)) % 6 + 91;
          }
         resultCode+= String.fromCharCode(code);
      }
      return resultCode;
      
  },

  decode: (offset, txtDcode) => {
      let resultDecode = "";

      for (let position=0; position < txtDcode.length; position++) {

          let txtAscii = txtDcode.charCodeAt(position);
          let dcode ="";
         
         if (txtAscii >=65 && txtAscii <=90) {
             dcode = (txtAscii - 90 - parseInt(offset)) % 26 + 90;
           }

          if (txtAscii >=97 && txtAscii <=122){
              dcode = (txtAscii - 122 - parseInt(offset)) % 26 + 122;
          }

          if (txtAscii >=48 && txtAscii <=57){
              dcode = (txtAscii - 57 - parseInt(offset)) % 10 + 57;
          }
          if (txtAscii >=32 && txtAscii <=47){
              dcode = (txtAscii - 47 - parseInt(offset)) % 16 + 47;
          }
          if (txtAscii >=58 && txtAscii <=64){
              dcode = (txtAscii - 64 - parseInt(offset)) % 7 + 64;
          }
          if (txtAscii >=91 && txtAscii <=96){
              dcode = (txtAscii - 96 - parseInt(offset)) % 6 + 96;
          }
          
           resultDecode+= String.fromCharCode(dcode);
      }
      return resultDecode;
      

  }
      
  
}

