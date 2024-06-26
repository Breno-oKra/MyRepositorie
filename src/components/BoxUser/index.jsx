import { BoxLinks, BoxSunMoon, Container, Infos } from "./style";
import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  User,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Eu from "../../assets/eu.png";
import Sun from "../../assets/sun.svg";
import Moon from "../../assets/moon.svg";
export function BoxUser({ profileProject }) {
  return (
    <Container>
      <div className={profileProject && "profileProject"}>
        <img src={Eu} alt="" />
        <Infos>
          <p>
            {" "}
            <MapPin  /> Brasilia-DF
          </p>
          <p>
            {" "}
            <User  /> Breno 22 anos
          </p>
        </Infos>
        <BoxLinks>
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
          <a href="https://www.instagram.com/oliveirakra/" target="_blank">
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
        </BoxLinks>

        <BoxSunMoon id="box" className="box-sun">
          <button
            type="button"
            onClick={() => {
              const mode = localStorage.getItem("@Breno-okra");

              if (JSON.parse(mode)) {
                localStorage.setItem("@Breno-okra", JSON.stringify(false));
                document.querySelector("#box").classList.toggle("boxSun");
                document.documentElement.classList.toggle("light");
              } else {
                localStorage.setItem("@Breno-okra", JSON.stringify(true));
                document.querySelector("#box").classList.toggle("boxSun");
                document.documentElement.classList.toggle("light");
              }
            }}
          >
            <img className="moon" src={Moon} alt="" />
            <img className="sun" src={Sun} alt="" />
          </button>
        </BoxSunMoon>
      </div>
    </Container>
  );
}
