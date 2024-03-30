import {
  AboutMe,
  Boxs,
  Certificates,
  Container,
  ContainerUser,
  Skills,
  SubContainer,
} from "./style";

import Discover from "../../assets/discover.png";
import { useEffect } from "react";
import { BoxUser } from "../../components/BoxUser";
import { BoxNavigation } from "../../components/BoxNavigation";
import { Projects } from "../../components/Projects";
import { CardCertifications } from "../../components/CardCertifications";
import { Footer } from "../../components/Footer";
function App() {
  const data = {
    Me: [
      {
        link: "https://web-production-81cb.up.railway.app/",
        title: "Gallow of Death Online",
        image:
          "https://github.com/Breno-oKra/Gallows-of-Death-online-/raw/main/.github/Macbook-Air-localhost.png",
        created: "May 2021",
        github: "#",
        description:
          "Meu Primeiro Projeto estudando a fundo o uso so Socket.io pela documentação, o projeto trata-se de um jogo da forca online, onde quem acertar as letras ganha pontos e pode usar seus poderes para matar seu adversario",
        tags: ["HTML", "CSS", "JQUERY", "SOCKET.IO", "JavaScript", "nodejs"],
      },
      {
        link: "https://food-explorer-brenookra.netlify.app/",
        title: "ExplorerFood - Rocketseat",
        image:
          "https://github.com/Breno-oKra/Food_explorerv2/raw/main/src/assets/home.png",
        created: "May 2021",
        github: "#",
        description:
          "Projeto Final do curso explorer, onde teriamos que construir um site paracido com a mecanicas do ifood, contendo funções como de favoritar comidas, adicionar ao carrinho, perfis admins econsumidor, controle de pedidos e pagamentos",
        tags: [
          "HTML",
          "CSS",
          "STYLES-COMPONENTS",
          "KNEX - SQLITE3",
          "REACT",
          "NODEJS",
        ],
        imageCurse:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEWYVvb29fuYVvX6+vyUTPaUT/eXVPbCofT39/v6+/v29fzUvfWWUvb6+fuYVvj39/y9mvKTTfS8l/L6/fqncPOqdvOTSvfm2/ahavKZV/HDpPTKrvPz7vbd0fKoc/LLsPCyhPPx5/Xq4vbezfXZxfKdYvG4kfLp4fSxivKsefGugfO/lfPPuvDz7fecXPHOt/OgZ/PcyfSPQ/cI7OqHAAAJBklEQVR4nO2c23biOgyGSWK7NthOjWnCKeUMhSmUzvs/3DYwQA4OJD2Q7LX03czFFJYVS/ol2aHRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqDtEEmL+kVWv4zcgHCOFG26v18BKcVLJIji2wL//vdIlGO1enlvRajtsDifhvP/SQBXY6Lb7Txn6b+q73ytx0H2KJoJ5lPq+7ziUMjEdLNBPLLoUfM0Y81Iw1g6+EzWEBKodOoxSJ45PmTMi/MEBKXEntY7jWvTzNx42R513oamf+Vqzk2y4efA2uhK/DL3sSsRXTZQcrWfMs5l3/GLKnlDD/Vkj7i1JvVget+99yURJgk0k2NUrfGp83mOxZ+jrAXqsheapd0V2F33WLm8iR92ZvppHGWtGoz/j8fJ9G7Nat7+dyEoi+evQ4lW6nInSxPTu47x/TWOfN21tVBBgznGgRldHoXr/aNUwjjq0pJtyjioJWm7Z2QzjnNGSoIOwnlLn3wG7fLP3GfyKHbdWp14dm4klREOqxUxftslj8w7isXCTDTW57CEVD99Es76OsKSb4qLB1RO9BDMT80WQtgF9XINd9x+u/O7BUb8hGqgbXTIM9WbdgLvpfMmXVzcV0eNrm0MsOnbRuO+oJGg74p+BPpuOEbb8Ed/ELJz0KqhQTXUjrLF473FLzFuXDCNEn1jrdhm30He6lfQZuPMl0VCdlb48j9kir3/AMS9tspcfaF++gHHU7C46d0QDtS9Kx7ZtlbtyNLpaSL11NRY2sF00nvNFg5sU+e8jVEcLRXILsiCKFztVWWhikVlMZLm7yHfh+QPClNS3gks1YyHgVeSlpubHrzbRyDNRdSbnv/ZWHZS/gclUar6xU81Eo3Eq4Ap3GvztXCb43rt7e1fQe9zC7a4yC01W71g6DWoKuOzf8g09LdszjQiRt3oil09j7i9W1Rl4NNG2i1bRwB0qzH/qSeeeaMa1wjyw2cNL7ziS2wo4IxqWrg6vt8zRs93dvIFm8QwmBhVUbTHym6msaOB1U4/uD0L5q4h/lx5XlErPSNXVVtGw+Jba2CI0TTCPO6nv9H5+0aUwncarZRepLRYlx/JubU72jDZjDh8GD57UZMkXjS8NO9HcSzyp/qNnUVlciV9tc9T7nYYNnupaHj+nsYI7tn6x5HjqhIriUejQsFKtuGKNRbto3Aa/JQysYoaRAy4uGjch05S8Ln5nveUxnYZNNEQReYih+skt9D5VLcKwcew0OrZOo1ws8n1qiqc3vPJMeiFnPJXfL2YhKkqUMybPPHqmf4vjyZRF+tlT4aoLPSd91HiAbRJXIX/nLGOhr5+KrpLsU0+ITmoiFWeCvs3AwoFIUFIKnaZ+rtcW4nF22G98tOA2uC56Ss59mnRSlzx6guyGIm2gwwZF/cw006nBFmU128IgzIpFcQMbxJ2mHhBdkTpdHHLRSGcNfC+eKVArFcRN9larLcTjrFCwWfGCBP1JeUDTi+qkhQ3S22aC0AuLX93iXZbOUrrL6+Sk6DMThGLVKyz1pDdJf15/1EoL0TIThHS7L7oHsqFm6c/TSdXjmQRGKJrpFYri5ylukM1SbFmrNGN8NJ1nTMF9c64dQ6J2uhai3mddGt8jyRn1KYpGhW9mSL7OnCc3h4uKh6QJTJpIr1DPuFs0CPl+mxEa/adWPhp8ZJxsUjyN8t404wHerFY+yrvpNOGzTnGdUNliT2yruH2Ri4vC9B6UGJQSNM+kUV+Ma+Wj+E2nlMJrFfcxlPHwY5aqz2zmcMN+lcoT3sot6mMuGmQN9OoyA/4HTrWtxsc6hetJ1M/2I2K4q9MONkgjrRQlLi4Hz2kHP2zhW20mpEfwU2oXdFT4PQm0tNxWYRWf+KaRKtU0+cNFUQN5plY7GDj/WysfbeDUgNMIReFEzy2jR4dFvRoNuQ1qmuxbTVdfuGslPD23OD6isFcjMXSNFiZ9lJUpmKVqWQ5zRInJwK/D1SxZcbGSh32BbRfFlOC6OKrbTb5eQqek3OM/7KLFxLBXlwkNGiTW1xSlb77YY/Fg4q8suDQoWbCxWfnLFySwZVQvdGuxi/w16WKi+5VEbzWRGRNrEIupKbdXYsAdR73XVTRkEL8j2aRid9exXGlxPqLssdioXDT4Ph6FtMgZhURj223YzJHF0cQVr1o0eGIKTNn9ITxRA21Lk3UVDfQRL7q92d1zFE7mTLDI0h/XVDRQGPdS764WosXxMhALLe0VsTpqxaJBevExJ53e7lulRG/CP36AhbZYtF1yqFg0SKJku9O4ygYfnY/PfPulX2tG9cJddaLB1/EVidsTUrwIT7mkSb3h2hqx0sSirdMoPNb6cfhb/J3rya0tJMHyfCGMinCRsys5sVhdp5E4jvHm+WLo4t1l6kvZ3P4+3gGO7KJRVbpJWnjj3lPwNjk3uv6d1514y/Jmg6iqgEt4KdvkuZ5y55ezRb3d3B7E2Qu4ikRDJjINy3nNk6slPf8ohM9mrroXUvZOY5rv2r8I6cZeP2R726toBL1El8hitJ95ZduC5aSmsk6DxKbd7DXzkKUpYlr0XNhRHb6gIleccgu4CkQjmF/rUpYZkxLVGDnXX03QI17Q0YiyOaoI+eN3kY9j7+om3y+THC0GziUT+Sx8DQr/Cou0T+CqSDcoNg7W46vkE6zWLYddDl3YsI9LqXZtRCM+D6bbcYAJIZijYP8UCqMQ/yyk7HNf8md08kTj8f1iPLVTPWt3Fot1+33K9EUBm5SF6yIpNIl9AsfCh4uGJFEstVN2xIu9eGYy6DL40qqssXgQjQf/MhZxPy0L+bd7zYN9X521HBzV1mk8XDS4GlgOV047qqMx/npuMKJhLcPJo9ONDF4jlr4aSo3DTkeL4FuHSDKYa5GBrR5/ZZGj8czRnn+y0qfUY3Q62qjy+SWNGrSyvBd/P+XHMPLefZ6vHKa1ZnQSfSy7HP3IMjCyUM34jXDF3UW30931uFL41g9C/I8hJw4/VFb1UgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG7xHxgnif8Yt2WUAAAAAElFTkSuQmCC",
        imageCertificate:
          "https://hotmart.s3.amazonaws.com/product_pictures/8d3a248f-323d-49e9-8a48-07e8f49f6c17/Explorer2.png",
        nameCurse: "Rocketseat",
      },
    ],
    MeOur: [
      {
        link: "https://food-explorer-brenookra.netlify.app/",
        title: "ExplorerFood - Rocketseat",
        image:
          "https://github.com/Breno-oKra/Food_explorerv2/raw/main/src/assets/home.png",
        created: "May 2021",
        github: "#",
        description:
          "Projeto Final do curso explorer, onde teriamos que construir um site paracido com a mecanicas do ifood, contendo funções como de favoritar comidas, adicionar ao carrinho, perfis admins econsumidor, controle de pedidos e pagamentos",
        tags: [
          "HTML",
          "CSS",
          "STYLES-COMPONENTS",
          "KNEX - SQLITE3",
          "REACT",
          "NODEJS",
        ],
        imageCurse:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEWYVvb29fuYVvX6+vyUTPaUT/eXVPbCofT39/v6+/v29fzUvfWWUvb6+fuYVvj39/y9mvKTTfS8l/L6/fqncPOqdvOTSvfm2/ahavKZV/HDpPTKrvPz7vbd0fKoc/LLsPCyhPPx5/Xq4vbezfXZxfKdYvG4kfLp4fSxivKsefGugfO/lfPPuvDz7fecXPHOt/OgZ/PcyfSPQ/cI7OqHAAAJBklEQVR4nO2c23biOgyGSWK7NthOjWnCKeUMhSmUzvs/3DYwQA4OJD2Q7LX03czFFJYVS/ol2aHRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqDtEEmL+kVWv4zcgHCOFG26v18BKcVLJIji2wL//vdIlGO1enlvRajtsDifhvP/SQBXY6Lb7Txn6b+q73ytx0H2KJoJ5lPq+7ziUMjEdLNBPLLoUfM0Y81Iw1g6+EzWEBKodOoxSJ45PmTMi/MEBKXEntY7jWvTzNx42R513oamf+Vqzk2y4efA2uhK/DL3sSsRXTZQcrWfMs5l3/GLKnlDD/Vkj7i1JvVget+99yURJgk0k2NUrfGp83mOxZ+jrAXqsheapd0V2F33WLm8iR92ZvppHGWtGoz/j8fJ9G7Nat7+dyEoi+evQ4lW6nInSxPTu47x/TWOfN21tVBBgznGgRldHoXr/aNUwjjq0pJtyjioJWm7Z2QzjnNGSoIOwnlLn3wG7fLP3GfyKHbdWp14dm4klREOqxUxftslj8w7isXCTDTW57CEVD99Es76OsKSb4qLB1RO9BDMT80WQtgF9XINd9x+u/O7BUb8hGqgbXTIM9WbdgLvpfMmXVzcV0eNrm0MsOnbRuO+oJGg74p+BPpuOEbb8Ed/ELJz0KqhQTXUjrLF473FLzFuXDCNEn1jrdhm30He6lfQZuPMl0VCdlb48j9kir3/AMS9tspcfaF++gHHU7C46d0QDtS9Kx7ZtlbtyNLpaSL11NRY2sF00nvNFg5sU+e8jVEcLRXILsiCKFztVWWhikVlMZLm7yHfh+QPClNS3gks1YyHgVeSlpubHrzbRyDNRdSbnv/ZWHZS/gclUar6xU81Eo3Eq4Ap3GvztXCb43rt7e1fQe9zC7a4yC01W71g6DWoKuOzf8g09LdszjQiRt3oil09j7i9W1Rl4NNG2i1bRwB0qzH/qSeeeaMa1wjyw2cNL7ziS2wo4IxqWrg6vt8zRs93dvIFm8QwmBhVUbTHym6msaOB1U4/uD0L5q4h/lx5XlErPSNXVVtGw+Jba2CI0TTCPO6nv9H5+0aUwncarZRepLRYlx/JubU72jDZjDh8GD57UZMkXjS8NO9HcSzyp/qNnUVlciV9tc9T7nYYNnupaHj+nsYI7tn6x5HjqhIriUejQsFKtuGKNRbto3Aa/JQysYoaRAy4uGjch05S8Ln5nveUxnYZNNEQReYih+skt9D5VLcKwcew0OrZOo1ws8n1qiqc3vPJMeiFnPJXfL2YhKkqUMybPPHqmf4vjyZRF+tlT4aoLPSd91HiAbRJXIX/nLGOhr5+KrpLsU0+ITmoiFWeCvs3AwoFIUFIKnaZ+rtcW4nF22G98tOA2uC56Ss59mnRSlzx6guyGIm2gwwZF/cw006nBFmU128IgzIpFcQMbxJ2mHhBdkTpdHHLRSGcNfC+eKVArFcRN9larLcTjrFCwWfGCBP1JeUDTi+qkhQ3S22aC0AuLX93iXZbOUrrL6+Sk6DMThGLVKyz1pDdJf15/1EoL0TIThHS7L7oHsqFm6c/TSdXjmQRGKJrpFYri5ylukM1SbFmrNGN8NJ1nTMF9c64dQ6J2uhai3mddGt8jyRn1KYpGhW9mSL7OnCc3h4uKh6QJTJpIr1DPuFs0CPl+mxEa/adWPhp8ZJxsUjyN8t404wHerFY+yrvpNOGzTnGdUNliT2yruH2Ri4vC9B6UGJQSNM+kUV+Ma+Wj+E2nlMJrFfcxlPHwY5aqz2zmcMN+lcoT3sot6mMuGmQN9OoyA/4HTrWtxsc6hetJ1M/2I2K4q9MONkgjrRQlLi4Hz2kHP2zhW20mpEfwU2oXdFT4PQm0tNxWYRWf+KaRKtU0+cNFUQN5plY7GDj/WysfbeDUgNMIReFEzy2jR4dFvRoNuQ1qmuxbTVdfuGslPD23OD6isFcjMXSNFiZ9lJUpmKVqWQ5zRInJwK/D1SxZcbGSh32BbRfFlOC6OKrbTb5eQqek3OM/7KLFxLBXlwkNGiTW1xSlb77YY/Fg4q8suDQoWbCxWfnLFySwZVQvdGuxi/w16WKi+5VEbzWRGRNrEIupKbdXYsAdR73XVTRkEL8j2aRid9exXGlxPqLssdioXDT4Ph6FtMgZhURj223YzJHF0cQVr1o0eGIKTNn9ITxRA21Lk3UVDfQRL7q92d1zFE7mTLDI0h/XVDRQGPdS764WosXxMhALLe0VsTpqxaJBevExJ53e7lulRG/CP36AhbZYtF1yqFg0SKJku9O4ygYfnY/PfPulX2tG9cJddaLB1/EVidsTUrwIT7mkSb3h2hqx0sSirdMoPNb6cfhb/J3rya0tJMHyfCGMinCRsys5sVhdp5E4jvHm+WLo4t1l6kvZ3P4+3gGO7KJRVbpJWnjj3lPwNjk3uv6d1514y/Jmg6iqgEt4KdvkuZ5y55ezRb3d3B7E2Qu4ikRDJjINy3nNk6slPf8ohM9mrroXUvZOY5rv2r8I6cZeP2R726toBL1El8hitJ95ZduC5aSmsk6DxKbd7DXzkKUpYlr0XNhRHb6gIleccgu4CkQjmF/rUpYZkxLVGDnXX03QI17Q0YiyOaoI+eN3kY9j7+om3y+THC0GziUT+Sx8DQr/Cou0T+CqSDcoNg7W46vkE6zWLYddDl3YsI9LqXZtRCM+D6bbcYAJIZijYP8UCqMQ/yyk7HNf8md08kTj8f1iPLVTPWt3Fot1+33K9EUBm5SF6yIpNIl9AsfCh4uGJFEstVN2xIu9eGYy6DL40qqssXgQjQf/MhZxPy0L+bd7zYN9X521HBzV1mk8XDS4GlgOV047qqMx/npuMKJhLcPJo9ONDF4jlr4aSo3DTkeL4FuHSDKYa5GBrR5/ZZGj8czRnn+y0qfUY3Q62qjy+SWNGrSyvBd/P+XHMPLefZ6vHKa1ZnQSfSy7HP3IMjCyUM34jXDF3UW30931uFL41g9C/I8hJw4/VFb1UgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG7xHxgnif8Yt2WUAAAAAElFTkSuQmCC",
        imageCertificate:
          "https://hotmart.s3.amazonaws.com/product_pictures/8d3a248f-323d-49e9-8a48-07e8f49f6c17/Explorer2.png",
        nameCurse: "Rocketseat",
      },
      {
        link: "https://food-explorer-brenookra.netlify.app/",
        title: "ExplorerFood - Rocketseat",
        image:
          "https://github.com/Breno-oKra/Food_explorerv2/raw/main/src/assets/home.png",
        created: "May 2021",
        github: "#",
        description:
          "Projeto Final do curso explorer, onde teriamos que construir um site paracido com a mecanicas do ifood, contendo funções como de favoritar comidas, adicionar ao carrinho, perfis admins econsumidor, controle de pedidos e pagamentos",
        tags: [
          "HTML",
          "CSS",
          "STYLES-COMPONENTS",
          "KNEX - SQLITE3",
          "REACT",
          "NODEJS",
        ],
        imageCurse:
          "data:image/png;base64,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",
        imageCertificate:
          "https://hotmart.s3.amazonaws.com/product_pictures/8d3a248f-323d-49e9-8a48-07e8f49f6c17/Explorer2.png",
        nameCurse: "Rocketseat",
      },
    ],
  };

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
          <BoxUser />
          <BoxNavigation />
        </ContainerUser>
        <Boxs>
          <AboutMe id="aboutme" className="sections">
            <h2>
              Olá <br />
              Me Chamo <span>Breno</span>
            </h2>
            <br></br>
            <p>
              Estudo Programação desde <span>2020</span>, estudei muito tempo
              por gosto, esse ano decidi que quero trabalhar na area, desde
              então venho me esforçando para aprender projetos mais complexos e
              me adentrando nas principais tecnologias do mercado.
              <br></br>
              <br></br>
              Eu gosto Bastande te criar Interfaces, interfaces que sejam tanto
              bonitas mas simples e de facil visualização para o usuario
              Atualmente tenho gostado bastante do Backend, por isso venho me
              especializando um pouco a mais que no frontend
            </p>
          </AboutMe>
          <Projects data={data} />

          <Skills id="skills" className="sections">
            <h3>Habilidades Tanto do Frontend quanto em beckend</h3>
            <div>
              <div>
                <img
                  src="https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://diziglobalsolution.com/wp-content/uploads/2023/04/logo-css-3-1536.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.ramzamani.com/media/skills/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://getbootstrap.com.br/docs/4.1/assets/img/bootstrap-stack.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.devmedia.com.br/imagens/articles/artigo-utilizando-styled-components-no-react-43554.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.drupal.org/files/project-images/screenshot_361.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/70142?s=280&v=4"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.nuget.org/profiles/SQLite/avatar?imageSize=512"
                  alt=""
                />
              </div>
            </div>
          </Skills>
          <Certificates id="certificates" className="sections">
            <h3>Certificados</h3>
            <CardCertifications
              image={
                "https://play-lh.googleusercontent.com/CiQRyDFN5z_XajKdf-idiJ-Kt_abvsgamIcmzCkoviLbQvAmeTIq0RFKIEyPVhn2XRY"
              }
              title={"English"}
              status={"em andamento"}
              statedOrEnd={"inicio do curso  23/03/24"}
              description={
                "curso de ingles avançado de 8 niveis - atualmente no nivel - 2"
              }
            />
            <CardCertifications
              image={Discover}
              title={"Discover"}
              status={"concluido"}
              statedOrEnd={"termino do curso 15/02/24 "}
              description={
                "formação basica em linguagem web,o aprendizado inclui animações em paginas html com css, utilização de javascript e versionamento git chagando ate a consumir api do github"
              }
            />
            <CardCertifications
              image={
                "https://hotmart.s3.amazonaws.com/product_pictures/8d3a248f-323d-49e9-8a48-07e8f49f6c17/Explorer2.png"
              }
              title={"Explorer"}
              status={"concluido"}
              statedOrEnd={"termino do curso 15/02/24 "}
              description={
                "formação em linguagem web full stack realizado no curso explorer da rocketseat, o curso tem como proposito te deixar preparado para o mercado de trabalho principais tecnologias aprendidas html, css, javascript,react, node, git, sqlite"
              }
            />
          </Certificates>
        </Boxs>
      </SubContainer>
      <Footer />
    </Container>
  );
}

export default App;
