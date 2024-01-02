export default function createIteratorObject (report) {
  const allEmployees = report.allEmployees;
  let employees = [];

  for (const department in allEmployees) {
    employees = employees.concat(allEmployees[department]);
  }

  return employees;
}
