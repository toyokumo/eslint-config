const xs = [{ a: 1 }, { a: 2 }];
xs.forEach((x) => {
  x.a = 0;
});

const f = (_, x) => x;
f(1, 2);

export const x = 10;

const underscore = () => {
  const __typename = 'test';
  const test = {
    __typename: 'test',
  };
  return [__typename, test.__typename];
};
underscore();
