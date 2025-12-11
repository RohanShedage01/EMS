let attendanceData = [
    { name: "Rohan", date: "2025-01-10", status: "Present" },
    { name: "Sagar", date: "2025-01-10", status: "Absent" },
    { name: "Prachi", date: "2025-01-10", status: "Present" },
];

function loadAttendance() {
    const tbody = document.getElementById("attendanceBody");
    tbody.innerHTML = "";

    attendanceData.forEach((emp, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${emp.name}</td>
                <td>${emp.date}</td>
                <td class="${emp.status === "Present" ? "status-present" : "status-absent"}">
                    ${emp.status}
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function markAttendance() {
    alert("Attendance mark feature coming soon!");
}

window.onload = loadAttendance;
