// for 'import/prefer-default-export': ['warn', { target: 'any' }],

export function A({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function B({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
