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
            <div className="card w-50 shadow-sm p-3">
                <h2 className="font-weight-light">Monthly Payment Calculator</h2>
                <div className="form-group w-100">
                    <label htmlFor="prinicipal">Prinicipal</label>
                    <input className="form-control" onChange={e => setPrinicipal(e?.target?.value)} placeholder="Enter prinicipal" name="prinicipal" step="1" type="number" />
                </div>
                <div className="form-group w-100">
                    <label htmlFor="interestRate">Interest Rate</label>
                    <input className="form-control" onChange={e => setInterestRate(e?.target?.value)} placeholder="Enter Interest Rate" name="interestRate" step="0.01" type="number" />
                </div>
                <div className="form-group w-100">
                    <label htmlFor="totalPayments">Total Payment Months</label>
                    <input className="form-control" onChange={e => setTotalPayments(e?.target?.value)} placeholder="Enter total months of payment" name="totalPayments" step="1" type="number" />
                </div>
                <button className="btn-block btn btn-primary" onClick={fetchApi}>
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