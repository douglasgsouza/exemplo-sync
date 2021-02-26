# exemplo-sync

Um método mesmo sendo async
se internamente faz um processamento sincrono lento (ex, regex, readFileSync)
poderá bloquear o event-loop do node

`node server.js`
No browser:
1 - Acesse http://localhost:8070
este carregará rapidamente

2 - Acesse http://localhost:8070/teste, 
este irá demorar um pouco

3 - faça outro request simultâneo para http://localhost:8070 (enquanto o /teste estiver processando)
