import { getProviders, signIn } from 'next-auth/react';
import React from 'react';

function Login({ providers }) {
  return <div>Login</div>;
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
