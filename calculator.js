//This is Default Module 
// const add = (a, b) => {
//     return a + b;
//   };
//   module.exports = add;


//Using Named Modules
  const add = (a, b) => {
    return a + b;
  };
  const sub = (a, b) => {
    return a - b;
  };
exports.add = add;
exports.sub = sub;

  