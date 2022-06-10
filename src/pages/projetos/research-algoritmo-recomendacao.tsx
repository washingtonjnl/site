import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { Main } from "../../components/Main";
import { Tags } from "../../components/Tags";
import { Type } from "../../components/Type";

import {
  Content,
  Cover,
  ProjectTitle,
  ContentSection,
  List,
} from "../../styles/pages/project";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <Head>
          <title>
            User Research em algoritmo de recomendação | Washington Junior
          </title>
          <meta
            name="title"
            content="User Research em algoritmo de recomendação | Washington Junior"
          />
          <meta
            name="description"
            content="Ideação de algoritmo para recomendação de filmes utilizando técnicas de User Research e Product Planning."
          />
        </Head>
      </Head>

      <Header side="left" />
      <Main>
        <Content>
          <Cover
            src="/projects/research-algoritmo-recomendacao/cover.jpg"
            alt="Capa do projeto com referência de interface e documentações de pesquisa."
          />
          <ProjectTitle>
            <Type hierarchy="h1">
              User Research em algoritmo de recomendação de filmes
            </Type>
            <Type hierarchy="h2-light">
              Ideação de algoritmo para recomendação de filmes utilizando
              técnicas de User Research e Product Planning.
            </Type>
            <Tags
              tags={[
                "Projeto Profissional",
                "User Research",
                "Interface Design",
              ]}
            />
          </ProjectTitle>

          <ContentSection>
            <Type hierarchy="h2">Análise do problema</Type>
            <Type>
              Em uma plataforma de streaming de videos, garantir que os
              espectadores permaneçam engajados, satisfeitos e promotores da
              marca é crucial para a manutenção do negócio. Quanto mais
              assinantes, mais a plataforma tem recursos para negociar com os
              estúdios de cinema os direitos de transmissão dos lançamentos no
              mercado.
            </Type>
            <Type>
              Uma das formas de manter os clientes satisfeitos é oferecendo um
              catálogo especial, com os títulos que aquela pessoa gosta, de
              forma fácil para que o esforço cognitivo ao iniciar esse período
              de lazer seja mínimo.
            </Type>
            <Type>
              No momento, os rankings dos filmes na plataforma são atualizados
              manualmente pela equipe de conteúdo. Por conta dessa limitação,
              existem poucas listas dessa categoria e elas só são atualizadas
              semanalmente. Isso gera um{" "}
              <b>alto custo operacional e pouca flexibilidade</b> para
              recomendações específicas.
            </Type>
            <Type>
              Em pesquisas anteriores (KANO e NPS), os usuários já confirmaram a
              importância de recomendações específicas dentro da plataforma como
              um fator relevante nos momentos de escolha do conteúdo. Além
              disso, a falta de um sistema de recomendação mais preciso também é
              um elemento detrator em comparação com outros serviços de
              streaming.
            </Type>
            <Type>
              Temos então, uma oportunidade de{" "}
              <b>facilitar a decisão do usuário</b> e, com isso:
            </Type>
            <List>
              <li>
                <Type>
                  Diminuir o tempo de escolha dos filmes, esperando minimizar a
                  quantidade de sessões sem play;
                </Type>
              </li>
              <li>
                <Type>
                  Aumentar o engajamento, retenção na plataforma e avaliações
                  positivas, já que os filmes escolhidos terão um fit maior com
                  as preferências do espectador.
                </Type>
              </li>
            </List>
          </ContentSection>

          <ContentSection>
            <Type hierarchy="h2">Como solucionar esse problema</Type>
            <Type>
              Além das melhorias relacionadas à experiência do usuário,
              automatizar os rankings possibilitarão maior escala do time de
              conteúdo. A questão principal é definir quais são os rankings mais
              relevantes para que a construção do algoritmo possa ser
              corretamente segmentada com entregas de valor contínuas. Logo:
            </Type>
            <Type hierarchy="quote">
              Precisamos entender o comportamento dos usuários ao escolher um
              filme a partir da relevância entre os termos e listas apresentadas
              na plataforma para priorizar a automação dos rankings já
              existentes.
            </Type>
          </ContentSection>

          <ContentSection>
            <Type hierarchy="h2">Planejamento</Type>
            <Type>
              Fizemos uma dinâmica em conjunto com POs, profissionais de
              conteúdo, equipe de engenharia, profissionais de BI e product
              designers para avaliar possíveis soluções para o problema. Com
              isso, foi possível:
            </Type>
            <List>
              <li>
                <Type>
                  Aumentar o entendimento sobre as dores e necessidades
                  específicas de cada time;
                </Type>
              </li>
              <li>
                <Type>
                  Construir mapa dos principais pontos de contato na jornada do
                  cliente;
                </Type>
              </li>
              <li>
                <Type>
                  Definir pontos de ação para cada equipe técnica construir a
                  primeira fase do projeto em paralelo;
                </Type>
              </li>
            </List>
            <img
              src="/projects/research-algoritmo-recomendacao/tactical-inception.jpg"
              alt="Quadro geral com os insights coletados na cerimônia de aprofundamento."
            />
            <Type hierarchy="caption">
              Quadro geral com os insights coletados na cerimônia de
              aprofundamento.
            </Type>
          </ContentSection>

          <ContentSection>
            <Type hierarchy="h2">Execução prática</Type>
            <Type>
              Cada equipe se reuniu separadamente para avaliar como poderiam ser
              executadas as propostas da inception tática.
            </Type>
            <Type>
              Enquanto product designer, fiquei responsável pelo planejamento do
              estudo que traria insumos para a priorização da funcionalidade,
              atuando na:
            </Type>
            <List>
              <li>
                <Type>
                  Definição das metodologias de pesquisa com os clientes;
                </Type>
              </li>
              <li>
                <Type>Coleta de dados secundários;</Type>
              </li>
              <li>
                <Type>Segmentação e recrutamento da base de usuários;</Type>
              </li>
              <li>
                <Type>Preparação dos artefatos para pesquisa;</Type>
              </li>
            </List>
          </ContentSection>

          <ContentSection>
            <Type hierarchy="h2">
              Pesquisa: Identificação dos rankings na plataforma
            </Type>
            <Type>
              Para acompanhar as interações com os rankings durante a utilização
              da plataforma e analisar se as pessoas conseguiriam diferenciar os
              novos trilhos de filmes ranqueados de outros filmes na plataforma,
              foram realizados testes de usabilidades comparando a plataforma
              atual com uma versão atualizada (que continha os rankings
              modificados).
            </Type>
            <Type>
              Realizamos seis rodadas com assinantes dividos entre os dois
              cenários. O intuito foi entender as diferenças e semelhanças na
              escolha do filme antes e depois das modificações visuais
              idealizadas.
            </Type>
            <Type>
              Ao fim dos testes, fizemos uma momento qualitativo para, a partir
              das dúvidas dos usuários, aprofundar nosso conhecimento sobre as
              decisões tomadas nas interações mais relevantes.
            </Type>
            <Type>
              Com essas duas análises, conseguimos{" "}
              <b>
                aumentar nosso entendimento sobre o raciocínio por trás da
                escolha do filme.
              </b>
            </Type>
          </ContentSection>

          <ContentSection>
            <Type hierarchy="h2">
              Pesquisa: Relevância entre as temáticas de ranqueamento
            </Type>
            <Type>
              Preparamos uma segunda cerimônia de Card Sorting para identificar
              quais temáticas eram as mais interessantes de se encontrar num
              ranking.
            </Type>
            <Type>
              Orientamos os participantes para organizar, em ordem crescente de
              relevância, 13 possíveis rankings que surgiram a partir da análise
              dos dados da plataforma feita na inception tática.
            </Type>
            <Type>
              Ou seja, com isso, foi possível estimar quais gêneros/assuntos a
              pessoa se interessava, mas normalmente tinha dificuldade de
              escolher o que asssistir.
            </Type>
          </ContentSection>

          <ContentSection>
            <Type hierarchy="h2">Normalização e análise dos dados</Type>
            <Type>
              A partir dos testes e entrevistas qualitativas, pontuamos os
              principais comportamentos e opiniões a realacionados aos rankings.
            </Type>
            <Type>
              Com isso, foram compilados por afinidade e traduzidos em uma lista
              os{" "}
              <b>
                pontos de contato de maior e menor conversão nos rankings e como
                otimizá-los.
              </b>
            </Type>
            <Type>
              Para dinamizar e automatizar o processo de análise das
              priorizações individuais (Card Sorting), idealizei e implementei
              um algoritmo de pontuaçãode para destacar os padrões de
              preferência dos clientes.
            </Type>
            <Type>
              Como ao longo das cerimônias, percebi que os participantes tinham
              muita certeza do que gostavam e não gostavam, mas ficaram com
              bastante dúvida ao elencar as colocações intermediárias, os
              critérios matemáticos para a pontuação valorizam mais os extremos.
            </Type>
            <Type>
              Assim, podemos focar no que fazer e não fazer com mais facilidade,
              deixando as posições intermediárias com ressalvas para pesquisas
              futuras.
            </Type>
            <img
              src="/projects/research-algoritmo-recomendacao/algorithim-rules.jpg"
              alt="Régua de pontuação do algoritmo de classificação desenvolvido."
            />
            <Type hierarchy="caption">
              Régua de pontuação do algoritmo de classificação desenvolvido.
            </Type>
            <img
              src="/projects/research-algoritmo-recomendacao/general-preferences.jpg"
              alt="Lista final com a ordem de preferência dos clientes."
            />
            <Type hierarchy="caption">
              Lista final com a ordem de preferência dos clientes.
            </Type>
          </ContentSection>

          <ContentSection>
            <Type hierarchy="h2">Próximos passos</Type>
            <Type>
              Além dos pontos relacionados ao ranqueamento, outras oportunidades
              foram descobertas a partir desta pesquisa. As definições
              principais relacionadas ao problema foram classificadas e
              direcionadas para auxiliar a priorização da equipe.
            </Type>
            <Type>
              Os atributos extras foram organizados como anexos em nossa base de
              pesquisa para auxiliar novos estudos no futuro. Com isso, podemos{" "}
              <b>otimizar dos processos para novas pesquisas</b> e{" "}
              <b>
                compartilhamento de conhecimento de valor sobre o usuário com
                outras equipes.
              </b>
            </Type>
            <Type>
              Definidos os pontos que seriam priorizados, revisitamos as
              possíveis métricas levantadas na primeira dinâmica para avaliar
              quais KPIs fariam mais sentido para avaliar a performance da
              solução e trariam mais inteligência para nossa base de dados.
            </Type>
          </ContentSection>
        </Content>
      </Main>
      <Footer />
    </Layout>
  );
};

export default Home;
