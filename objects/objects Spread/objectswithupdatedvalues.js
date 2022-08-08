// example 1
const fedmemberbank1 = {
  name: "JP MorganChase",
  founded: "1st december 2000",
};

const jpmc = {
  ...fedmemberbank1,
  founders: "Aaron Burr",
  headquaters: "NewYork",
  CEO: "Jamie Dimon",
  Revenue: "121.65 billion",
};
console.log(jpmc);

// example 2

const fedmemberbank2 = {
  name: "Bank of America",
  founded: "1998",
};

const boa = {
  ...fedmemberbank2,
  founder: "HUgh McColl",
  headquateres: "north carolina",
  ceo: "Brian MOynian",
  revenue: "89.11 billon",
};
console.log(boa);

// example 3
const fedmemberbank3 = {
  name: "Wells Fargo",
  founded: 1929,
};
const wfb = {
  ...fedmemberbank3,
  founder: "Henry Wells",
  headqauter: "San Fransisco",
  ceo: "steven black",
  revenue: "78.42 billion",
};
console.log(wfb);

// example 4
const fedmemberbank4 = {
  name: "Ciigroup",
  founded: 1998,
};

const ctb = {
  ...fedmemberbank4,
  founder: "Sanford Well",
  headquaters: "NewYork",
  Revenue: "usd 71.88 billion",
};
console.log(ctb);

// example 5
const fedmemberbank5 = {
  name: "usnabcorp",
  founded: 1863,
};

const ubb = {
  ...fedmemberbank5,
  ceo: "Andrew Cecere",
  Headquater: "minnesota",
  revenue: "22.72 billion",
};
console.log(ubb);

// example 6

const fedmemberbank6 = {
  name: "provident national corporation",
  founded: 1852,
};

const pnc = {
  ...fedmemberbank6,
  headquaters: "pittsburgh",
  ceo: "william demchak",
  netincome: "5.724 billion",
};
console.log(pnc);

// example 7

const fedmemberbank7 = {
  name: "Truist Financial Corporation",
  founded: 1872,
};

const tfc = {
  ...fedmemberbank7,
  founder: "william rodgers",
  headquaters: "charlotte",
  revenue: "20.370 billion",
};

console.log(tfc);

// example 8

const fedmemberbank8 = {
  name: "The Goldman Sachs Group",
  founded: 1869,
};

const gsc = {
  ...fedmemberbank8,
  founder: "Samuel Sachs",
  headquaters: "newyork",
  ceo: "david solomon",
  revenue: "59.3 billion",
};
console.log(gsc);

// example 9
const fedmemberbank9 = {
  name: "Toronto Dominion Bank",
  founded: 1852,
};

const tdb = { ...fedmemberbank9, headquater: "new jersey", ceo: "Leo Salom" };
console.log(tdb);

// example 10
const fedmemberbank10 = {
  name: "capital one financial corporation",
  founded: 1994,
};
const cob = {
  ...fedmemberbank10,
  founder: "Richard Fairbank",
  headquater: "Virginia",
  CEO: "Richard Fairbank",
  revenue: "26.033 billion",
};
console.log(cob);
