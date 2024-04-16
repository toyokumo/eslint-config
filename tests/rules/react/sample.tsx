import { useState } from 'react';

// for 'react/function-component-definition', 'error'
export const Page = () => <div>page.</div>;

type HomeProps = {
  x?: number;
};

export default function Home({ x = 13 }: HomeProps) {
  const [n] = useState<number>(0);
  return <div>{x + n}</div>;
}
