import { BoxDescriptions, Container, Experience, HeaderTitle, ImageBox, Tags } from "./style";
import { ArrowUpRight } from "@phosphor-icons/react";

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
          <a href={github}>GIT HUB</a>
        </HeaderTitle>

        <p>{description}</p>
        <Tags>
          {tags?.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </Tags>

        {projectsPage && nameCurse && (
          /*  <Experience>
            <span>desenvolvido atravez dos conhecimentos do curso</span>
            <div>
              <span>
                <img
                  src=""
                  alt=""
                />{" "}
                Rocketseat
              </span>
              {"⟶"}
              <span>
                <img
                  src=""
                  alt=""
                />{" "}
                certificado
              </span>
            </div>
          </Experience> */
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
