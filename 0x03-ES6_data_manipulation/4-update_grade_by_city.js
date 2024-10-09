export default function updateStudentGradeByCity(students, city, newGrades) {
  const noGrade = { grade: 'N/A' };
  return students.filter((students) => students.location === city)
    .map((students) => ({
      id: students.id,
      firstName: students.firstName,
      location: students.location,
      grade: (newGrades.filter((grade) => grade.studentId === students.id).pop() || noGrade).grade,
    }));
}
