import Head from "next/head";
import Image from "next/image";
import Sidebar from "./../components/Sidebar";
import Feeds from "./../components/Feeds";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "./../components/Login";

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();

  if (!session) return <Login providers={providers} />;

  console.log(session);
  return (
    <div>
      <Head>
        <title>Twitter Clone With Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Need to implement h-scren and overflow-auto to make the sidebar sticky and scrollable */}
      <main className="max-w-7xl mx-auto flex overflow-auto">
        <Sidebar />
        <Feeds />
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );

  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );

  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}
