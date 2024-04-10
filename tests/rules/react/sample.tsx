import { useState } from 'react';

type HomeProps = {
  x?: number;
};

export default function Home({ x = 13 }: HomeProps) {
  const [n] = useState<number>(0);
  return <div>{x + n}</div>;
}
