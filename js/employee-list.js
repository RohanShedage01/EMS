// Employee Data (dummy)
let employees = [
    { id: 1, name: "Rohan", dept: "IT", status: "Active" },
    { id: 2, name: "Sagar", dept: "HR", status: "Active" },
    { id: 3, name: "Prachi", dept: "Finance", status: "On Leave" },
    { id: 4, name: "Amit", dept: "Sales", status: "Active" },
    { id: 5, name: "Neha", dept: "Admin", status: "Inactive" },
    { id: 6, name: "Rahul", dept: "IT", status: "Active" }
];

const tableBody = document.getElementById("empTable");

// Function to load table data
function loadTable(data) {
    tableBody.innerHTML = "";
    data.forEach(emp => {
        tableBody.innerHTML += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.dept}</td>
                <td>${emp.status}</td>
            </tr>
        `;
    });
}

loadTable(employees);

// Search + Filter Logic
document.getElementById("searchInput").addEventListener("keyup", filterData);
document.getElementById("deptFilter").addEventListener("change", filterData);
document.getElementById("statusFilter").addEventListener("change", filterData);

function filterData() {
    let searchText = document.getElementById("searchInput").value.toLowerCase();
    let deptVal = document.getElementById("deptFilter").value;
    let statusVal = document.getElementById("statusFilter").value;

    let filtered = employees.filter(emp => {
        let matchesSearch = emp.name.toLowerCase().includes(searchText);
        let matchesDept = deptVal === "" || emp.dept === deptVal;
        let matchesStatus = statusVal === "" || emp.status === statusVal;

        return matchesSearch && matchesDept && matchesStatus;
    });

    loadTable(filtered);
}
