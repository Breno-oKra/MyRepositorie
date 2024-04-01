import { Container } from "./style";

export function Box({isProject,children}){
    return(
        <Container className={isProject && "isProject"}>
            {children}
        </Container>
    )
}