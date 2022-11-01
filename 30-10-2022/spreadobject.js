const cars = {
  name: `benz`,
  model: `2021`,
  color: `black`,
};

const employ = {
  empname: `alex`,
  designation: `gm`,
};

anotherobj = {
  ...cars,
  ...employ,
};
console.log(anotherobj);
