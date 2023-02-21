import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
};

export default Home;
