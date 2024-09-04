import { useState } from "react";
import LoginRegisterInput from "../../Components/LoginRegisterInput/LoginRegisterInput";
import style from "./Login.module.css";
const Login = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  return (
    <div className={style.div}>
      <form action="Login" className={style.form}>
        <img
          src="./../../Images/Login.png"
          alt="Logo"
          className={style.image}
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
        <button type="submit" className={style.button}>
          Continuar
        </button>
        <p className={style.p}>
          ¿No tienes cuenta?{" "}
          <a className={style.a} href="#">
            Registrate
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
