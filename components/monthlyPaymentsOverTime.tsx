import * as React from "react";
import styles from "../styles/MonthlyPayment.module.css";


const MonthlyMortagePayments = () => {
    const [yourPayment, setYourPayment] = React.useState('');
    const [prinicipal, setPrinicipal] = React.useState('');
    const [interestRate, setInterestRate] = React.useState('');
    const [totalPayments, setTotalPayments] = React.useState('');
    const [response, setResponse]: any = React.useState(null);

    const fetchApi = async () => {
        const resp = await fetch('/api/v1/mortageOverTime', {
            method: 'POST',
            body: JSON.stringify({
                yourPayment,
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
                <div className="form-group w-100">
                    <label htmlFor="yourPayment">Your Payment</label>
                    <input className="form-control" onChange={e => setYourPayment(e?.target?.value)} placeholder="Enter your payment" name="yourPayment" step="1" type="number" />
                </div>
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
                <button  className="btn-block btn btn-primary" onClick={fetchApi}>
                    Submit
                </button>
            </div>
            <div className={styles.section}>
                {response && (
                    <div>
                        Time to pay off: {(response?.timeToPayOff) / 12} years
                    </div>
                )}
            </div>
        </div>
    );
};

export default MonthlyMortagePayments;