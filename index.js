// Write your solution in this file!
const employee ={
    name:"Yvonne",
    streetAdress: "Nairobi"
}
function updateEmployeeWithKeyAndValue(object, key, value){
const employee ={...object}
employee[key]=value
return employee
}
employee.name = "Sam"
employee.streetAdress ='11 Broadway'

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
employee[key]=value
return employee
}
employee.name="Sam"
employee.streetAdress="12 Broadway"

function deleteFromEmployeeByKey(object, key,value){
    const employee ={...object}
    employee[key]=value
    return employee
}
let newEmployee = deleteFromEmployeeByKey(employee,'name')
delete employee.name

function destructivelyDeleteFromEmployeeByKey(employee,key){
    employee[key]='name'
    return newEmployee
}
delete employee.name