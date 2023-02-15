import Head from "next/head";
import type { NextPage } from "next";

import Image from "next/image";
import HomePage from "components/Pages/Homepage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>VEGATHETA | Home</title>
      </Head>
     
     <main>

        <HomePage />
     </main>
      
    </>
  );
};
export default Home;
