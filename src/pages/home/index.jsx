import {
  AboutMe,
  Certificates,
  Container,
  ContainerUser,
  Skills,
  SubContainer,
} from "./style";

import Discover from "../../assets/discover.png";
import { useEffect } from "react";
import { BoxUser } from "../../components/BoxUser";
import { BoxNavigation } from "../../components/BoxNavigation";
import { Projects } from "../../components/Projects";
import { CardCertifications } from "../../components/CardCertifications";
import { Footer } from "../../components/Footer";
import { Box } from "../../components/Box";

export function Home() {
  const data = {
    Me: [
      {
        link: "https://web-production-81cb.up.railway.app/",
        title: "Gallow of Death Online",
        image:
          "https://github.com/Breno-oKra/Gallows-of-Death-online-/raw/main/.github/Macbook-Air-localhost.png",
        created: "Maio 2021",
        github: "https://github.com/Breno-oKra/Gallows-of-Death-online-",
        description:
          "Meu Primeiro Projeto estudando a fundo o uso so Socket.io pela documentação, o projeto trata-se de um jogo da forca online, onde quem acertar as letras ganha pontos e pode usar seus poderes para matar seu adversario",
        tags: ["EJS", "JQUERY", "SOCKET.IO", "JavaScript", "NodeJs"],
        isMobile: false,
      },
      {
        link: "https://food-explorer-brenookra.netlify.app/",
        title: "ExplorerFood - Rocketseat",
        image:
          "https://github.com/Breno-oKra/Food_explorerv2/raw/main/src/assets/home.png",
        created: "Março 2024",
        github:
          "https://github.com/Breno-oKra/Food-Explorer-frontend-brenookra",
        description:
          "Projeto Final do curso explorer, onde teriamos que construir um site paracido com a mecanicas do ifood, contendo funções como de favoritar comidas, adicionar ao carrinho, perfis admins econsumidor, controle de pedidos e pagamentos",
        tags: [
          "HTML",
          "CSS",
          "STYLES-COMPONENTS",
          "KNEX - SQLITE3",
          "REACT",
          "NODEJS",
        ],
        imageCurse:
          "data:image/png;base64,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",
        imageCertificate:
          "https://hotmart.s3.amazonaws.com/product_pictures/8d3a248f-323d-49e9-8a48-07e8f49f6c17/Explorer2.png",
        nameCurse: "Rocketseat",
        isMobile: true,
      },
      {
        link: "https://rocketmoviesokra.netlify.app",
        title: "Desafio ReactMovies - Rocketseat",
        image:
          "https://github.com/Breno-oKra/desafio-ReactMovies-rocketseat-explorer/raw/main/src/assets/project/singup.png",
        created: "Desembro 2023",
        github:
          "https://github.com/Breno-oKra/desafio-ReactMovies-rocketseat-explorer?tab=readme-ov-file",
        description:
          "Projeto é uma desafio do curso explorer da rocketseat, o desafio seria construir essa aplicação atraves dos conhecimento obtidos no projeto <span>React Notes</span> feito em aula",
        tags: [
          "HTML",
          "CSS",
          "STYLES-COMPONENTS",
          "KNEX - SQLITE3",
          "REACT",
          "NODEJS",
        ],
        links: {
          "react-notes":
            "https://github.com/Breno-oKra/React-notes-rocketseat-explorer",
        },
        imageCurse:
          "data:image/png;base64,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",
        imageCertificate:
          "https://hotmart.s3.amazonaws.com/product_pictures/8d3a248f-323d-49e9-8a48-07e8f49f6c17/Explorer2.png",
        nameCurse: "Rocketseat",
        isMobile: true,
      },
    ],
    MeOur: [
      {
        link: " https://breno-okra.github.io/git-favorite-rocketseat-explorer/",
        title: "Git Favorite - Rocketseat",
        image:
          "https://github.com/Breno-oKra/git-favorite-rocketseat-explorer/raw/main/assets/desktop.png",
        created: "Outubro 2023",
        github: "https://github.com/Breno-oKra/git-favorite-rocketseat-explorer",
        description:
          "Esse Projeto foi desenvolvido no curso explorer onde consumimos a api do github",
        tags: [
          "HTML",
          "CSS",
          "JavaScript"
        ],
        imageCurse:
          "data:image/png;base64,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",
        imageCertificate:
          "https://hotmart.s3.amazonaws.com/product_pictures/8d3a248f-323d-49e9-8a48-07e8f49f6c17/Explorer2.png",
        nameCurse: "Rocketseat",
        isMobile: true,
      },
      {
        link: "https://breno-okra.github.io/Blog-de-Gatos-Rocketseat-Explorer/",
        title: "Blog de Gatos - Rocketseat",
        image:
          "https://github.com/Breno-oKra/Blog-de-Gatos-Rocketseat-Explorer/raw/main/assets/Project-destop.png",
        created: "Agosto 2023",
        github: "https://github.com/Breno-oKra/Blog-de-Gatos-Rocketseat-Explorer",
        description:
          "Projeto realizado no curso explorer com proposito de aprender responsividades e animações de transição ",
        tags: [
          "HTML",
          "CSS"
        ],
        imageCurse:
          "data:image/png;base64,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",
        imageCertificate:
          "https://hotmart.s3.amazonaws.com/product_pictures/8d3a248f-323d-49e9-8a48-07e8f49f6c17/Explorer2.png",
        nameCurse: "Rocketseat",
        isMobile: true,
      },
    ],
  };

  const skillsData = [
    {
      name: "html",
      image:
        "https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png",
    },
    {
      name: "css",
      image:
        "https://diziglobalsolution.com/wp-content/uploads/2023/04/logo-css-3-1536.png",
    },
    {
      name: "JavaScript",
      image:
        "https://www.ramzamani.com/media/skills/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png",
    },
    {
      name: "Bootstrap",
      image:
        "https://getbootstrap.com.br/docs/4.1/assets/img/bootstrap-stack.png",
    },
    {
      name: "StyleComponents",
      image:
        "https://www.devmedia.com.br/imagens/articles/artigo-utilizando-styled-components-no-react-43554.png",
    },
    {
      name: "Tawild",
      image: "https://www.drupal.org/files/project-images/screenshot_361.png",
    },
    {
      name: "Jquery",
      image: "https://avatars.githubusercontent.com/u/70142?s=280&v=4",
    },
    {
      name: "NodeJs",
      image:
        "https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png",
    },
    {
      name: "ReactJs",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png",
    },
    {
      name: "TypeScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    },
    {
      name: "NextJs",
      image:
        "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
    },
    {
      name: "Sqlite",
      image: "https://www.nuget.org/profiles/SQLite/avatar?imageSize=512",
    },
    {
      name: "Git/Github",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
    },
  ];

  useEffect(() => {
    function scrollz() {
      const project = document.querySelectorAll(".sections");

      const ObserverSkills = new IntersectionObserver((e) => {
        e.forEach((el) => {
          if (el.intersectionRatio > 0.4 && el.isIntersecting) {
            document.querySelector(`.${el.target.id}`).classList.add("kong");
          } else {
            document.querySelector(`.${el.target.id}`).classList.remove("kong");
          }
        });
      });
      project.forEach((el) => ObserverSkills.observe(el));
    }
    function Verify(){
      const mode = localStorage.getItem("@Breno-okra");
      if(mode){
        if(JSON.parse(mode)){
          document.querySelector("#box").classList.remove("boxSun")
          document.documentElement.classList.remove("light");
        }else{
          document.querySelector("#box").classList.add("boxSun")
          document.documentElement.classList.add("light");
        }      
      }else{
        localStorage.setItem("@Breno-okra", JSON.stringify(true));
      }
   
    }
    Verify()
    scrollz();
    document.addEventListener("scroll", scrollz);
  }, []);

  return (
    <Container>
      <SubContainer draggable="true">
        <ContainerUser>
          <BoxUser />
          <BoxNavigation />
        </ContainerUser>
        <Box>
          <AboutMe id="aboutme" className="sections">
            <h2>
              Olá <br />
              Me Chamo <span>Breno</span>
            </h2>
            <br></br>
            <p>
              Estudo Programação desde 2020, estudei muito tempo
              por gostar de criar aplicação e por que sempre tive muitas ideias, atualmente estou me aprimorando para entrar no mercado de trabalho, estudando as tecnologias mais usadas no mercado e aprendendo projetos mais complexos.
              <br></br>
              <br></br>
              Gosto Bastante te criar Interfaces e Colocar Ideias em Prática, meu propósito com as interfaces são deixá-las tanto
              bonitas quanto simples e de fácil visualização para o usuário.
              Atualmente tenho gostado bastante do Backend, por isso venho me
              especializando um pouco a mais que no frontend.
            </p>
          </AboutMe>
          <Projects data={data} />

          <Skills id="skills" className="sections">
            <h3>Habilidades Tanto do Frontend quanto em beckend</h3>
            <div>
              {skillsData.map((item, index) => (
                <div key={index}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </Skills>
          <Certificates id="certificates" className="sections">
            <h3>Certificados</h3>
            <CardCertifications
              image={
                "https://play-lh.googleusercontent.com/CiQRyDFN5z_XajKdf-idiJ-Kt_abvsgamIcmzCkoviLbQvAmeTIq0RFKIEyPVhn2XRY"
              }
              title={"English"}
              status={"em andamento"}
              statedOrEnd={"inicio do curso  23/03/24"}
              description={
                "curso de ingles avançado de 8 niveis - atualmente no nivel - 2"
              }
            />
            <CardCertifications
              image={Discover}
              title={"Discover"}
              status={"concluido"}
              statedOrEnd={"termino do curso 15/02/24 "}
              description={
                "formação basica em linguagem web,o aprendizado inclui animações em paginas html com css, utilização de javascript e versionamento git chagando ate a consumir api do github"
              }
            />
            <CardCertifications
              image={
                "https://hotmart.s3.amazonaws.com/product_pictures/8d3a248f-323d-49e9-8a48-07e8f49f6c17/Explorer2.png"
              }
              title={"Explorer"}
              status={"concluido"}
              statedOrEnd={"termino do curso 15/02/24 "}
              description={
                "formação em linguagem web full stack realizado no curso explorer da rocketseat, o curso tem como proposito te deixar preparado para o mercado de trabalho principais tecnologias aprendidas html, css, javascript,react, node, git, sqlite"
              }
            />
          </Certificates>
        </Box>
       
      </SubContainer>
      <Footer />
    </Container>
  );
}
