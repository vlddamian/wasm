const fs = require('fs');
const buf = fs.readFileSync('./test-7.wasm');

var importObject = {
    imports: {
    }
};

WebAssembly.instantiate(buf, importObject).then(instance => {

     console.log(instance.instance.exports);
  console.log(  instance.instance.exports.hello() );

}).catch(console.log);
