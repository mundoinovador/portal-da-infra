import "./styles.scss";

import Header from "../../Components/Header";
import ButtonMessage from "../../Components/ButtonMessage";
import ButtonMenu from "../../Components/ButtonMenu";
import SectionContact from "../../Components/SectionContact";

function Home() {
  function widthButtonAboutUs() {
    if (window.innerWidth <= 480) {
      return "80%";
    } else {
      return "35%";
    }
  }

  return (
    <div id="home">
      <section id="hero">
        <Header underlineLink={["underline-link", "", ""]} />

        <div id="hero-content">
          <div className="desc-hero">
            <h1>PORTAL DA INFRA</h1>
            <p>
              Conforto para o seu dia a dia, estilo para
              <br />o seu escritório.
            </p>
            <ButtonMessage
              widthButton="100%"
              textButton="Conversar com especialista"
              borderRadius={true}
            />
          </div>

          <div className="menu-hero">
            <div id="title-menu-hero">
              <p>Categorias:</p>
            </div>

            {/* Aqui vem os botões de menu */}
            <div id="button-menu-hero">
              <ButtonMenu textButton="Cadeiras" />
              <ButtonMenu textButton="Mesas" />
            </div>
          </div>
        </div>
      </section>

      <section id="about-us">
        <div className="about-content-1">
          <div className="about-us-conteiner-1">
            <div className="text-about-us">
              <h2>Sobre nós</h2>
              <p>
                Nós do Portal da Infra já atendemos mais de 18.000
                <br />
                work stations em todo território nascional.
                <br />
                <br />
                Conheça mais da nossa tragetória até aqui.
              </p>
            </div>
          </div>

          <div className="about-us-conteiner-2"></div>
        </div>

        <div className="about-content-2">
          <div className="about-us-conteiner-3"></div>
          <div className="about-us-conteiner-4"></div>
        </div>
        <div className="button-about-us-container">
          <ButtonMessage
            widthButton={widthButtonAboutUs()}
            textButton="Conheça mais"
          />
        </div>
      </section>

      <SectionContact />
    </div>
  );
}

export default Home;
