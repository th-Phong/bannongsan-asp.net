
//Add Data Function   
function Add() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var empObj = {
        UserID: $('#UserID').val(),
        Gmail: $('#Gmail').val(),
        Password: $('#Password').val(),
        GroupID: $('#GroupID').val(),
        Name: $('#Name').val(),
        Address: $('#Address').val(),
        Phone: $('#Phone').val(),
        Status: $('#Status').is(":checked") ? true : false
    };
    $.ajax({
        url: "/Admin/User/Add",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            location.reload();
            $('#myModal').modal('hide');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

//Function for getting the Data Based upon Employee ID  
function getbyID(UserID) {
    $('#Gmail').css('border-color', 'lightgrey');
    $('#Password').css('border-color', 'lightgrey');
    $('#GroupID').css('border-color', 'lightgrey');
    $('#Name').css('border-color', 'lightgrey');
    $('#Address').css('boder-color', 'lightgrey');
    $('#Phone').css('boder-color', 'lightgrey');
    $('#Status').css('boder-color', 'lightgey');
    $.ajax({
        url:"/Admin/User/GetbyID/" + UserID,
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            $('#UserID').val(result.UserID);
            $('#Gmail').val(result.Gmail);
            $('#Password').val(result.Password);
            $('#GroupID').val(result.GroupID);
            $('#Name').val(result.Name);
            $('#Address').val(result.Address);
            $('#Phone').val(result.Phone);
            $('#Status').val(result.Status);

            $('#myModal').modal('show');
            $('#btnUpdate').show();
            $('#btnAdd').hide();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}

//function for updating employee's record  
function Update() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var empObj = {
        UserID: $('#UserID').val(),
        Gmail: $('#Gmail').val(),
        Password: $('#Password').val(),
        GroupID: $('#GroupID').val(),
        Name: $('#Name').val(),
        Address: $('#Address').val(),
        Phone: $('#Phone').val(),
        Status: $('#Status').is(":checked") ? true : false
    };
    $.ajax({
        url: "/Admin/User/Update",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            location.reload();
            $('#myModal').modal('hide');
            $('#UserID').val("");
            $('#Gmail').val("");
            $('#Password').val("");
            $('#GroupID').val("");
            $('#Name').val("");
            $('#Address').val("");
            $('#Phone').val("");
            $('#Status').val("");
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function Delete(UserID) {
    var ans = confirm("Bạn có muốn xóa không?");
    if (ans) {
        $.ajax({
            url: "/Admin/User/Delete/" + UserID,
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function (result) {
                location.reload();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    }
}

//Function for clearing the textboxes  
function clearTextBox() {
    $('#UserID').val("");
    $('#Gmail').val("");
    $('#Password').val("");
    $('#GroupID').val("");
    $('#Name').val("");
    $('#Address').val("");
    $('#Phone').val("");
    $('#Status').val("");
    $('#btnUpdate').hide();
    $('#btnAdd').show();
    $('#Gmail').css('border-color', 'lightgrey');
    $('#Password').css('border-color', 'lightgrey');
    $('#GroupID').css('border-color', 'lightgrey');
    $('#Name').css('border-color', 'lightgrey');
    $('#Address').css('border-color', 'lightgrey');
    $('#Phone').css('border-color', 'lightgrey');
    $('#Status').css('border-color', 'lightgrey');
}
//Valdidation using jquery  
function validate() {
    var isValid = true;
    if ($('#Gmail').val().trim() == "") {
        $('#Gmail').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Gmail').css('border-color', 'lightgrey');
    }
    if ($('#Password').val().trim() == "") {
        $('#Password').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Password').css('border-color', 'lightgrey');
    }
    if ($('#Name').val().trim() == "") {
        $('#Name').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Name').css('border-color', 'lightgrey');
    }
    if ($('#Address').val().trim() == "") {
        $('#Address').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Address').css('border-color', 'lightgrey');
    }
    if ($('#Phone').val().trim() == "") {
        $('#Phone').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Phone').css('border-color', 'lightgrey');
    }
    return isValid;
}  