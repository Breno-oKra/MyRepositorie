import {
  BoxAlignUser,
  BoxNavigates,
  Boxs,
  Container,
  ContainerUser,
  Footer,
  SubContainer,
  Projects,
} from "./style";
import {
  ArrowUpRight,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  User,
  UsersThree,
  WhatsappLogo,
} from "@phosphor-icons/react";

import { useEffect } from "react";
import Eu from "../../assets/eu.png";
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
          <BoxAlignUser>
            <div>
              <img src={Eu} alt="" />
              <div>
                <p>
                  {" "}
                  <MapPin weight="fill" /> Brasilia-DF
                </p>
                <p>
                  {" "}
                  <User weight="fill" /> Breno 22 anos
                </p>
              </div>
              <div>
                <a href="https://github.com/Breno-oKra" target="_blank">
                  <GithubLogo weight="fill" />
                </a>
                <a
                  href="https://www.linkedin.com/in/breno-olivera-a3563a196/"
                  target="_blank"
                >
                  {" "}
                  <LinkedinLogo weight="fill" />
                </a>
                <a
                  href="https://www.instagram.com/oliveirakra/"
                  target="_blank"
                >
                  {" "}
                  <InstagramLogo weight="fill" />
                </a>
                <a href=" https://wa.me/5561991750350" target="_blank">
                  {" "}
                  <WhatsappLogo weight="fill" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100009539993801"
                  target="_blank"
                >
                  {" "}
                  <FacebookLogo weight="fill" />
                </a>
              </div>
            </div>
          </BoxAlignUser>
        </ContainerUser>
        <Boxs>
          <Projects id="projects" className="sections">
            <h3>
              <User color=" #c77dff" size={32} /> Projetos Feitos Por Mim
            </h3>
            <div>
              <img
                src="https://github.com/Breno-oKra/Gallows-of-Death-online-/raw/main/.github/Macbook-Air-localhost.png"
                alt=""
              />
              <div>
                <div>
                <a
                  href="https://web-production-81cb.up.railway.app/"
                  target="_blank"
                >
                  <span>
                    Gallow of Death Online <ArrowUpRight />
                  </span>
                  <p>Criado: 13/02/2021</p>
                </a>{" "}
                <a href="#">GIT HUB</a>
                </div>
              
                <p>
                  Meu Primeiro Projeto estudando a fundo o uso so{" "}
                  <strong>Socket.io</strong> pela documentação, o projeto
                  trata-se de um jogo da forca online, onde quem acertar as
                  letras ganha pontos e pode usar seus poderes para matar seu
                  adversario
                </p>
                <div>
                  <p>Jquery</p>
                  <p>Socket.io</p>
                  <p>JavaScript</p>
                  <p>nodejs</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://github.com/Breno-oKra/Food_explorerv2/raw/main/src/assets/home.png"
                alt=""
              />
              <div>
                <div>
                  <a
                    href="https://food-explorer-brenookra.netlify.app/"
                    target="_blank"
                  >
                    <span>
                      {" "}
                      ExplorerFood - Rocketseat <ArrowUpRight />
                    </span>
                    <p>Criado: 20/03/2024</p>
                  </a>
                  <a href="#">GIT HUB</a>
                </div>

                <p>
                  Projeto Final do curso explorer, onde teriamos que construir
                  um site paracido com a mecanicas do ifood, contendo funções
                  como de favoritar comidas, adicionar ao carrinho, perfis
                  admins econsumidor, controle de pedidos e pagamentos
                </p>
                <div>
                  <p>html</p>
                  <p>css</p>
                  <p>styles-components</p>
                  <p>knex - sqlite3</p>
                  <p>react</p>
                  <p>nodejs</p>
                </div>
                <div>
                  <span>desenvolvido atravez dos conhecimentos do curso</span>
                  <div>
                    <span>
                      <img
                        src="data:image/png;base64,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"
                        alt=""
                      />{" "}
                      Rocketseat
                    </span>
                    {"⟶"}
                    <span>
                      <img
                        src="https://hotmart.s3.amazonaws.com/product_pictures/8d3a248f-323d-49e9-8a48-07e8f49f6c17/Explorer2.png"
                        alt=""
                      />{" "}
                      certificado
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://github.com/Breno-oKra/focus-timer2.0-rocketseat-explorer/raw/main/assets/project/desktop-light.png"
                alt=""
              />
              <div>
                <div>
                  <a
                    href="https://breno-okra.github.io/focus-timer2.0-rocketseat-explorer/"
                    target="_blank"
                  >
                    <span>
                      {" "}
                      Focus Timer 2.0 desafio - Rocketseat <ArrowUpRight />
                    </span>
                    <p>Criado: 20/03/2024</p>
                  </a>
                  <a href="#">GIT HUB</a>
                </div>

                <p>
                  Desafio do curso explorer onde preceisariamos recriar o
                  projeto{" "}
                  <a
                    href="https://github.com/Breno-oKra/focusTimer-explorer-rocketseat"
                    target="_blank"
                  >
                    focustimer
                  </a>{" "}
                  aprendido em aula, nos foi fornecido o layout no figma e toda
                  recriação de logina e implementação por nossa parte
                </p>
                <div>
                  <p>html</p>
                  <p>css</p>
                  <p>java script</p>
                </div>
                <div>
                  <span>desenvolvido atravez dos conhecimentos do curso</span>
                  <div>
                    <span>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEWYVvb29fuYVvX6+vyUTPaUT/eXVPbCofT39/v6+/v29fzUvfWWUvb6+fuYVvj39/y9mvKTTfS8l/L6/fqncPOqdvOTSvfm2/ahavKZV/HDpPTKrvPz7vbd0fKoc/LLsPCyhPPx5/Xq4vbezfXZxfKdYvG4kfLp4fSxivKsefGugfO/lfPPuvDz7fecXPHOt/OgZ/PcyfSPQ/cI7OqHAAAJBklEQVR4nO2c23biOgyGSWK7NthOjWnCKeUMhSmUzvs/3DYwQA4OJD2Q7LX03czFFJYVS/ol2aHRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqDtEEmL+kVWv4zcgHCOFG26v18BKcVLJIji2wL//vdIlGO1enlvRajtsDifhvP/SQBXY6Lb7Txn6b+q73ytx0H2KJoJ5lPq+7ziUMjEdLNBPLLoUfM0Y81Iw1g6+EzWEBKodOoxSJ45PmTMi/MEBKXEntY7jWvTzNx42R513oamf+Vqzk2y4efA2uhK/DL3sSsRXTZQcrWfMs5l3/GLKnlDD/Vkj7i1JvVget+99yURJgk0k2NUrfGp83mOxZ+jrAXqsheapd0V2F33WLm8iR92ZvppHGWtGoz/j8fJ9G7Nat7+dyEoi+evQ4lW6nInSxPTu47x/TWOfN21tVBBgznGgRldHoXr/aNUwjjq0pJtyjioJWm7Z2QzjnNGSoIOwnlLn3wG7fLP3GfyKHbdWp14dm4klREOqxUxftslj8w7isXCTDTW57CEVD99Es76OsKSb4qLB1RO9BDMT80WQtgF9XINd9x+u/O7BUb8hGqgbXTIM9WbdgLvpfMmXVzcV0eNrm0MsOnbRuO+oJGg74p+BPpuOEbb8Ed/ELJz0KqhQTXUjrLF473FLzFuXDCNEn1jrdhm30He6lfQZuPMl0VCdlb48j9kir3/AMS9tspcfaF++gHHU7C46d0QDtS9Kx7ZtlbtyNLpaSL11NRY2sF00nvNFg5sU+e8jVEcLRXILsiCKFztVWWhikVlMZLm7yHfh+QPClNS3gks1YyHgVeSlpubHrzbRyDNRdSbnv/ZWHZS/gclUar6xU81Eo3Eq4Ap3GvztXCb43rt7e1fQe9zC7a4yC01W71g6DWoKuOzf8g09LdszjQiRt3oil09j7i9W1Rl4NNG2i1bRwB0qzH/qSeeeaMa1wjyw2cNL7ziS2wo4IxqWrg6vt8zRs93dvIFm8QwmBhVUbTHym6msaOB1U4/uD0L5q4h/lx5XlErPSNXVVtGw+Jba2CI0TTCPO6nv9H5+0aUwncarZRepLRYlx/JubU72jDZjDh8GD57UZMkXjS8NO9HcSzyp/qNnUVlciV9tc9T7nYYNnupaHj+nsYI7tn6x5HjqhIriUejQsFKtuGKNRbto3Aa/JQysYoaRAy4uGjch05S8Ln5nveUxnYZNNEQReYih+skt9D5VLcKwcew0OrZOo1ws8n1qiqc3vPJMeiFnPJXfL2YhKkqUMybPPHqmf4vjyZRF+tlT4aoLPSd91HiAbRJXIX/nLGOhr5+KrpLsU0+ITmoiFWeCvs3AwoFIUFIKnaZ+rtcW4nF22G98tOA2uC56Ss59mnRSlzx6guyGIm2gwwZF/cw006nBFmU128IgzIpFcQMbxJ2mHhBdkTpdHHLRSGcNfC+eKVArFcRN9larLcTjrFCwWfGCBP1JeUDTi+qkhQ3S22aC0AuLX93iXZbOUrrL6+Sk6DMThGLVKyz1pDdJf15/1EoL0TIThHS7L7oHsqFm6c/TSdXjmQRGKJrpFYri5ylukM1SbFmrNGN8NJ1nTMF9c64dQ6J2uhai3mddGt8jyRn1KYpGhW9mSL7OnCc3h4uKh6QJTJpIr1DPuFs0CPl+mxEa/adWPhp8ZJxsUjyN8t404wHerFY+yrvpNOGzTnGdUNliT2yruH2Ri4vC9B6UGJQSNM+kUV+Ma+Wj+E2nlMJrFfcxlPHwY5aqz2zmcMN+lcoT3sot6mMuGmQN9OoyA/4HTrWtxsc6hetJ1M/2I2K4q9MONkgjrRQlLi4Hz2kHP2zhW20mpEfwU2oXdFT4PQm0tNxWYRWf+KaRKtU0+cNFUQN5plY7GDj/WysfbeDUgNMIReFEzy2jR4dFvRoNuQ1qmuxbTVdfuGslPD23OD6isFcjMXSNFiZ9lJUpmKVqWQ5zRInJwK/D1SxZcbGSh32BbRfFlOC6OKrbTb5eQqek3OM/7KLFxLBXlwkNGiTW1xSlb77YY/Fg4q8suDQoWbCxWfnLFySwZVQvdGuxi/w16WKi+5VEbzWRGRNrEIupKbdXYsAdR73XVTRkEL8j2aRid9exXGlxPqLssdioXDT4Ph6FtMgZhURj223YzJHF0cQVr1o0eGIKTNn9ITxRA21Lk3UVDfQRL7q92d1zFE7mTLDI0h/XVDRQGPdS764WosXxMhALLe0VsTpqxaJBevExJ53e7lulRG/CP36AhbZYtF1yqFg0SKJku9O4ygYfnY/PfPulX2tG9cJddaLB1/EVidsTUrwIT7mkSb3h2hqx0sSirdMoPNb6cfhb/J3rya0tJMHyfCGMinCRsys5sVhdp5E4jvHm+WLo4t1l6kvZ3P4+3gGO7KJRVbpJWnjj3lPwNjk3uv6d1514y/Jmg6iqgEt4KdvkuZ5y55ezRb3d3B7E2Qu4ikRDJjINy3nNk6slPf8ohM9mrroXUvZOY5rv2r8I6cZeP2R726toBL1El8hitJ95ZduC5aSmsk6DxKbd7DXzkKUpYlr0XNhRHb6gIleccgu4CkQjmF/rUpYZkxLVGDnXX03QI17Q0YiyOaoI+eN3kY9j7+om3y+THC0GziUT+Sx8DQr/Cou0T+CqSDcoNg7W46vkE6zWLYddDl3YsI9LqXZtRCM+D6bbcYAJIZijYP8UCqMQ/yyk7HNf8md08kTj8f1iPLVTPWt3Fot1+33K9EUBm5SF6yIpNIl9AsfCh4uGJFEstVN2xIu9eGYy6DL40qqssXgQjQf/MhZxPy0L+bd7zYN9X521HBzV1mk8XDS4GlgOV047qqMx/npuMKJhLcPJo9ONDF4jlr4aSo3DTkeL4FuHSDKYa5GBrR5/ZZGj8czRnn+y0qfUY3Q62qjy+SWNGrSyvBd/P+XHMPLefZ6vHKa1ZnQSfSy7HP3IMjCyUM34jXDF3UW30931uFL41g9C/I8hJw4/VFb1UgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG7xHxgnif8Yt2WUAAAAAElFTkSuQmCC"
                        alt=""
                      />{" "}
                      Rocketseat
                    </span>
                    {"⟶"}
                    <span>
                      <img
                        src="https://hotmart.s3.amazonaws.com/product_pictures/8d3a248f-323d-49e9-8a48-07e8f49f6c17/Explorer2.png"
                        alt=""
                      />{" "}
                      certificado
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h3>
              {" "}
              <UsersThree color=" #c77dff" size={32} /> Projetos desenvolvidos
              em cursos ou maratonas
            </h3>
            <div>
              <img
                src="https://github.com/Breno-oKra/web-cookie-explorer/raw/main/public/project/profileAdmin.png"
                alt=""
              />
              <div>
                <a>ExplorerFood - Rocketseat</a>

                <p>
                  o explorer food tem o proposito de simular um ifood, simulando
                  as mecanicas de favoritar comidas, adicionar ao carrinho,
                  painel de admins e perfis de consumidor....
                </p>
                <div>
                  <p>html</p>
                  <p>css</p>
                  <p>styles-components</p>
                  <p>knex - sqlite3</p>
                  <p>react</p>
                  <p>nodejs</p>
                </div>
              </div>
            </div>
          </Projects>
        </Boxs>
      </SubContainer>
      <Footer>
        <p>
          Criado por <span>Breno-okra</span>
        </p>
      </Footer>
    </Container>
  );
}

export default App;
