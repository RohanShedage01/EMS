document.getElementById("attendanceForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("employeeName").value;
    let date = document.getElementById("attDate").value;
    let status = document.getElementById("attStatus").value;

    if (name === "" || date === "" || status === "") {
        alert("Please fill all fields!");
        return;
    }

    alert("Attendance Submitted Successfully!");

    // Clear fields
    document.getElementById("employeeName").value = "";
    document.getElementById("attDate").value = "";
    document.getElementById("attStatus").value = "";
});
