import "./SocialMedia.scss";

import InstagramIcon from "../../assets/social-media/instagram.png";
import FacebookIcon from "../../assets/social-media/facebook.png";
import WhatsappIcon from "../../assets/social-media/whatsapp.png";

function SocialMedia() {
  return (
    <div className="social-media">
      <h2>Nossas Redes:</h2>

      <div className="links-media">
        <a href="#">
          <img src={InstagramIcon} />
        </a>

        <a href="#">
          <img src={FacebookIcon} />
        </a>

        <a href="#">
          <img src={WhatsappIcon} />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
