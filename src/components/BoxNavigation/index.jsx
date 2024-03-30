import { Container } from "./style";

export function BoxNavigation() {
  return (
    <Container>
        <a href="#aboutme" type="button" className="aboutme">
          Sobre mim
        </a>
        <a href="#projects" type="button" className="projects">
          Projetos
        </a>
        <a href="#skills" type="button" className="skills">
          Skills
        </a>
        <a href="#certificates" type="button" className="certificates">
          certificados
        </a>
    </Container>
  );
}
