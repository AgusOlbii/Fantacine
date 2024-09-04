import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";

const App = () => {
  return (
    <div className="div-container">
      <NavBar />
      <div className="div-login">
        <Login />
      </div>
    </div>
  );
};

export default App;
