import { DefaultTemplate } from "../../templates/DefaultTemplate";
import { RegisterTransactionForm } from "../../components/RegisterTransactionForm";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { ListTransactions } from "../../components/ListTransactions";
import { CardValorTotalTransactions } from "../../components/ListTransactions/CardValorTotalTransactions";

export function HomePage() {
  const [transactionsList, setTransaction] = useState([]);

  const addTransactionList = (formData) => {
    const newTrasaction = {
      ...formData,
      id: uuidv4(),
      valor: Number(formData.valor),
    };
    setTransaction([...transactionsList, newTrasaction]);
  };

  const removeTransactionFromList = (transactionId) => {
    const newTrasactionsList = transactionsList.filter(
      (transaction) => transaction.id != transactionId
    );
    setTransaction(newTrasactionsList);
  };

  return (
    <DefaultTemplate>
      <main className="main-container-card">
        <div className="container-form-card">
          <RegisterTransactionForm addTransactionList={addTransactionList} />
          <CardValorTotalTransactions listTransactions={transactionsList} />
        </div>
        <div className="container-resumo-financeiro">
          <h3>Resumo financeiro</h3>
          <ListTransactions
            listTransactions={transactionsList}
            removeTransactionFromList={removeTransactionFromList}
          />
        </div>
      </main>
    </DefaultTemplate>
  );
}
