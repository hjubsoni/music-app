import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PremiumPlans from '../components/PremiumPlans';
import PremiumSection from '../components/PremiumSection';

const Home: NextPage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <Header />
      <HeroSection />
      <PremiumSection />
      <PremiumPlans />
    </div>
  );
};

export default Home;
