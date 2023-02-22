import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PremiumSection from '../components/PremiumSection';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Header />
      <HeroSection />
      <PremiumSection />
    </div>
  );
};

export default Home;
