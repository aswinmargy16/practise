let employees = [{ id: 01, name: "mumu", sal: 50000 },
{ id: 02, name: "venkey", sal: 60000 }]

let createEmployee = (emp) => {
    setTimeout(() => {
        employees.push(emp)
        get_Employees()
    }, 3000)

}
let get_Employees = () => {
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

let dummy = async () => {
    await createEmployee({ id: 03, name: "sakthivel", sal: 70000 })

}
dummy()