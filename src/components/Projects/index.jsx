import { CardProjects } from "../CardProjects";
import { Container } from "./style";
import { ArrowUpRight, User, UsersThree } from "@phosphor-icons/react";
export function Projects({isProject,children}) {
  return (
    <Container id="projects" className={`sections ${isProject && "isProject"}`}>
        {children}
    </Container>
  );
}
