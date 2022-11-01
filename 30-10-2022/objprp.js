/* in this we use 
obj.anotherproperty=`---------` to add aanothe rproperty in object.
delete obj.---------. to delete some thing from object*/

const obj = {
  nameofobj: `obj`,
  model: `wx2`,
};
obj.anotherproperty = `red`;
delete obj.nameofobj;
console.log(obj);
