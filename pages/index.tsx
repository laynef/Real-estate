import Head from 'next/head'
import MortagePayment from "../components/mortagePayment";
import MortagePaymentOverTime from "../components/monthlyPaymentsOverTime";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MortagePayment />
      <MortagePaymentOverTime />
    </div>
  )
}
