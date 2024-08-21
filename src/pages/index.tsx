import type { NextPage } from "next";
import Head from "next/head";
import Chatbot from "../components/Chatbot";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Chatbot App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="md:text-3xl text-2xl font-bold mb-4 text-center">
          Welcome to our Chatbot 🤖
        </h1>
        <Chatbot />
      </main>
    </div>
  );
};

export default Home;
