import { CardProjects } from "../CardProjects";
import { Container } from "./style";
import { ArrowUpRight, User, UsersThree } from "@phosphor-icons/react";
export function Projects({ isProject, data }) {
  console.log(data["Me"]);

  return (
    <Container id="projects" className={`sections ${isProject && "isProject"}`}>
      <h3>
        <User color="#c77dff" /> Projetos Feitos Por Mim
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
          />
        )
      )}
      {!isProject && (
        <p>
          Ver Todos os Projetos <ArrowUpRight />
        </p>
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
          />
        )
      )}
      {!isProject && (
        <p>
          Ver Todos os Projetos <ArrowUpRight />
        </p>
      )}
    </Container>
  );
}
