# Beeteller - Desenvolvedor Full Stack

O objetivo dessa atividade é avaliar tecnicamente os candidatos que participam da nossa seleção para vaga de desenvolver Full Stack. O teste é realizado para as vagas de todos os níveis, mas para cada vaga existe critérios mais específicos. 
Preste bastante atenção nas instruções e boa sorte! :)


## Instruções

Você deverá criar um `fork` deste projeto e desenvolver todo o seu código dentro desse repositório. Use o *README* do seu repositório para explicar um pouco de como foi o desafio, as decisões que você tomou e as instruções para instalar e rodar corretamente o projeto.

Sinta-se livre e tente mostrar a sua capacidade nos impressionando, mas não esqueça de atingir os objetivos principais do projeto. Faça o seu melhor!

## Let's code

Você irá construir uma aplicação, com back-end e front-end separados, para listar cotações em tempo real (periodicamente atualizadas) de algumas moedas utilizando algumas APIs. A aplicação conta com uma tela simples de login para realizar autenticação e um dashboard onde serão mostrados as cotações.

Como o desafio não é para um designer e sim para um dev, construimos um [protótipo no Figma](https://www.figma.com/file/k7SF69GbpxkgtbaPaSISow/Case?node-id=0%3A1) de como deve ficar a interface do front-end.

Como estamos esperando um projeto de back-end e um de front-end, então o seu front-end precisa consumir a aplicação do back-end.

As APIs que você deve consumir estão abaixo:

* [API de moedas BRL/USD](https://docs.awesomeapi.com.br/api-de-moedas)
* [API de moedas BTC/EUR](https://api.kraken.com/0/public/Ticker?pair=XBTeur) (primeiro parâmetro da chave `a`)
* [API de moedas BTC/USD](https://api.kraken.com/0/public/Ticker?pair=XBTusd) (primeiro parâmetro da chave `a`)

De preferência se você tiver domínio, esperamos ver o front-end em Angular ou React, e o backend em NodeJS ou Django. Mas fique a vontade para utilizar outros frameworks se acreditar que o seu desempenho será melhor por isso.


### O que nós esperamos ver no seu desafio

* Ver a utilização do framework da melhor forma possível (metodologia/estrutura).
* Ver a utilização de dependency managers (npm, webpack, pip, yarn)
* Rotas de APIs bem estruturadas
* Separação adequada de responsabilidades (back-end e front-end)
* Layout responsivo

### O que nós ficaríamos felizes de ver em seu teste

* Testes unitários e/ou testes de integração

### O que nos impressionaria

* Ver o código rodando live (Bucket estático S3, Heroku, Firebase Hosting)

### O que nós não gostaríamos

* Descobrir que não foi você quem fez seu desafio :(
* Ver commits grandes, sem muita explicação nas mensagens em seu repositório 
* Não conseguir rodar a sua aplicação por algum erro de compilação

## O que avaliaremos de seu teste

* Histórico de commits do git
* As instruções de como rodar o projeto
* Estruturação do projeto
* Organização, semântica, estrutura, legibilidade, manutenibilidade do seu código
* Alcance dos objetivos propostos
* Adaptação mobile (layout responsivo)

## Instruções para rodar o projeto(Informações do programador)
A versão mais atualizada do projeto na branch conectionBackEnd(erro não percebido na hora de digitar a branch)

No back-end
* É necessário primeiramente ter na máquina local Java 1.8 e maven(@3.6.0) instalados;
* Já com o projeto na sua IDE, no diretório onde contem o arquivo mvnw, rode o comando "mvn clean install -DskipTests";
* Após executar o comando, que irá dar um build e criar um executável do código fonte, o programa estará pronto para ser executado.

No front-end
* É necessario primeiramente ter na máquina local o npm(@6.14.6) diretamente ou a nvm;
* Com o projeto em mãos, exclua a pasta node_modules e o arquivo package-lock.json e rode o comando npm install, para instalar todas as dependências necessárias;
* Após a exercutar o comando, rode o programa com o comando npm start.

## Desafios
Meu maior desafio foi a quantidade coisas que necessitei realizar no período de realização da seleção, pois ainda estou terminando meu curso superior cujo necessitar concluir minha monografia, trabalhos da universidades e trabalhos de uma outra empresa. Posso citar também o tempo que eu tinha trabalhado com web, necessitando relembrar e aprender certas coisas. Tive problemas na criação da tela de login que nunca trabalhei na área de autenticação, por isso não consegui realizar a tempo. Outro problema foi a obtenção dos dados da API externa, onde algumas requisições não trouxeram as informações da forma correta para se obter as informações necessárias. Houve também problemas na minha máquina que não estava reconhecendo alguns imports do angular(como o CommonModule) impossibilitando a utilização de funções que me ajudariam na realização do projeto.

## Considerações finais
Foi um grande desafio a realização dessa seleção onde tive que me virar nos 30 para poder entregar aquilo que eu tinha capacidade de fazer. A cada dia me senti desafiado por ter que aprender coisas novas e me aprimorar como programador, me sentindo assim empolgado, conseguindo trabalhar em uma média de 11 horas por durante o período da seleção. Agradeço pela oportunidade de aprender coisas e espero fazer parte da Beeteller.

