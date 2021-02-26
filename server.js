/*
Um método mesmo sendo async
se internamente faz um processamento sincrono lento (ex, regex, readFileSync)
poderá bloquear o event-loop do node

node server.js
Acesse http://localhost:8070, carregará rapidamente
Acesse http://localhost:8070/teste, enquanto processa, experimente fazer outro request simultâneo para http://localhost:8070 
*/

var http = require('http');

async function regexLento() { 
    var string = 'ssssssssssssssssssssssssssssssssa';
    return string.match(/^(s|s)+$/);
}

http.createServer(async (req, res) => {
    console.log("request", req.url);

    if (req.url.indexOf('teste') != -1) {
      console.log('rodando regexLento()');
      await regexLento();
    }

    res.write('sucesso');
    res.end();

}).listen(8070);

