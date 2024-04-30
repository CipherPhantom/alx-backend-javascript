const readDatabase = require('../utils');

const databaseFile = process.argv.length > 2 ? process.argv[2] : '';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(databaseFile)
      .then((students) => {
        const responseText = ['This is the list of our students'];
        const fieldsCount = {};

        students.forEach((student) => {
          if (student.field in fieldsCount) {
            fieldsCount[student.field] += 1;
          } else {
            fieldsCount[student.field] = 1;
          }
        });

        Object.keys(fieldsCount).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
          .forEach((field) => {
            responseText.push(`Number of students in ${field}: ${fieldsCount[field]}. List: ${
              students.filter((student) => student.field === field).map(
                (student) => student.firstName,
              ).join(', ')
            }`);
          });

        response.status(200).send(responseText.join('\n'));
      }).catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const MAJORS = ['CS', 'SWE'];
    const { major } = request.params;

    if (!MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(databaseFile)
      .then((students) => {
        const responseText = `${
          students.filter((student) => student.field === major).map(
            (student) => student.firstName,
          ).join(', ')}`;

        response.status(200).send(responseText === '' ? '' : `List: ${responseText}`);
      })
      .catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }
}

module.exports = StudentsController;
