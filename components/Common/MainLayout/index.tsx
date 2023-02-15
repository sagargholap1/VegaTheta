import React, { useEffect } from "react";
import Head from "next/head";

// React Toastify
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Header from "../Header/Header";

// Components

// Prop Types
type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  // Welcome Message
  useEffect(() => {
    return () => {
      toast("Welcome to Vega Theta");
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta name="description" content="Patkar Varde College" />
        <link rel="icon" href="/favicon.ico" />
        <title>Vega Theta</title>
      </Head>

      <Header />

      {children}

      {/* <Footer /> */}

      <ToastContainer
        position="top-center"
        theme="light"
        transition={Flip}
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        closeOnClick
        pauseOnHover
        draggable
      />
    </React.Fragment>
  );
};

export default MainLayout;
