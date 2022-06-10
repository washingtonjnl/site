---
cover: /projetcs/research-algoritmo-recomendacao/cover.jpg
coverAlt: Capa do projeto com referência de interface e documentações de pesquisa.
title: User Research em algoritmo de recomendação de filmes
description: Ideação de algoritmo para recomendação de filmes utilizando técnicas de User Research e Product Planning.

type: [Projeto Profissional]
tags: [User Research, Interface Design]
---

# User Research em algoritmo de recomendação de filmes
## _Ideação de algoritmo para recomendação de filmes utilizando técnicas de User Research e Product Planning._

## Análise do problema
No momento, os rankings dos filmes na plataforma são atualizados manualmente pela equipe de conteúdo. Por conta dessa limitação, existem poucas listas dessa categoria e elas só são atualizadas semanalmente. Isso gera um **alto custo operacional e pouca flexibilidade** para recomendações específicas.

Em pesquisas anteriores (KANO e NPS), os usuários já confirmaram a importância de recomendações específicas dentro da plataforma como um fator relevante nos momentos de escolha do conteúdo. Além disso, a falta de um sistema de recomendação mais preciso também é um elemento detrator em comparação com outros serviços de streaming.

Temos então, uma oportunidade de **facilitar a decisão do usuário** e, com isso:
* Diminuir o tempo de escolha dos filmes, esperando minimizar a quantidade de sessões sem play;
* Aumentar o engajamento, retenção na plataforma e avaliações positivas, já que os filmes escolhidos terão um fit maior com as preferências do espectador.

## Como solucionar esse problema
Além das melhorias relacionadas à experiência do usuário, automatizar os rankings possibilitarão maior escala do time de conteúdo. A questão principal é definir quais são os rankings mais relevantes para que a construção do algoritmo possa ser corretamente segmentada com entregas de valor contínuas. Logo:

>Precisamos entender o comportamento dos usuários ao escolher um filme a partir da relevância entre os termos e listas apresentadas na plataforma para priorizar a automação dos rankings já existentes.

## Planejamento
Fizemos uma dinâmica em conjunto com POs, profissionais de conteúdo, equipe de engenharia, profissionais de BI e product designers para avaliar possíveis soluções para o problema. Com isso, foi possível:

* Aumentar o entendimento sobre as dores e necessidades específicas de cada time;
* Construir mapa dos principais pontos de contato na jornada do cliente;
* Definir pontos de ação para cada equipe técnica construir a primeira fase do projeto em paralelo;

![Quadro geral com os insights coletados na cerimônia de aprofundamento.](/public/projects/research-algoritmo-recomendacao/tactical-inception.jpg)

## Execução prática
Cada equipe se reuniu separadamente para avaliar como poderiam ser executadas as propostas da inception tática.

Enquanto product designer, fiquei responsável pelo planejamento do estudo que traria insumos para a priorização da funcionalidade, atuando na:

* Definição das metodologias de pesquisa com os clientes;
* Coleta de dados secundários;
* Segmentação e recrutamento da base de usuários;
* Preparação dos artefatos para pesquisa;

## Pesquisa: Identificação dos rankings na plataforma
Para acompanhar durante a utilização da plataforma as interações com os rankings e analisar se as pessoas conseguiriam diferenciar os novos trilhos de filmes ranqueados de outros filmes na plataforma, foram realizados testes de usabilidades comparando a plataforma atual com uma versão atualizada (que continha os rankings modificados).

Realizamos seis rodadas com assinantes nos dois cenários. O intuito foi entender as diferenças e semelhanças na escolha do filme antes e depois das modificações visuais idealizadas.

Ao fim dos testes, fizemos uma momento qualitativo para, a partir das dúvidas dos usuários, aprofundar nosso conhecimento sobre as decisões tomadas nas interações mais relevantes.

Com essas duas análises, conseguimos **aumentar nosso entendimento do racional por trás da escolha do filme.**

## Pesquisa: Relevância entre as temáticas de ranqueamento
Preparamos uma segunda cerimônia de Card Sorting para que os usuários pudessem priorizar de forma aberta quais temáticas (dentre as já mapeadas pelos dados da plataforma).

Solicitamos aos usuários que organizassem, em ordem crescente de relevância, 13 possíveis rankings que surgiram a partir da inception tática.

O objetivo foi entender quais temáticas eram as mais interessantes de se encontrar num ranking. Ou seja, quais gêneros/assuntos a pessoa se interessava, mas normalmente tinha dificuldade de escolher o que asssistir.

## Normalização e análise dos dados
A partir dos testes e entrevistas qualitativas, pontuamos os principais comportamentos e opiniões a realacionados aos rankings.

Com isso, foram compilados por afinidade e traduzidos em uma lista os **pontos de contato de maior e menor conversão nos rankings e como otimizá-los.**

Para dinamizar e automatizar o processo de análise das priorizações individuais (Card Sorting), idealizei e implementei um algoritmo de pontuaçãode para destacar os padrões de preferência dos clientes.

Como ao longo das cerimônias, percebi que os participantes tinham muita certeza do que gostavam e não gostavam, mas ficaram com bastante dúvida ao elencar as colocações intermediárias, os critérios matemáticos para a pontuação valorizam mais os extremos.

Assim, podemos focar no que fazer e não fazer com mais facilidade, deixando as posições intermediárias com ressalvas para pesquisas futuras.

![Régua de pontuação do algoritmo de classificação desenvolvido.](/public/projects/research-algoritmo-recomendacao/algorithim-rules.jpg)

A partir das pontuações finais de cada temática, o ranking geral de priorização foi construído para destacar os itens mais e menos relevantes:

![Lista final com a ordem de preferência dos clientes.](/public/projects/research-algoritmo-recomendacao/general-preferences.jpg)

## Próximos passos
Além dos pontos relacionados ao ranqueamento, outras oportunidades foram descobertas a partir desta pesquisa. As definições principais relacionadas ao problema foram classificadas e direcionadas para auxiliar a priorização da equipe.

Os atributos extras foram organizados como anexos em nossa base de pesquisa para auxiliar novos estudos no futuro. Com isso, podemos **otimizar dos processos para novas pesquisas** e **compartilhamento de conhecimento de valor sobre o usuário com outras equipes.**

Definidos os pontos que seriam priorizados, revisitamos as possíveis métricas levantadas na primeira dinâmica para avaliar quais KPIs fariam mais sentido para avaliar a performance da solução e trariam mais inteligência para nossa base de dados.