// https://javascript.info/property-accessors

class Employee {
    eId;
    eName;

    /**
     * @param {number} id
     */
    set employeeId(id) {
        if(id>0) this.eId = id;
    }
    /**
     * @param {string} name
     */
    set employeeName(name) {
        if(name.length != 0) this.eName = name;
    }

    get employeeId() {
        return this.eId;
    }
}

let emp1 = new Employee;

emp1.employeeId = 10;
emp1.employeeName = "Rajesh";

console.log(emp1);

console.log(emp1.employeeId);

