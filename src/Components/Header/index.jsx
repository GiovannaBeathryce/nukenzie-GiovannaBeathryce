import "./style.css";

function Header({ setIslogin }) {
  function sair() {
    return setIslogin(true);
  }

  return (
    <div className="Header">
      <img src="NuKenzie.svg" alt="Logotipo" />
      <button onClick={sair}>Início</button>
    </div>
  );
}

export default Header;
