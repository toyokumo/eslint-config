const xs = [{ a: 1 }, { a: 2 }];
xs.forEach((x) => {
  x.a = 0;
});

const f = (_, x) => x;
f(1, 2);
