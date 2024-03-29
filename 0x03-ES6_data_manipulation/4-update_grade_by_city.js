export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    // eslint-disable-next-line no-param-reassign
    student.grade = gradeObj ? gradeObj.grade : 'N/A';
    return student;
  });
}
