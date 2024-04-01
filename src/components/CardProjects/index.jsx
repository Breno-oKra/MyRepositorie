import {
  BoxDescriptions,
  Container,
  Experience,
  HeaderTitle,
  ImageBox,
  Tags,
} from "./style";
import { ArrowUpRight,DeviceMobileSlash } from "@phosphor-icons/react";

function Organizer({ text, link }) {
 
  let y = text.split(link.name);
  return <p>{y[0]} <a href={link.link} target="_blank">{link.name}</a>{y[1]}</p>
 
  
  
}
export function CardProjects({
  link,
  title,
  image,
  github,
  created,
  description,
  tags,
  projectsPage,
  imageCurse,
  nameCurse,
  imageCertificate,
  links,
}) {

  return (
    <Container>
      {projectsPage && <p>{created}</p>}
      <ImageBox>
        <img src={image} alt="" />
        <div className="out"></div>
      </ImageBox>

      <BoxDescriptions>
        <HeaderTitle>
          <a href={link} target="_blank">
            <span>
              {title} <ArrowUpRight />
            </span>
            {!projectsPage && <p>{created}</p>}
          </a>
          <p>oi</p>
          <a href={github} target="_blank">GIT HUB</a>
        </HeaderTitle>
        {links? <Organizer text={description} link={links} /> :  <p>{description}</p> }

        <Tags>
          {tags?.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </Tags>

        {projectsPage && nameCurse && (
          <Experience>
            <span>desenvolvido atravez dos conhecimentos do curso</span>
            <div>
              <span>
                <img src={imageCurse} alt="" /> {nameCurse}
              </span>
              {"⟶"}
              <span>
                <img src={imageCertificate} alt="" /> certificado
              </span>
            </div>
          </Experience>
        )}
      </BoxDescriptions>
    </Container>
  );
}
