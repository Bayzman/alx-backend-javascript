export default function getStudentIdsSum(students) {
  const initialValue = 0;
  const IdsSum = students.reduce((sum, students) => sum + students.id, initialValue);
  return IdsSum;
}
