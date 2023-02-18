import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import Header from '../components/Header';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Header />
    </>
  );
};

export default Home;
