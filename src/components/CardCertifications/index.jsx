import { Container, HeaderInfos } from "./style";

export function CardCertifications({image,title,status,statedOrEnd,description}) {
  return (
    <Container >
      <img
        src={image}
        alt=""
      />
      <div>
        <HeaderInfos>
          <p>{title}</p>
          <span>{status}</span>
          <p>{statedOrEnd} </p>
        </HeaderInfos>

        <p>{description}</p>
      </div>
    </Container>
  );
}
