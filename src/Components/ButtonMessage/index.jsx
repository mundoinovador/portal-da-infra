import "./ButtonMessage.scss";

function ButtonMessage(props) {
  function widthButtonMessage() {
    if (window.innerWidth <= 480) {
      return ".8rem";
    } else {
      return "1rem";
    }
  }

  return (
    <button
      id="button-message"
      style={{
        width: !props.widthButton ? "100%" : props.widthButton,
        borderRadius: props.borderRadius ? widthButtonMessage() : "0",
      }}
      className={!props.themeButton ? "light-theme-button" : props.themeButton}
    >
      {props.textButton}
    </button>
  );
}

export default ButtonMessage;
