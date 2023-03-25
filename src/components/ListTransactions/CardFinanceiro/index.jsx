import styles from "./style.module.css";

export function CardFinanceiro({ transaction, removeTransactionFromList }) {
  let flagEntradaOrSaida = "li";
  if (transaction.entradaSaida === "Entrada") {
    flagEntradaOrSaida = "entrada";
  }
  return (
    <>
      {transaction.entradaSaida === "Entrada" ? (
        <li className={styles.li_entrada}>
          <h2 className={styles.h2}>{transaction.description}</h2>
          <p className={styles.p}>Entrada</p>
          <p className={styles.p_value_positivo}>R$ {transaction.valor},00</p>
          <button
            className={styles.button}
            onClick={() => removeTransactionFromList(transaction.id)}
          >
            Excluir
          </button>
        </li>
      ) : (
        <li className={styles.li_saida}>
          <h2 className={styles.h2}>{transaction.description}</h2>
          <p className={styles.p}>Despesa</p>
          <p className={styles.p_value_positivo}>R$ {transaction.valor},00</p>
          <button
            className={styles.button}
            onClick={() => removeTransactionFromList(transaction.id)}
          >
            Excluir
          </button>
        </li>
      )}
    </>
  );
}
