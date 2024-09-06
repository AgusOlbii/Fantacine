import { useState } from "react";
import LoginRegisterInput from "../../Components/LoginRegisterInput/LoginRegisterInput";
import styleRegister from "./Register.module.css";
import Button from "../buttom/Button";
const Register = ({ handleRegister }) => {
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [passwordVerificationValue, setPasswordVerificationValue] =
    useState("");
  const handleVerification = () => {
    const success =
      setPasswordVerificationValue == setPasswordValue
        ? "Contraseña correcta"
        : "Las contraseñas no son iguales";
  };
  return (
    <div className={styleRegister.containerRegister}>
      <div>
        <Button handle={handleRegister} />
      </div>
      <form action="Login" className={styleRegister.formRegister}>
        <h2 className={styleRegister.h2Register}>Crea tu cuenta</h2>
        {/* name input */}
        <LoginRegisterInput
          type="text"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          label="Nombre"
        />
        {/* last name input */}
        <LoginRegisterInput
          type="text"
          value={lastNameValue}
          onChange={(e) => setLastNameValue(e.target.value)}
          label="Apellido"
        />
        {/* birthday input */}
        <LoginRegisterInput
          type="date"
          value={dateValue}
          onChange={(e) => setDateValue(e.target.value)}
          label="Fecha de nacimiento"
        />
        {/* email input */}
        <LoginRegisterInput
          type="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          label="Correo electronico"
        />
        {/* password input */}
        <LoginRegisterInput
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          label="Contraseña"
        />
        {/* password verification input */}
        <LoginRegisterInput
          type="password"
          value={passwordVerificationValue}
          onChange={(e) => setPasswordVerificationValue(e.target.value)}
          label="Repetir Contraseña"
        />
        <div className={styleRegister.termsAndConditions}>
          <input type="checkbox" name="terminos y condiciones" />
          <label htmlFor="">Acepto las politicas y condiciones de uso.</label>
        </div>
        <button
          type="submit"
          className={styleRegister.buttonRegister}
          onClick={handleVerification}
        >
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default Register;
