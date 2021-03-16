import Head from 'next/head';

const styles = {};

export default function Home() {
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 px-0 flex-1 flex flex-col justify-center items-center">
        <h1 className="m-0 leading-[1.15] text-[4rem] text-center">
          Welcome to{' '}
          <a
            className="color-[#0070f3] no-underline hover:focus:active:no-underline"
            href="https://nextjs.org"
          >
            Next.js!
          </a>
        </h1>

        <p className="leading-normal text-2xl">
          Get started by editing{' '}
          <code className="bg-[#fafafa] p-3 rounded-[5px] text-[1.1rem] font-mono">
            pages/index.js
          </code>
        </p>

        <div className="flex items-center justify-center flex-wrap max-w-[800px] mt-12 max-w-screen-sm:w-full max-w-screen-sm:flex-col">
          <a
            href="https://nextjs.org/docs"
            className="m-4 p-6 text-left no-underline border-[1px] border-solid border-[#eaeaea] rounded-[10px] transition duration-150 hover:focus:active:color-[#0070f3] hover:focus:active:border-color-[#0070f3]"
          >
            <h3 className="text-[1.5rem] mt-0 mr-0 mb-5 ml-0">
              Documentation &rarr;
            </h3>
            <p className="text-[1.25rem] m-0 leading-normal">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="m-4 p-6 text-left no-underline border-[1px] border-solid border-[#eaeaea] rounded-[10px] transition duration-150 hover:focus:active:color-[#0070f3] hover:focus:active:border-color-[#0070f3]"
          >
            <h3 className="text-[1.5rem] mt-0 mr-0 mb-5 ml-0">Learn &rarr;</h3>
            <p className="text-[1.25rem] m-0 leading-normal">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="m-4 p-6 text-left no-underline border-[1px] border-solid border-[#eaeaea] rounded-[10px] transition duration-150 hover:focus:active:color-[#0070f3] hover:focus:active:border-color-[#0070f3]"
          >
            <h3 className="text-[1.5rem] mt-0 mr-0 mb-5 ml-0">
              Examples &rarr;
            </h3>
            <p className="text-[1.25rem] m-0 leading-normal">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="m-4 p-6 text-left no-underline border-[1px] border-solid border-[#eaeaea] rounded-[10px] transition duration-150 hover:focus:active:color-[#0070f3] hover:focus:active:border-color-[#0070f3]"
          >
            <h3 className="text-[1.5rem] mt-0 mr-0 mb-5 ml-0">Deploy &rarr;</h3>
            <p className="text-[1.25rem] m-0 leading-normal">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="w-full h-full border-t-[1px] border-solid border-[#eaeaea] flex justify-center items-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          Powered by{' '}
          <img className="ml-[0.5rem]" src="/vercel.svg" alt="Vercel Logo" className="h-4" />
        </a>
      </footer>
    </div>
  );
}
