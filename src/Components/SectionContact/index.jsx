import ButtonMessage from "../ButtonMessage";
import SocialMedia from "../SocialMedia";
import "./SectionContact.scss";

function SectionContact() {
  return (
    <section id="contact">
      <div className="desc-contact">
        <div className="text-content-contact">
          <h2>Contatos</h2>

          <p>
            Entre em contato, vamos entender sua
            <br />
            necessidade e propor o melhor trabalho
            <br />
            para sua demanda
          </p>
        </div>

        <SocialMedia />
      </div>

      <div className="form-contact-content">
        <p>
          Preencha sua informações para iniciar seu
          <br />
          atendimento
        </p>

        <form>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
          />
          <input
            type="tel"
            name="wpp"
            id="wpp"
            placeholder="Digite seu whatsapp"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
          />

          <select required defaultValue="">
            <option value="" hidden>
              Como nos encontrou?
            </option>
            <option value="instagram">No Instagram</option>
            <option value="facebook">No Facebook</option>
            <option value="google">Através do Google</option>
            <option value="outro">Através de outra forma</option>
          </select>

          <ButtonMessage textButton="Falar com especialista" />
        </form>
      </div>
    </section>
  );
}

export default SectionContact;
