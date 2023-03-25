import { useState } from "react";
import styles from "./style.module.css";

export function RegisterTransactionForm({ addTransactionList }) {


    const [formData, setFormData] = useState({
        description: "",
        valor: "",
        entradaSaida: ""
    });

    const submit = (event) => {
        event.preventDefault();
        addTransactionList(formData);
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <fieldset className={styles.fieldset}>
                <label className={styles.label} htmlFor="descricao">Descrição</label>
                <input className={styles.input} placeholder="Digite aqui sua descrição" value={formData.description} onChange={(event) => setFormData({ ...formData, description: event.target.value })} id="descricao" type="text" required />⁠
                <span className={styles.span}>Ex: Compras de roupas</span>
            </fieldset>
            <fieldset className={styles.fieldset}>
                <label className={styles.label} htmlFor="valor">Valor (R$)</label>
                <input className={styles.input} htmue={formData.valor} onChange={(event) => setFormData({ ...formData, valor: event.target.value })} id="valor" type="number" label="Valor (R$)" required min={0} />⁠
            </fieldset>
            <fieldset className={styles.fieldset}>
                <label className={styles.label}>Tipo de valor</label>
                <div className={styles.select}>
                    <select className={styles.select_in} value={formData.entradaSaida} onChange={(event) => setFormData({ ...formData, entradaSaida: event.target.value })} required>
                        <option className={styles} value="">Selecione a Operação</option>
                        <option className={styles}>Entrada</option>
                        <option className={styles}>Saída</option>
                    </select>
                </div>
            </fieldset>
            <button className={styles.button} type="submit">Inserir valor</button>
        </form>
    );
};

