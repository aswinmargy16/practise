let employees = [{ id: 101, name: "venkey", sal: 45000 },
{ id: 102, name: "sakthivel", sal: 55000 }]

let createEmployee = (emp,) => {
    setTimeout(() => {
        employees.push(emp)
    }, 4000);
}
createEmployee({ id: 103, name: "mumu", sal: 65000 })

let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        for (emp of employees) {
            rows = rows + `<tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.sal}</td>
                            </tr>`
        }
        //document.getElementById('tbody_Data').innerHTML = "GM"
        document.getElementById('tbody_Data').innerHTML = rows
    }, 1000)
}
getEmployees();