import { CardFinanceiro } from "./CardFinanceiro"
import styles from "./style.module.css";

export function ListTransactions({ listTransactions, removeTransactionFromList }) {
    return (
        <>
            {listTransactions.length > 0 ? (
                <ul>
                    {listTransactions.map(element => {
                        return (
                            <CardFinanceiro transaction={element} removeTransactionFromList={removeTransactionFromList}/>
                        )
                    })}
                </ul>
            ) : (
                <p className={styles.p}>Você ainda não possui nenhum Lançamento</p>
            )
            }
        </>
    )
}
