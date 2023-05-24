const strCount = (obj) =>
  Object.values(obj).reduce(
    (acc, v) =>
      acc + (v && typeof v === "object" ? strCount(v) : typeof v === "string"),
    0
  );

console.log(
  strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
  })
);
//returns 3
