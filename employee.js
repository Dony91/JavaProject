let employee = {
    id: 101,
    name: "Alice",
    salary: 55000,

   
    displayDetails: function() {
        console.log("Employee ID: " + this.id);
        console.log("Name: " + this.name);
        console.log("Salary: $" + this.salary);
    

    }

};


employee.displayDetails();
employee.displayEmployee();