function calculateNetSalary(employee, tax = 30 ){
    const salaryAfterTax = employee.totalSalary - (employee.totalSalary * tax / 100);
    return salaryAfterTax;
}
console.log(calculateNetSalary({id: 1, totalSalary: 50000, dept: "IT"}, 10));

console.log(calculateNetSalary({id: 1, totalSalary: 90000, dept: "IT"}));