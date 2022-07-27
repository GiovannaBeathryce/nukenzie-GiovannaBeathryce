import ListCard from "../ListCards";
import "./style.css";

function HeaderList({ listTransactions }) {
  //   const mostrarTodos = listTransactions.map((transaction) => {
  //     // return <ListCard />;
  //   });

  //   const filtrarEntradas = listTransactions.filter((trasaction) => {
  //     if (trasaction.tipoTransacao === "Saida") {
  //       // return <ListCard />;
  //     }
  //   });

  //   const filtrarSaidas = listTransactions.filter((trasaction) => {
  //     if (trasaction.tipoTransacao === "Saida") {
  //       // return <ListCard />;
  //     }
  //   });

  return (
    <section className="headerList">
      <h2>Resumo financeiro</h2>
      <section>
        <button>Todos</button>
        <button>Entradas</button>
        <button>Despesas</button>
      </section>
    </section>
  );
}

export default HeaderList;
