import * as React from "react";
import styles from "../styles/MonthlyPayment.module.css";


const MonthlyMortagePayments = () => {
    const [prinicipal, setPrinicipal] = React.useState(0);
    const [interestRate, setInterestRate] = React.useState(0);
    const [totalPayments, setTotalPayments] = React.useState(0);

    const fetchApi = async () => {
        return await fetch({
            url: '/api/v1/mortage',
            method: 'POST',
            body: JSON.stringify({
                prinicipal,
                interestRate,
                totalPayments,
            })
        }).then(r => r.json());
    }

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <input onChange={e => setPrinicipal(e.target.value)} name="prinicipal" step="1" type="number" />
                <input onChange={e => setInterestRate(e.target.value)} name="interestRate" step="0.01" type="number" />
                <input onChange={e => setTotalPayments(e.target.value)} name="totalPayments" step="1" type="number" />
            </div>
            <div className={styles.section}>

            </div>
        </div>
    );
};

export default MonthlyMortagePayments;