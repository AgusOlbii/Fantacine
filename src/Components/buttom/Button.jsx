import styleButton from "./ButtonStyle.module.css";
const Button = ({ handle }) => {
  return (
    <button className={styleButton.buttonLogin} onClick={handle}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default Button;
