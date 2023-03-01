import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import { NextRequest } from 'next/server';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PremiumPlans from '../components/PremiumPlans';
import PremiumSection from '../components/PremiumSection';
import { getToken } from 'next-auth/jwt';

const Home: NextPage = ({ token }) => {
  const { data: session } = useSession();
  console.log(token);
  return (
    <div>
      <Header />
      <HeroSection />
      <PremiumSection />
      <PremiumPlans />
    </div>
  );
};

export async function getServerSideProps({ req }: any) {
  const secret = process.env.NEXTAUTH_SECRET;
  const token = await getToken({ req, secret });

  return {
    props: {
      token: token?.accessToken,
    },
  };
}

export default Home;
