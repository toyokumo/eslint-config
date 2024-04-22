import { useState } from 'react';

// for 'react/function-component-definition', 'error'
export const Page = () => <div>page.</div>;

function A(children: React.ReactNode) {
  return <div>{children}</div>;
}

// for 'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
function B({ children, isB }: { children: React.ReactNode; isB: boolean }) {
  if (isB) {
    return (
      <>
        <div>{children}</div>
      </>
    );
  }
  return <>{children}</>; // OK
}

type HomeProps = {
  x?: number;
};

function Home({ x = 13 }: HomeProps) {
  const [n, setN] = useState<number>(() => 0);
  return (
    <button type="button" onClick={() => setN(n + 1)}>
      {x + n}
    </button>
  );
}

Home.A = A;
Home.B = B;

export default Home;
