const arr1 = [
  { id: 3, date: '2022-04-21' },
  { id: 5, date: '2027-04-21' },
  { id: 2, date: '2023-01-21' },
].map((obj) => {
  return { ...obj, date: new Date(obj.date) };
});

// ✅ Sort in Ascending order (low to high)
const sortedAsc = arr1.sort(
  (objA, objB) => objA.date.getTime() - objB.date.getTime(),
);

// 👇️ {id: 3, date: Thu Apr 21 2022,
//     id: 2, date: Sat Jan 21 2023
//     id: 5, date: Wed Apr 21 2027}
console.log(sortedAsc);

// ✅ Sort in Descending order (high to low)
const sortedDesc = arr1.sort(
  (objA, objB) => objB.date.getTime() - objA.date.getTime(),
);

//  👇️ {id: 5, date: Wed Apr 21 2027,
//      id: 2, date: Sat Jan 21 2023,
// ️     id: 3, date: Thu Apr 21 2022}
console.log(sortedDesc);
