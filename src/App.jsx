/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import TotalMoney from "./Components/TotalMoney";
import ListCard from "./Components/ListCards";

import "./App.css";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const [isLogin, setIslogin] = useState(true);

  function entrar() {
    return setIslogin(false);
  }

  if (isLogin === false) {
    return (
      <div className="App">
        <Header setIslogin={setIslogin} />
        <div className="Container">
          <div>
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
            <TotalMoney listTransactions={listTransactions} />
          </div>
          <div>
            <ListCard
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="homePage">
        <div className="content">
          <img src="NuKenzie.svg" className="logo" />
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button onClick={entrar}>Iniciar</button>
        </div>
        <div>
          <img src="home.svg" className="figure" />
        </div>
      </div>
    );
  }
}

export default App;
