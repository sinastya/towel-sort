
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return (matrix) ? [].concat(...matrix.map((sub, index) => (index % 2 == 0) ? sub : sub.reverse())) : [];
}