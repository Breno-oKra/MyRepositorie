import {
  Boxs,
  Container,
  ContainerUser,

  SubContainer,
} from "./style";


import { BoxUser } from "../../components/BoxUser";
import { CardProjects } from "../../components/CardProjects";
import { Projects } from "../../components/Projects";
import {  User, UsersThree } from "@phosphor-icons/react";
import { Footer } from "../../components/Footer";
function App() {
  return (
    <Container>
      <SubContainer>
        <ContainerUser>
          <BoxUser profileProject />
        </ContainerUser>
        <Boxs>
          <Projects isProject>
            <h3>
              <User color="#c77dff" /> Projetos Feitos Por Mim
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
              projectsPage
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
               <h3>
            {" "}
            <UsersThree color=" #c77dff" /> Projetos desenvolvidos em cursos ou
            maratonas
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
          </Projects>
       
       
        </Boxs>
      </SubContainer>
      <Footer />
    </Container>
  );
}

export default App;
