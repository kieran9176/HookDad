const { con } = require('./main');

const registerData = [
    "INSERT INTO `mydb`.`Register` (`id`) VALUES ('1');",
    "INSERT INTO `mydb`.`Register` (`id`) VALUES ('2');"
];

const employeeData = [
    "INSERT INTO `mydb`.`Employee` (`id`, `Name`, `Position`, `Register_id`) VALUES ('1', 'Jason Hooker', 'Cashier', '1');",
    "INSERT INTO `mydb`.`Employee` (`id`, `Name`, `Position`) VALUES ('2', 'Kieran Derfus', 'Stocker');",
    "INSERT INTO `mydb`.`Employee` (`id`, `Name`, `Position`) VALUES ('3', 'Stan Thomas', 'Store Manager');",
    "INSERT INTO `mydb`.`Employee` (`id`, `Name`, `Position`) VALUES ('4', 'David John', 'Supplier Manager');"
];

const customerData = [
    "INSERT INTO `mydb`.`Customer` (`id`, `Name`, `Address`, `Town`) VALUES ('1', 'Kieran', 'Whitney', 'Closter');",
    "INSERT INTO `mydb`.`Customer` (`id`, `Name`, `Address`, `Town`) VALUES ('2', 'Jason', 'Rosedale', 'Winston');",
];

const purchaseData = [
    "INSERT INTO `mydb`.`Purchase` (`id`, `Time`, `Register_id`, `Customer_id`) VALUES ('1', '2018-05-02', '1', '1');"
];

const supplierData = [
    "INSERT INTO `mydb`.`Supplier` (`id`, `Name`, `Location`, `Employee_id`) VALUES ('1', 'Dole', 'Florida', '4');"
];

const productTypeData = [
    "INSERT INTO `mydb`.`ProductType` (`id`, `Type`, `Supplier_id`, `Employee_id`) VALUES ('1', 'fruit', '1', '2');",
    "INSERT INTO `mydb`.`ProductType` (`id`, `Type`, `Supplier_id`, `Employee_id`) VALUES ('2', 'vegetable', '1', '2');"

];

const productData = [
    "INSERT INTO `mydb`.`Product` (`id`, `Name`, `StockCount`, `ProductType_id`) VALUES ('1', 'strawberry', '50', '1');",
    "INSERT INTO `mydb`.`Product` (`id`, `Name`, `StockCount`, `ProductType_id`) VALUES ('2', 'blueberry', '100', '1');"
];

const lineItemData = [
    "INSERT INTO `mydb`.`LineItem` (`id`, `Quantity`, `Price`, `Product_id`, `Purchase_id`) VALUES ('1', '2', '5', '1', '1');"
];

con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});