// Dummy data
const employees = [
    { id: 1, name: "Rohan", dept: "IT", status: "Active" },
    { id: 2, name: "Sagar", dept: "HR", status: "Active" },
    { id: 3, name: "Prachi", dept: "Finance", status: "On Leave" },
    { id: 4, name: "Amit", dept: "Sales", status: "Active" },
    { id: 5, name: "Neha", dept: "Admin", status: "Active" },
    { id: 6, name: "Rahul", dept: "IT", status: "Active" }
];

// Load table data
let table = document.getElementById("empTable");

employees.forEach(emp => {
    table.innerHTML += `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.dept}</td>
            <td>${emp.status}</td>
        </tr>
    `;
});

// Update Employee Count
document.getElementById("empCount").innerText = employees.length;
