import { Link } from "react-router-dom";
import { CardProjects } from "../CardProjects";
import { Container } from "./style";
import { ArrowUpRight, Folder, User, UsersThree } from "@phosphor-icons/react";
export function Projects({ isProject, data }) {
  return (
    <Container id="projects" className={`sections ${isProject && "isProject"}`}>
      <h3>
        <User color="#c77dff" /> Projetos Populares
      </h3>

      {data["Me"].map((item, index) =>
        isProject ? (
          <CardProjects
            key={index}
            link={item.link}
            title={item.title}
            image={item.image}
            created={item.created}
            github={item.github}
            description={item.description}
            tags={item.tags}
            projectsPage
            nameCurse={item.nameCurse || false}
            imageCurse={item.imageCurse || false}
            imageCertificate={item.imageCertificate || false}
            links={item.links || false}
            isMobile={item.isMobile}
          />
        ) : (
          <CardProjects
            key={index}
            link={item.link}
            title={item.title}
            image={item.image}
            created={item.created}
            github={item.github}
            description={item.description}
            tags={item.tags}
            isMobile={item.isMobile}
          />
        )
      )}
      {!isProject && (
        <Link to="/projects">
          Ver Todos os Projetos <ArrowUpRight />
        </Link>
      )}

      <h3>
        {" "}
        <UsersThree color=" #c77dff" /> Projetos desenvolvidos em cursos ou
        maratonas
      </h3>
      {data["MeOur"].map((item, index) =>
        isProject ? (
          <CardProjects
            key={index}
            link={item.link}
            title={item.title}
            image={item.image}
            created={item.created}
            github={item.github}
            description={item.description}
            tags={item.tags}
            projectsPage
            nameCurse={item.nameCurse || false}
            imageCurse={item.imageCurse || false}
            imageCertificate={item.imageCertificate || false}
            links={item.links || false}
            isMobile={item.isMobile}
          />
        ) : (
          <CardProjects
            key={index}
            link={item.link}
            title={item.title}
            image={item.image}
            created={item.created}
            github={item.github}
            description={item.description}
            tags={item.tags}
            isMobile={item.isMobile}
          />
        )
      )}
      {!isProject && (
        <Link to="/projects">
          Ver Todos os Projetos <ArrowUpRight />
        </Link>
      )}
      {isProject && (
        <>
          <h3>
            <Folder color="#c77dff" /> Primeiros Projetos 😂
          </h3>
          {data["Firts"].map((item, index) => (
            <CardProjects
              key={index}
              link={item.link}
              title={item.title}
              image={item.image}
              created={item.created}
              github={item.github}
              description={item.description}
              tags={item.tags}
              projectsPage
              nameCurse={item.nameCurse || false}
              imageCurse={item.imageCurse || false}
              imageCertificate={item.imageCertificate || false}
              links={item.links || false}
              isMobile={item.isMobile}
            />
          ))}
        </>
      )}
    
    </Container>
  );
}
