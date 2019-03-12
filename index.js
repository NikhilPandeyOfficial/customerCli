const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = mongoose.connect("mongodb://localhost:27017/customerCli", {
    useNewUrlParser: true
});

const Customer = require('./models/customer');

// Add a customer
const addcustomer = (customer) => {
    Customer.create(customer).then(data => {
        console.info(data);
        db.close();
    });
}

// Find a customer
const findcustomer = (name) => {
    const search = new RegExp(name, 'i')
    Customer.find({$or : [{firstname: search}, {lastname: search}]})
    .then(data => {
        console.info(data);
        console.info(data.length);
        db.close();
    });
}

// update a customer
const updatecustomer = (_id, customer) => {
    Customer.update({_id}, customer)
    .then(customer => {
        console.info('Customer updated');
        db.close();
    });
}

// remove a customer
const removecustomer = (_id) => {
    Customer.remove({_id})
    .then(customer => {
        console.info('customer removed');
        db.close();
    });
}

// List Customers
const listcustomers = () => {
    Customer.find()
    .then(customers => {
        console.info(customers);
        console.info(`${customers.length} matches`);
    });
}

module.exports = {
    addcustomer,
    findcustomer,
    updatecustomer,
    removecustomer,
    listcustomers
}
