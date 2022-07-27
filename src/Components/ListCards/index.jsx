/* eslint-disable jsx-a11y/alt-text */
import HeaderList from "../HeaderList";
import "./style.css";

function ListCard({ listTransactions, setListTransactions }) {
  function removeTransaction(trasactionRemove) {
    setListTransactions((oldTransactions) => {
      const newTransactions = oldTransactions.filter(
        (item) => item !== trasactionRemove
      );
      return newTransactions;
    });
  }

  if (listTransactions.length === 0) {
    return (
      <div className="containerList">
        <HeaderList listTransactions={listTransactions} />
        <div>
          <h3>Você ainda não possui nenhum lançamento</h3>
          <img src="NoCard.svg" className="imgLoading" />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="containerList">
          <HeaderList listTransactions={listTransactions} />
          <ul>
            {listTransactions.map((transaction, index) => (
              <li key={index}>
                <div className="flag"></div>
                <section className="descricao">
                  <h2>{transaction.descricao}</h2>
                  <p>{transaction.tipoTransacao}</p>
                </section>
                <section className="valor">
                  <p>{`R$ ${transaction.valor},00`}</p>
                  <button onClick={() => removeTransaction(transaction)}>
                    <img src="trash.svg" alt="lixeira" />
                  </button>
                </section>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default ListCard;
