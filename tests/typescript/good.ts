export const plus = (x: number, y: number): number => x + y;
// allow omission of return type at module export.
export const minus = (x: number, y: number) => x + y;

const i = (x: number, _: number): number => x;
i(1, 2);
