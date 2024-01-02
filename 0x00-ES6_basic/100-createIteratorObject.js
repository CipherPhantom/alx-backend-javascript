export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employees = [];
  console.log(allEmployees);
  Object.values(allEmployees).forEach((employeesList) => {
    for (const employee of employeesList) {
      employees.push(employee);
    }
  });

  return employees;
}
