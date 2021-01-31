import * as React from "react";
import styles from "../styles/MonthlyPayment.module.css";


const MonthlyMortagePayments = () => {
    const [prinicipal, setPrinicipal] = React.useState('');
    const [interestRate, setInterestRate] = React.useState('');
    const [totalPayments, setTotalPayments] = React.useState('');
    const [response, setResponse]: any = React.useState(null);

    const fetchApi = async () => {
        const resp = await fetch('/api/v1/mortage', {
            method: 'POST',
            body: JSON.stringify({
                prinicipal,
                interestRate,
                totalPayments,
            })
        });
        const data = await resp.json();
        setResponse(data);
    }

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <input onChange={e => setPrinicipal(e?.target?.value)} name="prinicipal" step="1" type="number" />
                <input onChange={e => setInterestRate(e?.target?.value)} name="interestRate" step="0.01" type="number" />
                <input onChange={e => setTotalPayments(e?.target?.value)} name="totalPayments" step="1" type="number" />
                <button onClick={fetchApi}>
                    Submit
                </button>
            </div>
            <div className={styles.section}>
                {response && (
                    <div>
                        Monthly Mortage Payment: ${response?.monthlyPayment?.toFixed(2)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MonthlyMortagePayments;