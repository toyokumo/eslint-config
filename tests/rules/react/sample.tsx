import { useState } from 'react';

// for 'react/function-component-definition', 'error'
export const Page = () => <div>page.</div>;

function A(children: React.ReactNode) {
  return <div>{children}</div>;
}

type HomeProps = {
  x?: number;
};

function Home({ x = 13 }: HomeProps) {
  const [n] = useState<number>(0);
  return <div>{x + n}</div>;
}

Home.A = A;

export default Home;
