const list = [
  {
    name: "MIchael Scott",
    company: "Dunder MUffin",
    designation: "Regional Manager",
    show: "The office",
  },
  {
    name: "Barney Stinson",
    company: "Golaith National Bank",
    designation: "Please",
    show: "How I met your mother",
  },
  {
    name: "Jake Peralta",
    company: "NYPF",
    designation: "Detective",
    show: "Brooklyn 99",
  },
];

new_obj = { ...list, partnet: "Holly Flax" };

console.table(new_obj);
console.log("john");
