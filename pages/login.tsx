import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { getProviders, signIn } from 'next-auth/react';

import Image from 'next/image';
import React from 'react';

function Login({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const handleLogin = async (provider: string) => {
    const result = await signIn(provider, {
      callbackUrl: `${window.location.origin}/player`,
    });
    if (result?.error) {
      console.log(result.error);
    }
  };
  return (
    <div>
      <div className="flex items-center p-4 justify-center border-b-2 border-gray-700">
        <Image src="/images/logo.png" alt="" width={62} height={62} />
      </div>
      <main className="px-4 pt-16">
        <div className="flex items-center justify-center">
          {Object.values(providers).map((provider) => (
            <div
              key={provider.name}
              className="w-full sm:max-w-[27rem]"
            >
              <button
                onClick={() => handleLogin(provider.id)}
                className="rounded-2xl hover:scale-105 transition-all bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-rinline-block w-full py-4 shadow-inner"
              >
                <span className="text-lg font-semibold">
                  Continue with {provider.name}
                </span>
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Login;

export async function getServerSideProps(
  context: GetServerSidePropsContext
) {
  const providers = await getProviders();
  const token = context.req.cookies['next-auth.session-token'];
  if (token) {
    redirect: {
      return { redirect: { destination: '/player' } };
    }
  }
  return {
    props: {
      providers: providers ?? [],
    },
  };
}
