import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Main } from "../components/Main";
import { Type } from "../components/Type";

import { Content, AboutTitle } from "../styles/pages/about";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <Head>
          <title>Um pouco sobre a mim | Washington Junior</title>
          <meta
            name="description"
            content="Conheça um pouco da minha história e como cheguei até aqui. Vamos fazer a diferença usando design?"
          />
        </Head>
      </Head>

      <Header side="left" />
      <Main>
        <Content>
          <AboutTitle>
            <Type hierarchy="h1">Oi! Meu nome é Washington Junior...</Type>
            <Type hierarchy="h2-light">
              Vamos <b>fazer a diferença</b> usando design?
            </Type>
          </AboutTitle>

          <Type>
            Tenho 20 anos e atualmente moro no Rio de Janeiro. Sou amante de
            tecnologia, inovação e gosto de estar sempre por dentro do que
            acontece nessas áreas. Adoro resolver problemas de forma prática e
            criativa, por isso, me encontrei quando o design cruzou minha vida.
            Para mim, um bom design existe para conectar pessoas e transmitir
            ideias de forma simples, funcional e – principalmente – acessível
            para todos.
          </Type>
          <Type>
            Já passei pelas mais diversas áreas dentro do design, desde
            impressos, produtos, mídias digitais e até criação de marcas
            (quando, pela primeira vez, tornei mais sólidos meus fundamentos
            teóricos e melhorei a integração do lado estratégico de negócios ao
            meu trabalho). Nos ultimos anos, atuo com{" "}
            <b>
              design de produtos digitais orientados à experiência do usuário.
            </b>
          </Type>
          <Type>
            Ainda quando criança, comecei a gostar de trabalhar para ajudar
            outras pessoas e, com o tempo, o empreendedorismo me ensinou a fazer
            negócios, ser mais criativo e me envolver bastante com tecnologia e
            ferramentas que otimizam e aumentam minha efetividade.
          </Type>
          <Type>
            Nos últimos tempos, quando comecei a atuar na elaboração de produtos
            digitais, desenvolvi cada vez mais minhas{" "}
            <b>
              metodologias de pesquisa, análise de métricas e mapeamento de
              oportunidades nas jornadas de produto
            </b>
            , articulando sempre com outras equipes atuando com metodologias
            ágeis.
          </Type>
          <Type>
            Ao trabalhar implementando os elementos fundamentais do design em
            interfaces que colaboram para uma melhor usabilidade e, a partir
            disso, facilitar boas experiências, melhorei minha capacidade de
            abstração e empatia para observar as necessidades do usuário com
            testes e entrevistas quantitativas e qualitativos, além de outras
            metodologias de pesquisa comportamentais e atitudinais.
          </Type>
          <Type>
            Por acreditar que uma comunicação clara e integrada é essencial para
            o sucesso de uma equipe, sempre busco entender as demandas de cada
            par responsavel dentro dos projetos para ajudar a estruturar
            processos, documentações e feedbacks que sejam realmente impactantes
            e relevantes na medida certa para a evolução do ecossistema de
            produto.
          </Type>
          <Type>
            Foi por conta da minha curiosidade e proatividade que me envolvi de
            maneira muito próxima com times de desenvolvimento e isso me ajudou
            bastante a{" "}
            <b>entender a viabilidade técnica das soluções que construíamos</b>.
            Versionamento, abstração, divisão de responsabilidades e
            documentação para descentralização do conhecimento foram só algumas
            das coisas que me engrandeceram quando me aproximei e comecei a me
            interessar pelas trilhas do desenvolvimento de software.
          </Type>
          <Type>
            Como sempre gostei de aproveitar da tecnologia para otimizar minha
            vida, aprender programação e levar os conhecimentos de arquitetura e
            desenvolvimento de sistemas para dentro do design melhorou muito a
            minha produtividade. Seja criando pequenos sistemas para tratar
            dados de pesquisas, otimizar processos repetitivos ou até na criação
            de design systems versáteis e robustos.
          </Type>
          <Type>
            Para mim, design não é só sobre projetar a partir de um olhar atento
            e criativo, mas também é traduzir e comunicar mensagens de maneira
            intuitiva e acessível. <b>Design é sobre fazer a diferença.</b>
          </Type>
          <Type hierarchy="signature">Washington Junior</Type>
        </Content>
      </Main>
      <Footer />
    </Layout>
  );
};

export default Home;
