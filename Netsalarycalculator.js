const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const payeRates = [
  { min: 0, max: 240000, deduction: 10 },

  { min: 240000, max: 32333.33, deduction: 25 },

  { min: 32333.33, max: 499999.99, deduction: 30 },

  { min: 500000.0, max: 799999.99, deduction: 32.5 },
];

function getTaxRate(salary) {
  if (salary <= 24000) {
    return 10;
  }

  if (salary > 24000 && salary <= 32333.33) {
    return 25;
  }

  if (salary > 32333.33 && salary <= 499999.99) {
    return 30;
  }

  if (salary > 499999.99 && salary < 500000.0) {
    return 32.5;
  }

  return 35;
}

function salaryAfterPaye(salary) {
  const rate = getTaxRate(salary) / 100;
  const taxable = salary + rate;
  const income = salary - taxable;
  const net = income + 2640;
  return net;
}

function nhifDeductable(income) {
  if (income < 6000) {
    return 150;
  }
  if (income >= 6000 && income < 8000) {
    return 300;
  }
  if (income >= 8000 && income < 12000) {
    return 400;
  }
  if (income >= 12000 && income < 15000) {
    return 500;
  }
  if (income >= 15000 && income < 20000) {
    return 600;
  }
  if (income >= 20000 && income < 25000) {
    return 750;
  }
  if (income >= 25000 && income < 30000) {
    return 850;
  }
  if (income >= 30000 && income < 35000) {
    return 900;
  }
  if (income >= 35000 && income < 40000) {
    return 950;
  }
  if (income >= 40000 && income < 45000) {
    return 1000;
  }
  if (income >= 45000 && income < 50000) {
    return 1100;
  }
  if (income >= 50000 && income < 60000) {
    return 1200;
  }
  if (income >= 60000 && income < 70000) {
    return 1300;
  }
  if (income >= 70000 && income < 80000) {
    return 1400;
  }
  if (income >= 80000 && income < 90000) {
    return 1500;
  }
  if (income >= 90000 && income < 100000) {
    return 1600;
  }
  return 1700;
}

function NetSalary(salary) {
  const afterpay = salaryAfterPaye(salary);
  const nhif = nhifDeductable(salary);
  //const netSalary = afterPay -nhif;
  return afterpay - nhif;
}

function main() {
  rl.question("Enter your gross salary\n", (salary) => {
    let s = parseInt(salary);
    if (isNaN(s)) {
      console.log("Please enter a number\n");
      main();
      return;
    }
    console.log(
      "If your gross is ",
      salary,
      "Your net is ",
      NetSalary(salary),
      "Amount to be paid"
    );
    rl.close();
  });
}

main();
