document.getElementById("departmentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("deptName").value;
    let employees = document.getElementById("deptEmployees").value;
    let desc = document.getElementById("deptDesc").value;

    if (name === "" || employees === "" || desc === "") {
        alert("Please fill all fields!");
        return;
    }

    alert("Department Added Successfully!");

    // Clear the form
    document.getElementById("deptName").value = "";
    document.getElementById("deptEmployees").value = "";
    document.getElementById("deptDesc").value = "";
});
