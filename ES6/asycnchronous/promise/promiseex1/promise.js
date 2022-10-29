let employees = [{ id: 10, name: "guruprasad", sal: 40000 },
{ id: 11, name: "sakthi", sal: 50000 }]

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true
            flag ? resolve("Data Inserted Successfully") : reject("Data Failed");
            employees.push(emp)
        }, 5000)

    });
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
createEmployee({ id: 12, name: "venkey", sal: 60000 })
    .then((msg) => {
        console.log(msg)
        get_Employees();
    })
    .catch((err) => {
        console.log(err)
    })