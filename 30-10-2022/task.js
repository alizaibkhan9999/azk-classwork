const myconvertor = (value1, value2) => {
  if (value2 === `f`) {
    return ((value1 - 32) * 5) / 9;
  } else {
    return value1;
  }
};
