function viewProductTypesQuery (dbConnection) {
    const getProductTypesSQL = "SELECT Type FROM mydb.ProductType;";
    dbConnection.query(getProductTypesSQL, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}

function viewProductsQuery (dbConnection) {
    const getProductTypesSQL = "SELECT Name FROM mydb.Product;";
    dbConnection.query(getProductTypesSQL, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}

function viewStockCountQuery (dbConnection) {
    const viewStockCountSQL = "SELECT * FROM mydb.Product;";
    dbConnection.query(viewStockCountSQL, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}

function addInventoryQuery (dbConnection, productType, quantity) {
    const addInventorySQL = "";
    dbConnection.query(addInventorySQL, function (err, result) {
        if (err) throw err;
        console.log("Inventory Added Successfully");
    });
}

function addLineItemQuery (dbConnection, product, quantity, price) {
    const addLineItemSQL = "";
    dbConnection.query(addLineItemSQL, function (err, result) {
        if (err) throw err;
        console.log("Line Item Added");
    });
}

function viewCustomerPurchasesQuery (dbConnection, customerName) {
    const viewCustomerPurchasesSQL =
        "SELECT \n" +
        "    *\n" +
        "FROM\n" +
        "    mydb.LineItem\n" +
        "WHERE\n" +
        "    Purchase_id = (SELECT \n" +
        "            id\n" +
        "        FROM\n" +
        "            mydb.Purchase\n" +
        "        WHERE\n" +
        "            Customer_id = (SELECT \n" +
        "                    id\n" +
        "                FROM\n" +
        "                    mydb.Customer\n" +
        "                WHERE\n" +
        `                    Name = '${customerName}'));`;
    dbConnection.query(viewCustomerPurchasesSQL, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}

function viewAllSuppliersQuery (dbConnection) {
    const viewAllSuppliersSQL = "SELECT * FROM mydb.Supplier;";
    dbConnection.query(viewAllSuppliersSQL, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}

function viewSingleSupplierQuery (dbConnection, supplierName) {
    const viewSingleSupplierSQL = "SELECT * FROM mydb.Supplier\n" +
        `WHERE NAME='${supplierName}';`;
    dbConnection.query(viewSingleSupplierSQL, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}

module.exports = {  viewProductTypesQuery, viewProductsQuery, viewStockCountQuery,
                    addInventoryQuery, addLineItemQuery, viewCustomerPurchasesQuery,
                    viewAllSuppliersQuery, viewSingleSupplierQuery  };






