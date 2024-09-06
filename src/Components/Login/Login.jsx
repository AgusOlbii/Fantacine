import { useState } from "react";
import LoginRegisterInput from "../../Components/LoginRegisterInput/LoginRegisterInput";
import styleLogin from "./Login.module.css";
import Button from "../buttom/Button";
const Login = ({ handleLogin }) => {
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  return (
    <div className={styleLogin.containerLogin}>
      <div>
        <Button handle={handleLogin} />
      </div>
      <form action="Login" className={styleLogin.formLogin}>
        <img
          src="./../../Images/Login.png"
          alt="Logo"
          className={styleLogin.imageLogin}
        />
        <LoginRegisterInput
          type="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          label="Correo electronico"
        />
        <LoginRegisterInput
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          label="Contraseña"
        />
        <button type="submit" className={styleLogin.buttonLogin}>
          Continuar
        </button>
        <p className={styleLogin.pLogin}>
          ¿No tienes cuenta?{" "}
          <a className={styleLogin.aLogin} href="#">
            Registrate
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
