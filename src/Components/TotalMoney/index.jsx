import "./style.css";

function TotalMoney({ listTransactions }) {
  const totalMoney = listTransactions.reduce((valorAnterior, valorAtual) => {
    if (valorAtual.tipoTransacao == "Entrada") {
      return parseInt(valorAtual.valor) + parseInt(valorAnterior);
    } else {
      return parseInt(valorAnterior) - parseInt(valorAtual.valor);
    }
  }, 0);

  return (
    <div className="valorTotal">
      <h2>
        Valor total:<span>{`R$ ${totalMoney},00`}</span>
      </h2>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}

export default TotalMoney;
