import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Discography Site</title>
        <meta name="description" content="A collection of my music." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Discography</h1>
        <p className="text-lg mb-6">Explore my collection of music tracks and albums.</p>

        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Get Started
        </button>
      </main>
    </div>
  );
}
