import Head from "next/head";
import Image from "next/image";
import Sidebar from "./../components/Sidebar";
import Feeds from "./../components/Feeds";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone With Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Need to implement h-scren and overflow-auto to make the sidebar sticky and scrollable */}
      <main className="max-w-7xl mx-auto flex  h-screen overflow-auto">
        <Sidebar />
        <Feeds />
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  );
}
