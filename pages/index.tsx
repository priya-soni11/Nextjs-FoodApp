import Head from "next/head";
import Featured from "@/component/Featured";
import styles from "../styles/Home.module.css";
import PizzaList from "@/component/PizzaList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
