import type { NextPage } from 'next';
import Head from 'next/head';
import BuilderLayout from 'src/modules/builder/BuilderLayout';

const BuilderPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AutoRes</title>
        <meta name="description" content="Single Page Resume Builder" />
        <link rel="icon" type="image/png" href="/whitelogo.png" />
      </Head>

      <BuilderLayout />
    </div>
  );
};

export default BuilderPage;
