import styleLogReg from "./LoginRegisterInput.module.css";
const LoginRegisterInput = ({ type, placeholder, value, onChange, label }) => {
  return (
    <div className={styleLogReg.div}>
      <label htmlFor="" className={styleLogReg.logRegLabels}>
        {label}
      </label>
      <input
        className={styleLogReg.logRegInputs}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default LoginRegisterInput;
