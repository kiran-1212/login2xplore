function saveStudent() {
    var formData = getFormData();
    // Implement the code to save the student record to JsonPowerDB using AJAX or Fetch API.
    // Example: You can use the `PUT` method to save the record with the Roll No as the primary key.
}

function updateStudent() {
    var formData = getFormData();
    // Implement the code to update the student record in JsonPowerDB using AJAX or Fetch API.
    // Example: You can use the `PUT` method to update the record with the Roll No as the primary key.
}

function deleteStudent() {
    var rollNo = document.getElementById("rollNo").value;
    // Implement the code to delete the student record from JsonPowerDB using AJAX or Fetch API.
    // Example: You can use the `DELETE` method to remove the record with the given Roll No.
}

function resetForm() {
    document.getElementById("enrollmentForm").reset();
}

function getFormData() {
    var rollNo = document.getElementById("rollNo").value;
    var name = document.getElementById("name").value;
    var birthdate = document.getElementById("birthdate").value;
    var address = document.getElementById("address").value;
    var enrollmentNumber = document.getElementById("enrollmentNumber").value;

    return {
        "rollNo": rollNo,
        "name": name,
        "birthdate": birthdate,
        "address": address,
        "enrollmentNumber": enrollmentNumber
    };
}
