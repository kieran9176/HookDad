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

function viewRecordOfRegisterQuery (dbConnection, registerId) {
    const viewRecordOfRegisterSQL = "SELECT \n" +
        "    Register_id, Customer_id, Time, Quantity, Price, Name\n" +
        "FROM\n" +
        "    mydb.Purchase\n" +
        "        JOIN\n" +
        "    mydb.LineItem\n" +
        "        JOIN\n" +
        "    mydb.Product\n" +
        "WHERE\n" +
        "    mydb.LineItem.Purchase_id = mydb.Purchase.id\n" +
        "        AND mydb.Product.id = mydb.LineItem.Product_id\n" +
        `        AND Register_id = ${registerId}`;
    dbConnection.query(viewRecordOfRegisterSQL, function (err, result) {
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
        "SELECT Name, Quantity, Price\n" +
        "\tFROM mydb.LineItem NATURAL JOIN mydb.Product\n" +
        "    WHERE\n" +
        "\t\tPurchase_id = (SELECT \n" +
        "        id FROM mydb.Purchase\n" +
        "        WHERE Customer_id = \n" +
        "        (SELECT id FROM mydb.Customer\n" +
        `        WHERE Name = '${customerName}'));`;
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

function viewProductTypeSupplierQuery (dbConnection, productType) {
    const viewProductTypeSupplierSQL = "SELECT Name\n" +
        "FROM mydb.Supplier \n" +
        "JOIN mydb.ProductType\n" +
        "ON Supplier.Id = ProductType.Supplier_id\n" +
        `WHERE Type = '${productType}';`;
    dbConnection.query(viewProductTypeSupplierSQL, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}

module.exports = {  viewProductTypesQuery, viewProductsQuery, viewStockCountQuery,
                    viewRecordOfRegisterQuery, addInventoryQuery, addLineItemQuery, viewCustomerPurchasesQuery,
                    viewAllSuppliersQuery, viewSingleSupplierQuery, viewProductTypeSupplierQuery  };






