import {
  AboutMe,
  Boxs,
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
import { CardProjects } from "../../components/CardProjects";
import { ArrowUpRight, User, UsersThree } from "@phosphor-icons/react";
function App() {
  useEffect(() => {
    function scrollz() {
      const project = document.querySelectorAll(".sections");

      const ObserverSkills = new IntersectionObserver((e) => {
        e.forEach((el) => {
          if (el.intersectionRatio > 0.7 && el.isIntersecting) {
            document.querySelector(`.${el.target.id}`).classList.add("kong");
          } else {
            document.querySelector(`.${el.target.id}`).classList.remove("kong");
          }
        });
      });
      project.forEach((el) => ObserverSkills.observe(el));
    }
    scrollz();
    document.addEventListener("scroll", scrollz);
  }, []);

  return (
    <Container>
      <SubContainer>
        <ContainerUser>
          <BoxUser />
          <BoxNavigation />
        </ContainerUser>
        <Boxs>
          <AboutMe id="aboutme" className="sections">
            <h2>
              Olá <br />
              Me Chamo <span>Breno</span>
            </h2>
            <br></br>
            <p>
              Estudo Programação desde <span>2020</span>, estudei muito tempo
              por gosto, esse ano decidi que quero trabalhar na area, desde
              então venho me esforçando para aprender projetos mais complexos e
              me adentrando nas principais tecnologias do mercado.
              <br></br>
              <br></br>
              Eu gosto Bastande te criar Interfaces, interfaces que sejam tanto
              bonitas mas simples e de facil visualização para o usuario
              Atualmente tenho gostado bastante do Backend, por isso venho me
              especializando um pouco a mais que no frontend
            </p>
          </AboutMe>
          <Projects>
            <h3>
              <User color=" #c77dff" size={32} /> Projetos Feitos Por Mim
            </h3>
            <CardProjects
              link={"https://web-production-81cb.up.railway.app/"}
              title={"Gallow of Death Online"}
              image={
                "https://github.com/Breno-oKra/Gallows-of-Death-online-/raw/main/.github/Macbook-Air-localhost.png"
              }
              created={"13/02/2021"}
              github={"#"}
              description={
                "Meu Primeiro Projeto estudando a fundo o uso so Socket.io pela documentação, o projeto trata-se de um jogo da forca online, onde quem acertar as letras ganha pontos e pode usar seus poderes para matar seu adversario"
              }
              tags={[
                "HTML",
                "CSS",
                "JQUERY",
                "SOCKET.IO",
                "JavaScript",
                "nodejs",
              ]}
            />
            <CardProjects
              link={"https://food-explorer-brenookra.netlify.app/"}
              title={"ExplorerFood - Rocketseat"}
              image={
                "https://github.com/Breno-oKra/Food_explorerv2/raw/main/src/assets/home.png"
              }
              created={"20/03/2024"}
              github={"#"}
              description={
                "Projeto Final do curso explorer, onde teriamos que construir um site paracido com a mecanicas do ifood, contendo funções como de favoritar comidas, adicionar ao carrinho, perfis admins econsumidor, controle de pedidos e pagamentos"
              }
              tags={[
                "HTML",
                "CSS",
                "STYLES-COMPONENTS",
                "KNEX - SQLITE3",
                "REACT",
                "NODEJS",
              ]}
            />
            <p>
              Ver Todos os Projetos <ArrowUpRight />
            </p>
            <h3>
              {" "}
              <UsersThree color=" #c77dff" size={32} /> Projetos desenvolvidos
              em cursos ou maratonas
            </h3>
            <CardProjects
              link={"https://web-production-81cb.up.railway.app/"}
              title={"Gallow of Death Online"}
              image={
                "https://github.com/Breno-oKra/web-cookie-explorer/raw/main/public/project/profileAdmin.png"
              }
              created={"13/02/2021"}
              github={"#"}
              description={
                "Meu Primeiro Projeto estudando a fundo o uso so Socket.io pela documentação, o projeto trata-se de um jogo da forca online, onde quem acertar as letras ganha pontos e pode usar seus poderes para matar seu adversario"
              }
              tags={[
                "HTML",
                "CSS",
                "JQUERY",
                "SOCKET.IO",
                "JavaScript",
                "nodejs",
              ]}
            />
            <p>
              Ver Todos os Projetos <ArrowUpRight />
            </p>
          </Projects>
          <Skills id="skills" className="sections">
            <h3>Habilidades Tanto do Frontend quanto em beckend</h3>
            <div>
              <div>
                <img
                  src="https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://diziglobalsolution.com/wp-content/uploads/2023/04/logo-css-3-1536.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.ramzamani.com/media/skills/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://getbootstrap.com.br/docs/4.1/assets/img/bootstrap-stack.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.devmedia.com.br/imagens/articles/artigo-utilizando-styled-components-no-react-43554.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.drupal.org/files/project-images/screenshot_361.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/70142?s=280&v=4"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.nuget.org/profiles/SQLite/avatar?imageSize=512"
                  alt=""
                />
              </div>
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
        </Boxs>
      </SubContainer>
      <Footer />
    </Container>
  );
}

export default App;
