const student = {
  name: 'David',
  id: 1,
  marks: [89, 76, 45, 83, 93]
};
function printMarks(student){
  const [first, second, ...others] = student.marks;
  console.log(first, second); 
}
printMarks(student);