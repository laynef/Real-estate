import Head from 'next/head'
import styles from '../styles/Home.module.css';
import MortagePayment from "../components/mortagePayment";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MortagePayment />
    </div>
  )
}
