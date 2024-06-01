import inquirer from "inquirer";
import chalk from "chalk";
const calculate = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "%":
            return num1 % num2;
        case "/":
            if (num2 === 0) {
                throw new Error("Cannot divide by zero");
            }
            return num1 / num2;
        default:
            throw new Error("Invalid operator");
    }
};
const main = async () => {
    try {
        const answers = await inquirer.prompt([
            {
                type: "input",
                name: "num1",
                message: "Enter the first number:",
                validate: (input) => !isNaN(Number(input)) || "Please enter a valid number",
            },
            {
                type: "list",
                name: "operator",
                message: "Choose an operator:",
                choices: ["+", "-", "*", "/", "%"],
            },
            {
                type: "input",
                name: "num2",
                message: "Enter the second number:",
                validate: (input) => !isNaN(Number(input)) || "Please enter a valid number",
            },
        ]);
        const num1 = parseFloat(answers.num1);
        const num2 = parseFloat(answers.num2);
        const operator = answers.operator;
        const result = calculate(num1, num2, operator);
        console.log(
            // chalk.green(`The result of ${num1} ${operator} ${num2} is ${result}`)
            chalk.green(`The result of `), chalk.bgCyan(`${num1} ${operator} ${num2} `), chalk.green(`= `), chalk.bgCyan(` ${result} `));
    }
    catch (error) {
        const fixedError = error;
        console.error(chalk.red(`Error: ${fixedError.message}`));
    }
};
main(); //call the function
// main(); //call the function
