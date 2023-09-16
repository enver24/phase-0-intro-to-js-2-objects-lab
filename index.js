const employee = {
    name: "Sam",
    streetAdress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, ...{[key]: value}};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = {...employee,}
    console.log(newObject)
    delete newObject[key]
    return newObject
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key]
    return object
}