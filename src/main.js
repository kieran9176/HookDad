'use strict';
const readline = require('readline');
const mysql = require('mysql');
const pwd = require('../secrets');

const { viewProductTypesQuery, viewProductsQuery, viewStockCountQuery,
        addInventoryQuery, addLineItemQuery, viewCustomerPurchasesQuery,
        viewAllSuppliersQuery, viewSingleSupplierQuery } = require('./db');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: pwd,
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
});

let employeeCommandsType = null;

const stockerCommands = [
    { number: '1', command: "1: view all product types", action: viewProductTypes },
    { number: '2', command: "2: view all products", action: viewAllProducts },
    { number: '3', command: "3: retrieve stock count for specific product", action: viewStockCount },
    { number: '4', command: "4: stock the shelf with a given product and quantity", action: editInventory },
    { number: '5', command: "5: close the program", action: close },
];

const cashierCommands = [
    { number: '1', command: "1: add line item to purchase", action: addLineItemToPurchase },
    { number: '2', command: "2: view customer purchases", action: viewCustomerPurchases },
    { number: '3', command: "3: close the program", action: close },
];

const supplyManagerCommands = [
    { number: '1', command: "1: view information for all suppliers", action: viewAllSuppliers },
    { number: '2', command: "2: view information for specific supplier", action: viewSingleSupplier },
    { number: '3', command: "3: close the program", action: close },
];

const storeManagerCommands = [
    { number: '1', command: "1: view all product types", action: viewProductTypes },
    { number: '2', command: "2: view all products", action: viewAllProducts },
    { number: '3', command: "3: retrieve stock count for specific product", action: viewStockCount },
    { number: '4', command: "4: stock the shelf with a product and quantity", action: editInventory },
    { number: '5', command: "5: add line item to purchase", action: addLineItemToPurchase },
    { number: '6', command: "6: view customer purchases", action: viewCustomerPurchases },
    { number: '7', command: "7: view information for all suppliers", action: viewAllSuppliers },
    { number: '8', command: "8: view information for specific supplier", action: viewSingleSupplier },
    { number: '9', command: "9: close the program", action: close },
];

function main () {
    greeting();
    prompt();
}

function greeting () {
    console.log("Welcome to the CSC 321 grocery store database.");
}

function prompt () {
    rl.question('What type of employee are you? \n' +
        ' - stocker \n' +
        ' - cashier \n' +
        ' - supply manager \n' +
        ' - store manager \n' +
        'I am a: ',
        (answer) => {
            switch(answer) {
                case 'stocker':
                    displayOptionsAndRespondAccordingly(employeeCommandsType = stockerCommands);
                    break;
                case 'cashier':
                    displayOptionsAndRespondAccordingly(employeeCommandsType = cashierCommands);
                    break;
                case 'supply manager':
                    displayOptionsAndRespondAccordingly(employeeCommandsType = supplyManagerCommands);
                    break;
                case 'store manager':
                    displayOptionsAndRespondAccordingly(employeeCommandsType = storeManagerCommands);
                    break;
                default:
                    console.log("That's not a position.");
                    prompt()
            }
    })
}

function displayOptionsAndRespondAccordingly (employeeCommandsType) {
    console.log('Your options are: ');
    employeeCommandsType.forEach(command => {
        console.log(' -', command['command'])
    });

    rl.question('What would you like to do? (you only need to type the corresponding number, eg. 1): \n', (answer) => {
        employeeCommandsType.forEach(command => {
            if (answer === command['number']) command['action']();
        })
    });
}

function viewProductTypes () {
    viewProductTypesQuery(con);
    nextPrompt();
}

function viewAllProducts () {
    viewProductsQuery(con);
    nextPrompt();
}

function viewStockCount () {
    viewStockCountQuery(con);
    nextPrompt();
}

function editInventory () {
    // addInventoryQuery(con, productType, quantity);
    nextPrompt();
}

function addLineItemToPurchase () {
    // addLineItemQuery(con, product, quantity, price);
    nextPrompt();
}

function viewCustomerPurchases() {
    rl.question('Which customer\'s purchases would you like to view? \n', (answer) => {
        viewCustomerPurchasesQuery(con, answer);
        nextPrompt();
    });
}

function viewAllSuppliers () {
    viewAllSuppliersQuery(con);
    nextPrompt();
}

function viewSingleSupplier () {
    rl.question('Which supplier\'s information would you like to view? \n', (answer) => {
        viewSingleSupplierQuery(con, answer);
        nextPrompt();
    });
}

function close () {
    console.log("See ya!");
    rl.close();
    process.exit();
}

function nextPrompt() {
    function next () {
        console.log();
        rl.question('What next? (to view your options again, enter 0) \n', (answer) => {
            switch (answer) {
                case '0':
                    employeeCommandsType.forEach(command => console.log("-", command['command']));
                    rl.question('', (answer) => {
                        employeeCommandsType.forEach(command => {
                            if (answer === command['number']) command['action']();
                        })
                    });
                    break;
                default:
                    employeeCommandsType.forEach(command => {
                        if (answer === command['number']) command['action']();
                    })
            }
        })
    }
    setTimeout(next, 30);
}

main();

