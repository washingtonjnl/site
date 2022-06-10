import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Main } from "../components/Main";
import { Type } from "../components/Type";

import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import {
  Profile,
  ProfileInfo,
  ProfessionalInfo,
  SocialInfo,
} from "../styles/pages/home";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Washington Junior | Product Designer</title>
        <meta name="title" content="Washington Junior | Product Designer" />
        <meta
          name="description"
          content="Sou designer e desenvolvedor autodidata, estudante de publicidade na UFRJ e amante da tecnologia e inovação."
        />
      </Head>

      <Header />
      <Main>
        <Profile>
          <img
            src="/profile.jpg"
            alt="Rosto do Washington Junior, homem negro com cabelo raspado na lateral e óculos de grau redondos."
          />

          <ProfileInfo>
            <Type hierarchy="h1">Oi! Meu nome é Washington Junior</Type>
            <Type hierarchy="h2-light">
              Designer e desenvolvedor autodidata. Estudante de Publicidade na
              UFRJ
            </Type>
          </ProfileInfo>

          <ProfessionalInfo>
            <Type>
              Trabalho como Product Designer na{" "}
              <a href="https://warren.com.br/" target="_blank" rel="noreferrer">
                @Warren
              </a>
            </Type>
            <Type>
              Antes, fui Product Designer no{" "}
              <a
                href="https://www.telecine.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                @Telecine
              </a>
            </Type>
          </ProfessionalInfo>

          <SocialInfo>
            <a
              href="https://api.whatsapp.com/send?phone=5521990106262"
              target="_blank"
              rel="noreferrer"
            >
              <Type>
                <FaPhoneAlt />
                +55 21 99010-6262
              </Type>
            </a>
            <a
              href="mailto:oi@washingtonjunior.com"
              target="_blank"
              rel="noreferrer"
            >
              <Type>
                <FaEnvelope />
                oi@washingtonjunior.com
              </Type>
            </a>
            <a
              href="https://github.com/washingtonjnl"
              target="_blank"
              rel="noreferrer"
            >
              <Type>
                <FaGithub />
                washingtonjnl
              </Type>
            </a>

            <a
              href="https://www.linkedin.com/in/washington-junior-b2865b1b9/"
              target="_blank"
              rel="noreferrer"
            >
              <Type>
                <FaLinkedin />
                Washington Junior
              </Type>
            </a>
          </SocialInfo>
        </Profile>
      </Main>
      <Footer />
    </Layout>
  );
};

export default Home;
