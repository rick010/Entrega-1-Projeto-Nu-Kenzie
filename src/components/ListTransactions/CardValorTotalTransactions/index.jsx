import styles from "./style.module.css";

export function CardValorTotalTransactions({ listTransactions }) {
  console.log(listTransactions)
  const valueTotal = () => {
    const valueTotal = listTransactions.reduce(
      (valueAnterior, currentValue) => {
        if (listTransactions.length > 0 && currentValue.entradaSaida === "Entrada") {
          return valueAnterior + currentValue.valor;
        } else if(listTransactions.length > 0 && currentValue.entradaSaida === "Saída"){
            return valueAnterior - currentValue.valor;
        }
      },
      0
    );
    return valueTotal;
  };
  return (
    <>
      {listTransactions.length > 0 ? (
        <div className={styles.container_total}>
          <div className={styles.valor_total}>
            <p className={styles.p}>Valor total</p>
            <span className={styles.span}>R$ {valueTotal()},00</span>
          </div>
          <p className={styles.p_description}>O valor se refere ao saldo</p>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </>
  );
}
