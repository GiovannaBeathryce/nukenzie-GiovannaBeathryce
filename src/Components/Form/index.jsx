import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipoTransacao, setTipoTransacao] = useState("");

  function heandleSubmit(event) {
    event.preventDefault();

    setListTransactions((oldTransactions) => [
      ...oldTransactions,
      { descricao, valor, tipoTransacao },
    ]);
  }

  return (
    <form onSubmit={heandleSubmit}>
      <div className="Form">
        <label>Descrição</label>
        <input
          required
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescricao(event.target.value)}
        />
        <span>Ex: Compra de roupas</span>

        <div className="valor">
          <label>
            Valor
            <input
              required
              type="text"
              placeholder="R$"
              onChange={(event) => setValor(event.target.value)}
            />
          </label>
          <label aria-required>
            Tipo de transação
            <select
              required
              name="transacao"
              onChange={(event) => setTipoTransacao(event.target.value)}
            >
              <option value="Selecione">Selecione</option>
              <option value="Entrada" type="entrada">
                Entrada
              </option>
              <option value="Saida" type="saida">
                Saída
              </option>
            </select>
          </label>
        </div>
        <button>Inserir valor</button>
      </div>
    </form>
  );
}

export default Form;
