function calculatePAYE(basicSalary) {
    const taxBands = [24000, 8333, 467667, 300000]; 
    const taxRates = [0.1, 0.25, 0.3, 0.325, 0.35]; 
    let tax = 0;

    for (let i = 0; i < taxBands.length; i++) {
        if (basicSalary > taxBands[i]) {
            tax += taxBands[i] * taxRates[i];
            basicSalary -= taxBands[i];
        } else {
            tax += basicSalary * taxRates[i];
            break;
        }
    }

    if (basicSalary > 0) {
        tax += basicSalary * taxRates[taxRates.length - 1];
    }

    return tax;
}

function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;

    if (grossSalary >= 100000) return 1700;

    return 500;
}

function calculateNSSF(grossSalary) {
    return grossSalary * 0.06;
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePAYE(basicSalary);
    const nhifDeductions = calculateNHIF(grossSalary);
    const nssfDeductions = calculateNSSF(grossSalary);
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    return {
        grossSalary: grossSalary,
        payee: payee,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}


const basicSalary = parseFloat(prompt("Enter your basic salary:"));
const benefits = parseFloat(prompt("Enter your benefits:"));
const netSalaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary: " + netSalaryDetails.grossSalary);
console.log("PAYE (Tax): " + netSalaryDetails.payee);
console.log("NHIF Deductions: " + netSalaryDetails.nhifDeductions);
console.log("NSSF Deductions: " + netSalaryDetails.nssfDeductions);
console.log("Net Salary: " + netSalaryDetails.netSalary);
