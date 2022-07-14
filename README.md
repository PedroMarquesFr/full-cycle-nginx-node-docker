## Ola pessoa que ta corrigindo minha entrega

### Tenho duas perguntas

Na descricao pede pra que tudo rode so com o docker-compose up -d mas por algum motivo o comando CMD ["node", "index.js"] no container do node nao é executado, para rodar precisa entrar no container `docker exec -it app bash` e rodar `node index.js` manualmente, pode me ajudar com isso?

No caso das infos do volume do mysql, qual a melhor forma de armazena-las no github sem acupar muito espaco ao mesmo tempo que mantem os arquivos fundamentais das tabelas? Oq devo colocar no gitignore/dockerignore?