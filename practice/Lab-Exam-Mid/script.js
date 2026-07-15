function validation() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let studentid = document.getElementById("studentid").value;
    let email = document.getElementById("email").value;
    let credit = document.getElementById("credit").value;
    let department = document.getElementById("department").value;
    document.getElementById("fnameErr").innerHTML = "";
    document.getElementById("lnameErr").innerHTML = "";
    document.getElementById("idErr").innerHTML = "";
    document.getElementById("emailErr").innerHTML = "";
    document.getElementById("creditErr").innerHTML = "";
    document.getElementById("deptErr").innerHTML = "";

    let valid = true;

    if (!fname) {
        document.getElementById("fnameErr").innerHTML = "Required";
        valid = false; }
    

    if (!lname) {
        document.getElementById("lnameErr").innerHTML = "Required";
        valid = false;}
    

    if (!studentid) {

        document.getElementById("idErr").innerHTML = "Required";
        valid = false;
    }

    
    else if (studentid.indexOf("-") == -1) {

        document.getElementById("idErr").innerHTML = "ID must contain -";
        valid = false;
    }

    

    if (!email) {
        document.getElementById("emailErr").innerHTML = "Required";
        valid = false;
    }

    
    else if (email.indexOf("@student.aiub.edu") == -1) {

        document.getElementById("emailErr").innerHTML = "Invalid Email";
        valid = false;
    }

    if (credit == "") {
        document.getElementById("creditErr").innerHTML = "Required";
        valid = false;}
    
    else if (credit < 0 || credit >= 148) {
        document.getElementById("creditErr").innerHTML = "Credit must be 0-147";
        valid = false;}

    if (department == "") {

        document.getElementById("deptErr").innerHTML = "Select Department";
        valid = false;

    }

    if (valid == true) {
        let table = document.getElementById("studentTable");

        let row = table.insertRow(-1);

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);

        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = studentid;
        cell4.innerHTML = email;
        cell5.innerHTML = credit;
        cell6.innerHTML = department;

        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("studentid").value = "";
        document.getElementById("email").value = "";
        document.getElementById("credit").value = "";
        document.getElementById("department").value = "";

    }
    return false;
}