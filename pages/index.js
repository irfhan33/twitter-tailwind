import Head from "next/head";
import Image from "next/image";
import Sidebar from "./../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone With Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen max-w-7xl mx-auto">
        <Sidebar />
        {/* Feeds */}
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  );
}
